import React from "react";
import FormUser from "./FormUser";

import '../styles/Contacts.css'
import '../styles/@media/contacts.css'

function Contacts() {

    return(
        <div className='contacts'>
            <FormUser/>
            <div id='contacts'>
                <div className='contacts-container'>
                    <div className='contacts-container__tel'>
                        <h2>Наш телефон: +7 912 75 77 333</h2>
                    </div>
                    <div className='contacts-container__place'>
                        <p>Ижевск, ул. Холмогорова, 13а. (за парковкой ТРЦ Талисман)</p>
                    </div>
                    <div className='contacts-container__time'>
                        <p className='contacts-container__time-text'>Пн-Вс: 9:00–19:00<br/> Сб: 10:00–15:00</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacts;
