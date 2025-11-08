# Express TypeScript Prisma Project

This project is a simple Express server built with TypeScript and integrated with Prisma for database access. 

## Project Structure

```
express-ts-prisma
├── src
│   ├── app.ts               # Initializes the Express application and middleware
│   ├── server.ts            # Entry point to start the server
│   ├── controllers          # Contains route controllers
│   │   └── index.ts         # Exports IndexController
│   ├── routes               # Defines application routes
│   │   └── index.ts         # Exports setRoutes function
│   ├── middleware           # Middleware functions for request processing
│   │   └── index.ts         # Exports middleware functions
│   ├── services             # Business logic and database interactions
│   │   └── index.ts         # Exports service functions
│   ├── prisma               # Prisma client setup
│   │   └── client.ts        # Exports Prisma client
│   └── types                # Custom TypeScript types and interfaces
│       └── index.ts         # Exports types and interfaces
├── prisma                   # Prisma schema
│   └── schema.prisma        # Defines database schema
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd express-ts-prisma
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   - Update the `.env` file with your database connection string.
   - Run the Prisma migration to set up the database schema:
     ```
     npx prisma migrate dev --name init
     ```

4. **Start the server:**
   ```
   npm run dev
   ```

## Usage

- The server will start on the specified port (default is 3000).
- You can access the API endpoints defined in the routes.

## License

This project is licensed under the MIT License.