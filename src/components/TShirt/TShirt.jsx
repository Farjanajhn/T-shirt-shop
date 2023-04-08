import React from 'react';
import './TShirt.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const TShirt = ({tshirt,handleAddToCart}) => {
  const { _id, picture, name, price } = tshirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price:${price}</p>
      <button onClick={()=>handleAddToCart(tshirt)}> Buy Now<FontAwesomeIcon icon={faShoppingCart} />

</button>
    </div>
  );
};

export default TShirt;