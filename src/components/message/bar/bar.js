'use strict';

import React from 'react';
import PureRender from 'pure-render-decorator';

import styles from './bar.scss';

@PureRender
export default class MessageBar extends React.Component {

    static propTypes = {
        content: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.props.content.trim()) {
            this.props.onSubmit();
        }
    };

    handleChange = (e) => {
        e.preventDefault();

        this.props.onChange(e.target.value);
    };

    render() {
        const {
            content,
        } = this.props;

        return (
            <div className={ styles.bar }>
                <form className={ styles.form } onSubmit={ this.handleSubmit }>
                    <fieldset className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={ content }
                            onChange={ this.handleChange }
                        />
                    </fieldset>
                    <div className="btn-group">
                        <input className="btn btn-primary" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        );
    }

}
