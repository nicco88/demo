import React from 'react';

const SearchForm = ( props ) => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Search for the best movies</legend>
          <div>
            <input
              type="text"
              />
            <input type="submit"/>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default SearchForm;