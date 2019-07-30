import React from 'react';
import { MoviesConsumer } from './MoviesContext';
import { onSubmit } from './SearchForm';

const LoadMore = () => {
  return (
    <MoviesConsumer>
      {
        ({ moviesData, updateSearchResult }) => {
          return (
            <form onSubmit={onSubmit([moviesData, updateSearchResult])}>
              <div>
                <input
                  style={{ 
                    width: '100%',
                    margin: '2rem 0',
                    cursor: 'pointer'
                  }}
                  type="submit" value="Load More"/>
              </div>
            </form>

          )
        }
      }

    </MoviesConsumer>
  )
}

export default LoadMore;
