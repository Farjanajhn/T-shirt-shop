import React from 'react';
import { useContext } from 'react';
import Cousine from '../Cousine/Cousine';
import { MoneyContext } from '../Roots/Roots';

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className=''>
      <h5>Hey from uncle!</h5>
      <p><small>Grandpa money:{money}</small></p>
      <button onClick={()=>setMoney(money+1000)}>Send Money</button>
      <section className='flex'>
        <Cousine>Farjana</Cousine>
        <Cousine>Farhana</Cousine>
        <Cousine>Toha</Cousine>
       
      </section>
    </div>
  );
};

export default Uncle;