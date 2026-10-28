import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from './Navbar';

// ── Plant catalogue ──────────────────────────────────────────────────────────
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&sig=1',
        description: 'A hardy indoor plant that thrives on neglect and purifies the air.',
        cost: '$15',
      },
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&sig=2',
        description: 'Elegant white blooms that neutralise indoor toxins.',
        cost: '$18',
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&sig=3',
        description: 'Easy to grow and highly effective at removing pollutants.',
        cost: '$12',
      },
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&sig=4',
        description: 'Glossy, waxy leaves that tolerate low light beautifully.',
        cost: '$25',
      },
      {
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&sig=5',
        description: 'Bold, dark leaves that make a dramatic focal point.',
        cost: '$20',
      },
      {
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&sig=6',
        description: 'Soothing gel and air-purifying power in one easy plant.',
        cost: '$14',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&sig=1',
        description: 'Famous calming fragrance; perfect on a sunny windowsill.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&sig=2',
        description: 'Sweet, romantic scent from delicate white flowers.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&sig=3',
        description: 'Piney, invigorating aroma — doubles as a culinary herb.',
        cost: '$15',
      },
      {
        name: 'Mint',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&sig=4',
        description: 'Fresh, cool scent that repels pests naturally.',
        cost: '$10',
      },
      {
        name: 'Lemon Balm',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&sig=5',
        description: 'Uplifting citrus scent shown to reduce anxiety.',
        cost: '$14',
      },
      {
        name: 'Hyacinth',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&sig=6',
        description: 'Dense, intoxicating spring fragrance in vibrant colours.',
        cost: '$22',
      },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      {
        name: 'Echeveria',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&sig=1',
        description: 'Rosette-shaped succulent in stunning shades of blue and purple.',
        cost: '$9',
      },
      {
        name: 'Jade Plant',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&sig=2',
        description: 'Thick, oval leaves — believed to bring good luck and prosperity.',
        cost: '$13',
      },
      {
        name: 'String of Pearls',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&sig=3',
        description: 'Trailing bead-like leaves that cascade from a hanging planter.',
        cost: '$17',
      },
      {
        name: 'Haworthia',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&sig=4',
        description: 'Compact and low-light tolerant — ideal for desk or shelf.',
        cost: '$11',
      },
      {
        name: 'Barrel Cactus',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&sig=5',
        description: 'Architectural, cylindrical shape that thrives in sunny spots.',
        cost: '$15',
      },
      {
        name: 'Panda Plant',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&sig=6',
        description: 'Soft, velvety silver leaves edged with rusty-brown markings.',
        cost: '$12',
      },
    ],
  },
];

// ── Component ────────────────────────────────────────────────────────────────
function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <Navbar />
      <div className="product-grid">
        <div className="product-grid-heading">
          <h1>Our Plants</h1>
          <p>Find a little more green for every room.</p>
        </div>

        {plantsArray.map((categoryObj, catIdx) => (
          <div className="category-section" key={catIdx}>
            <h2>{categoryObj.category}</h2>
            <div className="product-list">
              {categoryObj.plants.map((plant, plantIdx) => (
                <div className="product-card" key={plantIdx}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-details">
                    <div className="product-title">{plant.name}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
