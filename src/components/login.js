'use strict';

import React from 'react';
import update from 'react-addons-update';
import PureRender from 'pure-render-decorator';

import SessionActions from '../actions/session';

import VerticalAlign from './widgets/vertical-align';

import styles from './login.scss';

@PureRender
export default class Login extends React.Component {

    state = {
        username: ''
    };

    handleChange = (name, value) => {
        this.setState(state => update(state, {
            [name]: {
                $set: value
            }
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        SessionActions.connect(this.state);
    };

    render() {
        return (
            <div { ...this.props }>
                <VerticalAlign className={ styles.login }>
                    <form className={ styles.form } onSubmit={ this.handleSubmit }>
                        <fieldset className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                value={ this.state.username }
                                onChange={ (e) => this.handleChange('username', e.target.value) }
                                placeholder="Username"
                            />
                        </fieldset>
                        <div className="btn-group" role="group">
                            <input className="btn btn-primary" type="submit" value="Connect" />
                        </div>
                    </form>
                </VerticalAlign>
            </div>
        )
    }

}
