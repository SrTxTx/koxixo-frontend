export interface Order {
    id: string;
    userId: string;
    status: 'pending' | 'completed' | 'canceled';
    history: Array<{
        status: string;
        timestamp: Date;
    }>;
}