'use strict';

import Backend from '../modules/backend';
import constants from '../constants';
import BaseActions from './base';

/**
 * Classe permettant d'indiquer au serveur si l'utilisateur courant est entrain d'écrire
 * un message.
 */
class TypingActions extends BaseActions {

    /**
     * Indique au serveur que l'utilisateur est entrain d'écrire un message.
     */
    start() {
        return Backend.startTyping();
    }

    /**
     * Indique au serveur que l'utilisateur a arrêté d'écrire un message.
     */
    stop() {
        return Backend.stopTyping();
    }

}

export default new TypingActions();
