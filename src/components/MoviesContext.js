import React, { createContext } from 'react';

const MoviesContext = createContext({
  moviesData: {
    count: 0,
    movies: [],
    searchValue: '',
    page: 1,
  },
  updateSearchValue: () => { },
  updateSearchResult: () => { },

  detailData: {
    isOpen: false,
      imdbID: '',
      details: null,
  },
  openModal: () => { },
  destroyModal: () => { },
});

export class MoviesProvider extends React.Component {
  updateSearchValue = newContext => {
    const { searchValue } = newContext.moviesData;
    this.setState({
      moviesData: {
        // ...this.state.moviesData,
        searchValue,
        page: 1,
        movies: [],
        count: 0
      }
    });
  }

  updateSearchResult = newContext => {
    const { count, movies, page } = newContext.moviesData;
    this.setState({
      moviesData: {
        ...this.state.moviesData,
        count,
        movies,
        page,
      }
    })
  }


  openModal = (imdbID, getMovieDetail) => () => {

    getMovieDetail(imdbID)
      .then(res => {
        console.log("TCL: MoviesProvider -> openModal -> res", res)
        const { status, data } = res;
        if (status && status === 200) {
          if (data && data.Response === 'True') {

            this.setState({
              detailData: {
                isOpen: true,
                  imdbID,
                  data,
              },
            });
          } else {
            // manage data error
          }
        } else {
          // manage status error
        }
      })
      .catch(err => console.error(err))
  }

  destroyModal = () => {
    this.setState({
      detailData: {
        isOpen: false,
          imdbID: '',
          data: null,
      },
    })
  }

  state = {
    moviesData: {
      count: 0,
      movies: [],
      searchValue: '',
      page: 1,
    },
    updateSearchValue: this.updateSearchValue,
    updateSearchResult: this.updateSearchResult,

    detailData: {
      isOpen: false,
        imdbID: '',
        data: null,
    },
    openModal: this.openModal,
    destroyModal: this.destroyModal,
  };

  render() {

    return (
      <MoviesContext.Provider value={this.state}>
        {this.props.children}
      </MoviesContext.Provider>
    )
  }
}

export const MoviesConsumer = MoviesContext.Consumer;