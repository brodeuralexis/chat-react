'use strict';

import _ from 'lodash';
import c from 'classnames';
import React from 'react';
import { connect as Connect } from 'react-redux';
import PureRender from 'pure-render-decorator';

import styles from './item.scss';

@Connect((state, props) => {
    return {
        isTyping: Boolean(_.find(state.typing, { id: props.user.id  }))
    };
})
@PureRender
export default class UserItem extends React.Component {

    static propTypes = {
        user: React.PropTypes.object.isRequired,
        isTyping: React.PropTypes.bool.isRequired
    };

    render() {
        const {
            user,
            isTyping,
        } = this.props;

        return (
            <div className={ styles.user }>
                <div className={ c(styles.typing, { [styles.on]: isTyping, [styles.off]: !isTyping }) }></div>
                <div className={ styles.username }>
                    { user.username }
                </div>
            </div>
        );
    }

}
