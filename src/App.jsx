import React, { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([
    // Fruits as example items:
     { id: 1, name: "Apple", quantity: 3 },
     { id: 2, name: "Banana", quantity: 5 },
     { id: 3, name: "Cherry", quantity: 20 },
     { id: 4, name: "Date", quantity: 10 }
  ]);

  return (
    <div>
      <Navbar cartItems={cartItems} />
      {/* ... other components or content ... */}
    </div>
  );
}

export default App;
