import React, { Component } from 'react';
import AdminAuthService from './Services/AdminAuthService';

class AdminLoginComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);
    }

    onChangeEmail(a) {
        this.setState({ email: a.target.value });
    };
    onChangePassword(a) {
        this.setState({ password: a.target.value });
    };



    login(e) {
        e.preventDefault();
        AdminAuthService.adminLogin(this.state.email, this.state.password).then(() => {
            this.props.history.push("/admincontrol");
            window.location.reload();
        },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });

            });
    }



    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="btn btn-secondary" href="/adminlogin12345">Admin Home</a>
                </div>
                <div className="row justify-content-center" style={{margin:'15px'}}>
                    <div className="card border-primary ">
                        <div className="row justify-content-center" style={{ margin: '15px' }}>
                            
                                <div  style={{padding:'20px', width: '45rem' }}>

                                    <h3 className="text-center">Admin Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="username">Username:</label><br />
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            onChange={this.onChangeEmail}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label><br />
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={this.onChangePassword}
                                            className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-primary btn-lg btn-block" onClick={this.login} />
                                    </div>
                                    <div id="register-link" className="text-center">
                                        <a href="Adminsignup">New Admin Registration</a>
                                    </div>

                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLoginComp;
