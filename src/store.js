'use strict';

import { createStore } from 'redux';

import reducer from './reducers';

const Store = createStore(reducer);

Store.subscribe(() => console.log(Store.getState()));

export default Store;
