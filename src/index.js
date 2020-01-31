import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import { AppContainer } from 'react-hot-loader';

import Dummy from './js/dummyfile';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Dummy);

if (module.hot) {
  module.hot.accept('./js/dummyfile', () => {
    const nextDummy = require('./js/dummyfile').default;
    render(nextDummy);
  });
}
