import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import "./joke.css";
import { AppContext } from "../../app_context";
import Loader from "./../loader/loader";
import Modal from "./../styled_components/modal";

const GET_JOKE = gql`
  query Joke($category: String!) {
    joke(category: $category) {
      value
      categories
      url
      icon_url
    }
  }
`;

interface Props {
  category: string;
}

const Joke: React.FC<Props> = ({ category }) => {
  const { loading, error, data } = useQuery(GET_JOKE, {
    variables: { category },
  });

  const appContext = useContext(AppContext);
  
  const handleClick = () => {
    appContext.setJoke(!appContext.jokeActive);
    appContext.setCategory('');
  };

  if (loading) return <Loader />;
  if (error) return <p className="error">ERROR</p>;
  if (!data) return <p>Not found</p>;

  const { value } = data.joke;

  return (
    <Modal>
      <div className="modal-content">
        <span onClick={handleClick} className="close">&times;</span>
        <h1>{appContext.selectedCategory}</h1>
        <hr></hr>
        <h2 className="quote">{value}</h2>
        <p className="author">Author Unknown</p>
      </div>
    </Modal>
  );
};

export default Joke;
