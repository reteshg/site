import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './home.css';


function Home(props){
    return(
<Container fluid>
        <Row className="justify-content-center">
            <Col sm={1} lg={3}></Col>
            <Col sm={10} lg={6}>
            <div className="centerAlignDiv">
            <h1 className="title">The most simple way to make Timelapse videos</h1>
            <h5 className="download">Download (MacOS)</h5>
                <video width="100%"  preload="true" autoPlay muted loop="loop" playsInline>
                    <source src={process.env.PUBLIC_URL +'/assets/videos/output.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            </Col>
            <Col sm={1} lg={3}></Col>
        </Row>
        
        
    </Container>
    )
}
    

export default Home;