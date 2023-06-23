import React from 'react';
import "./Menu.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Login = () => {

    return (
        <div>
            <div className='toggle'>
                <div className='pop-up'>
                    <h2 className='title'> Welcome to Airbnb </h2>
                    <div className='contact-number-container'>
                        <div className='country-code'>
                            <div style={{ opacity: "0.6", paddingBottom: "0.4rem" }}>Country/region</div>
                            <div style={{ padding: "0.1rem" }}>India (+91)</div>
                        </div>
                        <div className='contact-number-input'>
                            <input style={{ padding: "0.3rem" }} type="tel" placeholder='Phone Number' />
                        </div>
                    </div>
                    <div style={{ marginTop: "0.6rem", fontSize: "0.9rem" }}>We'll call or text you to confirm your number. Standard message and data rates apply.</div>
                    <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}><a href="https://www.airbnb.co.in/help/article/2855" className='privacy-policy' >Privacy Policy</a></div>
                    <div className='continue-button'><button className='toggle-continue-button'>Continue</button></div>
                    <div className='or'>or</div>
                </div>
                <div className='login-in-ways'>
                    <div className='box-1'>
                        <div><span ><FacebookIcon className='facebook' /></span></div>
                        <div><a className='facebook-link' target='_blank' href="https://www.facebook.com/">Continue with Facebook</a></div>
                    </div>
                    <div className='box-2'>
                        <div><span ><GoogleIcon className='google' /></span></div>
                        <div><a className='google-link' target='_blank' href="https://www.google.com/">Continue with Google</a></div>
                    </div>
                    <div className='box-3'>
                        <div><span ><AppleIcon className='apple' /></span></div>
                        <div><a className='apple-link' target='_blank' href="https://www.aptronixindia.com/?campaign=18286942556&content=620805004727&keyword=&gclid=CjwKCAjw3ueiBhBmEiwA4BhspPx5FaKQS6_QE1yhLn6Soj8-d0G3Ldn3YuTlyJLe_GIgPeq0bHtDBxoCOzsQAvD_BwE">Continue with Apple</a></div>
                    </div>
                    <div className='box-4'>
                        <div><span ><MailOutlineIcon className='email' /></span></div>
                        <div><a className='email-link' target='_blank' href="https://mail.google.com/mail/u/0/#inbox">Continue with Gmail</a></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;