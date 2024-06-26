import { Request, Response } from 'express';
import { users } from '../models/User.js';

class AuthController {
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
}

export const authController = new AuthController();
