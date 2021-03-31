import React, { Component } from 'react';
import AddRideComp from './AddRideComp';
import AdminAuthService from './Services/AdminAuthService';
import RideHandelingServices from './Services/RideHandelingServices';

class RideListComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rides: []
        }
        this.deleteRide=this.deleteRide.bind(this);

    }

    componentDidMount() {
        RideHandelingServices.getAllRides().then(res => {
            this.setState({ rides: res.data });
        });
    };

    deleteRide(id) {
        console.log(id);
        RideHandelingServices.deleteRide(id).then(res => {
            this.setState({rides:this.state.rides.filter(rides => rides.id !== id)});
        });
    }


    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'relative' }}>
                    <a className="btn btn-secondary" href="/admincontrol" style={{marginRight:'25px'}}>Admin Home</a>

                    <a className="btn btn-primary" href="/userlist" style={{marginRight:'25px'}}>Users</a>

                    <a className="btn btn-primary" href="/admincontrol" style={{marginRight:'25px'}}>Bookings</a>

                    <a className="btn btn-warning" style={{ right: '1.5%', position: 'absolute' }}
                        onClick={AdminAuthService.logout} href="/">Logout</a>
                </div>
                <hr />
                <div className="row justify-content-left" style={{ margin: '10px' }}>
                    <div className="col-sm-7">
                        <div className="card border-primary" style={{ padding: '15px' }}>
                            <h2 className="text text-center">All Rides</h2>
                            <table className="table table-striped table-bordered" style={{ position: 'relative' }}>
                                <thead>
                                    <th>Name</th>
                                    <th>Catagory</th>
                                    <th>Price</th>
                                    <th>Info</th>
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.rides.map(
                                            rides => <tr key={rides.id}>
                                                <td>{rides.name}</td>
                                                <td>{rides.catagory}</td>
                                                <td>{rides.price}</td>
                                                <td>{rides.info}</td>
                                                <td>
                                                    <button className="btn btn-primary btn-sm" name="id" style={{ margin: '5px' }}>Update</button>
                                                    <button className="btn btn-danger btn-sm" name="id" onClick={() => this.deleteRide(rides.id)} style={{ margin: '5px' }}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-5">

                        <div className="card border-primary" style={{ padding: '15px' }}>
                            <h2 className="text text-center">Add New Ride</h2>
                            <AddRideComp></AddRideComp>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RideListComp;
