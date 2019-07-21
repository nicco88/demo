import React from 'react';
import SearchForm from './components/SearchForm'
import { MoviesProvider } from './components/Context'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <SearchForm></SearchForm>
        <List></List>
      </MoviesProvider>
    </div>
  );
}

export default App;
