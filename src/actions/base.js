'use strict';

import Store from '../store';

export default class BaseActions {

    dispatch(type, data) {
        Store.dispatch({
            ...data,
            type
        });
    }

}
