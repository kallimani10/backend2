# Course Registration Backend

This is the backend for the Course Registration application.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Configuration**:
    Update `server/config.js` with your MongoDB URI and Cashfree credentials.

    ```javascript
    module.exports = {
      // ... other config
      MONGODB_URI: 'your_mongodb_uri',
      CASHFREE_APP_ID: 'your_cashfree_app_id',
      CASHFREE_SECRET_KEY: 'your_cashfree_secret_key'
    };
    ```

3.  **Run Server**:
    ```bash
    npm start
    ```

## API Endpoints

-   `GET /`: Basic API status
-   `POST /api/register`: Register for a course
-   `POST /api/create-order`: Create a Cashfree payment order
-   `POST /api/check-payment-status`: Check payment status
-   `POST /api/webhook/cashfree`: Cashfree webhook for payment updates
-   `GET /api/registrations`: Get all registrations (admin)
-   `POST /api/update-registration-status`: Update registration status (admin)
-   `GET /api/test-email`: Test email functionality
-   `POST /api/send-email`: Send payment confirmation email

## Features

- ✅ Course registration
- ✅ Cashfree payment integration
- ✅ MongoDB data storage
- ✅ Payment status tracking
- ✅ Gmail email confirmation
- ✅ Professional HTML email templates
- ✅ Clean, simple code

## How It Works

1. User registers for a course
2. Payment order is created via Cashfree
3. User completes payment
4. Payment status is updated in database
5. Registration is confirmed
6. Payment confirmation email is sent automatically

**Simple and clean! 🚀**