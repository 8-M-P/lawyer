import React from 'react';
import {Image, Nav, Navbar} from "react-bootstrap";
import '../style/header.sass'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="headerDiv">
            <Navbar>
                <Nav className="col-lg-5 justify-content-around navbar-buttons">
                    <NavLink to="/about-us" activeClassName="disabled-pointer">hakkımızda</NavLink>
                    <NavLink to="/services" activeClassName="disabled-pointer">hizmetler</NavLink>
                    <NavLink to="/our-team" activeClassName="disabled-pointer">ekibimiz</NavLink>
                </Nav>
                <div className="logo col-lg-2 mx-auto">
                    <NavLink to="/" className="mx-0 navbar-brand"><Image src="Header_logo.png" /></NavLink>
                </div>
                <Nav className="col-lg-4 justify-content-around navbar-buttons">
                    <NavLink to="/tribune" activeClassName="disabled-pointer">kursu</NavLink>
                    <NavLink to="/articles" activeClassName="disabled-pointer">makaleler</NavLink>
                    <NavLink to="/contact" activeClassName="disabled-pointer">iletisim</NavLink>
                </Nav>
                <Nav className="col-lg-1 pl-5 flex-column">
                    <NavLink to="/"><Image src="001-uk.png" style={{width:"32px",height:"32px"}}/></NavLink>
                    <NavLink to="/"><Image src="002-turkey.png" style={{width:"32px",height:"32px"}}/></NavLink>
                </Nav>
            </Navbar>
            <div className="borderBottom"/>
        </div>
    );
};

export default Header;
