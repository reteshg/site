import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './featureComponents.css';

const FeatureCreateTimelapse = (props) => (
<Container fluid>
        <Row>
                <Col>
                        <div className="titleRow">{props.title}</div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div  className="txtStyle">
                        The quickest way to create a timelapse video is put all the you images in one folder and click 'Create TImelapse' button. <b>Thats It!!</b>
                        </div>
                </Col>
        </Row>        
        
</Container>
);

export default FeatureCreateTimelapse;