// Mock googleapis
jest.mock('googleapis', () => {
  const youtubeMock = {
    liveChatModerators: {
      list: jest.fn()
    }
  };
  
  return {
    google: {
      youtube: jest.fn(() => youtubeMock)
    }
  };
});

// Mock the getCommands function from queries/commands


// Now import after mocks are set up
import { google } from 'googleapis';
import { isModeratorOrOwner } from '../commands';

// Import the actual YouTube module to avoid TypeScript errors
const youtube = google.youtube('v3');

describe('Commands Module', () => {
  // Access the mocked API method directly
  const mockLiveChatModeratorsList = youtube.liveChatModerators.list as jest.Mock;
  
  // Mock active streamers data
  const mockActiveStreamers = {
    'channel-123': {
      broadcastId: 'live-chat-123',
      oauthClient: { credentials: { access_token: 'mock-token' } },
      nextPage: '',
      moderationSettings: {}
    }
  };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    
    // Mock console.error to prevent test output pollution
    jest.spyOn(console, 'error').mockImplementation((message) => {
      process.stdout.write(`[ERROR]: ${message}\n`);
    });
  });

  afterEach(() => {
    // Restore console methods
    jest.restoreAllMocks();
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
      // Setup YouTube API mock response
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
      
      const result = await isModeratorOrOwner(
        'channel-123',   // channel ID
        'viewer-456',    // viewer ID (is in moderators list)
        mockActiveStreamers
      );
      
      // Verify API was called with correct parameters
      expect(mockLiveChatModeratorsList).toHaveBeenCalledWith({
        auth: expect.anything(),
        broadcastId: 'live-chat-123',
        part: ['snippet']
      });
      
      expect(result).toBe(true);
    });

    it('should return false if user is not a moderator', async () => {
      // Setup mock response with empty items array
      mockLiveChatModeratorsList.mockResolvedValue({
        data: {
          items: [] // Empty array but still a valid array
        }
      });
      
      const result = await isModeratorOrOwner(
        'channel-123',   // channel ID
        'viewer-789',    // viewer ID (not in moderators list)
        mockActiveStreamers
      );
      
      expect(result).toBe(false);
    });
  });
}); 