import React, { createContext } from 'react';


const MoviesContext = createContext({
  moviesData: {}
});

export class Provider extends React.Component {


  state = {
    moviesData: {}
  };

  render() {
    return (
      <MoviesContext.Provider value={ this.state }>
        { this.props.children }
      </MoviesContext.Provider>
    )
  }
}

export const Consumer = MoviesContext.Consumer;