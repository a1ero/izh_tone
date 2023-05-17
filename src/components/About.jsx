import React from "react";
import {Container, Nav} from "react-bootstrap";
import {YMaps, Map, ZoomControl, Placemark} from '@pbe/react-yandex-maps';

import '../styles/About.css'
import '../styles/@media/about.css'

import VK from '../images/networks/VK.svg'
import WA from '../images/networks/WhatsApp.svg'

import i1 from '../images/items/image1.png'
import i2 from '../images/items/image2.png'
import i3 from '../images/items/image3.png'
import i4 from '../images/items/image4.png'
import i5 from '../images/items/image5.png'
import i6 from '../images/items/image6.png'
import i7 from '../images/items/image7.png'
import i8 from '../images/items/image8.png'
function About(){

    return(
        <div className='about' id='about'>
            <h2>О салоне</h2>
            <div className='about-container'>
                <Container className='about-container__content'>
                    <div className='about-container__content-map'>
                        <YMaps>
                            <Map className="about-container__content-map__place"
                                 defaultState={{ center: [56.87796029702443,53.2041674602966], zoom: 16.5 }}>
                                <ZoomControl options={{ float: "right" }}/>
                                <Placemark geometry={[56.87840086633307,53.2041674602966]} />
                            </Map>
                        </YMaps>
                    </div>
                    <div className='about-container__content-place'>
                        <h3>Ижевск, ул. Холмогорова, д. 13а.<br/>
                            (за парковкой ТРЦ Талисман)
                        </h3>
                        <h4>Пн-Вс: 9.00 – 19.00<br/> Сб: 10:00 – 15:00<br/>
                        </h4>
                        <h5>+7 912 75 77 333</h5>
                        <div className='about-container__content-place__networks'>
                            <Nav.Link href='https://vk.com/izhtone'>
                                <img
                                    src={VK}
                                    alt='Vkontakte'
                                />
                            </Nav.Link>
                            {/*Заменить ссылку на whatsapp*/}
                            <Nav.Link href='https://wa.me/79127577333?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...'>
                                <img
                                    src={WA}
                                    alt='WhatsApp'
                                />
                            </Nav.Link>
                        </div>
                    </div>
                </Container>
                <Container className="about-container__text">
                    <p>
                        Здравствуйте наши любимые настоящие и будущие клиенты! Здесь я кратко расскажу вам о самом
                        Главном - о Качестве нашей работы. Мы стремимся делать все максимально хорошо и постоянно
                        учимся работать лучше. Учимся, как лучше организовывать рабочий процесс, чтобы максимально
                        соответствовать вашим запросам. Мы стремимся к тому, чтобы вам было максимально комфортно и
                        удобно работать с нами. <br/><br/>
                        Мы делаем полный спектр работ со стеклами автомобиля, пленками и автохимией. Вы всегда
                        получаете гарантированно качественную работу от наших профессионалов, и всегда можете
                        быть уверенными в нашей работе. Вы получите полную гарантию на все виды работ и материалы.
                        В комплексных работах участвуют несколько специалистов, каждый из которых отвечает за свою
                        часть работы.<br/><br/>
                        Специалисты узкого профиля регулярно повышают качество своей работы. Обслуживание автомобиля о
                        рганизовано согласно требованиям заводов-изготовителей материалов. Оборудование нашего салона
                        соответствует всем современным требованиям. Мы являемся Официальным представителем Боровского
                        Стекольного Завода (AGC).
                    </p>
                </Container>
                <div className="about-container__image">
                    <div className="about-container__image-items">
                        <img src={i1} alt=''/>
                        <img src={i2} alt=''/>
                        <img src={i3} alt=''/>
                        <img src={i4} alt=''/>
                        <img src={i5} alt=''/>
                        <img src={i6} alt=''/>
                        <img src={i7} alt=''/>
                        <img src={i8} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
