'use strict';

import Backend from '../modules/backend';
import constants from '../constants';
import BaseActions from './base';

class TypingActions extends BaseActions {

    start() {
        return Backend.startTyping();
    }

    stop() {
        return Backend.stopTyping();
    }

}

export default new TypingActions();
