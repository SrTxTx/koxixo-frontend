import express from 'express';
import bodyParser from 'body-parser';
import { setAuthRoutes } from './routes/authRoutes';
import { setUserRoutes } from './routes/userRoutes';
import { setOrderRoutes } from './routes/orderRoutes';
import { authMiddleware } from './middlewares/authMiddleware';
import { permissionMiddleware } from './middlewares/permissionMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
setAuthRoutes(app);
app.use(authMiddleware); // Protect routes below this middleware
setUserRoutes(app);
setOrderRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});