'use strict';

import _ from 'lodash';
import update from 'react-addons-update';
import constants from '../constants';

export const defaultState = [];

export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.MESSAGE.APPEND: {
            action.message.user = action.user;

            // Trouve le l'endroit où le message doit être inséré.  Les messages sont trié par
            // moment de création ("timestamp").
            const index = _.sortedLastIndexBy(state, { timestamp: action.message.timestamp });

            return update(state, {
                $splice: [[index, 0, action.message]]
            });
        }
    }

    return state;
};
