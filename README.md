# Invoice SaaS

This project provides a basic full stack application for managing clients, quotes and invoices. It contains:

- **server** – an Express API written in TypeScript that connects to MySQL.
- **client** – a React front end created with Vite and TypeScript.

## Getting started

Each part of the stack maintains its own dependencies. Install them using npm:

```bash
cd server && npm install
cd ../client && npm install
```

To build the TypeScript sources:

```bash
npm run build
```

The client is configured to proxy API requests to the server on port 3001.

## Running the app

Start the server and client in separate terminals:

```bash
cd server && npm run build && npm start
```

```bash
cd client && npm run dev
```

This skeleton can be extended to handle full CRUD operations for clients, quotes and invoices.
