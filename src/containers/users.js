'use strict';

import React from 'react';
import { connect as Connect } from 'react-redux';
import PureRender from 'pure-render-decorator';

import UserItem from '../components/user/item';

import styles from './users.scss';

@Connect(state => {
    return {
        users: state.users,
        currentUser: state.session
    };
})
@PureRender
export default class Users extends React.Component {

    static propTypes = {
        users: React.PropTypes.array.isRequired
    };

    render() {
        const users = this.props.users.filter(user => user.id !== this.props.currentUser.id);

        return (
            <div className={ styles.users }>
                { users.length === 0 ? (
                    <span>
                        No Other User Connected
                    </span>
                ) : (
                    users.map(user => (
                        <UserItem
                            key={ user.id }
                            user={ user }
                        />
                    ))
                ) }
            </div>
        );
    }

}
