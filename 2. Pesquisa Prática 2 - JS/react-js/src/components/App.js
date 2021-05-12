import { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Menu} />
              <Route
                path="/carrosselDeImagens"
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
