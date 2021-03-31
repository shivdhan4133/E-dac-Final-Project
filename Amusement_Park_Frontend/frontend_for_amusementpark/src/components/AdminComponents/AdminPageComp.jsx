import React, { Component } from 'react';
import AdminAuthService from './Services/AdminAuthService';

class AdminPageComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin: ""
        }
    }

    componentDidMount(){
        const currentAdmin = AdminAuthService.getCurrentAdmin();
        if(!currentAdmin){
            this.setState({ redirect: "/home" });
        }
    };

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="btn btn-secondary" href="/adminlogin12345">Admin Home</a>
                <a className="btn btn-primary" style={{ left: '94%', position: 'absolute' }} href="/Alogin">login</a>
            </div>
        );
    }
}

export default AdminPageComp;


