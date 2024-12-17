import React, { useState } from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import { Password } from '../Components/Forms/Inputs'
import Next from '../Components/Buttons/Button'

export default function CreatePassword() {
    const [isPasswordShow, setPasswordShow] = useState("")
    const [isConPasswordShow, setConPasswordShow] = useState("")
    const minLength = isPasswordShow.length >= 8 && isConPasswordShow.length >= 8;
    const hasNumber = /[0-9]/.test(isPasswordShow) && /[0-9]/.test(isConPasswordShow);
    const hasUpper = /[A-Z]/.test(isPasswordShow) && /[A-Z]/.test(isConPasswordShow);

    const handleInputChange1 = (event) => {
        setPasswordShow(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setConPasswordShow(event.target.value);
    };
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
                                            <h1 className={styles.title}>Create a password</h1>
                                            <p className={styles.subtitle}>Enter a strong password</p>
                                            <Password
                                                text1={"Password"} placeHolder1={"Password"} value1={isPasswordShow} onChange1={handleInputChange1}
                                                text2={"Confirm Password"} placeHolder2={"Confirm Password"} value2={isConPasswordShow} onChange2={handleInputChange2}
                                            />
                                            <ul className={styles.criteriaList}>
                                                <li className={minLength ? styles.valid : styles.invalid}>
                                                    At least 8 characters
                                                </li>
                                                <li className={hasNumber ? styles.valid : styles.invalid}>
                                                    At least 1 number
                                                </li>
                                                <li className={hasUpper ? styles.valid : styles.invalid}>
                                                    At least 1 upper case letter
                                                </li>
                                            </ul>
                                            <Next title={"Next"} link={"/SelectResidency"} styled={{ width: "100%", marginTop: "30px" }} />
                                            <div className={`${styles.Bottomcontainer} mt-4`}>
                                                <p className={styles.disclaimer}>
                                                    By continuing, you agree to Cryptopulse Terms of Use and confirm
                                                    that you have read Cryptopulse Privacy Policy
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
