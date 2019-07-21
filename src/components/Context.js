import React, { createContext } from 'react';

const MoviesContext = createContext({
  moviesData: {
    count: 0,
    movies: [],
    searchValue: '',
  }
});

export class MoviesProvider extends React.Component {

  state = {
    moviesData: {
      count: 0,
      movies: [],
      searchValue: '',
    }
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