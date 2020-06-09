import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './footer.css';

const Footer=()=>(
            <Container>
                <Row>
                    <p style={{padding:'20px'}}></p>
                </Row>
                <Row className="divStyle">
                    <Col lg={6}>
                    © Retesh Gondal 2020, All rights reserved.
                    </Col>
                    <Col lg={6} >
                    Privacy Policy | Legal
                    </Col>
                </Row>
                
            </Container>
);

export default Footer;