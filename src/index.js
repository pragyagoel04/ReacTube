import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAT8tpxp3gquhNwMkWf9AWLqtqvGs2z6NU';
// Create a new component which produces some HTML

const App = () => {
  return (
    <div>
      <Search Bar />
    </div>
  );
}

// THIS component's generated HTML and PUT IT ON THE PAGE (IN THE DOM)
ReactDOM.render(<App />, document.getElementById('app'));
