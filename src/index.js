import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as favoritesContext from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <favoritesContext.FavoritesContextProvider>
  <BrowserRouter> 
    <App />
  </BrowserRouter> 
  </favoritesContext.FavoritesContextProvider>
);

