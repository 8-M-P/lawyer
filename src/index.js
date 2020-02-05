import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import * as contentful from 'contentful'
/*--------------  CSS & THIRD PARTY COMP.  ---*/
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import './style/index.sass'
/*--------------  COMPONENTS  ----------------*/
import Header from "./components/header"
import Footer from "./components/footer"
/*--------------  PAGES  ---------------------*/
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import Tribune from "./pages/Tribune";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import App from './pages/App'

let client = contentful.createClient({
    space: 'xy2pzptac37o',
    accessToken: 'sKBnbXydDzxKWS_YktiBwrZiSZyfYjBKHNznQXkwIcg' });


ReactDOM.render((
    <Router>
        <Container fluid>
            <Row>
                <Col lg={12} className="px-0">
                    <Header/>
                </Col>
            </Row>
            <Switch>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/articles" component={Articles}/>
                <Route exact path="/tribune" component={Tribune}/>
                <Route exact path="/our-team" component={OurTeam}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/about-us" component={AboutUs}/>
                <Route path="/" component={App}/>
            </Switch>
            <Row>
                <Footer/>
            </Row>
        </Container>
    </Router>
), document.getElementById('root'));
serviceWorker.unregister();
