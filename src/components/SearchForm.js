import React from 'react';
import axios from 'axios';
import { MoviesConsumer } from './MoviesContext';


export const getMovies = ( searchKey, page ) => {
  if ( searchKey ) {
    const url = 'http://www.omdbapi.com/?';
    return axios.get( url, {
      params: {
        apikey: 'abef200c',
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
    // console.log("TCL: onSubmit -> res", res)


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
      console.error(res);
      throw new Error('Invalid request status')
    }
    
  } catch( err ) {
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