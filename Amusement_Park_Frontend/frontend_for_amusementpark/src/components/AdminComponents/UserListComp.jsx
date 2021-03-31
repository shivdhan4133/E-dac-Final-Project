import React, { Component } from 'react';
import AdminAuthService from './Services/AdminAuthService';
import UserControlServices from './Services/UserControlServices';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
class UserListComp extends Component {

    constructor(props) {
        super(props);
        this.state = {

            users: []

        }
    }

    componentDidMount() {
        UserControlServices.getAllUsers().then(res => {
            this.setState({ users: res.data });
        })
    }




    render() {

        const adminRestrict = "/admincontrol/"

        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'relative' }}>
                    <a className="btn btn-secondary" href="/admincontrol" style={{ marginRight: '25px' }}>Admin Home</a>

                    <a className="btn btn-primary" style={{ marginRight: '25px' }} href={adminRestrict + "showall"}> All Rides </a>

                    <a className="btn btn-primary" href="/admincontrol" style={{ marginRight: '25px' }}>Bookings</a>

                    <a className="btn btn-warning" style={{ right: '1.5%', position: 'absolute' }}
                        onClick={AdminAuthService.logout} href="/">Logout</a>
                </div>

                <div>

                    <h4 className="display-3 text-center" >User List</h4>
                    <hr />
                    <table className="table table-striped table-bordered" style={{ position: 'relative', top: '40px' }}>

                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>

                            <th>Actions</th>
                        </thead>

                        {this.state.users.map(
                            user => <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobileNumber}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" name="id" style={{ marginRight: '15px' }}>View</button>
                                    <button className="btn btn-warning btn-sm" name="id" style={{ marginRight: '15px' }}>Bookings</button>
                                    <button className="btn btn-danger btn-sm" name="id" style={{ marginRight: '15px' }}>Delete</button>


                                </td>
                            </tr>
                        )}

                    </table>

                </div>

            </div>
        );
    }
}

export default UserListComp;
