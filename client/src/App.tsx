import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from './components/card/card';
import Header from './components/header/header';
import JokeDisplay from './components/joke_display/joke-display';
import Loading from './components/loader/loader';
import { AppProvider } from './app_context';
import Heading from './components/styled_components/heading';

import "./App.css";

interface Props {
  category: String;
}

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      animal
      career
      celebrity
      dev
      explicit
      fashion
      food
      history
      money
      movie
      music
      political
      religion
      science
      sport
      travel
    }
  }
`;

const Categories: React.FC = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const keys = Object.keys(data.categories).filter(
    (item) => item !== "__typename"
  );
  return (
    <Fragment>
      <AppProvider>
        <JokeDisplay/>
        <Header />
        <Heading>select a category..</Heading>
        <div className="card-wrap">
          {data.categories &&
            keys.map((category: string) => (
              <Card key={category} category={category} />
            ))}
        </div>
      </AppProvider>
    </Fragment>
  );
};

export default Categories;
