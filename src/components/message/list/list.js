'use strict';

import c from 'classnames';
import React from 'react';
import PureRender from 'pure-render-decorator';

import Message from './message';

import styles from './list.scss';

@PureRender
export default class MessageList extends React.Component {

    static propTypes = {
        messages: React.PropTypes.array.isRequired
    };

    render() {
        const {
            messages
        } = this.props;

        return (
            <div className={ styles.list }>
                <div className={ styles.messages }>
                    { messages.map((message, index) => {
                        return (
                            <div key={ message.id }>
                                <Message
                                    message={ message }
                                />
                                { index !== messages.length - 1 && (
                                    <hr noShade className={ styles.hr } />
                                ) }
                            </div>
                        );
                    }) }
                </div>
            </div>
        );
    }

}
