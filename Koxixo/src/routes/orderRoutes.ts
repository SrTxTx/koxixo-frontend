import { Router } from 'express';
import { OrderController } from '../controllers/orderController';

const router = Router();
const orderController = new OrderController();

export function setOrderRoutes(app) {
    app.use('/api/orders', router);
    
    router.post('/', orderController.createOrder.bind(orderController));
    router.put('/:id', orderController.editOrder.bind(orderController));
    router.delete('/:id', orderController.deleteOrder.bind(orderController));
    router.get('/:id', orderController.viewOrder.bind(orderController));
    router.get('/history/:userId', orderController.returnOrder.bind(orderController));
}