import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel';


class HomeCorouselCOmp extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ margin: '20px', borderRadius: '15px' }}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                style={{ width: '500px', height: '500px', position: 'relative' }}
                                className="d-block w-100"
                                src='/images/waterpark/wp1.jpg'
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Refreshing Water Parks</h3>
                                <p>Beat the heat with our outstanding fresh and hygenic water parks</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: '500px', height: '500px', position: 'relative' }}
                                className="d-block p-center w-100"
                                src='/images/theme/tp2.jpg'
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Exciting ThemePark</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: '500px', height: '500px', position: 'relative' }}
                                className="d-block w-100"
                                src="/images/theme/tp3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <div className="jumbotron" style={{margin:'20px'}}>
                        <h1 className="display-3">Welcome to Cair Paravel</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>An amusement park is a park that features various attractions, such as rides and games, as well as other events 
                            for entertainment purposes. A theme park is a type of amusement 
                            park that bases its structures and attractions around a central 
                            theme, often featuring multiple areas with different themes. 
                            Unlike temporary and mobile funfairs and carnivals, amusement parks are 
                            stationary and built for long-lasting operation. They are more elaborate than city parks and playgrounds,
                             usually providing attractions that cater to a variety of age groups. While 
                             amusement parks often contain themed areas, theme parks place a heavier focus with more 
                             intricately-designed themes that revolve around a particular subject or group of subjects.</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg" href="https://www.tripadvisor.in/Attractions-g12400047-Activities-c52-Satara_District_Maharashtra.html" role="button">Learn more</a>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeCorouselCOmp;
