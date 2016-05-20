'use strict';

import _ from 'lodash';
import update from 'react-addons-update';
import constants from '../constants';

export const defaultState = [];

export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.TYPING.POPULATE: {
            const index = _.findIndex(state, { id: action.user.id });

            // S'assurer que l'utilisateur n'est pas entrain de taper avant de l'ajouter à la liste.
            if (index === -1) {
                return update(state, {
                    $push: [action.user]
                });
            }

            break;
        }
        case constants.TYPING.REMOVE: {
            const index = _.findIndex(state, { id: action.user.id });

            // S'assurer que l'utilisateur est entrain de taper avant de le retirer de la liste.
            if (index !== -1) {
                return update(state, {
                    $splice: [[index, 1]]
                });
            }
            
            break;
        }
    }

    return state;
};
