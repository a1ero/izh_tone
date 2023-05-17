import React, {useRef, useState} from 'react';
import {Form} from "react-bootstrap";
import {TelephoneOutbound} from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";

import '../styles/CallBack.css';
import '../styles/@media/callback.css'

const WidgetCallBack = () => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    const handleButtonClick = () => {
        setIsWidgetOpen(!isWidgetOpen);
    };

    const form = useRef();
    const [buttonText, setButtonText] = useState('Отправить');

    const sendEmail = (e)=> {
        e.preventDefault();
        setButtonText('Отправка...')
        emailjs.sendForm('service_iubi096', 'template_tto26af', form.current, 'jRz31_8wzsc0Blyvy')
            .then((result) => {
                    console.log(result.text);
                    setButtonText('Успех!')
                    setTimeout(function(){
                        window.location.reload(1);
                    }, 3000);
                },
                (error) => {
                    console.log(error.text);
                    setButtonText('Ошибка')
                    alert('Упс, что-то пошло не так, попробуйте снова.')
                });
    };

    return (
        <>
            <button className="button" onClick={handleButtonClick}>
                <TelephoneOutbound className='button__icon'/>
            </button>
            {isWidgetOpen && (
                <div className="callback-container">
                    <h3 className="callback-container__title">Оставьте заявку на обратный звонок</h3>
                    <Form className="callback-container__form" ref={form} onSubmit={sendEmail}>
                        <Form.Group required controlId="formBasicName" className='form-container__group'>
                            <Form.Control
                                name="form_name"
                                required
                                className='form-container__group-control'
                                type="text"
                                placeholder="Ваше имя" />
                        </Form.Group>
                        <Form.Group required controlId="formBasicPhone" className='form-container__group'>
                            <Form.Control
                                name="form_phone"
                                required
                                className='form-container__group-control'
                                type="text"
                                placeholder="Ваш номер телефона" />
                        </Form.Group>
                        <button className="callback-container__form-submit">
                            {buttonText}
                        </button>
                    </Form>
                </div>
            )}
        </>
    );
};

export default WidgetCallBack;
