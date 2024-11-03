'use client';   
import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'> 
      <span> 
        <CountUp 
          start={0} 
          end={amount}
          prefix='₹ '
          decimal="."
          duration={2}
          separator=","       
        />
      </span>
    </div>
  );
}

export default AnimatedCounter;
