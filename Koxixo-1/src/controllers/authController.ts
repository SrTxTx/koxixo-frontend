import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;
        try {
            const user = await this.authService.validateCredentials(username, password);
            if (user) {
                req.session.user = user; // Assuming session middleware is used
                res.status(200).json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
        }
    }

    public async logout(req: Request, res: Response): Promise<void> {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Could not log out', error: err });
            }
            res.status(200).json({ message: 'Logout successful' });
        });
    }
}