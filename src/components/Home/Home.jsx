import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import { toast, Toaster } from 'react-hot-toast';

const Home = () => {

  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exists = cart.find(ts => ts._id === tshirt._id);
    if (exists)
    {
      toast("You have already added this product");
      }
 else {
  const newCart = [...cart, tshirt];
  setCart(newCart);
 }
  }

  const handleRemoveFromCart = (_id) => {
    const remaining = cart.filter(p => p._id !== _id);
    setCart(remaining);
  }
  return (
    <div className='home-container'>
      <div className='t-shirts-container'>
      {
        tshirts.map(tshirt=><TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt> )
      }
      </div>
      <div className='cart-container'>
        <Cart
          handleRemoveFromCart={handleRemoveFromCart}
          cart={cart}></Cart>
     </div>
    </div>
  );
};

export default Home;