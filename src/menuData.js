const menuData = {
  store: {
    name: "Buba Junction",
    address: "Bhosari, Pune",
    storeImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
  },
  menu: [
    { category: "Mocktails", items: [
      { name: "Mint Lemon", price: 30, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }, // Mint Lemonade
      { name: "Kala Khatta", price: 30, image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" }, // Blackberry Mocktail
      { name: "Paan Masala", price: 30, image: "https://images.pexels.com/photos/5945642/pexels-photo-5945642.jpeg?auto=compress&w=600&q=80" }, // Paan Drink
      { name: "Jeera Masala", price: 30, image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80" } // Jeera Masala Soda
    ]},
    { category: "Classic Buba", items: [
      { name: "Mango", price: 50, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" }, // Mango Bubble Tea
      { name: "Orange", price: 50, image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" }, // Orange Bubble Tea
      { name: "Pineapple", price: 50, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" }, // Pineapple Bubble Tea (using mango as placeholder)
      { name: "Strawberry", price: 50, image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" } // Strawberry Bubble Tea
    ]},
    { category: "Exotic Buba", items: [
      { name: "Lychee", price: 80, image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80" }, // Lychee Bubble Tea
      { name: "Blueberry", price: 80, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }, // Blueberry Bubble Tea
      { name: "Watermelon", price: 80, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" }, // Watermelon Bubble Tea
      { name: "Blackcurrant", price: 80, image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" } // Blackcurrant Bubble Tea
    ]},
    { category: "Premium Buba", items: [
      { name: "Kiwi", price: 100, image: "https://images.pexels.com/photos/5945642/pexels-photo-5945642.jpeg?auto=compress&w=600&q=80" }, // Kiwi Bubble Tea
      { name: "Green Apple", price: 100, image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" }, // Green Apple Bubble Tea
      { name: "Pomegranate", price: 100, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }, // Pomegranate Bubble Tea
      { name: "Peach Passion", price: 100, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" } // Peach Passion Bubble Tea
    ]},
    { category: "Buba Lassi", items: [
      { name: "Rose", price: 70, image: "https://images.pexels.com/photos/5945642/pexels-photo-5945642.jpeg?auto=compress&w=600&q=80" }, // Rose Lassi
      { name: "Mango", price: 80, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" } // Mango Lassi
    ]},
    { category: "Buba Shakes", items: [
      { name: "Chocolate Shake", price: 120, image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" }, // Chocolate Shake
      { name: "Oreo Shake", price: 160, image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80" }, // Oreo Shake
      { name: "Kitkat Shake", price: 170, image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" }, // Kitkat Shake
      { name: "Nutella Shake", price: 180, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" } // Nutella Shake
    ]},
    { category: "Coffee Buba", items: [
      { name: "Cold Coffee", price: 150, image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" }, // Cold Coffee
      { name: "Irish Coffee", price: 170, image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" }, // Irish Coffee
      { name: "Mocha Coffee", price: 180, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }, // Mocha Coffee
      { name: "Hazelnut Coffee", price: 180, image: "https://images.pexels.com/photos/5945642/pexels-photo-5945642.jpeg?auto=compress&w=600&q=80" } // Hazelnut Coffee
    ]}
  ]
};

export default menuData; 