import { Order } from '../models/order';
import { User } from '../models/user';

class OrderService {
    private orders: Order[] = [];

    createOrder(userId: string, orderData: any): Order {
        const newOrder: Order = {
            id: this.generateOrderId(),
            userId: userId,
            status: 'Pending',
            history: []
        };
        this.orders.push(newOrder);
        return newOrder;
    }

    editOrder(orderId: string, updatedData: any): Order | null {
        const order = this.orders.find(order => order.id === orderId);
        if (order) {
            Object.assign(order, updatedData);
            return order;
        }
        return null;
    }

    deleteOrder(orderId: string): boolean {
        const index = this.orders.findIndex(order => order.id === orderId);
        if (index !== -1) {
            this.orders.splice(index, 1);
            return true;
        }
        return false;
    }

    viewOrder(orderId: string): Order | null {
        return this.orders.find(order => order.id === orderId) || null;
    }

    returnOrder(orderId: string): boolean {
        const order = this.viewOrder(orderId);
        if (order && order.status !== 'Returned') {
            order.status = 'Returned';
            order.history.push({ status: 'Returned', date: new Date() });
            return true;
        }
        return false;
    }

    private generateOrderId(): string {
        return (this.orders.length + 1).toString();
    }

    getOrderHistory(userId: string): Order[] {
        return this.orders.filter(order => order.userId === userId);
    }
}

export default new OrderService();