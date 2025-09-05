# Koxixo Project

Koxixo is a web application designed to manage user accounts and orders with a robust login system and user management features. The application supports different access levels and permissions for various user roles, including Admin, Seller, Budget, and Production users.

## Features

- **User Authentication**: Secure login and logout functionality.
- **User Management**: Admin users can create, edit, delete, and view user accounts.
- **Order Management**: Users can create, edit, delete, and view orders, along with tracking order history.
- **Access Control**: Different user roles with specific permissions to ensure secure access to features.
- **User-Friendly Interface**: Intuitive HTML views and CSS styles for a seamless user experience.

## Project Structure

```
Koxixo
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   └── orderController.ts
│   ├── models
│   │   ├── user.ts
│   │   └── order.ts
│   ├── routes
│   │   ├── authRoutes.ts
│   │   ├── userRoutes.ts
│   │   └── orderRoutes.ts
│   ├── middlewares
│   │   ├── authMiddleware.ts
│   │   └── permissionMiddleware.ts
│   ├── services
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │   └── orderService.ts
│   ├── utils
│   │   └── credentialValidator.ts
│   ├── views
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── userManagement.html
│   │   └── orderHistory.html
│   └── types
│       └── index.ts
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd Koxixo
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage Guidelines

- Access the login page at `/login`.
- Admin users can manage users and view order history.
- Sellers can create and manage their orders.
- Budget and Production users have limited access based on their roles.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.