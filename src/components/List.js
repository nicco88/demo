import React from 'react';
import { MoviesConsumer } from './MoviesContext';

const List = ( props ) => {
  return(
    <MoviesConsumer>
      {
        ({ moviesData }) => {
          return (
            <div>
              { moviesData.count > 0 &&
                (<h3 style={{ textAlign: 'center'}}>
                  Total found: { moviesData.count }
                </h3>)}
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                maxWidth: '500px',
                margin: '2rem auto 0'
                }}>
                { moviesData.movies && moviesData.movies.map( ( movie, i ) => {
                    return (
                      <li key={ movie.imdbID + '_' + i}>
                        <div
                          className="movie-list-item"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '100px 1fr',
                            gridColumnGap: '1rem',
                          }}
                        >
                          <div className="img-wrapper">
                            <img
                              style={{
                                width: '100px'
                              }}
                              className="img"
                              onError={ console.error( 'image error')}
                              src={ movie.Poster }/>
                          </div>
                          <div>
                            <h2>
                              { movie.Title } ({ movie.Year })
                            </h2>
                            <p>
                              Type: { movie.Type }
                            </p>
                            <span>detail</span>

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