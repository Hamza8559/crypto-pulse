import React from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import {EmailInput} from '../Components/Forms/Inputs'
import Next from '../Components/Buttons/Button'
import Divider from '../Components/divider/Divider'
import OutlineButton from '../Components/Buttons/OutlineButton'
import Email_icon from '../Components/assests/images/Group14400.png'
import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <>
            <section id="bgColor_forGlobal">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className={`${styles.signUpContainer}`}>
                                <div className="col-lg-10">
                                    <form action="">
                                        <div className={styles.headerContainer}>
                                            <img src={logo} alt="Cryptopulse Logo" className={styles.logo} />
                                            <h1 className={styles.title}>Sign In</h1>
                                            <p className={styles.subtitle}>Sign In to continue your crypto trade</p>
                                            <EmailInput text={"Email/Phone number"} placeHolder={"Email/Phone number"} className={"mt-4"} />
                                            <Next title={"Next"} styled={{ width: "100%", marginTop: "30px" }} link={"#"} />
                                            <Divider />
                                            <OutlineButton title={"Continue with Google"} link={"#"} icon={Email_icon}
                                                styled={{ border: "1px solid lightgray", borderRadius: "30px", width: "100%" }}
                                            />
                                            <div className={`${styles.Bottomcontainer} mt-4`}>
                                                <p className={styles.mainText}>
                                                    <b>Already using Cryptopulse?</b> <Link to={'/SignUp'} className={styles.signUpLink} >
                                                        Sign up
                                                    </Link>
                                                </p>
                                                <p className={styles.disclaimer}>
                                                    By continuing, you agree to Cryptopulse Terms of Use and confirm that you have read Cryptopulse Privacy Policy
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
