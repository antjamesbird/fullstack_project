import React, { useContext } from "react";
import { AppContext } from "./../app_context";
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
        <h3>{ category }</h3>
        <hr />
        <button className="btn orange" onClick={handleClick}>View</button>
      </div>
    </div>
  );
};

export default Card;
