import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import '../style/services.sass'
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";

class Services extends Component {
    render() {
        return (
            <div className="servicesDiv">
                <Row className="justify-content-between">
                    <Col lg={6} className="servicesLeftDiv">
                        <Row>
                            <Col lg={12}>
                                <h1>Hedefimiz</h1>
                                <Col lg={6}>
                                    <Row>
                                        <Col lg={7} className="servicesH1B"/>
                                        <Col lg={1} className="servicesH1B"/>
                                        <Col lg={1} className="servicesH1B"/>
                                        <Col lg={1} className="servicesH1B"/>
                                    </Row>
                                </Col>
                            </Col>
                            <Col lg={12}><p className="servicesP">
                                <ul>
                                    <li>Faucibus placerat enim elementum non interdum.</li>
                                    <li>Tempor sit in sed. Turpis sed enim ac sit morbi.</li>
                                    <li>Sit orci id ut elementum faucibus in leo amet.</li>
                                    <li>Enim cras cras diam lacus, adipiscing sed. </li>
                                    <li>Nec sapien ut sed rutrum dolor quis tortor lectus. </li>
                                    <li>Gravida vel pretium sed leo interdum turpis sem est. </li>
                                    <li>Vel duis varius dictum arcu congue. Nibh mauris id non. </li>
                                    <li>Sed tempus diam velit elementum, pulvinar. </li>
                                </ul>
                            </p></Col>
                            <Col lg={4}><Link className="servicesButton pl-3" to="contact">iletisim icin <AiOutlineArrowRight/></Link></Col>
                        </Row>
                    </Col>
                    <Col lg={4} className="servicesBgLogo align-self-end" style={{ backgroundImage : 'url(logo.jpg)'}}/>
                </Row>
            </div>
        );
    }
}

export default Services;
