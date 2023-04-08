import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Roots/Roots';

const Special = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <p>She has got the {angti}</p>
    </div>
  );
};

export default Special;