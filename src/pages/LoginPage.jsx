import React from 'react';
import PropTypes from "prop-types";
import LoginContainer from "../containers/LoginContainer";

const LoginPage = props => {

    const submit = email =>
    props.history.push({
        pathname: "/dashboard",
        state: {
            username: email
        }
    });

    return (
        <div>
            <LoginContainer submit={submit} />
        </div>
    );
};

LoginPage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

export default LoginPage;