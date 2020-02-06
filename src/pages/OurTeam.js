import React, {Component} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import '../style/ourTeam.sass'
import {Helmet} from "react-helmet";
import Slider from "react-slick";
import {TiArrowLeft,TiArrowRight} from "react-icons/ti";

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", width: "65px",height: "65px",zIndex: 999 }}
            onClick={onClick}
        >
            <TiArrowLeft style={{ color : "#2E323B" , width: "65px" , height: "65px"}}/>
        </div>
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", width: "65px",height: "65px",zIndex: 999 }}
            onClick={onClick}
        >
            <TiArrowRight style={{ color : "#2E323B" , width: "65px" , height: "65px"}}/>
        </div>
    );
}

class OurTeam extends Component {
    render() {
        const settings = {
            dots: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: <PrevArrow/>,
            nextArrow: <NextArrow/>
        };
        return (
            <div className="ourTeamDiv">
                <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <title>Plca holder</title>
                </Helmet>
                <Row className="justify-content-center">
                    <Col lg={2} className="mx-auto">
                        <h1 className="ourTeamH1 flex-column">ekibimiz</h1>
                    </Col>
                    <Col lg={12} className="mx-auto">
                        <Col lg={8} className="mx-auto">
                            <Slider {...settings}>
                            <div className="col-lg-11 TEST">
                                <Card>
                                    <Card.Img variant="top" src="team_avatar.png" />
                                    <Card.Body style={{backgroundImage: "url(Team_Tag.png)"}}>
                                        <Card.Title className="justify-content-center">Harold Nguyen</Card.Title>
                                        <Card.Subtitle className="justify-content-center">KURUCU ORTAK</Card.Subtitle >
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-11">
                                <Card>
                                    <Card.Img variant="top" src="team_avatar.png" />
                                    <Card.Body style={{backgroundImage: "url(Team_Tag.png)"}}>
                                        <Card.Title className="justify-content-center">Harold Nguyen</Card.Title>
                                        <Card.Subtitle className="justify-content-center">KURUCU ORTAK</Card.Subtitle >
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-11">
                                <Card>
                                    <Card.Img variant="top" src="team_avatar.png" />
                                    <Card.Body style={{backgroundImage: "url(Team_Tag.png)"}}>
                                        <Card.Title className="justify-content-center">Harold Nguyen</Card.Title>
                                        <Card.Subtitle className="justify-content-center">KURUCU ORTAK</Card.Subtitle >
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-11">
                                <Card>
                                    <Card.Img variant="top" src="team_avatar.png" />
                                    <Card.Body style={{backgroundImage: "url(Team_Tag.png)"}}>
                                        <Card.Title className="justify-content-center">Harold Nguyen</Card.Title>
                                        <Card.Subtitle className="justify-content-center">KURUCU ORTAK</Card.Subtitle >
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OurTeam;
