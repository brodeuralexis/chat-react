'use strict';

import Backend from '../modules/backend';
import constants from '../constants';
import BaseActions from './base';

/**¸
 * Classe permettant d'effectuer des actions auprès des messages.
 */
class MessageActions extends BaseActions {

    /**
     * Envois un message au serveur.
     * 
     * @param {{ content: string }} message Le message à envoyer au serveur
     */
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
