document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/dashboard';
                } else {
                    loginMessage.textContent = data.message;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                loginMessage.textContent = 'An error occurred. Please try again.';
            });
        });
    }

    const orderHistoryButton = document.getElementById('orderHistoryButton');
    if (orderHistoryButton) {
        orderHistoryButton.addEventListener('click', function() {
            fetch('/api/orders/history')
            .then(response => response.json())
            .then(data => {
                const orderHistoryContainer = document.getElementById('orderHistoryContainer');
                orderHistoryContainer.innerHTML = '';
                data.orders.forEach(order => {
                    const orderElement = document.createElement('div');
                    orderElement.textContent = `Order ID: ${order.id}, Status: ${order.status}`;
                    orderHistoryContainer.appendChild(orderElement);
                });
            })
            .catch(error => {
                console.error('Error fetching order history:', error);
            });
        });
    }
});