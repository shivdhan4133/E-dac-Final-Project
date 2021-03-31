import React, { Component } from 'react';
import UserAuthService from '../UserComponents/services/UserAuthService';
import UserRideServices from './UserRideServices';



class RideListForUser extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            user: "",
            rides: [],
        }
    }
    componentDidMount() {
        UserRideServices.getAllRides().then(res => {
            this.setState({ rides: res.data });
        });
        this.setState({ user: UserAuthService.getCurrentUser() });
        console.log("user Mounted : " + this.state.user);

    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.user !== this.state.user) {
            console.log("User Has changed the state")
            UserAuthService.getUserById();
        }
    }

    addToCart(rideId) {
        const user = UserAuthService.getCurrentUser();
        // let tempCart = [];
        // tempCart = user.userCart;
        // console.log(tempCart); 
        let cart = { userId: UserAuthService.getCurrentUser().id, rideId: rideId }
        UserAuthService.addToCart(cart);
        UserAuthService.getUserById();
        window.location.href = "/showUserCart";

    };

    render() {
        const user = UserAuthService.getCurrentUser();
        return (

            <div >
                <div className="row justify-content-center" style={{ margin: '10px' }}>
                    <div>
                        <div style={{ padding: '15px' }}>
                            <h2 className="text text-center">All Services</h2>
                            {
                                this.state.rides.map(
                                    rides => <div key={rides}>
                                        <div className="fluid">
                                        <div className="card border-primary mb-3" style={{ maxWidth: '40rem' }}>
                                            <div className="card-header border-primary">{rides.catagory}</div>
                                            <div className="card-body">
                                                <h4 className="card-title">{rides.name}</h4>
                                                <h4 className="card-header">Price : {rides.price} Rs</h4>
                                                <p>(For childrens 20% off)</p>
                                                <h4 className="card-text">Description : {rides.info}</h4>
                                                {(!user)
                                                    ?
                                                    <button className="btn btn-danger" name="id" style={{ margin: '5px' }}> Explore </button>
                                                    :
                                                    <div>
                                                        <button className="btn btn-outline-primary btn-sm" onClick={() => this.addToCart(rides.id)} name="id" style={{ margin: '5px' }}>Add to Favourite</button>
                                                        <button className="btn btn-outline-success btn-sm" name="id" style={{ margin: '5px' }}> View Details </button>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RideListForUser;





// let tempCart = [];
//         tempCart.push(this.state.rides.id=(rideId))
//         console.log(this.state.rides.id=(rideId));
//         this.state.rides.map(r=>
//         {if(r.id===rideId)
//             {
//         tempCart.push(r);
//         console.log(r)
//             }
//         }
//         );
//         console.log(tempCart);


// Mayuresh's Updated Working code Direct Querry firing to backend

