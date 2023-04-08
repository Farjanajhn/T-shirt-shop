import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunty = ({ring}) => {
  return (
    <div className=''>
      <p>Hello from aunty!</p>
      <section className='flex'>
        <Cousine>Mumu</Cousine>
        <Cousine hasFriend={true} ring={ring}>Muna</Cousine>
      </section>
    </div>
  );
};

export default Aunty;