'use strict';

import Store from '../store';
import Promise from 'bluebird';
import constants from '../constants';

import { EventEmitter } from 'events';

import signals from 'chat-socket-io/src/signals';
import slots from 'chat-socket-io/src/slots';

class Backend extends EventEmitter {

    socket = io('http://localhost:3000/');

    constructor() {
        super();

        this.socket.on(signals.MESSAGES.CREATED, ({ user, message }) => {
            Store.dispatch({
                type: constants.MESSAGE.APPEND,
                user,
                message
            });
        });

        this.socket.on(signals.MESSAGES.TYPING.STARTED, ({ user }) => {
            Store.dispatch({
                type: constants.TYPING.POPULATE,
                user
            });
        });

        this.socket.on(signals.MESSAGES.TYPING.STOPPED, ({ user }) => {
            Store.dispatch({
                type: constants.TYPING.REMOVE,
                user
            });
        });

        this.socket.on(signals.USERS.CONNECTED, ({ user }) => {
            Store.dispatch({
                type: constants.USER.POPULATE,
                user
            });
        });

        this.socket.on(signals.USERS.DISCONNECTED, ({ user }) => {
            Store.dispatch({
                type: constants.USER.REMOVE,
                user
            });
        });
    }

    connect(user) {
        return this._send(slots.USERS.CONNECT, user.username);
    }

    getUsersCount() {
        return this._send(slots.USERS.GET.COUNT);
    }

    getUsers() {
        return this._send(slots.USERS.GET.USERS);
    }

    sendMessage(message) {
        return this._send(slots.MESSAGES.CREATE, message);
    }

    startTyping() {
        return this._send(slots.MESSAGES.TYPING.START);
    }

    stopTyping() {
        return this._send(slots.MESSAGES.TYPING.STOP);
    }

    _send(event, ...args) {
        return new Promise((resolve, reject) => {
            this.socket.emit(event, ...args, function(err, ...args) {
                if (err) {
                    reject(new Error(err.message));
                }
                else {
                    resolve(...args);
                }
            });
        });
    }

}

const backend = new Backend();

window.backend = backend;

export default backend;
