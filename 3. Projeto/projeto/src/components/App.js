import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProductsPage from './ProductsPage';
import ShoppingCartPage from './ShoppingCartPage';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <main class="mx-24 my-6 bg-white bg-white shadow-lg rounded-lg">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/contato" exact component={ContactPage} />
              <Route path="/produtos" exact component={ProductsPage} />
              <Route path="/carrinho" exact component={ShoppingCartPage} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}
