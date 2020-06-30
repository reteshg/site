import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import './featureComponents.css';

function FeatureIntroCredit(props){
        return(
<Container>
        <Row>
                <Col>
                        <div className="titleRow">{props.title}</div>
                </Col>
        </Row>
        <Row>
                <Col>
                <div  className="txtStyle">
                        The Timelapse App provides the easiest way to add intro and credit slides to your video. Both the slides have default 3 seconds time frame.
                        <br/><br/>
                        </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div  className="txtStyle">
                        <b>Intro Slide</b><br/>
                                Intro slides gives you two options to customze. On you can simply add or subtitle to your video and the back ground be black. Or you may select a striking image for you video and add that as an intro slide.
                                Title and subtitle has 25 character limit. 
                        <br/><br/>
                        </div>
                </Col>
        </Row>        

        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/introslide.jpg'} fluid />
                </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/introslideimage.jpg'} fluid />
                </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div  className="txtStyle">
                        <br/><br/>
                        <b>Credit Slide</b><br/>
                                Credit slides allows you to add six text lines. Each line has 25 character limit. 
                        <br/><br/>
                        </div>
                </Col>
        </Row>        
        <Row>
                <Col>
                <div className="screenShots">
                        <Image src={process.env.PUBLIC_URL +'/assets/images/creditslide.jpg'} fluid />
                </div>
                </Col>
        </Row>        

        
</Container>
        )
}

export default FeatureIntroCredit;