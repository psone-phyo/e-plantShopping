import { useMemo, useState } from "react";
import "./App.css";
import ProductList, { products } from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const count = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );
  const addItem = (product) =>
    setCart((items) =>
      items.some((item) => item.id === product.id)
        ? items
        : [...items, { ...product, quantity: 1 }],
    );
  const updateQuantity = (id, delta) =>
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  const removeItem = (id) =>
    setCart((items) => items.filter((item) => item.id !== id));
  return (
    <div className="app-shell">
      <header className="navbar">
        <button className="brand" onClick={() => setPage("home")}>
          🌿 Paradise Nursery
        </button>
        <nav aria-label="Main navigation">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("plants")}>Plants</button>
          <button className="cart-link" onClick={() => setPage("cart")}>
            🛒 Cart <span>{count}</span>
          </button>
        </nav>
      </header>
      {page === "home" && (
        <main className="landing">
          <div className="hero-copy">
            <p className="eyebrow">Bring nature home</p>
            <h1>Paradise Nursery</h1>
            <p>
              Beautiful houseplants, thoughtfully grown and delivered to your
              door.
            </p>
            <button className="primary" onClick={() => setPage("plants")}>
              Get Started
            </button>
          </div>
        </main>
      )}
      {page === "plants" && (
        <ProductList products={products} cart={cart} onAdd={addItem} />
      )}
      {page === "cart" && (
        <CartItem
          cart={cart}
          onChange={updateQuantity}
          onRemove={removeItem}
          onContinue={() => setPage("plants")}
        />
      )}
    </div>
  );
}
export default App;
