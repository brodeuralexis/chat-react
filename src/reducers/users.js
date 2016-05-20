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

            // Si l'utilisateur n'existe pas, l'ajouter, sinon le modifier.
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

            // Ne rien faire si l'utilisateur n'existe pas
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

            // Il est impératif de ne pas appliquer les changements un par un, sinon appeler
            // "udpate" pour chaque utilisateurs aura de très mauvaise conséquences pour la
            // performance générale de l'application.
            action.users.forEach(user => {
                const index = _.findIndex(state, { id: user.id });

                if (index === -1) {
                    add.push(user);
                }
                else {
                    change.push([index, 1, user]);
                }
            });

            // Mieux vaux modifier des utilisateurs avec d'en ajouter de nouveaux.  Dans le cas
            // ou une personne décide d'utiliser la fonction unshift à la place de push, le code
            // suivant ne brisera pas.
            state = update(state, { $splice: change });
            state = update(state, { $push: add });

            return state;
        }
    }

    return state;
};
