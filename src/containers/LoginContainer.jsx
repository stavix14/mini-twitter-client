import React from 'react';
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
    }

    validate = (email) => {
        let errors = '';
        const isEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        const companyEmail = "@optioffer.com";
        if (!isEmailRegex.test(email)) {
            console.log("merge");
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
                    autoComplete={false}
                    autoFocus={true}
                    error={!!errors}
                    helperText={errors}
                    label="email"
                    name="email"
                    placeholder="example@optioffer.com"
                    value={email}
                    onChange={this.onChange}
                />
                <Button primary onClick={this.onSubmit}>Login</Button>
            </div>
        );
    }
}

export default LoginContainer;