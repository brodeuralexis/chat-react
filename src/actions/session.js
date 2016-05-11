'use strict';

import Backend from '../modules/backend';
import constants from '../constants';
import BaseActions from './base';

class SessionActions extends BaseActions {

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
