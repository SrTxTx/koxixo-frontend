import { Router } from 'express';
import UserController from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { permissionMiddleware } from '../middlewares/permissionMiddleware';

const router = Router();
const userController = new UserController();

// Routes for user management
router.post('/users', authMiddleware, permissionMiddleware('Admin'), userController.createUser);
router.put('/users/:id', authMiddleware, permissionMiddleware('Admin'), userController.editUser);
router.delete('/users/:id', authMiddleware, permissionMiddleware('Admin'), userController.deleteUser);
router.get('/users/:id', authMiddleware, userController.getUser);

export default function setUserRoutes(app) {
    app.use('/api', router);
}