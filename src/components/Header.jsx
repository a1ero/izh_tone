import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Navbar, Nav, Dropdown} from "react-bootstrap";

import Logo from '../images/logo.svg'
import '../styles/Header.css'
import '../styles/@media/header.css'
import {List} from "react-bootstrap-icons";
function Header (){

        return (
            <Router>
                <Navbar sticky="top" expand="xxl" className='header' bg='black' >
                    <div className='header-content'>
                        <div className='header-content__logo'>
                            <Navbar.Brand href='/'>
                                <img
                                    src={Logo}
                                    height="32"
                                    className="d-inline-block alight-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                        </div>
                        <div className='header-content__links'>
                            <Nav.Link href='#about' className="anchor">О салоне</Nav.Link>
                            <Nav.Link href='#services' className="anchor">Услуги</Nav.Link>
                            <Nav.Link href='#promotions' className="anchor">Акции</Nav.Link>
                            <Nav.Link href='#reviews' className="anchor">Отзывы</Nav.Link>
                            <Nav.Link href='#contacts' className="anchor">Контакты</Nav.Link>
                        </div>
                        <div className='header-content__tel'>
                            <Nav.Link href='tel:+79127577333'>+7 912 75 77 333</Nav.Link>
                        </div>
                        <div className='header-content__regime'>
                            <p>Пн-Вс: 9:00 – 19:00 <br/>
                                Сб: 10:00 – 15:00
                            </p>
                        </div>
                        <Dropdown drop='start' id='drop'>
                            <Dropdown.Toggle variant='dark' id="dropdown-basic"><List/></Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1"><Nav.Link href='#about' className="anchor">О салоне</Nav.Link></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><Nav.Link href='#services' className="anchor">Услуги</Nav.Link></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><Nav.Link href='#promotions' className="anchor">Акции</Nav.Link></Dropdown.Item>
                                    <Dropdown.Item href="#/action-4"><Nav.Link href='#reviews' className="anchor">Отзывы</Nav.Link></Dropdown.Item>
                                    <Dropdown.Item href="#/action-5"><Nav.Link href='#contacts' className="anchor">Контакты</Nav.Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar>
            </Router>
        )
}

export default Header;
