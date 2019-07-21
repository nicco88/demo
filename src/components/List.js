import React from 'react';
import { MoviesConsumer } from './Context';

const List = ( props ) => {
  return(
    <MoviesConsumer>
      {
        ({ moviesData }) => {
          return (
            <div>
              <ul>
                { moviesData.movies && moviesData.movies.map( ( movie, i ) => {
                    return (
                      <li key={ movie.imdbID + '_' + i}>
                        <div
                          className="movie-list-item"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr'
                          }}
                        >
                          <div className="img-wrapper">
                            <img
                              style={{
                                width: '100px'
                              }}
                              className="img"
                              src={ movie.Poster }/>
                          </div>
                          <div>
                            { movie.Title }

                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        }
      }
    </MoviesConsumer>
  )
} 

export default List;