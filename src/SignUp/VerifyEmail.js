import React from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import {NumberInput} from '../Components/Forms/Inputs'
import Next from '../Components/Buttons/Button'
import { Link } from 'react-router-dom';

export default function VerifyEmail() {
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
                                            <h1 className={styles.title}>Verify Email</h1>
                                            <p className={styles.subtitle}>
                                            A 6-digit code has been sent to your email johndoe@gmail.com. Please enter it within next 10 minutes.
                                            </p>
                                            <NumberInput text={"Verification Code"} placeHolder={"Verification Code"} className={"mt-4"} />
                                            <Next title={"Next"} link={"/VerifyEmail/CreatePassword"} styled={{ width: "100%", marginTop: "30px" }} />
                                            <div className={`${styles.Bottomcontainer} mt-4`}>
                                                <p className={styles.mainText}>
                                                    <b>Didn’t receive the code?</b> <Link to={'/#'} className={styles.signUpLink} >
                                                    Resend</Link>
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
