import React from 'react';
import axios from 'axios';
import { MoviesConsumer } from './Context';

const url = 'http://www.omdbapi.com/?';

const getMovies = ( searchKey ) => {
  if ( searchKey ) {
    return axios.get( url, {
      params: {
        apikey: 'abef200c',
        s: searchKey,
      }
    })
  }
  return;
}

const onSubmit = ( data ) => async ( e ) => {
  e.preventDefault();
  try {
    const [ searchValue, updateSearchResult ] = data;
    const res = await getMovies( searchValue )
    console.log("TCL: onSubmit -> res", res)


    if (res.status === 200 ) {
      if ( res.data.Response === 'True' ) {
        updateSearchResult({
          moviesData: {
            count: res.data.totalResults,
            movies: res.data.Search,
          }
        });
      } else {
        // Let user know there were no results
      }
    } else {
      console.error(res);
      throw new Error('Invalid request status')
    }
    
  } catch( err ) {
    console.error( err )
  }
}

const SearchForm = ( props ) => {
  return (
    <MoviesConsumer>
      {
        ({ moviesData, updateSearchValue, updateSearchResult }) => {
          return (
            <div>
              <form onSubmit={ onSubmit( [moviesData.searchValue, updateSearchResult] ) }>
                <fieldset>
                  <legend>Search for the best movies</legend>
                  <p>{ moviesData.searchValue }</p>
                  <div>
                    <input
                      type="text"
                      onChange={ e => updateSearchValue(
                        { moviesData: {
                            searchValue: e.target.value }
                          }
                        )}
                      />
                    <input type="submit" />
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