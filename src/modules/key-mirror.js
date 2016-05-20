'use strict';

/**
 * Transforme un segment lors de l'opération de mirroir
 * d'objet.
 * 
 * @param {string} value La valeur à transformer
 * @return {string} La valeur transformée
 */
function defaultTransform(value) {
    return String(value).toLowerCase();
}

/**
 * Crée un objet mirroir à partir d'un objet de base.  Le mirroir comporte les mêmes clefs,
 * mais leurs valeurs est une version transformé du chemin vers leurs clefs respective.
 * 
 * @param {object} object L'objet à transformer en mirroir
 * @param {string} [delimiter=' '] La valeur séparant chaque segments
 * @param {string} [prefix=' '] Le prefix à rajouter à chaque valeur
 * @param {function(string):string} [transform=defaultTransform] La transformation à appliquer à chaques segments
 * @return {object} L'objet mirroir
 */
export default function keyMirror(object, delimiter = ' ', prefix = '', transform = defaultTransform) {
    return Object.keys(object).reduce((mirror, key) => {
        if (object[key] && typeof object[key] === 'object') {
            mirror[key] = keyMirror(object[key], delimiter, prefix + transform(key) + delimiter, transform);
        }
        else if (typeof object[key] === 'string' && object[key] !== '') {
            mirror[key] = object[key];
        }
        else {
            mirror[key] = prefix + transform(key);
        }

        return mirror;
    }, {});
};
