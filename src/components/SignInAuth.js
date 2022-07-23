import './signIn.css'
import { useNavigate } from 'react-router-dom';


export default function SignInAuth(){
    let navigate = useNavigate();
    return (
        <div className='signUpWrapper'>
            <header className='signInHeader'>
                <div className="headerInSignIn"><img src="/Images/Icons/amazonLogoBlack.png" alt="" id='signInAmazonLogo'/><span>.in</span></div>
            </header>
            <main className='signInMain'>
                    <div className="signInBox">
                        <div className="signInHeading">Sign-In</div>
                        <div className="userNumber">+917757 <span className='small blueText' onClick={()=>{navigate('/login')}}>Change</span></div>
                        <div className="signInLable"><label htmlFor="signInEmail" className='signInEmail'>Password</label><span className='blueText'>Forgot password</span></div>
                        <input type="text" name="signInEmail" id="signInEmail" className='signUpInput'/>
                        <div className='signInContinuebtn'><input type="button" name="continue" id="continue" className='signInBtn signInContinueBtnInp' value='Sign-In'/></div>
                        <div><input type="checkbox" name="signInCheckbox" id="signInCheckbox" /><label htmlFor="signInCheckbox">Keep me signed in. <span className='small blueText'>Details</span></label></div>
                    </div>
                    <div className="signInNewUserHeading"><div className="signInHorizontalLines"></div><p>or</p><div className="signInHorizontalLines"></div></div>
                    <div className="signInCreateAccountBtn" onClick={()=>{navigate("/register")}}>Get an OTP on your phone</div>
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