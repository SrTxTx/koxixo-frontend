export function validateCredentials(username: string, password: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/; // Username must be 3-20 characters long and alphanumeric
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password must be at least 8 characters long, contain letters and numbers

    if (!usernameRegex.test(username)) {
        return false; // Invalid username
    }

    if (!passwordRegex.test(password)) {
        return false; // Invalid password
    }

    return true; // Valid credentials
}