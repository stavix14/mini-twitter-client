import React from 'react';
import LoginContainer from "../containers/LoginContainer";

class LoginPage extends React.Component {

    submit = () =>
        this.props.history.push("/dashboard");

    render() {
        return (
            <div>
                <LoginContainer submit={this.submit} />
            </div>
        );
    }
};

export default LoginPage;