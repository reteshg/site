import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer=()=>(
            <Container>
                <Row>
                    <p style={{padding:'20px'}}></p>
                </Row>
                <Row className="divStyle">
                    <Col lg={6}>
                    © The Timelapse App {(new Date().getFullYear())}, All rights reserved.
                    </Col>
                    <Col lg={6} >
                    <Link to="/privacyPolicy" >Privacy Policy</Link>
                    </Col>
                </Row>
                
            </Container>
);

export default Footer;