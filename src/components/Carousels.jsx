import React from "react";
import {Carousel, Button, Nav} from "react-bootstrap";

import '../styles/Carousel.css'
import '../styles/@media/carousel.css'

import FSlide from '../images/slides/FSlide.png'
import SSlide from '../images/slides/SSlide.png'
import TSlide from '../images/slides/TSlide.png'
import FoSlide from '../images/slides/FoSlide.png'
import FifSlide from '../images/slides/FifSlide.png'

import { ReactComponent as PrevIcon } from '../images/slides/slideIcons/last.svg';
import { ReactComponent as NextIcon } from '../images/slides/slideIcons/next.svg';
function Carousels() {
    return(
        <Carousel
            prevIcon={<PrevIcon className='prev'/>}
            nextIcon={<NextIcon className='next'/>}
            indicators={false}
            className='carousel'>
            <Carousel.Item className="carousel-item">
                <img
                    src={FSlide}
                    alt='First Slide'
                />
                <Carousel.Caption className='carousel-item__content'>
                    <h2>Центр дополнительных<br/> автоуслуг ИжТон</h2>
                    <p>Тонирование, бронирование и замена стекол автомобилей</p>
                    <Nav.Link href='#form'>
                        <Button
                            className='carousel-item__content-btn'
                            variant="light">
                            <span className='carousel-item__content-btn__text'>Онлайн запись</span>
                        </Button>
                    </Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    src={SSlide}
                    alt='Second Slide'
                />
                <Carousel.Caption className='carousel-item__content'>
                    <h2>Полировка кузова и фар,<br/> химчистка салона автомобиля</h2>
                    <p>Данный комплекс услуг значительно освежает автомобиль с пробегом.</p>
                    <Nav.Link href='#form'>
                        <Button
                            className='carousel-item__content-btn'
                            variant="light">
                            <span className='carousel-item__content-btn__text'>Онлайн запись</span>
                        </Button>
                    </Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    src={TSlide}
                    alt='Third Slide'
                />
                <Carousel.Caption className='carousel-item__content'>
                    <h2>Тонировка стекол<br/> автомобилей и зданий</h2>
                    <p>Защищает от УФ лучей, препятствует выгоранию от солнечных лучей.</p>
                    <Nav.Link href='#form'>
                        <Button
                            className='carousel-item__content-btn'
                            variant="light">
                            <span className='carousel-item__content-btn__text'>Онлайн запись</span>
                        </Button>
                    </Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    src={FoSlide}
                    alt='Fourth Slide'
                />
                <Carousel.Caption className='carousel-item__content'>
                    <h2>Ремонт, замена<br/> автостекол</h2>
                    <p>Лечим сколы, трещины или меняем стекло полностью!</p>
                    <Nav.Link href='#form'>
                        <Button
                            className='carousel-item__content-btn'
                            variant="light">
                            <span className='carousel-item__content-btn__text'>Онлайн запись</span>
                        </Button>
                    </Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    src={FifSlide}
                    alt='Fifth Slide'
                />
                <Carousel.Caption className='carousel-item__content'>
                    <h2>Бронирование кузова, стекол, фар<br/> автомобилей антигравийной пленкой</h2>
                    <p>Соблюдаем все необходимые технологические условия обклеивания</p>
                    <Nav.Link href='#form'>
                        <Button
                            className='carousel-item__content-btn'
                            variant="light">
                            <span className='carousel-item__content-btn__text'>Онлайн запись</span>
                        </Button>
                    </Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels;
