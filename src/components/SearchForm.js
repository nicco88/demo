import React from 'react';
import axios from 'axios';
import { MoviesConsumer } from './Context';

const SearchForm = ( props ) => {
  return (
    <MoviesConsumer>
      {
        ({ updateSearchValue, moviesData }) => {
          return (
            <div>
              <form>
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
                    <input
                      type="submit"
                    />
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