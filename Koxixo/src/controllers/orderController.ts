export class OrderController {
    constructor(private orderService: any) {}

    async createOrder(req: any, res: any) {
        try {
            const orderData = req.body;
            const newOrder = await this.orderService.createOrder(orderData);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error });
        }
    }

    async editOrder(req: any, res: any) {
        try {
            const orderId = req.params.id;
            const updatedData = req.body;
            const updatedOrder = await this.orderService.editOrder(orderId, updatedData);
            res.status(200).json(updatedOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error editing order', error });
        }
    }

    async deleteOrder(req: any, res: any) {
        try {
            const orderId = req.params.id;
            await this.orderService.deleteOrder(orderId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting order', error });
        }
    }

    async viewOrder(req: any, res: any) {
        try {
            const orderId = req.params.id;
            const order = await this.orderService.viewOrder(orderId);
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error });
        }
    }

    async returnOrder(req: any, res: any) {
        try {
            const orderId = req.params.id;
            const returnedOrder = await this.orderService.returnOrder(orderId);
            res.status(200).json(returnedOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error returning order', error });
        }
    }
}