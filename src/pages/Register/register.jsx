import React from 'react';
import {AiOutlineClose} from "react-icons/ai"
import {FaFacebook,FaOdnoklassnikiSquare} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import {SlSocialVkontakte} from "react-icons/sl"
import {BsTelephoneFill,BsShieldLockFill} from "react-icons/bs"
import {LiaEyeSolid,LiaEyeSlash } from "react-icons/lia"

const Register = () => {
    return (
        <div className="container">
            <div className="register">
                <span className="register__out"><AiOutlineClose/></span>
                <div className="register__list">
                    <p className="register__list-menu">Войти</p>
                    <p className="register__list-menu">Регистрация</p>
                </div>
                <div className="register__meta">
                    <span className="register__meta-icons"><FaFacebook size="45px" color="#3553A4"/></span>
                    <span className="register__meta-icons"><FcGoogle size="45px"/></span>
                    <span className="register__meta-icons"><SlSocialVkontakte size="45px" color="436EAB"/></span>
                    <span className="register__meta-icons"><FaOdnoklassnikiSquare size="45px" color="ED812B"/></span>
                </div>
                <label className="register__lnput">
                    <input type="text" className="register__input-info"/>
                    <span className="register__input-logo1"><BsTelephoneFill/></span>
                    <input placeholder="Пароль" type="password" className="register__input-info"/>
                    <span className="register__input-logo2"><BsShieldLockFill/></span>
                    <div className="register__input-accept">
                        <input type="checkbox" className="register__input-check"/>
                        <p className="register__input-text">Регистрируясь, вы принимаете Пользовательское соглашение, <br/>
                            Конфиденциальность и Договор-оферта на lalafo.kg</p>
                    </div>
                    <div className="register__input-btn">
                        <button className="register__btn button">Регистрация</button>
                    </div>
                </label>

            </div>

        </div>
    );
};

export default Register;