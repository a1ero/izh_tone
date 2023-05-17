import React from "react";
import {Nav} from "react-bootstrap";

import Logo from '../images/logo.svg'
import VK from '../images/networks/vkWhite.svg'
import WA from '../images/networks/WhatsAppWhite.svg'

import '../styles/Footer.css'
import '../styles/@media/footer.css'

function Footer (){

    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-container__logo'>
                    <img
                        src={Logo}
                        alt=''
                    />
                </div>
                <div className='footer-container__menu'>
                    <Nav.Link href='#about'>О салоне</Nav.Link>
                    <Nav.Link href='#services'>Услуги</Nav.Link>
                    <Nav.Link href='#promotions'>Акции</Nav.Link>
                    <Nav.Link href='#reviews'>Отзывы</Nav.Link>
                    <Nav.Link href='#contacts'>Контакты</Nav.Link>
                </div>
                <div className='footer-container__place'>
                    <h5>Ижевск, ул. Холмогорова, д. 13а.<br/>
                        (за парковкой ТРЦ Талисман)
                    </h5>
                    <p>Пн-Вс: 9:00 – 19:00<br/> Сб: 10:00 – 15:00
                    </p>
                </div>
                <div className='footer-container__contacts'>
                    <p className='footer-container__contacts-tel'><Nav.Link href='tel:+79127577333'>+7 912 75 77 333</Nav.Link></p>
                    <div className='footer-container__contacts-networks'>
                        <Nav.Link href='https://vk.com/izhtone'>
                            <img
                                style={{ marginRight: '20px'}}
                                src={VK}
                                alt=''
                                height={40}
                            />
                        </Nav.Link>
                        {/*Поменять ссылку на WA*/}
                        <Nav.Link href='https://wa.me/79127577333?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...'>
                            <img
                                style={{}}
                                src={WA}
                                alt=''
                                height={40}
                            />
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
