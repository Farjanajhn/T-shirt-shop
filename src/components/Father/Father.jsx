import React from 'react';
import Bror from '../Bror/Bror';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
  return (
    <div>
      <h4>Hey hey Father</h4>
      <section className='flex'>
        <Myself ring={ring}></Myself>
        <Bror></Bror>
        <Sister></Sister>
        </section>
    </div>
   
  );
};

export default Father;