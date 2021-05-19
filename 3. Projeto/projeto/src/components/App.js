import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProductsPage from './ProductsPage';
import ShoppingCartPage from './ShoppingCartPage';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/contato" exact component={ContactPage} />
              <Route path="/produtos" exact component={ProductsPage} />
              <Route path="/carrinho" exact component={ShoppingCartPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
