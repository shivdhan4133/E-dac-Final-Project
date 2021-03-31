import React, { Component } from 'react';
import AdminAuthService from './Services/AdminAuthService';
import RideHandelingServices from './Services/RideHandelingServices';

class AdminLoginPage extends Component {


    ridelist() {
        RideHandelingServices.getAllRides();
    }

    render() {
        const adminRestrict = "/admincontrol/"
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'relative' }}>
                    <a className="btn btn-secondary" style={{ marginRight: '25px' }} href="/adminlogin12345">Admin Home</a>

                    <a className="btn btn-primary" href="/userlist" style={{ marginRight: '25px' }}>Users</a>

                    <a className="btn btn-primary" href="/admincontrol" style={{ marginRight: '25px' }}>Bookings</a>

                    <a className="btn btn-warning" style={{ right: '1.5%', position: 'absolute' }}
                        onClick={AdminAuthService.logout} href="/">Logout</a>
                    <a className="btn btn-primary" style={{ marginLeft: '5px' }} href={adminRestrict + "showall"}> All Rides </a>
                </div>
                <h1 className="text text-center">Welcome Admin</h1>
            </div>
        );
    }
}

export default AdminLoginPage;
