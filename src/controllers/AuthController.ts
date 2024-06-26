import { Request, Response } from 'express';
import { users } from '../models/User.js';

class AuthController {
    
    private isAccountExist(email: string): boolean {
        return users.some(user => user.email === email);
    }

    public login = (req: Request, res: Response) => {
        const { emailOrUsername, password } = req.body;
      
        // Find user by email or username
        const user = users.find(user => 
          (user.email === emailOrUsername || user.name === emailOrUsername) && user.password === password
        );
      
        if (user) {
          res.json({ message: 'Login successful', user });
        } else {
          res.status(401).json({ message: 'Invalid email/username or password' });
        }
    };


    public register = (req: Request, res: Response) => {
        const { name, email, password, confirmPassword } = req.body;

        // Check if the account already exists using the isAccountExist method
        if (this.isAccountExist(email)) {
            return res.status(400).json({ message: 'Email is already in use' });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Create new user
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password
        };

        // Add new user to the users array
        users.push(newUser);

        return res.status(201).json({ message: 'Registration successful', user: newUser });
    };

    public changePassword = (req: Request, res: Response) => {
        const { email, password, confirmPassword } = req.body;
        if (!this.isAccountExist(email)) {
            return res.status(400).json({ message: 'Invalid Request' });
        }
    };
}

export const authController = new AuthController();
