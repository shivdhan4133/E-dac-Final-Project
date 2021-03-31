import React, { Component } from 'react';
import RideListComp from '../AdminComponents/RideListComp'
import UserAuthService from '../UserComponents/services/UserAuthService';
import RideListForUser from './RideListForUser';
class ServicesComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
                flaglist:false,
                flagpackage:false
        }

        this.showRideList=this.showRideList.bind(this);
        this.showPackageList=this.showPackageList.bind(this);
    }
    showRideList() {
        this.setState({flaglist:true,flagpackage:false});
    };
    showPackageList() {
        this.setState({flagpackage:true,flaglist:false});
    };

    render() {
        let temp;
        if(this.state.flaglist)
        {temp=<div><RideListForUser/></div>}
        let temp2;
        if(this.state.flagpackage)
        {temp2=<div><h2>Special Packages</h2></div>}

        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-light">
                <a className="btn btn-primary" style={{position:'relative',left:'2%',marginRight:'10px'}} onClick={this.showRideList}>All Rides</a>
                {/* <a className="btn btn-primary" style={{position:'relative',left:'2%',marginRight:'10px'}} onClick={this.showPackageList}>Packages</a> */}
                </div>
               <div>{temp}</div>
               <div>{temp2}</div>
            </div>
        );
    }
}

export default ServicesComp;
