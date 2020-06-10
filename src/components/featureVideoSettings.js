import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './featureComponents.css';

const FeatureVideoSettings = (props) => (
<Container fluid>
        <Row>
                <Col>
                        <div className="titleRow">{props.title}</div>
                </Col>
        </Row>
        
</Container>
);

export default FeatureVideoSettings;