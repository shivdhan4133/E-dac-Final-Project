import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
class TourComp extends Component {
    render() {
        return (
            <div>

                <div style={{margin:'20px',borderRadius:'15px'}}>
                <Carousel fade>
                    <Carousel.Item>
                        <video autoPlay={true} loop={true}
                            style={{ width: '500px', height: '500px', position: 'relative' }}
                            className="d-block w-100"
                            src='/video/v1.mp4'
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Exciting ThemePark</h3>
                            <p>I call myself the Amusement Park. That's because I'm funny and scary at the same time.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay={true} loop={true}
                            style={{ width: '500px', height: '500px', position: 'relative' }}
                            className="d-block p-center w-100"
                            src='/video/wp1.mp4'
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Refreshing Water Park</h3>
                            <p>Beat the heat with our outstanding fresh and hygenic water parks</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay={true} loop={true}
                            style={{ width: '500px', height: '500px', position: 'relative' }}
                            className="d-block w-100"
                            src='/video/v3.mp4'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Open Air Funpark</h3>
                            <p>Besides, you don't work for a dollar - you work to create and have fun.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

            </div>
        );
    }
}

export default TourComp;
