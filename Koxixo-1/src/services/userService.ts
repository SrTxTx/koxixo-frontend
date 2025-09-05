import { User } from '../models/user';
import { v4 as uuidv4 } from 'uuid';

class UserService {
    private users: User[] = [];

    createUser(username: string, password: string, role: string): User {
        const newUser: User = {
            id: uuidv4(),
            username,
            password, // In a real application, ensure to hash the password
            role
        };
        this.users.push(newUser);
        return newUser;
    }

    editUser(id: string, updatedData: Partial<User>): User | null {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return null;

        const updatedUser = { ...this.users[userIndex], ...updatedData };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }

    deleteUser(id: string): boolean {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return false;

        this.users.splice(userIndex, 1);
        return true;
    }

    getUser(id: string): User | null {
        return this.users.find(user => user.id === id) || null;
    }

    getAllUsers(): User[] {
        return this.users;
    }
}

export default new UserService();