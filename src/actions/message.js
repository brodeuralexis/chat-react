'use strict';

import Backend from '../modules/backend';
import constants from '../constants';
import BaseActions from './base';

class MessageActions extends BaseActions {

    send(message) {
        return Backend.sendMessage(message).then(({ user, message }) => {
            this.dispatch(constants.MESSAGE.APPEND, {
                user,
                message
            });
        });
    }

}

export default new MessageActions();
