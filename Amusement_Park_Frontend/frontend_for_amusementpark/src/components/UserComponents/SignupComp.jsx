import React, { Component } from 'react';
import UserAuthService from './services/UserAuthService';


const emailValidator = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

class SignupComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mobileNumber: "",
            email: "",
            dob: "",
            city: "",
            state: "",
            pinCode: "",
            password: "",
            emailError: null,
            passwordError: null,
            passwordConfirmationError: "",
            message: ""
        };
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (u) => {

        u.preventDefault();
        let user = {
            name: this.state.name, mobileNumber: this.state.mobileNumber,
            email: this.state.email, dob: this.state.dob, city: this.state.city,
            state: this.state.state, pinCode: this.state.pinCode, password: this.state.password
        };


        if (this.state.emailError === null && this.state.passwordError === null) {
            this.setState({ message: 'User Added successfully' });
            UserAuthService.register(user).then(res => {
                this.setState({ message: 'User Added successfully' });
                this.props.history.push('/');
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.validateEmail();
        this.validatePassword();
    }

    validateEmail(e) {

        if (emailValidator.test(this.state.email) === false) {
            this.setState({ emailError: "Invalid" });
        }
        else {
            this.setState({ emailError: null });
        }

    };
    validatePassword(e) {
        if (passwordValidator.test(this.state.password) === false) {
            this.setState({ passwordError: "Invalid" });
        } else {
            this.setState({ passwordError: null });
        }
    }




    cancel() {
        this.props.history.push('/users');
    };

    render() {
        return (
            <div>
                <div className="row justify-content-center align-items-center" style={{ margin: '15px' }}>
                    <div className="card border-primary">
                        <div style={{ padding: '20px', width: '45rem' }}>
                            <form>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Full Name" name="name"
                                        className="form-control" value={this.state.name} onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input type="text" placeholder="No Country Code Required" name="mobileNumber"
                                        className="form-control" value={this.state.mobileNumber} onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="e.g. raghav@gmail.com" name="email"
                                        className="form-control" value={this.state.email} onChange={this.onChange}
                                    />
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>{this.state.emailError}</span>
                                </div>
                                <div className="form-group">
                                    <label>Date Of Birth</label>
                                    <input type="date" name="dob"
                                        className="form-control" value={this.state.dob} onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Your City</label>
                                    <input type="text" placeholder="Where you Live ?" name="city"
                                        className="form-control" value={this.state.city} onChange={this.onChange}
                                    />
                                </div><div className="form-group">
                                    <label>Your State</label>
                                    <input type="text" placeholder="State" name="state"
                                        className="form-control" value={this.state.state} onChange={this.onChange}
                                    />
                                </div><div className="form-group">
                                    <label>Pin Code</label>
                                    <input type="text" placeholder="e.g. 415002" name="pinCode"
                                        className="form-control" value={this.state.pinCode} onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder=" must contain atleast 1 uppercase 1 lowercase 1 number & 1 specialCharacter" name="password"
                                        className="form-control" value={this.state.password} onChange={this.onChange}
                                    />
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>{this.state.passwordError}</span>
                                </div>
                                <div className="form-group">
                                    <label>Re Enter Password</label>
                                    <input type="password" placeholder="Re Enter Password" name="cpassword"
                                        className="form-control" onChange={this.onChange}
                                    />
                                </div>

                                <button className="btn btn-success btn-block" onClick={this.saveUser}>Register</button>
                                <button className="btn btn-danger btn-block" style={{ margintop: '10px' }} onClick={this.cancel.bind(this)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupComp;