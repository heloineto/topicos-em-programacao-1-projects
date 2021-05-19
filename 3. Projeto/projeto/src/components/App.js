import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';

export default class App extends Component {
  render() {
    return (
      <main className="mx-24 my-6 bg-white bg-white shadow-lg rounded-lg">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contato" exact component={Contact} />
              <Route path="/produtos" exact component={Products} />
              <Route path="/carrinho" exact component={ShoppingCart} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}
