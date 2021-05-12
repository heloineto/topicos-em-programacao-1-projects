import { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from '../history';
import CarrosselDeImagens from './CarrosselDeImagens';
import Formulario from './Formulario';
import Menu from './Menu';
import Modal from './Modal';
import Tabela from './Tabela';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Menu} />
              <Route
                path="/carrossel-de-imagens"
                exact
                component={CarrosselDeImagens}
              />
              <Route path="/formulario" exact component={Formulario} />
              <Route path="/modal" exact component={Modal} />
              <Route path="/tabela" exact component={Tabela} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
