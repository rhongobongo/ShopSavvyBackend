import { Request, Response } from 'express';
import { User, users } from '../models/User.js';

class UserController {
    // Get all users
    public getAllUsers(req: Request, res: Response): void {
        res.json(users);
    }

    // Get user by ID
    public getUserById(req: Request, res: Response): void {
        const id = parseInt(req.params.id);
        const user = users.find(user => user.id === id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    // Create new user
    public createUser(req: Request, res: Response): void {
        const newUser: User = req.body;
        newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);
        res.status(201).json(newUser);
    }

    // Update user by ID
    public updateUser(req: Request, res: Response): void {
        const id = parseInt(req.params.id);
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...req.body };
            res.json(users[userIndex]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    // Delete user by ID
    public deleteUser(req: Request, res: Response): void {
        const id = parseInt(req.params.id);
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const deletedUser = users.splice(userIndex, 1);
            res.json(deletedUser[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
}

export const userController = new UserController();
