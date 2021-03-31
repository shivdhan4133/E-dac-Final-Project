import React, { Component } from 'react';

class Attractions extends Component {


    constructor(props) {
        super(props);
        this.state={
            username:""
        }
        
    }
    

    render() {
        return (
            <div
                style={{ position: 'relative' }}
            >
                <div
                    class="row" style={{ margin: '20px', width: '100%' }}>

                    <div class="card border-primary mb-2" style={{ borderRadius: '15px', marginBottom: '15px' }}>
                        <div class="card-header">Summer Special</div>
                        <div class="card-body">
                            <h4 class="card-title">Water Park</h4>
                            <p class="card-text">Discription</p>
                            <div class="fluid">
                                <img class="imgincard" src="/images/waterpark/wp1.jpg"></img>
                                <img class="imgincard" src="/images/waterpark/wp2.jpg"></img>
                                <img class="imgincard" src="/images/waterpark/wp3.jpg"></img>
                            </div>
                        </div>
                    </div>
                    <div class="card border-primary mb-2" style={{ borderRadius: '15px' }}>
                        <div class="card-header">All Time Favourites</div>
                        <div class="card-body">
                            <h4 class="card-title">Theme Park</h4>
                            <p class="card-text">Discription</p>
                            <div class="fluid">
                                <img class="imgincard" src="/images/theme/tp1.jpg"></img>
                                <img class="imgincard" src="/images/theme/tp2.jpg"></img>
                                <img class="imgincard" src="/images/theme/tp3.jpg"></img>
                            </div>
                        </div>
                    </div>

                    <div class="col" style={{ position: 'relative', top: '0%' }}>

                        <h3 style={{ textAlign: 'center' }}>Customer Experience</h3>

                    </div>
                </div>


            </div>
        );
    }
}

export default Attractions;