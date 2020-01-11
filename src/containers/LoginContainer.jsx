import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginComponent from "../components/LoginComponent";

const LoginContainer = props => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');

    const onChange = e => setEmail(e.target.value);

    const validate = email => {
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

    const onSubmit = () => {
        const errors = validate(email);
        setErrors(errors);
        if (!errors) {
            props.submit(email);
        }
    }

    return (
        <React.Fragment>
            <LoginComponent
                errors={errors}
                email={email}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </React.Fragment>
    );
}

LoginContainer.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginContainer;