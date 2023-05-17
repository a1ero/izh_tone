import React from "react";
import {Accordion, Container, } from "react-bootstrap";

import down1 from '../images/accordeon/down1.png'
import down2 from '../images/accordeon/down2.png'
import down3 from '../images/accordeon/down3.png'
import down4 from '../images/accordeon/down4.png'
import down5 from '../images/accordeon/down5.png'

import '../styles/Services.css'
import  '../styles/@media/services.css'

function Services() {

    return(
        <Container className='service' id='services'>
            <div className='service-title'>
                <h2>Услуги</h2>
                <h3>Наш салон оснащен современным оборудованием для работы с пленкой и стеклами автомобилей всех марок</h3>
            </div>
            <div className='accordion'>
                <Accordion
                    flush
                    alwaysOpen
                    style={{borderBottom: '1px solid #00000020'}}
                >
                    <Accordion.Item eventKey="0" className='accordion-services'>
                        <Accordion.Header className='accordion-services__title'>
                            <h4>БРОНИРОВАНИЕ КУЗОВА, СТЕКОЛ И ФАР</h4>
                        </Accordion.Header>
                        <Accordion.Body className='accordion-services__body'>
                            <div className='accordion-services__body-images'>
                                <img
                                    src={down1}
                                    alt=''
                                />
                            </div>
                            <div className='accordion-services__body-list'>
                                <ul>
                                    <li>Бронирование пространства под ручками дверей — от 100 руб.</li>
                                    <li>Бронирование ПТФ — от 300 руб.</li>
                                    <li>Бронирование фар — от 1800 руб.</li>
                                    <li>Бронирование порогов — от 1500 руб.</li>
                                    <li>Бронирование капота (полоса 30 см) — от 3000 руб.</li>
                                </ul>
                                <p>Точный расчет стоимости бронирования производится специалистом после осмотра автомобиля</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item >
                    <Accordion.Item eventKey="1" className='accordion-services'>
                        <Accordion.Header className='accordion-services__title'>
                            <h4>ТОНИРОВКА СТЕКОЛ АВТОМОБИЛЕЙ И ЗДАНИЙ, ТОНИРОВКА ВИТРАЖЕЙ</h4>
                        </Accordion.Header>
                        <Accordion.Body className='accordion-services__body'>
                            <div className='accordion-services__body-images'>
                                <img
                                    src={down2}
                                    alt=''
                                />
                            </div>
                            <div className='accordion-services__body-list'>
                                <ul>
                                    <li>Тонировка переднихдверей — от 1000 руб.</li>
                                    <li>Тонировка задней полусферы — от 2200 руб.</li>
                                    <li>Полоса на лобовое стекло — от 300 руб.</li>
                                </ul>
                                <p>Наши мастера проходят регулярные курсы повышения квалификации
                                    Наша компания использует пленки 3M, SunTek, Llumar
                                    Гарантии на все выполненные работы
                                    Минимальные сроки выполнения работ
                                    Мы предоставляем скидки постоянным клиентам!</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='accordion-services'>
                        <Accordion.Header className='accordion-services__title'>
                            <h4>РЕМОНТ, ЗАМЕНА СТЕКОЛ</h4>
                        </Accordion.Header>
                        <Accordion.Body className='accordion-services__body'>
                            <div className='accordion-services__body-images'>
                                <img
                                    style={{borderRadius: '10px'}}
                                    src={down3}
                                    alt=''
                                />
                            </div>
                            <div className='accordion-services__body-list'>
                                <ul>
                                    <li>Замена лобового стекла — от 1800 руб.</li>
                                    <li>Замена бокового стекла — от 700 руб.</li>
                                    <li>Замена заднего стекла — от 1400 руб.</li>
                                    <li>Ремонт скола — от 300 руб.</li>
                                    <li>Остановка трещины — от 200 руб.</li>
                                    <li>Ремонт трещины — от 30 руб/см.</li>
                                </ul>
                                <p>Наши мастера проходят регулярные курсы повышения квалификации
                                    Наша компания использует стекла производителей, официально рекомендованные автодилерами.
                                    Гарантии на все выполненные работы
                                    Минимальные сроки выполнения работ
                                    Мы являемся Официальным представителем Боровского Стекольного Завода (AGC)</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='accordion-services'>
                        <Accordion.Header className='accordion-services__title'>
                            <h4>ПОЛИРОВКА КУЗОВА И ФАР, ХИМЧИСТКА САЛОНА</h4>
                        </Accordion.Header>
                        <Accordion.Body className='accordion-services__body'>
                            <div className='accordion-services__body-images'>
                                <img
                                    src={down4}
                                    alt=''
                                />
                            </div>
                            <div className='accordion-services__body-list'>
                                <ul>
                                    <li>Химчистка обшивки одной двери — от 400 руб.</li>
                                    <li>Химчистка одного седенья — от 400 руб.</li>
                                    <li>Химчистка потолка салона — от 1500 руб.</li>
                                    <li>Полная химчистка салона — от 4000 руб.</li>
                                    <li>Полировка фар — от 500 руб/пара.</li>
                                    <li>Полировка кузова — от 500 руб/элемент.</li>
                                    <li>Полная полировка кузова — от 5000 руб.</li>
                                </ul>
                                <p>Наши мастера проходят регулярные курсы повышения квалификации
                                    Наша компания использует только качественную автохимию
                                    Гарантии на все выполненные работы
                                    Минимальные сроки выполнения работ
                                    Мы предоставляем скидки постоянным клиентам!</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='accordion-services'>
                        <Accordion.Header className='accordion-services__title'>
                            <h4>ШУМОИЗОЛЯЦИЯ</h4>
                        </Accordion.Header>
                        <Accordion.Body className='accordion-services__body'>
                            <div className='accordion-services__body-images'>
                                <img
                                    src={down5}
                                    alt=''
                                />
                            </div>
                            <div className='accordion-services__body-list'>
                                <ul>
                                    <li>Шумоизоляция двери — от 1700 руб.</li>
                                    <li>Шумоизоляция багажника — от 3000 руб.</li>
                                    <li>Шумоизоляция пола — от 5500 руб.</li>
                                    <li>Шумоизоляция потолка — от 4500 руб.</li>
                                    <li>Полная шумоизоляция — от 40000 руб.</li>
                                </ul>
                                <p>Наши мастера проходят регулярные курсы повышения квалификации
                                    Наша компания использует только качественные материалы.
                                    Гарантии на все выполненные работы
                                    Минимальные сроки выполнения работ
                                    Мы предоставляем скидки постоянным клиентам!</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    )
}

export default Services;
