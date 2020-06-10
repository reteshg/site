import React from 'react';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';
import './featureComponents.css';

const FeatureVideoSettings = (props) => (
<Container>
        <Row>
                <Col>
                        <div className="titleRow">{props.title}</div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div  className="txtStyle">
                        There are multiple video settings that can be applied to the timelapse video. Let's look at all the options available.
                        <br/><br/>
                        </div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div  className="txtStyle">
                        <b>Video Size</b>
                        <p>
                                There are three different video sizes available in the application, 1080x720 (720p) SD is the default option.
                                <ListGroup>
                                        <ListGroup.Item>1920x1080 (1080P) HD</ListGroup.Item>
                                        <ListGroup.Item><b>1080x720 (720p) SD</b></ListGroup.Item>
                                        <ListGroup.Item>854x480 (480p)</ListGroup.Item>
                                </ListGroup>
                        </p>
                        
                        </div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/videoSettingsVideoSize.jpg'} fluid />
                </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div  className="txtStyle">
                        <br/>
                        <b>Frame Rate</b>
                        <p>
                                Frame rate determines the how many images will be processed in "one second", in simple terms this is a way to manage speed of the timelapse video. 
                                For examples if you have hundreds of images and the frame rate is 24, then every second 24 images will be processed in the timelapse video. 
                                The default value is 8 frames per second.
                        </p>
                        
                        </div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/videoSettingsFrameRate.jpg'} fluid />
                </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div  className="txtStyle">
                        <br/>
                        <b>Aspect Ratio</b>
                        <p>
                                Aspect Ratio will manage the resizing of images. Threre are two options available for this <b>As Shot</b> and <b>Edge to Edge</b> 
                        </p>
                        <p>
                                <b>As Shot:</b> This option will resize the images to fit within the selected video size, while resizing with this option may add black edges to fit the video size. Let's understand this with an example.
                        </p>
                        <p>
                                If your video size is 1080x720 and your image size is 3264x2448. As both of these aspect ratios are slighly diffrent and images cannot resized to match the video size. In such cases black edges will be added to the resized images with center alignment.
                        </p>
                        </div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/videoSettingsAspectRatio.jpg'} fluid />
                </div>
                </Col>
        </Row>        
<Row>
        <Col>
        <br/>
        <p>
                                <b>Edge to Edge:</b> This option will resize the images and no black edges will be added. However, in order to do so the images will get cropped from the bottom. Please refer to image below for better understanding.
                        </p>
                        <p>
                                If your video size is 1080x720 and your image size is 3264x2448. In order to match the video size the image will be cropped from the bottom.
                        </p>

        </Col>
</Row>
<Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/videoSettingsEdgeToEdge.jpg'} fluid />
                </div>
                </Col>
        </Row>        

</Container>
);

export default FeatureVideoSettings;