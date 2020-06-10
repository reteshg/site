import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
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
                        <br/><br/>
                        </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/homeScreen.jpg'} fluid />
                </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div className="txtStyle">
                        Once the images folder is selected the <b>Create Timelapse</b> button will get enabled. And all you ya to then do is press it!
                        <br/><br/>
                </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/homeScreenFolderSelected.jpg'} fluid />
                </div>
                </Col>
        </Row>        
        
</Container>
);

export default FeatureCreateTimelapse;