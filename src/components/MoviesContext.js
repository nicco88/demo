import React, { createContext } from 'react';

const MoviesContext = createContext({
  moviesData: {
    count: 0,
    movies: [],
    searchValue: '',
  },
  updateSearchValue: () => {},
  updateSearchResult: () => {},

  detailData: {
    isOpen: false,
    data: {
      imdbID: '',
      details: {},
    },
  },
  openModal: () => {},
  destroyModal: () => {},
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
    this.setState({
      moviesData: {
        count,
        movies,
      }
    })
  }

  openModal = (imdbID, getMovieDetail) => () => {
    
    getMovieDetail(imdbID)
      .then(res => {
      console.log("TCL: MoviesProvider -> openModal -> res", res)
        this.setState({
          detailData: {
            isOpen: true,
            data: {
              imdbID,
              details: res,
            },
          },
        });
      })
      .catch(err => console.error(err))
  }

  destroyModal = () => {
    this.setState({
      detailData: {
        isOpen: false,
        data: {},
      },
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

    detailData: {
      isOpen: false,
      data: {
        imdbID: '',
        details: {},
      },
    },
    openModal: this.openModal,
    destroyModal: this.destroyModal,
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