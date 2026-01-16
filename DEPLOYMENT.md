# Deployment Guide for Render

This guide will help you deploy the Invoice API to Render for free.

## Prerequisites

- GitHub account
- Render account (sign up at https://render.com)

## Step-by-Step Deployment

### 1. Push to GitHub

First, initialize a git repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit: Invoice API"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Render

1. Go to https://dashboard.render.com/
2. Click the "New +" button in the top right
3. Select "Web Service"
4. Click "Build and deploy from a Git repository"
5. Connect your GitHub account if not already connected
6. Find and select your repository
7. Configure the service with these settings:
   - **Name**: `invoice-api` (or your preferred name)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: leave empty
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
   - **Instance Type**: `Free`

8. Click "Create Web Service"

### 3. Wait for Deployment

Render will:
- Clone your repository
- Install dependencies
- Build your application
- Start the server

This process takes 2-5 minutes.

### 4. Access Your API

Once deployed, your API will be available at:

```
https://YOUR-APP-NAME.onrender.com/api/invoices
```

Replace `YOUR-APP-NAME` with the name you chose in step 7.

## Testing Your Deployed API

```bash
# Create an invoice
curl -X POST https://YOUR-APP-NAME.onrender.com/api/invoices \
  -H "Content-Type: application/json" \
  -d '{
    "invoiceNumber": "INV-001",
    "clientName": "Acme Corp",
    "amount": 1500.50,
    "date": "2026-01-15",
    "status": "pending"
  }'

# Get all invoices
curl https://YOUR-APP-NAME.onrender.com/api/invoices
```

## Important Notes

### Free Tier Limitations

- Your service will spin down after 15 minutes of inactivity
- First request after inactivity takes 30-60 seconds to respond
- 750 hours per month of runtime (more than enough for testing)

### Data Persistence

This API uses in-memory storage, which means:
- Data is lost when the service restarts or spins down
- Not suitable for production use with real data
- Perfect for demos and testing

### Custom Domain (Optional)

You can add a custom domain in the Render dashboard under Settings > Custom Domain.

## Troubleshooting

### Build Failed

Check the logs in Render dashboard. Common issues:
- Missing dependencies: Make sure package.json is complete
- Build command errors: Verify `npm run build` works locally

### Service Not Responding

- Check if service is running in Render dashboard
- First request after spin-down takes 30-60 seconds
- Check the logs for any runtime errors

### API Returning Errors

- Check the Logs tab in Render dashboard
- Verify your request format matches the API documentation
- Check CORS if calling from a browser

## Need Help?

- Render Documentation: https://docs.render.com
- NestJS Documentation: https://docs.nestjs.com
