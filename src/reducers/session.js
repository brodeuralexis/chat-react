'use strict';

import _ from 'lodash';
import constants from '../constants';

export const defaultState = null;

export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.SESSION.POPULATE: {
            return action.user;
        }
        case constants.SESSION.REMOVE: {
            return null;
        }
    }

    return state;
};
