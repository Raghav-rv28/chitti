import express, { Request, Response } from 'express';
import { prisma } from '@repo/database';
import { z } from 'zod';

const router = express.Router();

// Validation schema for user creation
const createUserSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email().optional(),
});

// GET all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true
      }
    });
    
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// GET user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true
      }
    });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(`Error fetching user ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// POST create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validationResult = createUserSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user data',
        errors: validationResult.error.format()
      });
    }
    
    const { username, email } = validationResult.data;
    
    // Check if username already exists
    const existingUser = await prisma.user.findUnique({
      where: { username }
    });
    
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Username already taken'
      });
    }
    
    // Generate a unique ID
    const id = `user_${Date.now()}`;
    
    // Create new user
    const newUser = await prisma.user.create({
      data: {
        id,
        username,
        email,
      }
    });
    
    res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// DELETE user by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id }
    });
    
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`
      });
    }
    
    // Delete user
    await prisma.user.delete({
      where: { id }
    });
    
    res.status(200).json({
      success: true,
      message: `User with ID ${id} deleted successfully`
    });
  } catch (error) {
    console.error(`Error deleting user ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete user',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export const userRouter = router; 