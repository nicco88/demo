import React from 'react';
import { MoviesConsumer } from './MoviesContext';
import Detail from './Detail';
import axios from 'axios';
import LoadMoreButton from './LoadMoreButton'
import no_pic from './../assets/no_pic.jpg'
import { API_KEY } from './../config';


const getMovieDetail = ( id ) => {
  if ( id ) {
    const url = 'http://www.omdbapi.com/?';
    return axios.get( url, {
      params: {
        apikey: API_KEY,
        i: id,
        plot: 'full'
      }
    })
  }
  return;
}

const List = () => {
  return (
    <MoviesConsumer>
      {
        ({ moviesData, detailData, openModal }) => {
          return (
            <div>
              {detailData.isOpen && <Detail />}
              {moviesData.count > 0 &&
                (<h3 style={{ textAlign: 'center' }}>
                  Total found: {moviesData.count}
                </h3>)}
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                maxWidth: '500px',
                margin: '2rem auto 0'
              }}>
                {moviesData.movies && moviesData.movies.map((movie, i) => {
                  return (
                    <li
                      style={{
                        marginBottom: '1rem',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .2)',
                      }}
                      key={movie.imdbID + '_' + i}
                    >
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
                              width: '100px',
                              margin: 'auto',
                              display: 'block',
                            }}
                            className="img"
                            onError={e => e.target.src = no_pic}
                            src={movie.Poster} />
                        </div>
                        <div>
                          <h2>
                            {movie.Title} ({movie.Year})
                            </h2>
                          <p>
                            Type: {movie.Type}
                          </p>

                          <button
                            style={{
                              cursor: 'pointer'
                            }}
                            onClick={openModal(movie.imdbID, getMovieDetail)}
                          >detail</button>

                        </div>
                      </div>
                    </li>
                  )
                })
                }
              </ul>
              {moviesData.count > 0 
              && moviesData.count > moviesData.movies.length
              && <LoadMoreButton></LoadMoreButton>}
            </div>
          )
        }
      }
    </MoviesConsumer>
  )
}

export default List;