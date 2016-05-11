import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Store from './store';
import { Provider } from 'react-redux';

import './modules/backend';

ReactDOM.render(
    <Provider store={ Store }>
        <App />
    </Provider>,
    document.getElementById('app')
);
