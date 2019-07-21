import React from 'react';
import SearchForm from './components/SearchForm'
import { MoviesProvider } from './components/Context'

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <SearchForm></SearchForm>
        {/* Add list here */}
      </MoviesProvider>
    </div>
  );
}

export default App;
