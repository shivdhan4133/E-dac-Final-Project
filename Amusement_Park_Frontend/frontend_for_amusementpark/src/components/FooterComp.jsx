import React, { Component } from 'react';


class FooterComp extends Component {
    render() {
        return (
            <div>
                <footer 
                className="footer"
                style={{paddingTop:'10px',paddingBottom:'0px',position:'fixed'}}
                >
                    <span className="text-muted">All Rights Reserved 2021 @Shivdhan_Bhilave & @Hrishikesh Wagh IACSD Akurdi</span>
                </footer>
            </div>
        );
    }
}

export default FooterComp;