import FooterWrapper from "./FooterWrapper";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from "react";
import Language from "../../UseContext/Language";
import React from 'react';
const Footer = () => {


    const { language, setLanguage } = React.useContext(Language);
    const [show, setShow] = useState(false);

    let lang = language;

    // function googleTranslateElementInit() {
    //     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    // }

    return (<FooterWrapper >
        <div className="container pt-4 pb-5">
            <div className="row pt-3 pb-5">
                <div className="col-lg-2 text-center col-md-6 mb-4">
                    <p className="mb-4">Ⓒ 2021 Express 24</p>
                    <p className="d-flex gap-4 align-items-center justify-content-evenly px-4">
                        <FacebookIcon sx={{ fontSize: '24px', }} />
                        <InstagramIcon sx={{ fontSize: '24px', }} />
                        <TelegramIcon sx={{ fontSize: '24px', }} />
                    </p>
                </div>
                <div className="col-lg-5 col-md-4 text-center">
                    <ul className="d-flex align-items-center justify-content-start ps-md-5">
                        <li className="mb-4">О нас</li>
                        <li className="mb-4">Пользовательское соглашение</li>
                        <li className="mb-4">Контакты</li>
                        <li className="mb-4">Вопросы и ответы</li>
                        <li className="mb-4">Заявка на сотрудничество</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="dropDown">
                        <div onClick={() => { setShow(!show); console.log(show); }} className="btn  bg-white rounded w-100">
                            {lang}
                        </div>
                        {/* <div id="google_translate_element"></div> */}
                        {show && <div className="btns bg-white d-flex flex-column rounded px-1 w-100">
                            <button onClick={() => { setLanguage("Русский"); setShow(!show); }} className="btn">Русский</button>
                            <button onClick={() => { setLanguage("English"); setShow(!show); }} className="btn">English</button>
                            <button onClick={() => { setLanguage("O'zbekcha"); setShow(!show); }} className="btn">O'zbekcha</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </FooterWrapper>)
}

export default Footer;