import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signIn.css'

const SignIn = () => {
    let navigate = useNavigate();

    const[authEmail, setauthEmail] = useState("")
    
    function getEmail(e){
        setauthEmail(e.target.value)
    }

    function checkEmail(){
        console.log(authEmail)
    }

    return (
        <div className='signUpWrapper'>
            <header className='signInHeader'>
                <div className="headerInSignIn"><img src="/Images/Icons/amazonLogoBlack.png" alt="" id='signInAmazonLogo'/><span>.in</span></div>
            </header>
            <main className='signInMain'>
                    <div className="signInBox">
                        <div className="signInHeading">Sign-In</div>
                        <label htmlFor="signInEmail" className='signInEmail'>Email or mobile phone number</label>
                        <input type="text" name="signInEmail" id="signInEmail" className='signUpInput' onChange={getEmail}/>
                        <div className='signInContinuebtn'><input type="button" name="continue" id="continue" className='signInContinueBtnInp' value='Continue' onClick={checkEmail}/></div>
                        <div className="signInPrivacyPolicy">By continuing, you agree to Amazon's <a href='Amazon.in' className='learnMore blueText'>Conditions of Use</a> and <a href='Amazon.in' className='learnMore blueText'>Privacy Notice</a></div>
                        <div className="signInNeedHelp"><a href='Amazon.in' className='learnMore blueText'><img src="/images/Icons/amazonArroRight.png" alt="" /> Need help?</a></div>
                    </div>
                    <div className="signInNewUserHeading"><div className="signInHorizontalLines"></div><p>New to Amazon?</p><div className="signInHorizontalLines"></div></div>
                    <div className="signInCreateAccountBtn" onClick={()=>{navigate("/register")}}>Create your Amazon account</div>
            </main>
            <div className="forShadowEffectInSignIn"></div>
            <div className="forShadowEffectInSignIn2"></div>
            <footer className='signInFooter'>
                <nav>
                    <ul className='footerNavUl'>
                        <li className="footerNavLinks">Conditons of Use</li>
                        <li className="footerNavLinks">Privacy Notice</li>
                        <li className="footerNavLinks">Help</li>
                    </ul>
                </nav>
                <div className="signInFooterCopyrigth">©1996-2022, Amazon.com, Inc, or its affiliates</div>
            </footer>
        </div>
    );
}

export default SignIn;
