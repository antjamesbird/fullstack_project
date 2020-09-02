import React, { useContext } from 'react';
import { AppContext } from '../../app_context';
import CardHeading from '../styled_components/card_heading';
import "./card.css";

interface Props {
  category: string;
}

const Card: React.FC<Props> = ({ category }) => {
  const appContext = useContext(AppContext);
  
  const handleClick = () => {
    appContext.setJoke(!appContext.jokeActive);
    appContext.setCategory(category);
  };

  return (
    <div className="card">
      <div className="text">
        <CardHeading>{ category }</CardHeading>
        <hr />
        <button className="btn orange" onClick={handleClick}>View</button>
      </div>
    </div>
  );
};

export default Card;
