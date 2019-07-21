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

const onSubmit = ( searchValue ) => async ( e ) => {
  e.preventDefault();
  const res = await getMovies( searchValue )
  console.log("TCL: onSubmit -> res", res)
}

const SearchForm = ( props ) => {
  return (
    <MoviesConsumer>
      {
        ({ updateSearchValue, moviesData }) => {
          return (
            <div>
              <form onSubmit={ onSubmit( moviesData.searchValue ) }>
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