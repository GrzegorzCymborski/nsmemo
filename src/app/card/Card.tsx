import React from 'react';
import { url } from 'config/api';
import { useReduxHook } from 'hooks/useReduxHook';

type CardProps = {
  isFlipped: boolean;
  index: number;
  card: number;
};

const CardElement = ({ index, isFlipped, card }: CardProps) => {
  const { flipCard } = useReduxHook();

  return (
    <div className={`picture-card ${isFlipped ? 'flipped' : ''} `} key={index} onClick={() => flipCard(index)}>
      <div className="inner">
        <div className="front" style={{ backgroundImage: `url(${url}${card})` }}></div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default CardElement;
