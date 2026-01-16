# Invoice API

A simple REST API for managing invoices built with NestJS.

## Description

This is a backend system with CRUD endpoints for invoice management. It uses in-memory storage and includes the following features:

- Create new invoices
- Retrieve all invoices
- Get a specific invoice by ID
- Update invoice details
- Delete invoices

## Invoice Schema

```json
{
  "id": "string",
  "invoiceNumber": "string",
  "clientName": "string",
  "amount": "number",
  "date": "string",
  "status": "pending | paid | overdue",
  "description": "string (optional)"
}
```

## API Endpoints

Base URL: `http://localhost:3000/api` (local) or `https://your-app.onrender.com/api` (production)

### Create Invoice
```bash
POST /invoices
Content-Type: application/json

{
  "invoiceNumber": "INV-001",
  "clientName": "Acme Corp",
  "amount": 1500.50,
  "date": "2026-01-15",
  "status": "pending",
  "description": "Web development services"
}
```

### Get All Invoices
```bash
GET /invoices
```

### Get Invoice by ID
```bash
GET /invoices/:id
```

### Update Invoice
```bash
PATCH /invoices/:id
Content-Type: application/json

{
  "status": "paid"
}
```

### Delete Invoice
```bash
DELETE /invoices/:id
```

## Project Setup

```bash
npm install
```

## Running Locally

```bash
# development mode
npm run start:dev

# production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000/api`

## Deployment to Render

### Option 1: Deploy from Git Repository

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: invoice-api
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
   - **Plan**: Free
6. Click "Create Web Service"

### Option 2: Deploy with render.yaml

1. Push your code with the included `render.yaml` file to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Blueprint"
4. Connect your repository
5. Render will automatically detect and use the `render.yaml` configuration

### After Deployment

Your API will be available at: `https://your-app-name.onrender.com/api/invoices`

Note: The free tier on Render will spin down after 15 minutes of inactivity, so the first request after inactivity may take 30-60 seconds to respond.

## Testing the API

You can test the API using curl, Postman, or any HTTP client:

```bash
# Create an invoice
curl -X POST http://localhost:3000/api/invoices \
  -H "Content-Type: application/json" \
  -d '{
    "invoiceNumber": "INV-001",
    "clientName": "Acme Corp",
    "amount": 1500.50,
    "date": "2026-01-15",
    "status": "pending",
    "description": "Web development services"
  }'

# Get all invoices
curl http://localhost:3000/api/invoices

# Get specific invoice
curl http://localhost:3000/api/invoices/1

# Update invoice
curl -X PATCH http://localhost:3000/api/invoices/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "paid"}'

# Delete invoice
curl -X DELETE http://localhost:3000/api/invoices/1
```

## Features

- RESTful API design
- In-memory data storage
- CORS enabled
- Input validation
- Error handling

## Tech Stack

- NestJS
- TypeScript
- Node.js

## License

MIT
