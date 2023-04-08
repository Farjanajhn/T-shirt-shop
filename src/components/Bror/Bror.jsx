import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Roots/Roots';

const Bror = () => {
  const angti = useContext(RingContext);
  return (
    <div>
      <p>Brother can have {angti} too</p>
    </div>
  );
};

export default Bror;