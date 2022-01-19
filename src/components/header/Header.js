import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import $ from 'jquery';
import "./Header.css";
import Logo from '../../assets/images/logo.png';


export const Header = () => {

    const showHeaderHandler = () =>{
        $('.header').toggleClass('active');
        $('.span-1').toggleClass('animation_1');
        $('.span-2').toggleClass('animation_3');
        $('.span-3').toggleClass('animation_2');
    }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div className="header__toggleNav">
                <ul><li><img src={Logo} alt="" /></li></ul>
              
              <button className="header__toggler" onClick={showHeaderHandler}>
                <span class="span-1"></span>
                <span class="span-2"></span>
                <span class="span-3"></span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header">
        <Container>
          <Row>
            <Col>
              <nav>
                <li class="website__logo"><img src={Logo} alt="" /></li>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#benefits">Benefits</a></li>
                  <li><a href="/#roadmap">Roadmap</a></li>
                  <li><a href="/#team">Team</a></li>
                  <li><a href="/#faq">FAQ</a></li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
