# Shopping-Cart - js
# 🛒 Shopping Cart System

A fully functional, client-side shopping cart application built with vanilla JavaScript (ES6 Classes), Bootstrap 5, and browser `localStorage` for persistence. Users can browse products, add them to a cart or wishlist, adjust quantities, and see live-updating totals — all without a backend or page reload.

 ✨ Features

- **Dynamic Product Catalog** — Products are rendered from a JavaScript array using template literals, so the product grid is fully data-driven.
- **Add to Cart** — Adds items to the cart, automatically incrementing quantity if the item already exists.
- **Quantity Controls** — Increase or decrease item quantity directly from the cart with `+` / `-` buttons; items are automatically removed when quantity reaches zero.
- **Remove Item** — Instantly remove any item from the cart.
- **Clear Cart** — Empty the entire cart in one click.
- **Wishlist** — Save items for later without adding them to the cart.
- **Live Totals** — Total item count and grand total update in real time as the cart changes.
- **Persistent Cart (LocalStorage)** — Cart contents survive page refreshes using the browser's `localStorage`.
- **Responsive Design** — Built with Bootstrap 5 grid system; adapts cleanly to desktop and mobile screens.
- **Hover Animations** — Subtle card lift and shadow effects on hover for a polished feel.


## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Custom hover animations and styling |
| **Bootstrap 5.3** | Responsive layout, cards, buttons, utility classes |
| **JavaScript (ES6+)** | Application logic — Classes, template literals, array methods (`find`, `filter`, `forEach`) |
| **LocalStorage API** | Client-side data persistence |

No frameworks, build tools, or backend required — runs entirely in the browser.


📁 Project Structure
shopping-cart-system/
├── index.html           Main HTML structure
├── style4.css            Custom styles (hover effects, etc.)
├── script4.js             Application logic (classes, cart/wishlist functionality)
└── README.md


🚀 Getting Started

### Prerequisites
No installation or dependencies required — just a modern web browser.

### Running the Project

1. **Clone or download** this repository:
   
2. **Open the project folder** in your code editor (e.g., VS Code).

3. **Launch with a local server** (recommended, avoids CORS/path issues):
   - If using VS Code, install the **Live Server** extension, right-click `index.html`, and select **"Open with Live Server"**.
   - Alternatively, open `index.html` directly in your browser.

That's it — no `npm install`, no build step.


 🧩 How It Works

### Core Classes

Product
Represents a single product with `id`, `name`, `price`, `image`, and `quantity`.

ShoppingCart
Manages the cart and wishlist state, and handles all rendering:

| Method | Description |
|---|---|
| `renderProducts()` | Renders the product catalog from `productStore` |
| `addItem(id)` | Adds a product to the cart, or increments quantity if it already exists |
| `renderCart()` | Rebuilds the cart panel based on current cart data |
| `removeItem(id)` | Removes an item from the cart entirely |
| `increaseQuantity(id)` / `decreaseQuantity(id)` | Adjusts item quantity; auto-removes item at zero |
| `clearCart()` | Empties the cart completely |
| `addToWishlist(id)` / `removeFromWishlist(id)` | Manages wishlist items |
| `saveCart()` / `loadCart()` | Persists and restores cart data via `localStorage` |

## Rendering Pattern

The app follows a simple, consistent data-driven rendering pattern:


User action (click)
      ↓
Update JavaScript data (cart.items / cart.wishlist)
      ↓
Re-render the affected section from scratch
      ↓
Screen reflects the updated data

This ensures the UI never falls out of sync with the underlying cart state.



Author :
Nihal e Adan

Built as a learning project to practice JavaScript ES6 Classes, DOM manipulation, and `localStorage`-based state persistence.
