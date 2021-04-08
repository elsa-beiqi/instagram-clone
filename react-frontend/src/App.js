import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from './data';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import Product from './components/Product';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <button class="sidebar-close-button" onClick="openMenu()"> 
            &#9776;
          </button>
          <a className="brand" href="/">
            arTrove
          </a>
        </div>
        <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
         <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
      </main>
      <footer className="row center">All rights reserved.</footer>
    </div>
  </BrowserRouter>
);
}

export default App;