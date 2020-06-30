import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './featureComponents.css';

function FeatureList(props){
        return(
                <Container>
        <Row>
                <Col>
                        <div className="titleRow"><b>{props.title}</b></div>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                There are hunders or thousands of pictures clicked today by all of us. For some creative minds the pictures are clicked from multiple cameras, it can be a mobile phone or a DSLR or even a GoPro. All of these pictures when come together can tell a story, a story that can be lived or experienced time and again in just a few seconds!                                
                        </p>
                        <p>
                                The Timelapse App enables the most simple way to use your pictures, add music, add title and credit people who made that memory happen and create an amazing timelapse video in just a couple of minutes!
                        </p>
                        <p>
                                Imagine to build a story of your all pictures you might have clicked of your child from his birth till today! Or, how about re-living the your travel experince and giving your pictures some motion.
                        </p>
                        <p>
                                The Timelapse App does some magical things for you and create a timlapse video in minutes with the following features:
                        </p>

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
                                <b>Sync Audio:</b> Another amazing feature by the Timelapse App. Simply provide source of your audio file, the app will adjust the length of the audio based on the video length. It will also add crossfading effect at the end of the audio.
                        </p>
                </Col>
        </Row>
        <Row>
                <Col>
                        <p>
                                <b>Intro and Credits Slide:</b> You can add "Intro" and "Credits" slide to your video. 
                                <br/><br/>
                                <p className="leftIndentationP">Intro slide allows you to select an image of your choice and add title and subtiltle to the video. In case no image is selected, a black backgroud will be used.</p>
                                <p className="leftIndentationP">Credit slides allows you to add credits to your video on a black background.</p>
                                <p className="leftIndentationP">Both the Intro and Credit slides are optional and you may use any anyone of them or can choose to not add any slide to your timelapse video.</p>
                        </p>
                </Col>
        </Row>


</Container>
        )
}
//const FeatureList = (props) => (
//);

export default FeatureList;