import React, { Component } from 'react';
import RideHandelingServices from './Services/RideHandelingServices';


class AddRideComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            catagory: "",
            price: "",
            info: ""
        }
        // this.selectThemePark=this.selectThemePark.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangePrice=this.onChangePrice.bind(this);
        this.selWP=this.selWP.bind(this);
        this.selTP=this.selTP.bind(this);
        this.saveRide=this.saveRide.bind(this);

    }

    // selectThemePark(){
    //     this.setState({catagory:"THEMEPARK"})
    // }
    onChangeName(e){
        this.setState({name:e.target.value})
    }
    onChangeDescription(e){
        this.setState({info:e.target.value})
    }
    onChangePrice(e){
        this.setState({price:e.target.value})
    }

    selWP(e){
        this.setState({catagory:"WATERPARK"})
    }
    selTP(e){
        this.setState({catagory:"THEMEPARK"})
    }
    saveRide(r){
        r.preventDefault();

        let ride = {
            name:this.state.name,
            catagory:this.state.catagory,
            price:this.state.price,
            info:this.state.info
        }
        console.log(JSON.stringify(ride));
        RideHandelingServices.addRide(ride)
            // this.props.history.push("/showall");
            window.location.reload();
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label><br />
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.onChangeName}
                    />

                    <label htmlFor="info">Description</label><br />
                    <textarea
                        type="text"
                        className="form-control"
                        name="info"
                        onChange={this.onChangeDescription}
                    />
                    <label htmlFor="price">Price</label><br />
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        onChange={this.onChangePrice}
                    />
                    <label htmlFor="price">Select Catagory</label><br />
                    <div className="card" style={{ position: 'relative', marginTop: '', maxWidth: '15rem' }}>
                        <div className="col-sm-3" style={{ position: 'relative', left: '10%' }}>
                            <label class="form-check-label">
                                <input 
                                type="radio" 
                                class="form-check-input" 
                                name="catagory" 
                                value={this.state.catagory}
                                onChange={this.selWP}
                                id="WATERPARK" 
                                disabled="" />
                                <h4>WaterPark</h4>
                            </label>
                        </div>
                        <div className="col-sm-3" style={{ position: 'relative', left: '10%' }}>
                            <label class="form-check-label">
                                <input 
                                type="radio" 
                                class="form-check-input" 
                                name="catagory"
                                value={this.state.catagory}
                                onChange={this.selTP} 
                                id="THEMEPARK" 
                                // onClick={this.selectThemePark()}  //here to implement logic 
                                disabled=""
                                 />
                                <h4>ThemePark</h4>
                            </label>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input 
                        type="submit" 
                        name="submit" 
                        className="btn btn-primary btn-lg btn-block"
                        onClick={this.saveRide}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddRideComp;
