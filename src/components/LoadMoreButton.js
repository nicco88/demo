import React from 'react';
// import axios from 'axios';
import { MoviesConsumer } from './MoviesContext';
import { onSubmit } from './SearchForm';

// const loadMoreMovies = (searchKey, page) => {
//   if (searchKey) {
//     const url = 'http://www.omdbapi.com/?';
//     return axios.get(url, {
//       params: {
//         apikey: 'abef200c',
//         s: searchKey,
//         page,
//       }
//     })
//   }
//   return;
// }

const LoadMore = () => {
  return (
    <MoviesConsumer>
      {
        ({ moviesData, updateSearchResult }) => {
          console.log("TCL: LoadMore -> moviesData", moviesData)
          return (
            <form onSubmit={onSubmit([moviesData, updateSearchResult])}>

              <div>
                <input style={{ width: '100%', margin: '2rem 0'}} type="submit" value="Load More"/>
              </div>
            </form>

          )
        }
      }

    </MoviesConsumer>
  )
}

export default LoadMore;