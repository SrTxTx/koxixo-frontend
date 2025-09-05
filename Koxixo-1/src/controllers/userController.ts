import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { User } from '../models/user';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userData: User = req.body;
            const newUser = await this.userService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    public editUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id;
            const userData: User = req.body;
            const updatedUser = await this.userService.editUser(userId, userData);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id;
            await this.userService.deleteUser(userId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    public getUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUser(userId);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };
}