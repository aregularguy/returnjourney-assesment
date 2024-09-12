// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ItemList from './ItemList';
import SearchBar from './Searchbar';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Item Filter App</h1>
        <SearchBar />
        <ItemList />
      </div>
    </Provider>
  );
};

export default App;