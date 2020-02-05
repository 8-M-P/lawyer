import React, {Component} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import '../style/app.sass'
import {Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="homeDiv">
                <Row>
                    <Col lg={12} className="px-0" style={{zIndex: "-2"}}>
                        <section>
                            <Image src="bogaz_1920.jpg" fluid />
                        </section>
                    </Col>
                </Row>
                <Row className="justify-content-around" style={{marginTop: "-60px"} }>
                    <Col lg={3} style={{ border : "5px solid #E1CC8D",display: "flex", alignItems : "center",height: "170px",backgroundColor: "#fff"}}>
                        <Link to="/about-us" className="m-auto"><p className="boxMenuP" >hakkımızda</p></Link>
                    </Col>
                    <Col lg={3} style={{ border : "5px solid #E1CC8D",display: "flex", alignItems : "center",height: "170px",backgroundColor: "#fff"}}>
                        <Link to="/services" className="m-auto"><p className="boxMenuP" >hizmetlerimiz </p></Link>
                    </Col>
                    <Col lg={3}  style={{ border : "5px solid #E1CC8D",display: "flex", alignItems : "center",height: "170px",backgroundColor: "#fff"}}>
                        <Link to="/contact" className="m-auto"><p className="boxMenuP" >iletisim </p></Link>
                    </Col>
                </Row>
                <Row className="justify-content-around" style={{paddingTop: "100px"}}>
                    <Col lg={3} className="ml-5">
                        <Image src="test12.jpg" fluid/>
                    </Col>
                    <Col lg={5} className="mx-2 px-4">
                        <div  className="welcomeT">
                            <p>Hoşgeldiniz</p>
                            <div/>
                        </div>
                        <p className="welcomeP mt-4">Sed cursus turpis risus imperdiet fames nullam. Porttitor aliquam laoreet nec in leo neque luctus sit in. Morbi nulla neque adipiscing cras egestas suspendisse. Cras volutpat sollicitudin facilisi eget id eget. Massa ac sapien non augue sit morbi mauris orci ultrices. Ac, feugiat ac dictum nibh. Libero pulvinar massa risus, urna, lacinia.neque luctus sit in.</p>
                    </Col>
                    <Col lg={3} className="mr-5">
                        <Image src="logo.jpg" fluid/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;