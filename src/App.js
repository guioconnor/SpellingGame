import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import rootReducer from './redux';
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import animalsData from './data/animalsData';

import AnimalsGrid from './containers/AnimalsGridContainer';
import AnimalSpell from './containers/AnimalSpellContainer';

const history = createHistory();

const middleware = [
  thunk,
];

const store = createStore(
  rootReducer,
  {
    animals: animalsData,
  },
  composeWithDevTools(applyMiddleware(...middleware))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/animals" component={AnimalsGrid} />
            <Route
              exact
              path="/animals/:animalId"
              render={({ match }) => (
                <AnimalSpell
                  animalId={match.params.animalId}
                />
              )} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
