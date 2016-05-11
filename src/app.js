'use strict';

import React from 'react';
import { connect as Connect } from 'react-redux';

import Login from './components/login';

import Users from './containers/users';
import Messages from './containers/messages';

@Connect((state) => {
    return {
        user: state.session
    };
})
export default class App extends React.Component {

    static propTypes = {
        user: React.PropTypes.object
    };

    render() {
        const {
            user
        } = this.props;

        if (!user) {
            return (
                <Login />
            );
        }

        return (
            <div>
                <Users />
                <Messages />
            </div>
        );
    }

}
