import React, {Component} from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import '../style/contact.sass'
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="contactDiv">
                <Row className="justify-content-center">
                    <Col lg={4} className="contactLeftDiv">
                        <Col lg={12} className="d-flex flex-column">
                            <Row>
                                <Col lg={12} className="d-flex">
                                    <h3 className="mx-auto ">bize yazın</h3>
                                </Col>
                            </Row>
                            <Col lg={5} className="dashBorder d-flex mx-auto text-center justify-content-center">
                                <Col lg={1} className="contactH1B"/>
                                <Col lg={1} className="contactH1B"/>
                                <Col lg={8} className="contactH1B"/>
                                <Col lg={1} className="contactH1B"/>
                                <Col lg={1} className="contactH1B"/>
                            </Col>
                        </Col>
                        <Col lg={12} className="d-flex mt-5">
                            <Form className="w-100">
                                <Form.Control type="text" size="lg" placeholder="isim soyisim"/>
                                <Form.Control type="text" size="lg" placeholder="eposta"/>
                                <Form.Control type="text" size="lg" placeholder="telefon"/>
                                <Form.Control as="textarea" size="lg" rows="8" placeholder="mesaj"/>
                                <Link className="contactButton w-100 mx-auto" to="contact" style={{ backgroundImage : 'url(Contact_Button.png)'}}>
                                   <p className="mx-auto">gonder</p>
                                </Link>
                            </Form>
                        </Col>
                    </Col>
                    <Col lg={5} className="contactRightDiv">
                        <Row>
                            <Col lg={12} className="contactRightDivTop d-flex flex-column">
                                <h3 className="mx-auto">iletişim</h3>
                                <Col lg={4} className="dashBorder d-flex mx-auto text-center justify-content-center mb-3">
                                    <Col lg={1} className="contactH1B"/>
                                    <Col lg={8} className="contactH1B"/>
                                    <Col lg={1} className="contactH1B"/>
                                </Col>
                                <p className="mx-auto">TELEFON: 0216 999 88 77</p>
                                <p className="mx-auto">E-POSTA: contact@ekerceyhan.com</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className="contactRightDivBottom d-flex flex-column pt-4">
                                <h3 className="mx-auto my-1">Adres</h3>
                                <Col lg={3} className="dashBorder d-flex mx-auto text-center justify-content-center mb-3">
                                    <Col lg={1} className="contactH1B"/>
                                    <Col lg={8} className="contactH1B"/>
                                    <Col lg={1} className="contactH1B"/>
                                </Col>
                                <p> Dumlupınar Mahallesi Yumurtacı Abdi Bey Caddesi Teknikyapı Concord
                                    2. Etap C Blok Kat 19 Daire 178 Fikirtepe
                                    Kadıköy/ İSTANBUL</p>
                                <p>M4 Kadıöy Tavşantepe Metrosunda Göztepe Durağında inip 2 numaralı çıkıştan çıkıp sağa doğru 5 dakika yürüyerek ofisimize ulaşabilirsiniz.</p>
                                <p>Metrobüs ile gelindiğinde Uzunçayır durağında inildiğinde 5 dakika yürüyerek ofisimize ulaşabilirsiniz.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className="d-flex pt-2">
                                <Image src={"Contact_map.png"} className="w-100"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;
