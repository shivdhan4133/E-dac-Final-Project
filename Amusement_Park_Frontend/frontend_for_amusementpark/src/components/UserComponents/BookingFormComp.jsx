import React, { Component } from 'react';
import RideHandelingServices from '../AdminComponents/Services/RideHandelingServices';
import bookingServices from './services/bookingServices';
import UserAuthService from './services/UserAuthService';

class BookingFormComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "",
            children: "",
            adults: "",
            date: "",
            mobilenumber: "",
            myFormRides: new Set(),
            allRides: []
        }
        this.addRide = this.addRide.bind(this);
    }

    componentDidMount() {
        const user = UserAuthService.getCurrentUser();
        this.setState({ username: user.name });
        this.setState({ mobileNumber: user.mobileNumber });
        RideHandelingServices.getAllRides().then(response => {
            this.setState({ allRides: response.data });
        });
    }

    saveForm = f => {
        // f.prevantDefault();
        const user = UserAuthService.getCurrentUser();
        let form = {
            user: user,
            bookingdate: this.state.date,
            adults: this.state.adults,
            children: this.state.children,
            rides: Array.from(this.state.myFormRides)
        }

        console.log(form)
        localStorage.setItem("form",JSON.stringify(form));
        this.props.history.push("/payment");
        

    }

    addRide = e => {
        const rides = this.state.myFormRides;
        this.state.allRides.map( ride =>{
            if(ride.id == e.target.id)
            if (rides.has(ride))
            rides.delete(ride);
        else {
            rides.add(ride);
        }
        });
        this.setState({ myFormRides: rides });
    };

    bookVacation = e => {

    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        const user = UserAuthService.getCurrentUser();
        return (
            <div>
                <br />
                <h2 className="text-center">Booking Form</h2>
                <br />
                <div className="row justify-content-left align-items-center" style={{ margin: '15px' }}>
                    <div className="col col-sm-6">
                        <div className="card border-primary" style={{ padding: '20px', width: '50rem' }}>
                            <div>
                                <form>
                                    <div className="form-group">
                                        <fieldset>
                                            <label className="control-label" >User Name</label>
                                            <input className="form-control"
                                                type="text"
                                                placeholder={this.state.user.name}
                                                defaultValue={this.state.username}
                                                readOnly="" />
                                        </fieldset>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Your Mobile number"
                                            name="mobileNumber"
                                            className="form-control"
                                            defaultValue={user.mobileNumber}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Vacation Date</label>
                                        <input type="date" placeholder="Book For Date" name="date"
                                            className="form-control" value={this.state.date} onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="form-group" style={{ margin: '10px' }}>
                                            <label>Adults</label>
                                            <input type="number" placeholder=""
                                                name="adults"
                                                className="form-control"
                                                value={this.state.adults}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group" style={{ margin: '10px' }}>
                                            <label>Children</label>
                                            <input type="number" placeholder=""
                                                name="children"
                                                className="form-control"
                                                value={this.state.children}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label>Select Rides</label>
                                        <div className="form-control border-success" style={{ height: 'inherit', padding: '10px' }}>
                                            {this.state.allRides.map(

                                                allRides => <div key={allRides.id}>
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id={allRides.id}
                                                                onChange={this.addRide}
                                                            />
                                                            <h5>{allRides.name}</h5>
                                                            <h6 style={{ color: 'green' }}>Catagory : {allRides.catagory}</h6>
                                                            <h6>Price : {allRides.price} Rs</h6>
                                                            <hr />
                                                        </label>
                                                    </div>
                                                </div>

                                            )}
                                        </div>
                                        <br />
                                        
                                    </div>
                                    </form>
                                    <button className="btn btn-success btn-block" onClick={this.saveForm}>Save and make Payment</button>
                                    <button className="btn btn-danger btn-block" style={{ margintop: '10px' }} >Cancel</button>
                                
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default BookingFormComp;



// if(ride.id === e.target.id)
//             if (rides.has(ride))
//             rides.delete(ride);
//         else {
//             rides.add(ride);
//         }