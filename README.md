# e-plantShopping

Paradise Nursery is a React + Redux shopping cart application for browsing and purchasing houseplants online.

## Project Name

**Paradise Nursery** — *Where Every Plant Finds a Home*

## Features

- Landing page with company name and "Get Started" button
- Categorised plant catalogue (Air Purifying, Aromatic Fragrant, Succulents)
- Each category displays 6 plants with thumbnail, name, and price
- Add to Cart button that disables after adding and increments the cart icon count
- Persistent navbar on all pages with links to Home, Plants, and Cart
- Shopping cart with quantity increment/decrement, item deletion, and total cost
- Checkout placeholder ("Coming Soon") and Continue Shopping navigation

## Tech Stack

- React 19
- Redux Toolkit + React Redux
- React Router DOM
- Vite

## Project Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Landing page — company name & Get Started button |
| `src/App.css` | Global styles including `.background-image` for landing page |
| `src/components/Navbar.jsx` | Sticky navigation bar with live cart count |
| `src/components/AboutUs.jsx` | Company information page |
| `src/components/ProductList.jsx` | Categorised plant catalogue with Add to Cart |
| `src/components/CartItem.jsx` | Shopping cart — quantities, totals, checkout |
| `src/redux/CartSlice.jsx` | Redux slice: `addItem`, `removeItem`, `updateQuantity` |
| `src/redux/store.js` | Redux store configuration |

## Getting Started

```bash
npm install
npm run dev
```
