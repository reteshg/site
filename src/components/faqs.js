import React from 'react';
import {Container,Row,Col,Accordion,Card,Button} from 'react-bootstrap';

const Faqs = (props) => (
    <Container>
        <Row>
            <Col>
                <div className="titleRow">{props.title}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Do I need to pay to use The Timelapse App?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>It's free to use.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                I have selected my images folder but I am getting the error "No images found in the selected folder".
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>The app supports these image formats .JPG .CR2 .RAF .NEF. This can also happen at times when the images folder is on an external hard drive.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                I have selected my audio file but the video is without any audio?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Please make sure the the ausio format is .MP3 and the ausio file should be at least 5 seconds long.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                How can I remove the "The Timelapse App" watermark?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>In this version there is no option to remove the watermark.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        </Row>
</Container>
);

export default Faqs;