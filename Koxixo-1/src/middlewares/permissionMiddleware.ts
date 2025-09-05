import { Request, Response, NextFunction } from 'express';

const permissionMiddleware = (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.user?.role; // Assuming req.user is populated by auth middleware

        if (!userRole) {
            return res.status(403).json({ message: 'Access denied. No role found.' });
        }

        if (userRole !== requiredRole) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }

        next();
    };
};

export default permissionMiddleware;