import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Roots.css'


export const RingContext = createContext('GOLD');
export const MoneyContext = createContext(0);
const Roots = () => {
  const [money,setMoney] = useState(0);
  const ring = 'diamond';
 
  return (
    <div className='grandpa'>
      <h3>This is root</h3>
      <p>Has money {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>

        
      <RingContext.Provider value='golden ring'>
      <section className='flex'>
      <Father ring={ring}></Father>
        <Uncle></Uncle>
          <Aunty ring={ring}></Aunty>
          
      </section>
      </RingContext.Provider>
        


      </MoneyContext.Provider>

    </div>
  );
};

export default Roots;