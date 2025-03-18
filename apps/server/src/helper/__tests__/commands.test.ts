import { handleCommands, isModeratorOrOwner, executeActionCommand } from '../commands';
import { getCommands } from '../../queries/commands';
import { removeUserTimeout, timeoutUser } from '../bad-word-detection';

// Mock dependencies - setup better YouTube API mocking
const mockLiveChatModeratorsList = jest.fn();

jest.mock('googleapis', () => ({
  google: {
    youtube: jest.fn(() => ({
      liveChatModerators: {
        list: mockLiveChatModeratorsList
      }
    }))
  }
}));

jest.mock('../../queries/commands', () => ({
  getCommands: jest.fn()
}));

jest.mock('../bad-word-detection', () => ({
  removeUserTimeout: jest.fn(),
  timeoutUser: jest.fn()
}));

describe('Commands Module', () => {
  // Mock activeStreamers object
  const mockActiveStreamers = {
    'channel-123': {
      liveChatId: 'live-chat-123',
      oauthClient: { credentials: 'mock-credentials' },
      nextPage: '',
      moderationSettings: {
        spamConfig: {},
        badWordConfig: {}
      }
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset the mock implementation to avoid test interference
    mockLiveChatModeratorsList.mockReset();
  });

  describe('isModeratorOrOwner', () => {
    it('should return true if user is the channel owner', async () => {
      const result = await isModeratorOrOwner(
        'channel-123',  // channel ID
        'channel-123',  // viewer ID (same as channel = owner)
        mockActiveStreamers
      );
      
      expect(result).toBe(true);
      // Owner check shouldn't call the API
      expect(mockLiveChatModeratorsList).not.toHaveBeenCalled();
    });
    
    it('should return true if user is a moderator', async () => {
      // Setup mock response for moderator check
      const mockedResponse = {
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'viewer-456' 
                } 
              } 
            }
          ]
        }
      };
      
      mockLiveChatModeratorsList.mockResolvedValue(mockedResponse);
      
      const result = await isModeratorOrOwner(
        'channel-123',  // channel ID
        'viewer-456',   // viewer ID (is in moderators list)
        mockActiveStreamers
      );
      
      expect(mockLiveChatModeratorsList).toHaveBeenCalled();
      expect(result).toBe(true);
    });
    
    it('should return false if user is not a moderator or owner', async () => {
      // Setup mock response for moderator check
      const mockedResponse = {
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'mod-789' 
                } 
              } 
            }
          ]
        }
      };
      
      mockLiveChatModeratorsList.mockResolvedValue(mockedResponse);
      
      const result = await isModeratorOrOwner(
        'channel-123',  // channel ID
        'viewer-456',   // viewer ID (not owner, not in moderators list)
        mockActiveStreamers
      );
      
      expect(mockLiveChatModeratorsList).toHaveBeenCalled();
      expect(result).toBe(false);
    });
    
    it('should handle empty items array and return false', async () => {
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: []
        }
      });
      
      const result = await isModeratorOrOwner(
        'channel-123',
        'viewer-456',
        mockActiveStreamers
      );
      
      expect(result).toBe(false);
    });
    
    it('should handle missing active streamers data and return false', async () => {
      const result = await isModeratorOrOwner(
        'non-existent-channel',  // channel that doesn't exist in activeStreamers
        'viewer-456',
        mockActiveStreamers
      );
      
      expect(result).toBe(false);
      // Should not even attempt the API call
      expect(mockLiveChatModeratorsList).not.toHaveBeenCalled();
    });
    
    it('should handle null response and return false', async () => {
      mockLiveChatModeratorsList.mockResolvedValue(null);
      
      const result = await isModeratorOrOwner(
        'channel-123',
        'viewer-456',
        mockActiveStreamers
      );
      
      expect(result).toBe(false);
    });
    
    it('should handle undefined items and return false', async () => {
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {}  // No items property
      });
      
      const result = await isModeratorOrOwner(
        'channel-123',
        'viewer-456',
        mockActiveStreamers
      );
      
      expect(result).toBe(false);
    });
    
    it('should handle non-array items and return false', async () => {
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: "not an array"  // Invalid items format
        }
      });
      
      const result = await isModeratorOrOwner(
        'channel-123',
        'viewer-456',
        mockActiveStreamers
      );
      
      expect(result).toBe(false);
    });
    
    it('should handle API errors and return false', async () => {
      mockLiveChatModeratorsList.mockRejectedValue(new Error('API error'));
      
      const result = await isModeratorOrOwner(
        'channel-123',
        'viewer-456',
        mockActiveStreamers
      );
      
      expect(result).toBe(false);
    });
  });
  
  describe('executeActionCommand', () => {
    it('should reject commands from non-moderators', async () => {
      // Mock isModeratorOrOwner to return false
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'mod-789' // different from viewer ID
                } 
              } 
            }
          ]
        }
      });
      
      const result = await executeActionCommand(
        'channel-123',
        'viewer-456',  // not a moderator
        'TargetUser',
        'target-123',
        'timeout',
        ['TargetUser', '300'],
        mockActiveStreamers
      );
      
      expect(result).toBe("You don't have permission to use this command.");
    });
    
    it('should handle timeout command with duration', async () => {
      // Setup so the user is a moderator
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'viewer-456' 
                } 
              } 
            }
          ]
        }
      });
      
      // Mock timeoutUser success
      (timeoutUser as jest.Mock).mockResolvedValue(undefined);
      
      const result = await executeActionCommand(
        'channel-123',
        'viewer-456',  // is a moderator
        'TargetUser',
        'target-123',
        'timeout',
        ['TargetUser', '600'],  // 10 minute timeout
        mockActiveStreamers
      );
      
      expect(timeoutUser).toHaveBeenCalledWith(
        'channel-123',
        'target-123',
        'live-chat-123',
        600,
        expect.any(String)
      );
      
      expect(result).toContain('User TargetUser has been timed out for 600 seconds');
    });
    
    it('should handle untimeout command', async () => {
      // Setup so the user is a moderator
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'viewer-456' 
                } 
              } 
            }
          ]
        }
      });
      
      // Mock removeUserTimeout success
      (removeUserTimeout as jest.Mock).mockReturnValue(true);
      
      const result = await executeActionCommand(
        'channel-123',
        'viewer-456',  // is a moderator
        'TargetUser',
        'target-123',
        'untimeout',
        ['TargetUser'],
        mockActiveStreamers
      );
      
      expect(removeUserTimeout).toHaveBeenCalledWith('channel-123', 'target-123');
      expect(result).toContain('User TargetUser has been removed from timeout');
    });
    
    it('should handle untimeout when user is not in timeout', async () => {
      // Setup so the user is a moderator
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'viewer-456' 
                } 
              } 
            }
          ]
        }
      });
      
      // Mock removeUserTimeout failure (user not in timeout)
      (removeUserTimeout as jest.Mock).mockReturnValue(false);
      
      const result = await executeActionCommand(
        'channel-123',
        'viewer-456',  // is a moderator
        'TargetUser',
        'target-123',
        'untimeout',
        ['TargetUser'],
        mockActiveStreamers
      );
      
      expect(removeUserTimeout).toHaveBeenCalledWith('channel-123', 'target-123');
      expect(result).toContain('User TargetUser is not currently in timeout');
    });
    
    it('should return undefined for unknown commands', async () => {
      // Setup so the user is a moderator
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'viewer-456' 
                } 
              } 
            }
          ]
        }
      });
      
      const result = await executeActionCommand(
        'channel-123',
        'viewer-456',  // is a moderator
        'TargetUser',
        'target-123',
        'unknowncommand',
        ['arg1', 'arg2'],
        mockActiveStreamers
      );
      
      expect(result).toBeUndefined();
    });
  });

  describe('handleCommands', () => {
    it('should return undefined for non-command messages', async () => {
      const result = await handleCommands(
        'channel-123',
        'viewer-123',
        'TestUser',
        'viewer-123',
        'not a command',
        mockActiveStreamers
      );

      expect(result).toBeUndefined();
    });

    it('should return undefined if command is empty', async () => {
      const result = await handleCommands(
        'channel-123',
        'viewer-123',
        'TestUser',
        'viewer-123',
        '!',
        mockActiveStreamers
      );

      expect(result).toBeUndefined();
    });

    it('should handle regular commands from DB', async () => {
      // Setup mock response for getCommands
      (getCommands as jest.Mock).mockResolvedValue({
        response: 'This is a test command response'
      });

      const result = await handleCommands(
        'channel-123',
        'viewer-123',
        'TestUser',
        'viewer-123',
        '!test',
        mockActiveStreamers
      );

      expect(getCommands).toHaveBeenCalledWith('channel-123', 'test');
      expect(result).toBe('This is a test command response');
    });

    it('should return undefined if command not found in DB', async () => {
      // Setup mock response for getCommands
      (getCommands as jest.Mock).mockResolvedValue(null);

      const result = await handleCommands(
        'channel-123',
        'viewer-123',
        'TestUser',
        'viewer-123',
        '!unknowncommand',
        mockActiveStreamers
      );

      expect(result).toBeUndefined();
    });

    it('should catch and handle errors', async () => {
      // Setup mock to throw an error
      (getCommands as jest.Mock).mockRejectedValue(new Error('Test error'));

      const result = await handleCommands(
        'channel-123',
        'viewer-123',
        'TestUser',
        'viewer-123',
        '!test',
        mockActiveStreamers
      );

      expect(result).toBe('An error occurred while processing your command.');
    });
    
    it('should handle action commands (timeout) for moderators', async () => {
      // Setup so the user is a moderator
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'viewer-123' 
                } 
              } 
            }
          ]
        }
      });
      
      // Mock timeoutUser success
      (timeoutUser as jest.Mock).mockResolvedValue(undefined);
      
      const result = await handleCommands(
        'channel-123',
        'viewer-123',  // viewer is a moderator
        'TargetUser',
        'target-123',
        '!timeout TargetUser 600',
        mockActiveStreamers
      );
      
      expect(result).toContain('User TargetUser has been timed out');
    });
    
    it('should handle action commands (untimeout) for moderators', async () => {
      // Setup so the user is a moderator
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'viewer-123' 
                } 
              } 
            }
          ]
        }
      });
      
      // Mock removeUserTimeout success
      (removeUserTimeout as jest.Mock).mockReturnValue(true);
      
      const result = await handleCommands(
        'channel-123',
        'viewer-123',  // viewer is a moderator
        'TargetUser',
        'target-123',
        '!untimeout TargetUser',
        mockActiveStreamers
      );
      
      expect(result).toContain('User TargetUser has been removed from timeout');
    });
    
    it('should reject action commands from non-moderators', async () => {
      // Setup so the user is NOT a moderator
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [
            { 
              snippet: { 
                moderatorDetails: { 
                  channelId: 'mod-456' // different from viewer-123
                } 
              } 
            }
          ]
        }
      });
      
      const result = await handleCommands(
        'channel-123',
        'viewer-123',  // viewer is NOT a moderator
        'TargetUser',
        'target-123',
        '!timeout TargetUser',
        mockActiveStreamers
      );
      
      expect(result).toBe("You don't have permission to use this command.");
    });
  });
}); 