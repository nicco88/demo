import React, { createContext } from 'react';

const MoviesContext = createContext({
  moviesData: {
    count: 0,
    movies: [],
    searchValue: '',
  },
  updateSearchValue: () => {},
  updateSearchResult: () => {},
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

  updateSearchResult = newContext => {
    const { count, movies } = newContext.moviesData;
    console.log("TCL: MoviesProvider -> movies", movies)
    console.log("TCL: MoviesProvider -> count", count)
    this.setState({
      moviesData: {
        count,
        movies,
      }
    })
  }

  state = {
    moviesData: {
      count: 0,
      movies: [],
      searchValue: '',
    },
    updateSearchValue: this.updateSearchValue,
    updateSearchResult: this.updateSearchResult,
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