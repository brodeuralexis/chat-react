'use strict';

import _ from 'lodash';
import update from 'react-addons-update';
import constants from '../constants';

export const defaultState = [];

export default function(state = defaultState, action) {
    console.log(action);
    switch (action.type) {
        case constants.USER.POPULATE: {
            const index = _.findIndex(state, { id: action.user.id });

            if (index === -1) {
                return update(state, {
                    $push: [action.user]
                });
            }
            else {
                return update(state, {
                    $splice: [[index, 1, action.user]]
                });
            }
        }
        case constants.USER.REMOVE: {
            const index = _.findIndex(state, { id: action.user.id });

            if (index !== -1) {
                return update(state, {
                    $splice: [[index, 1]]
                });
            }

            break;
        }
        case constants.SESSION.POPULATE: {
            const change = [];
            const add = [];

            action.users.forEach(user => {
                const index = _.findIndex(state, { id: user.id });

                if (index === -1) {
                    add.push(user);
                }
                else {
                    change.push([index, 1, user]);
                }
            });

            state = update(state, { $splice: change });
            state = update(state, { $push: add });

            return state;
        }
    }

    return state;
};
