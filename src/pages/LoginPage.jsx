import React from 'react';
import LoginContainer from "../containers/LoginContainer";

class LoginPage extends React.Component {

    submit = email =>
        this.props.history.push({
            pathname: "/dashboard",
            state: {
                username: email
            }
        });

    render() {
        return (
            <div>
                <LoginContainer submit={this.submit} />
            </div>
        );
    }
};

export default LoginPage;