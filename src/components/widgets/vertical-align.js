'use strict';

import c from 'classnames'
import React from 'react';
import PureRender from 'pure-render-decorator';

import styles from './vertical-align.scss';

@PureRender
export default class VerticalAlign extends React.Component {

    static propTypes = {
        children: React.PropTypes.node
    };

    render() {
        const {
            children,
            className,
            ...props,
        } = this.props;

        return (
            <div className={ c(styles.outer, className) } { ...props }>
                <div className={ styles.inner }>
                    { children }
                </div>
            </div>
        );
    }

}
