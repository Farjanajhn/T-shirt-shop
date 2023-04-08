import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
  let massage;
  if (cart.length===0)
  {
     massage= <p>Please add some product</p>
  }
  else {
    massage = <div>
      <h4>Rich People</h4>
      <p>Thank you for your time</p>
    </div>
  }
 
  return (
    <div>
      <h1>Order Summary:{cart.length}</h1>
      {cart.length<2 ? <span> More Some</span>: <span>Enough For Today</span>}
      {massage}
      {
        cart.map(tshirt => <p key={tshirt._id}> {tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
      }
       {
    cart.length===2 && <p>Double product!!</p>
      }
     
    </div>
  );
};

export default Cart;