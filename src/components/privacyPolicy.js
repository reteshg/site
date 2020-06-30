import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './featureComponents.css';

function PrivacyPolicy(props){
    return(
<Container>
    <Row>
        <Col>
            <div className="titleRow">{props.title}</div>
        </Col>
    </Row>
    <Row>
        <Col className="txtStyle">
            <p><b>Privacy Policy was update on June 11, 2020.</b></p>
        </Col>
    </Row>
    <Row>
        <Col className="txtStyle">
            <p>
                Your privacy is important to us, this is our very first version of the app and presently we do not collect any personal information in any manner.    
            </p>
        </Col>
    </Row>
    <Row>
        <Col className="txtStyle">
            <p><h3>Collection and Use of Personal Information</h3></p>
            <p>We do not collect any personal information with our app.</p>

            <p><h3>Cookies and Other Technologies</h3></p>
            <p>There are no cookies or any any other form of technology being used today to gather any personal information.</p>

            <p><h3>Third Parties</h3></p>
            <p>We not dont share any form on data or inforamtion with any of the third parties.</p>

            <p><h3>Location-Based Services</h3></p>
            <p>We use Latitude, Logitude data available in the images in form of EXIF data. This information is used to create better timelapse videos based on location and time. We do not save this information on our servers or share with any third parties.</p>

            
        </Col>
        
    </Row>

    
    
</Container>
    )
}

export default PrivacyPolicy;
