import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './featureComponents.css';

const FeatureList = (props) => (
<Container>
        <Row>
                <Col>
                        <div className="titleRow"><b>{props.title}</b></div>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                <b>Create Timelapse:</b> This is the most simple way to create any timelapse video. Simply put you images in folder and click the <b>Create Timelapse</b> button. You can add all the images clicked from multiple cameras like your phone, DSLR, GoPro etc.
                        </p>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                <b>Auto Resize Images:</b> The application can automatically resize all the images for you. The images will be resized based on the video dimensions selected from the <b>Video Settings</b> section.  
                        </p>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                <b>Image Orientation:</b> No need to correct the orientation manually, Timelapse App will correct the orientation of the images for your video. This works with 90% acurracy and is primarily dependent on the EXIF information available with each image.
                        </p>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                <b>Sort Images:</b> Based on the date and time information available for each image the application will automatically sort the images.  
                        </p>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                <b>Sync Audio:</b> Another amazing feature by the Timelapse App. Simply provide source of your audio file, the app will adjust the length of the audio based on the video lenght. It will also add cfossfading effect at the end of the audio.
                        </p>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                <b>Intro and Credits Slide:</b> You can add "Intro" and "Credits" slide to your video. 
                                <br/>Intro slide allows you to select an image of your choice and add title and subtiltle to the video. In case no image is selected, a black backgroud will be used.
                                <br/>Credit slides allows you to add credits to your video on a black background.
                                <br/>Both the Intro and Credit slides are optional and you may use any anyone of them or can choose to not add any slide to your timelapse video.
                        </p>
                </Col>
        </Row>


</Container>
);

export default FeatureList;