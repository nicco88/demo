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
                      <li key={ `${ movie }_${ i }`}>{ movie.Title }</li>
                    )
                  })
                }
                {/* <li>{moviesData.count}</li> */}
              </ul>
            </div>
          )
        }
      }
    </MoviesConsumer>
  )
} 

export default List;