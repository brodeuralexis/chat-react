'use strict';

import _ from 'lodash';
import update from 'react-addons-update';
import constants from '../constants';

export const defaultState = [];

export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.TYPING.POPULATE: {
            const index = _.findIndex(state, { id: action.user.id });

            if (index === -1) {
                return update(state, {
                    $push: [action.user]
                });
            }

            break;
        }
        case constants.TYPING.REMOVE: {
            const index = _.findIndex(state, { id: action.user.id });

            if (index !== -1) {
                return update(state, {
                    $splice: [[index, 1]]
                });
            }
        }
    }

    return state;
};
