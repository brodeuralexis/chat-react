'use strict';

import keymirror from '../modules/key-mirror';

export default keymirror({
    /**
     * Action permettants de modifier la clef "session" dans l'état
     * de l'application.
     */
    SESSION: {
        /**
         * Change l'utilisateur courant.
         * 
         * @key {{ id: string, username: string }} user L'utilisateur qui s'est connecté
         * @key {Array<{ id: string, username: string }>} users Une liste d'utilisateurs présentement connectés
         */
        POPULATE: null,
        /**
         * Supprime l'utilisateur courant.
         */
        REMOVE: null
    },
    /**
     * Actions permettant de de modifier les utilisateurs présentement connectés.
     * à l'application.
     */
    USER: {
        /**
         * Rajoute un utilisateur à la liste d'utilisateurs présentement connectés
         * à l'application.
         * 
         * @key {{ id: string, username: string }} user L'utilisateur à rajouter
         */
        POPULATE: null,
        /**
         * Supprime un utilisateur de la liste d'utilisateurs présentement connectés
         * à l'application.
         * 
         * @key {{ id: string }} use L'utilisateur à supprimer
         */
        REMOVE: null
    },
    /**
     * Actions permettant de modifiers les messages.
     */
    MESSAGE: {
        /**
         * Rajoute un message à l'application
         * 
         * @key {{ id: string, username: string }} user L'utilisateur ayant écris le message
         * @key {{ id: string, content: string, timestamp: number }} message Le message
         */
        APPEND: null
    },
    /**
     * Actions permettant de contrôler qui est entrain d'écrire un message.
     */
    TYPING: {
        /**
         * Rajoute un utilisateur à la liste d'utilisateurs entrain d'écrire un message.
         * 
         * @key {{ id: string, username: string }} user L'utilisateur
         */
        POPULATE: null,
        /**
         * Supprime un utilisateur de la liste d'utilisateurs entrain d'écrire un message.
         * 
         * @key {{ id: string }} user L'utilisateur
         */
        REMOVE: null
    }
})
