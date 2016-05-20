'use strict';

import Backend from '../modules/backend';
import constants from '../constants';
import BaseActions from './base';

/**
 * Classe permettant de modifier l'utilisateur courant de l'application.
 */
class SessionActions extends BaseActions {

    /**
     * Connecte un utilisateur à l'application
     * 
     * @param {{ username: string }} user L'utilisateur à connecter
     */
    connect(user) {
        return Backend.connect(user).then(({ user, users }) => {
            this.dispatch(constants.SESSION.POPULATE, {
                user,
                users
            });
        });
    }

}

export default new SessionActions();
