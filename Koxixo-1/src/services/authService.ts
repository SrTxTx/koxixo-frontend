import { User } from '../models/user';
import { validateCredentials } from '../utils/credentialValidator';

class AuthService {
    private users: User[];

    constructor(users: User[]) {
        this.users = users;
    }

    login(username: string, password: string): User | null {
        const user = this.users.find(user => user.username === username);
        if (user && validateCredentials(password, user.password)) {
            return user;
        }
        return null;
    }

    logout(userId: string): void {
        // Logic for logging out the user (e.g., invalidate session)
    }

    isAuthenticated(userId: string): boolean {
        // Logic to check if the user is authenticated
        return true; // Placeholder
    }

    getUserRole(userId: string): string | null {
        const user = this.users.find(user => user.id === userId);
        return user ? user.role : null;
    }
}

export default AuthService;