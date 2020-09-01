import React, { useState, Dispatch } from "react";

interface ContextProps {
    jokeActive: boolean;
    selectedCategory: string;
    setJoke: Dispatch<boolean>;
    setCategory: Dispatch<string>;
  }
export const AppContext = React.createContext({} as ContextProps);

export const AppProvider = (props: any) => {
    const [joke, setJoke] = useState(false);
    const [category, setCategory] = useState('');

    return (
        <AppContext.Provider value={{
            jokeActive: joke,
            selectedCategory: category,
            setJoke,
            setCategory
        }}>
            { props.children }
        </AppContext.Provider>
    );
}