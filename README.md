# mySHOP

A single-page grocery shopping app with client-side routing built with React. Browse products, view individual listings, and manage a cart across multiple pages — all without a page reload.

Built as part of [The Odin Project](https://www.theodinproject.com) React curriculum.

**Live demo:** [Click here](https://myshop-odin.netlify.app)

---

## Features

- Multi-page navigation with React Router
- Product listing page with a card grid
- Individual product pages with quantity selection
- Shared cart state across pages via React Router's outlet context
- Styled UI with Tailwind CSS

## Tech stack

- React 18
- React Router v7
- Tailwind CSS v4
- Vite

## Running locally

```bash
git clone https://github.com/yourusername/myshop.git
cd myshop
npm install
npm run dev
```

## Project structure

```
src/
  components/       # Reusable UI components (Header, ProductCard, CartListing)
  pages/            # Route-level page components (Home, Shop, Listing, Cart)
  data/             # Product catalog data
  hooks/            # Custom React hooks
  assets/           # Static assets
  styles/           # Global styles
  App.jsx           # Layout shell and shared cart state
  main.jsx          # App entry point
  routes.jsx        # Route definitions
```
