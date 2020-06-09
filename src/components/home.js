import React from 'react';
import {Container,Row} from 'react-bootstrap';
import './home.css';

const Home = (props) => (
    
    <Container fluid>
        <Row className="justify-content-center">
            <div className="centerAlignDiv">
                <video width="100%"  preload="true" autoPlay muted loop="loop">
                    <source src={process.env.PUBLIC_URL +'/assets/videos/output.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </Row>
    </Container>
);

export default Home;