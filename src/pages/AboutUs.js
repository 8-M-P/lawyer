import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import '../style/aboutUs.sass'
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";

class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUsDiv">
                <Row className="justify-content-between">
                    <Col lg={6} className="aboutUsLeftDiv">
                        <Row>
                            <Col lg={12}>
                                <h1>Bizim hikayemiz</h1>
                                <Col lg={6}>
                                    <Row>
                                        <Col lg={8} className="aboutUsH1B"/>
                                        <Col lg={1} className="aboutUsH1B"/>
                                        <Col lg={1} className="aboutUsH1B"/>
                                        <Col lg={1} className="aboutUsH1B"/>
                                    </Row>
                                </Col>
                            </Col>
                            <Col lg={12}><p className="aboutUsP">Liquet lacus, eget fringilla vestibulum in. Senectus vel aliquam rutrum tortor. Magna ullamcorper etiam et mollis mattis. Tortor eget id arcu egestas hac posuere consectetur eleifend ultrices. Quis amet mi sed cursus. Blandit vestibulum viverra est volutpat pellentesque. Libero, convallis ac nunc posuere lacus aliquam feugiat. Nec nisi, sagittis, ac nibh sed vestibulum ac commodo donec. Velit condimentum nunc vel aliquet. Maecenas lobortis proin tristique viverra in. Integer risus elit enim, enim. Scelerisque dui nec, semper sed a, enim tellus et. Eu massa morbi tellus sem vitae scelerisque. Sed mauris lorem molestie sit.</p></Col>
                            <Col lg={4}><Link className="aboutUsButton pl-3" to="contact">iletisim icin <AiOutlineArrowRight/></Link></Col>
                        </Row>
                    </Col>
                    <Col lg={4} className="aboutUsBgLogo align-self-end" style={{ backgroundImage : 'url(logo.jpg)'}}/>
                </Row>
            </div>
        );
    }
}

export default AboutUs;
