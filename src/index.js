import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

const ReduxApp = (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(ReduxApp, document.getElementById('root'));
registerServiceWorker();
