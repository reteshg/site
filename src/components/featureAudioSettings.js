import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import './featureComponents.css';

const FeatureAudioSettings = (props) => (
<Container>
        <Row>
                <Col>
                        <div className="titleRow">{props.title}</div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div  className="txtStyle">
                        Another magical feature of the Timelpase App is how easily the audio gets synced with the video length. 
                        All you have to do is select your audio (MP3) files and the app will adjust and sync the audio with the video length. 
                        <br/><br/>
                        </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/audioSettings.jpg'} fluid />
                </div>
                </Col>
        </Row>        
              
        
</Container>
);

export default FeatureAudioSettings;