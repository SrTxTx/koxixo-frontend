export interface User {
    id: number;
    username: string;
    password: string;
    role: 'Admin' | 'Seller' | 'Budget' | 'Production';
}

export interface Order {
    id: number;
    userId: number;
    status: 'Pending' | 'Completed' | 'Cancelled';
    history: Array<{ status: string; timestamp: Date }>;
}