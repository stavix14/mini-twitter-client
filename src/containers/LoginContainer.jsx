import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

class LoginContainer extends React.Component {
    state = {
        email: '',
        loading: false,
        errors: ''
    };

    onChange = e => this.setState({email: e.target.value});

    onSubmit = () => {
        const errors = this.validate(this.state.email);
        this.setState({ errors });
        if (!errors) {
            this.props.submit();
        }
    }

    validate = (email) => {
        const isEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        const companyEmail = "@optioffer.com";
        let errors = '';

        if (!isEmailRegex.test(email)) {
            errors = "Invalid email address!";
        }
        else if (email.slice(-14) !== companyEmail) {
            errors = "This email address does not belong to our company!";
        }
        return errors;
    }

    render() {
        const { email, errors } = this.state;
        return (
            <div>
                <TextField
                    autoComplete="off"
                    autoFocus={true}
                    error={!!errors}
                    helperText={errors}
                    label="email"
                    name="email"
                    placeholder="example@optioffer.com"
                    value={email}
                    onChange={this.onChange}
                />
                <Button onClick={this.onSubmit}>Login</Button>
            </div>
        );
    }
}

LoginContainer.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginContainer;