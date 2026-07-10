# mySHOP

A full-stack grocery shopping app with client-side routing built with React, backed by an Express REST API and a PostgreSQL database. Browse products, view individual listings, and manage a cart across multiple pages — all without a page reload.

Originally built as part of [The Odin Project](https://www.theodinproject.com) React curriculum, later extended with a self-built REST API and database to practice full-stack development beyond the original assignment.

**Live demo:** [Click here](https://myshop-odin.netlify.app)

---

## Features

- Multi-page navigation with React Router
- Product listing page with a card grid
- Individual product pages with quantity selection
- Shared cart state across pages via React Router's outlet context
- Product catalog served from a real REST API and PostgreSQL database (not hardcoded/mock data)
- Styled UI with Tailwind CSS

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v7, Tailwind CSS v4, Vite |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Query Layer | Prisma ORM |
| Deployment | Netlify (client) + Render (server) + Neon (database) |

---

## Architecture

This app is split into two independent projects living in the same repository — a React frontend and an Express backend, each with their own `package.json` and dependencies, deployed separately. The frontend and backend run as two separate processes, both locally and in production. The frontend fetches product data from the backend's REST API rather than importing it from a local file.

### REST API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Returns the full product catalog |
| GET | `/api/products?names=A,B,C` | Returns only the products matching the given names |

### Database schema

```
Product (id, pathName, name, price, details)
```

---

## Running locally

### Prerequisites

- Node.js 18+
- PostgreSQL (local instance, or a connection string from a hosted provider like Neon)

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/myShop.git
cd myShop
```

### 2. Set up the server

```bash
cd server
npm install
```

Create a `server/.env` file:

```
SERVER_PORT=3000
DATABASE_URL=postgresql://yourusername:@localhost:5432/myshop
FRONTEND_URL=http://localhost:5173
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Run the Prisma migrations to create the database tables:

```bash
npx prisma migrate dev
```

Seed the database with the product catalog:

```bash
npx prisma db seed
```

Start the backend dev server:

```bash
npm run dev
```

The API will be running at `http://localhost:3000`.

### 3. Set up the client

Open a second terminal:

```bash
cd client
npm install
```

Create a `client/.env` file:

```
VITE_API_URL=http://localhost:3000
```

Start the frontend dev server:

```bash
npm run dev
```

Visit `http://localhost:5173`.

**Note:** both the server and client dev servers need to be running at the same time for the app to work — the frontend fetches live data from the backend on every page load.

---

## Project structure

```
myShop/
├── client/
│   ├── src/
│   │   ├── components/       # Reusable UI components (Header, ProductCard, CartListing, LoadingPage)
│   │   ├── pages/             # Route-level page components (Home, Shop, Listing, Cart)
│   │   ├── hooks/             # Custom React hooks (useCatalog, useCatalogSubset)
│   │   ├── assets/            # Static assets
│   │   ├── styles/            # Global styles
│   │   ├── App.jsx            # Layout shell and shared cart state
│   │   ├── main.jsx           # App entry point
│   │   └── routes.jsx         # Route definitions
│   ├── public/                # Static product images
│   ├── index.html    
│   ├── vite.config.js
│   └── package.json
│
└── server/
    ├── db/
    │   ├── prisma.js          # Prisma Client instance
    │   └── seed.js             # Seeds the database with the product catalog
    ├── prisma/
    │   ├── schema.prisma
    │   └── migrations/
    ├── app.js                  # Express app entry point
    ├── prisma.config.js              
    └── package.json
```

---

## Known limitations

- The "Proceed to checkout" button on the cart page is a placeholder — it doesn't currently do anything. There's no checkout or payment flow.
- No authentication or user accounts — the app is fully public/anonymous.
- Cart contents are not persisted between sessions (stored in memory, cleared on refresh).
- The backend is hosted on Render's free tier, which spins down after periods of inactivity — the first request after idle time may take 30–60 seconds to respond while the server cold-starts.

---

## Author

[@Hgupta1912](https://github.com/yourusername)
