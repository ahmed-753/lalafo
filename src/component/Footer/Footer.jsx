import React from 'react';
import  {BiLogoFacebook} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div  className='footer__box'>
                    <div>
                        <h1>LALAFO</h1>
                        <h3> 2023 Все правы защищены</h3>
                    </div>
                    <div>
                        <span className='footer__text'>Websites</span>
                        <span className='footer__text'>Карта сайта</span>
                        <div>
                            <BiLogoFacebook/>
                            <span className='footer__text'>Facebook</span>
                        </div>
                        <div>
                            <BsTwitter/>
                            <span className='footer__text'>Twitter</span>
                        </div>
                       <div>
                           <AiOutlineInstagram/>
                           <span className='footer__text'>Instagram</span>
                       </div>

                    </div>

                </div>

            </div>
            
        </footer>
    );
};

export default Footer;