'use strict';

import messages from './messages';
import typing from './typing';
import users from './users';
import session from './session';

import { combineReducers } from 'redux';

export default combineReducers({
    messages,
    typing,
    users,
    session
});
