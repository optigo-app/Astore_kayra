import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigation = useNavigate();

    return (
        <div>
            {/* <div className='footerTopMain'>
                <p className='foTopTitle'>Let's Smile Together</p>
                <div className='inputMain'>
                    <input type='text' placeholder='Email Address' className='foInputBox' />
                    <div>
                        <button className='footerSignupBtn'>SIGN UP</button>
                    </div>
                </div>
                <p className='foTopDescription'>Get early access to new products and special offers!</p>
            </div> */}
            <div className='footerBottomMain'>
                <div className='footerIconMain'>
                    <div className='footerFace'>
                        <FaFacebookF style={{ color: '#7d7f85' }} />
                    </div>
                    <div className='footerTwi'>
                        <FaTwitter style={{ color: '#7d7f85' }} />
                    </div>
                    <div className='footerInsta'>
                        <AiFillInstagram style={{ color: '#7d7f85' }} />
                    </div>
                    <div className='footerYou'>
                        <FaYoutube style={{ color: '#7d7f85' }} />
                    </div>
                </div>
                <div className='footerMoreOption'>
                    <p className='footerMoreOptionData' onClick={() => { navigation('/contactUs'); window.scrollTo(0, 0); }}>CONTACT US</p>
                    {/* <p className='footerMoreOptionData' onClick={() => {navigation('/faq'); window.scrollTo(0, 0); }}>FAQ</p> */}
                    <p className='footerMoreOptionData' onClick={() => {navigation('/servicePolicy'); window.scrollTo(0, 0); }}>SERVICE POLICY</p>
                    <p className='footerMoreOptionData' onClick={() => {navigation('/ExpertAdvice'); window.scrollTo(0, 0); }}>EXPERT ADVICE</p>
                    <p className='footerMoreOptionData' onClick={() => {navigation('/FunFact'); window.scrollTo(0, 0); }}>FUN FACT</p>
                    {/* <p className='footerMoreOptionData' onClick={() => navigation('/press')}>PRESS</p> */}
                </div>
                <div className='footerMoreText'>
                    <p style={{
                        color: '#7d7f85',
                        fontSize: '12px',
                        fontWeight: 500,
                        marginInline: '15px'
                    }}>© 2024, KayraCreation</p>

                    <p style={{
                        color: '#7d7f85',
                        fontSize: '12px',
                        fontWeight: 500,
                        cursor: 'pointer'
                    }} onClick={() => navigation('/TermsPolicy')}>Terms & Privacy</p>
                </div>
            </div>
                {/* <div className='text-end me-3'>
                    <span style={{fontSize:'6px',color:'#7D7f85'}}>R66B1-V66.23-04-2024.06:20PM</span>
                </div> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img loading='lazy' src='https://smilingrocks.com/cdn/shop/t/157/assets/passport.svg?v=152807140915720846441675380017' style={{ height: '80px', cursor: 'pointer', paddingBlock: '10px' }} />
            </div>
        </div>
    )
}
