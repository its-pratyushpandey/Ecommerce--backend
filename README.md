# Ecommerce Backend API

A comprehensive ecommerce backend built with Node.js, Express.js, and MongoDB for CI/CD classwork. This API provides essential ecommerce functionality including user authentication, product management, order processing, and more.

## Features

- 🔐 JWT-based authentication and authorization
- 👥 User management with role-based access control
- 🛍️ Product catalog with search, filtering, and pagination
- 🛒 Shopping cart and order management
- 🔒 Security middleware (Helmet, CORS, Rate limiting)
- 📊 RESTful API design
- 🧪 Comprehensive test suite
- 🐳 Docker containerization
- 🚀 CI/CD pipeline with GitHub Actions

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, bcryptjs
- **Testing**: Jest, Supertest
- **Linting**: ESLint
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Users
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Products
- `GET /api/products` - Get all products (Public)
- `GET /api/products/:id` - Get product by ID (Public)
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders
- `POST /api/orders` - Create order (Protected)
- `GET /api/orders` - Get all orders (Admin only)
- `GET /api/orders/myorders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Health Check
- `GET /` - API information
- `GET /health` - Health status

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/its-pratyushpandey/Ecommerce--backend.git
cd Ecommerce--backend
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d
```

4. Start the development server
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Docker

### Build and run with Docker

```bash
# Build image
docker build -t ecommerce-backend .

# Run container
docker run -p 3000:3000 --env-file .env ecommerce-backend
```

### Run with Docker Compose

```bash
docker-compose up -d
```

This will start both the application and MongoDB containers.

## Testing

The project includes comprehensive tests for all endpoints:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. **Testing**: Runs tests on multiple Node.js versions
2. **Linting**: Checks code quality with ESLint
3. **Building**: Creates Docker images
4. **Deployment**: Pushes to Docker registry (on main branch)

The workflow is triggered on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

## API Documentation

### Authentication

#### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phoneNumber": "+1234567890"
}
```

#### Login User
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Products

#### Create Product (Admin only)
```bash
POST /api/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "iPhone 14",
  "description": "Latest iPhone model",
  "price": 999,
  "category": "electronics",
  "brand": "Apple",
  "stock": 50,
  "sku": "IPH14-001",
  "images": [
    {
      "url": "https://example.com/iphone14.jpg",
      "altText": "iPhone 14"
    }
  ]
}
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Rate limiting (100 requests per 15 minutes)
- CORS protection
- Helmet security headers
- Input validation with Mongoose schemas

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or issues, please create an issue in the GitHub repository.