import React from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const CONFIG = require('../config');
const API_KEY = CONFIG.API;

YTSearch({key: API_KEY, term: 'iphone'}, function(data) {
    console.log(data);
});

const App = () => { 
    return (
      <div>
          <SearchBar />
      </div>
    ); 
} 

ReactDOM.render(<App />, document.querySelector('.container'));