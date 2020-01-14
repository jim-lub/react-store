import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider } from './components/StoreProvider';
import { Dispatcher, Listener } from '__dev';

ReactDOM.render(
  <StoreProvider>
    <Dispatcher />
    <Listener />
  </StoreProvider>,
  document.getElementById('root')
);
