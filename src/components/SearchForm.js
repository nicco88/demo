import React from 'react';
import axios from 'axios';
import { MoviesConsumer } from './MoviesContext';
import { API_KEY } from './../config';


export const getMovies = ( searchKey, page ) => {
  if ( searchKey ) {
    const url = 'http://www.omdbapi.com/?';
    return axios.get( url, {
      params: {
        apikey: API_KEY,
        s: searchKey,
        page,
      }
    })
  }
  return;
}

export const onSubmit = ( data ) => async ( e ) => {
  e.preventDefault();
  try {
    const [ moviesData, updateSearchResult ] = data;
    console.log("TCL: onSubmit -> moviesData", moviesData)
    let { searchValue, page } = moviesData;
    const res = await getMovies( searchValue, page++ )
 
    if (res.status === 200 ) {
      if ( res.data.Response === 'True' ) {
        
        updateSearchResult({
          moviesData: {
            count: res.data.totalResults,
            movies: [...moviesData.movies, ...res.data.Search],
            page,
          }
        });
      } else {
        // Let user know there were no results
      }
    } else {
      // Error should be communicated to the user through notification / toast
      console.error(res);
      throw new Error('Invalid request status')
    }
    
  } catch( err ) {
    // Error should be communicated to the user through notification / toast
    console.error( err )
  }
}

const SearchForm = () => {
  return (
    <MoviesConsumer>
      {
        ({ moviesData, updateSearchValue, updateSearchResult }) => {
        console.log("TCL: SearchForm -> moviesData", moviesData)
          return (
            <div>
              <form onSubmit={ onSubmit( [moviesData, updateSearchResult] ) }>
                <fieldset>
                  <legend>Search for the best movies</legend>
                  <div>
                    <input
                      type="text"
                      onChange={ e => updateSearchValue(
                        { moviesData: {
                            searchValue: e.target.value }
                          }
                        )}
                      />
                    <input
                      style={{
                        cursor: 'pointer'
                      }}
                      type="submit" />
                  </div>
                </fieldset>
              </form>
            </div>
          )
        }
      }

    </MoviesConsumer>
  )
}
export default SearchForm;
