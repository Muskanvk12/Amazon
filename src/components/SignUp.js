import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './signIn.css'
import './signUp.css'

const SignUp = () => {
    let navigate = useNavigate();
    const [signUpInp, setsignUpInp] = useState({"name" : "", "number" : "", "email" : "", "password" : ""})
    function handleChange(e){
        if(e.target.name === "signUpName"){
            setsignUpInp({...signUpInp, "name" : e.target.value})
        }
        if(e.target.name === "mobileNumber"){
            setsignUpInp({...signUpInp, "number" : e.target.value})
        }
        if(e.target.name === "signInEmail"){
            setsignUpInp({...signUpInp, "email" : e.target.value})
        }
        if(e.target.name === "signUpPassword"){
            setsignUpInp({...signUpInp, "password" : e.target.value})
        }
    }

    async function registerUser(){
        const response = await axios.post('http://localhost:5000/register/user', {
            ...signUpInp
        }) 
        if(response.data.message==="exists"){
            alert("user with this number or email already exists")
        }
        else{
            alert("user registered")
        }
        
    }

    function handleSubmit(){
        if(signUpInp.name === "" || signUpInp.number === "" || signUpInp.password === "")        {
            alert("Important fields cannot be blank")
        }
        else{
            registerUser()
            navigate('/login')
        }
    }
    return (
        <div className='signUpWrapper'>
            <header className='signInHeader'>
                <div className="headerInSignIn"><img src="/Images/Icons/amazonLogoBlack.png" alt="" id='signInAmazonLogo' /><span>.in</span></div>
            </header>
            <main className='signUpMain signInMain'>
                <div className="signUpBox signInBox">
                    <div className="signInHeading">Create Account</div>
                    <div className="inputWrapper">
                        <label htmlFor="signUpName" className='signInEmail'>Your name</label>
                        <input className='signUpInput' type="text" name="signUpName" id="signInEmail" placeholder='First and last name' onChange={handleChange}/>
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="mobileNumber" className='signInEmail'>Mobile number</label>
                        <div className='mobileNumber'>
                            <div className='signInCreateAccountBtn signUpMobileNumberBtn'>IN +91 <img src="/images/icons/amazonTopDownIcons.png" className='TopDownIcons' alt="" /></div>
                            <input className='signUpInput signUpMobileInput' type="text" name="mobileNumber" id="mobileNumber" placeholder='Mobile number' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="signInEmail" className='signInEmail'>{`Email (optional)`}</label>
                        <input className='signUpInput' type="email" name="signInEmail" id="signInEmail" onChange={handleChange}/>
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="signUpPassword" className='signInEmail'>Password</label>
                        <input className='signUpInput' type="password" name="signUpPassword" id="signUpPassword" placeholder='At least 6 characters' onChange={handleChange}/>
                        <p className='passwordGuide'><img src="/Images/icons/amazonIicon.png" className='iIconImg' alt="" />Password must be at least 6 characters.</p>
                    </div>
                    <div className="inputWrapper">
                        <p className='msgInstruction'>We will send you a text to verify your phone. <br />
                            Message and Data rates may apply.
                        </p>
                    </div>
                    <div className='signUpContinuebtn signInContinuebtn'><input type="button" name="continue" id="continue" className='signInContinueBtnInp' value='Continue' onClick={handleSubmit}/></div>

                    <div className="signInPrivacyPolicy">Already have an account? <a className='learnMore blueText' onClick={()=>{navigate('/login')}}>Sign in</a> <br />Buying for work? <a href='Amazon.in' className='learnMore blueText'>Create a fre business account</a></div>
                </div>
            </main>
            <div className="forShadowEffectInSignUp forShadowEffectInSignIn"></div>
            <div className="forShadowEffectInSignUp2 forShadowEffectInSignIn2"></div>
            <footer className='signInFooter'>
                <nav>
                    <ul className='footerNavUl'>
                        <li className="footerNavLinks">Conditons of Use</li>
                        <li className="footerNavLinks">Privacy Notice</li>
                        <li className="footerNavLinks">Help</li>
                    </ul>
                </nav>
                <div className="signInFooterCopyrigth">??1996-2022, Amazon.com, Inc, or its affiliates</div>
            </footer>
        </div>
    );
}

export default SignUp;
