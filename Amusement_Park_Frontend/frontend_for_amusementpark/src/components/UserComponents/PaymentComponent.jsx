import React, { Component } from 'react';
import bookingServices from './services/bookingServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class PaymentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameoncard: "",
            cardno: "",
            expdate: "",
            pin: "",
            amount: ""
        }
    }

    componentDidMount() {
        this.setState({ amount: this.total() })
    };

    total() {
        const form = JSON.parse(localStorage.getItem("form"));
        let rides = form.rides;
        let bill = 0;
        rides.map(
            rides => {
                bill = bill + (rides.price * form.adults) + (rides.price * form.children * 0.8);
            }
        )
        return bill;
    };


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    makePayment = () => {

        let paymentRequest = {
            nameoncard: this.state.nameoncard,
            cardno: this.state.cardno,
            expdate: this.state.expdate,
            pin: this.state.pin,
            amount: this.state.amount
        }
        const form = JSON.parse(localStorage.getItem("form"));
        bookingServices.processPayment(paymentRequest,form).then(res =>{
            console.log(res.data);
        })

    };


    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="card border-primary" style={{ margin: '10%' }}>
                        <h2 className="text-center">Payment</h2>
                        <h5 className="text-center">Total Amount Payable = {this.state.amount} Rs</h5>

                        <div className="form-group" style={{ width: '50rem', padding: '15px' }}>
                            <label>Name On Card</label>
                            <input
                                type="text"
                                name="nameoncard"
                                placeholder={" All Capital Letters"}
                                className="form-control"
                                value={this.state.nameoncard}
                                onChange={this.onChange}
                            />
                            <label>Card Number</label>
                            <input
                                type="text"
                                name="cardno"
                                placeholder={"16 digit card number"}
                                className="form-control"
                                value={this.state.cardno}
                                onChange={this.onChange}
                            />
                            <label>Expiry Date</label>
                            <input
                                type="date"
                                name="expdate"
                                className="form-control"
                                value={this.state.expdate}
                                onChange={this.onChange}
                            />
                            <label>Pin</label>
                            <input
                                type="number"
                                name="pin"
                                placeholder={"4 digit pin"}
                                className="form-control"
                                value={this.state.pin}
                                onChange={this.onChange}
                            />

                        </div>
                        <button className="btn btn-success" style={{ margin: '7px' }} onClick={this.makePayment}>Pay and Book</button>
                        <button className="btn btn-danger" style={{ margin: '7px' }} onClick={this.total}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentComponent;