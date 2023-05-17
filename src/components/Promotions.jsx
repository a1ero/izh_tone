import React from "react";
import {Container} from "react-bootstrap";

import image1 from '../images/promotions/image1.png'

import '../styles/Promo.css'
import '../styles/@media/promo.css'

function Promotions() {

    return(
        <Container className='promo' id='promotions'>
            <h2>Акции</h2>
            <div className='promo-content'>
                <div className='promo-content__image' id='a'>
                    <img
                        src={image1}
                        alt=""
                    />
                </div>
                <div className='promo-content__text' id='b'>
                    <p className='promo-content__text-days'>15–31 октября</p>
                    <h3>Акция «Ручки в подарок!»</h3>
                    <p>Акция при действует при заказе<br/>бронирования капота и тонирования<br/>задней полусферы автомобиля</p>
                </div>
            </div>
        </Container>
    )
}

export default Promotions;
