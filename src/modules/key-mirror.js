'use strict';

function defaultTransform(value) {
    return String(value).toLowerCase();
}

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
