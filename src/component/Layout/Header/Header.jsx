import React from 'react';
import {FaWallet} from 'react-icons/fa'
import {BiSolidBookmarkHeart} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import lalafo from '../../../image/icon/dc4d42b4d8e1ef579577b2c590.webp'
import cat from  '../../../image/img/kot Fedya_large.jpeg'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
               <div className='header__box'>
                   <div style={{display:"flex", alignItems:'center',justifyContent:'center'}}>
                       <img src={lalafo} alt='lalafo' style={{width:170, height:135,marginBottom:'5px'}}/>
                       <h3 style={{color:'grey'}}>Для бизнеса</h3>
                   </div>
                   <div style={{display:"flex",alignItems:"center",columnGap:8}}>
                       <FaWallet style={{fontSize:32,marginBottom:'5px'}}/>
                       <p style={{color:'grey',fontSize:'18px',fontWeight:600}}>Кошелёк:</p>
                       <p style={{color:'forestgreen',fontSize:'18px',fontWeight: 700}}>0.00 KGS</p>
                   </div>
                       <div style={{display:"flex",alignItems:'center',columnGap:'25px', margin:'0px -10px'}}>
                           <BiSolidBookmarkHeart style={{fontSize:30}}/>
                           <FiMail style={{fontSize:30}}/>
                           <img  className='header__main' src={cat} alt='img'/>
                           <p style={{color:'grey',fontSize:'18px',fontWeight: 500}}>Aхмед Ду...</p>
                       </div>
                       <button className='header__btn'>Подать объявление</button>


               </div>
            </div>

        </header>
    );
};

export default Header;