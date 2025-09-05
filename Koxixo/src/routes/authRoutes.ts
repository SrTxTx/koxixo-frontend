import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

export function setAuthRoutes(app) {
    app.post('/login', authController.login);
    app.post('/logout', authController.logout);
}