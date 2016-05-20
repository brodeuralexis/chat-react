'use strict';

import Store from '../store';

/**
 * Classe abstraite représentant une liste d'actions sur une ressource.
 */
export default class BaseActions {

    /**
     * Émets des données sous un certain type d'action.  Il est préférable
     * que la valeur de "type" provienne du fichier "src/constants/index.js".
     * 
     * @param {string} type Le type de l'action
     * @param {object] data Les données a émettres
     */
    dispatch(type, data) {
        Store.dispatch({
            ...data,
            type
        });
    }

}
