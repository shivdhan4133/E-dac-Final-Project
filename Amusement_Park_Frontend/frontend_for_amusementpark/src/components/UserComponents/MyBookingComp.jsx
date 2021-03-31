import React, { Component } from 'react';
import bookingServices from './services/bookingServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MyBookingComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookingform: {
                name: "",
                user: {},
                rides: [],
                bookingdate: "",
                children: "",
                adults: ""
            }
        }
    }
    componentDidMount() {
        bookingServices.getFormById();
        this.setState({ bookingform: JSON.parse(localStorage.getItem("userform")) });
    }

    render() {

        console.log(this.state.noform)
        const form = this.state.bookingform;
        if (form === null)
            return (
                <div>
                    <script>
                        {toast.error("You Have Not Booked Yet", { position: toast.POSITION.TOP_CENTER })}
                    </script>
                </div>
            )

        const user = form.user;
        const rides = form.rides;
        console.log(JSON.stringify(form.bookingdate));

        return (

            <div>

                {
                    form === null ?
                        <div>
                            <script>
                                {toast.error("You Have Not Booked Yet", { position: toast.POSITION.TOP_CENTER })}
                            </script>
                        </div>
                        :
                        <div className="row justify-content-center">
                            <div className="card border-primary" style={{ margin: '15px', padding: '25px', width: '30rem' }}>

                                <tr class="table-info" style={{ padding: '8px' }}>
                                    <th scope="row"> <h5> Name : </h5> </th>
                                    <td><h5>{form.user.name}</h5></td>
                                </tr>
                                <tr class="table-warning" style={{ padding: '8px' }}>
                                    <th scope="row"> <h5> Date of visit : </h5> </th>
                                    <td><h5>{form.bookingdate}</h5></td>
                                </tr>

                                <tr class="table-info" style={{ padding: '8px' }}>
                                    <th scope="row"> <h5> Adults : </h5> </th>
                                    <td><h5>{form.adults}</h5></td>
                                </tr>
                                <tr class="table-warning" style={{ padding: '8px' }}>
                                    <th scope="row"> <h5> Children : </h5> </th>
                                    <td><h5>{form.children}</h5></td>
                                </tr>
                                <hr />
                                <h5 className="text-center"> Rides </h5>
                                <hr />
                                <table className="table-hover">
                                    <thead >
                                        <tr className="table-danger">
                                            <th scope="col">Name</th>
                                            <th scope="col">Catagory</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {form.rides.map(
                                            ride =>
                                                <tr key={ride.id} className="table-success">
                                                    <th>{ride.name}</th>
                                                    <tr><td>{ride.catagory}</td></tr>
                                                    <td>{ride.price}</td>
                                                    <hr />
                                                </tr>
                                        )}
                                    </tbody>
                                </table>
                                <hr />
                                <h5 className="text-center">Payment Status : Paid</h5>
                                <hr />
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default MyBookingComp;