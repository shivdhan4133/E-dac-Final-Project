import React, { Component } from 'react';
import UserAuthService from './services/UserAuthService';



class UserCartComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userCart: []
        }

    }
    componentDidMount() {
        const user = UserAuthService.getCurrentUser();
        this.setState({ userCart: user.userCart })
        console.log(user.userCart);
        UserAuthService.getUserById();
    };

    deleteFromCart(id){
        
        let cart = { userId: UserAuthService.getCurrentUser().id, rideId: id };
        console.log(cart);
        UserAuthService.deleteFromCart(cart);
        window.location.reload();
    };


    render() {
        return (
            <div>
                <div className="row justify-content-left" style={{ margin: '10px' }}>
                    <div className="col-sm-10">
                        <div className="card border-primary" style={{ padding: '15px' }}>
                            <h2 className="text text-center">Favourites</h2>
                            {
                                this.state.userCart.map(
                                    userCart => <div key={userCart.id}>
                                        <div class="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
                                            <div class="card-header">{userCart.catagory}</div>
                                            <div class="card-body">
                                                <h4 class="card-title">{userCart.name}</h4>
                                                <p class="card-text">{userCart.info}</p>
                                                <button className="btn btn-primary" name="id" style={{ margin: '5px' }}>Update</button>
                                                <button className="btn btn-danger" onClick={() => this.deleteFromCart(userCart.id)} name="id" style={{ margin: '5px' }}> Remove </button>
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

export default UserCartComp;
