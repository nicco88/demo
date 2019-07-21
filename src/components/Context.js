import React, { createContext } from 'react';

const MoviesContext = createContext({
  moviesData: {
    count: 0,
    movies: [],
    searchValue: '',
  },
  updateSearchValue: () => {},
});

export class MoviesProvider extends React.Component {
  updateSearchValue = newContext => {
    const { searchValue } = newContext.moviesData;
    this.setState({ 
      moviesData: {
        searchValue
      }
    });
  }

  state = {
    moviesData: {
      count: 0,
      movies: [],
      searchValue: '',
    },
    updateSearchValue: this.updateSearchValue,
  };

  render() {
    return (
      <MoviesContext.Provider value={ this.state }>
        { this.props.children }
      </MoviesContext.Provider>
    )
  }
}

export const MoviesConsumer = MoviesContext.Consumer;