export interface User {
    id: number;
    username: string;
    password: string;
    role: 'Admin' | 'Seller' | 'Budget' | 'Production';
    createdAt: Date;
    updatedAt: Date;
}

export class UserModel implements User {
    id: number;
    username: string;
    password: string;
    role: 'Admin' | 'Seller' | 'Budget' | 'Production';
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, username: string, password: string, role: 'Admin' | 'Seller' | 'Budget' | 'Production') {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    // Additional methods for user management can be added here
}