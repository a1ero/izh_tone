import React from "react";

import '../styles/Reviews.css'
import  '../styles/@media/reviews.css'

function Reviews(){

    return(
        <div className='reviews' id='reviews'>
            <div className='reviews-title'>
                <h3>Отзывы клиентов о салоне</h3>
            </div>
            <div className='reviews-container'>
                <div className='reviews-container__content1'>
                    <h4>Максим</h4>
                    <p className='reviews-container__content-car'>BMW 530</p>
                    <p>В компании ИжТон тонируюсь не первый раз, и не
                        первый год. Постоянно тонируют качественно и
                        недорого. Используют все виды пленок. Также менял
                        здесь лобовое, поменяли качественно и быстро.
                        В общем, отличные ребята и компания.</p>
               </div>
                <div className='reviews-container__content2'>
                    <h4>Михаил</h4>
                    <p className='reviews-container__content-car'>KIA Rio</p>
                    <p>Не первый раз тонирую свой автомобиль в компании
                       "Ижтон". Каждый раз новый, конечно же. Качество всегда
                        отменное, дают гарантию всегда. Один раз менял
                        лобовое перед ТО. Заодно атермальной плёнкой его
                        обклеил. Хамелеон которая. Вообще супер получилось! В
                        тени почти прозрачное стекло, а на солнце становится
                        сине-голубым. Доволен, как слон. Так что обращайтесь.
                        Ребята все сделают качественно и аккуратно. Смело рекомендую.</p>
               </div>
                <div className='reviews-container__content3'>
                    <h4>Дмитрий</h4>
                    <p className='reviews-container__content-car'></p>
                    <p>Благодарственное письмо. Уважаемый Голубев Юрий
                        Юрьевич директор "Ижтон". Пользуюсь услугами вашей
                        компании по тонировке и вклейке стекол с 2008 г.
                        Очень доволен компетентным и профессиональным
                        персоналом вашей фирмы. Выражаю благодарность
                        коллективу за оказание услуг отличного качества.</p>
               </div>
           </div>
        </div>
    )
}

export default Reviews;
