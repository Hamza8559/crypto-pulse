import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import Next from '../Components/Buttons/Button'
import card_picture from '../Components/assests/images/Group14460.png'
import ReactFlagsSelect from "react-flags-select";
import { TextInput, DateInput, NumberInput } from '../Components/Forms/Inputs'

export default function TakePictureDocs() {

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
                                            <h1 className={styles.title}>Document Verification</h1>
                                            <p className={styles.subtitle}>
                                                Take picture of both sides of your driving
                                                license.
                                            </p>
                                            <img src={card_picture} alt="" className='img-fluid m-auto d-block mt-4'/>
                                            <ul className={`${styles.points__ul} mt-4`}>
                                                <li>Upload a complete image of your ID document.</li>
                                                <li>Ensure all details are readable in the image you upload.</li>
                                                <li>Ensure the document is the original and has not expired.</li>
                                                <li>Place documents against a solid-colored background.</li>
                                            </ul>
                                            <Next title={"Next"} link={"/TakePutureProfile"} styled={{ width: "100%", marginTop: "10px" }} />
                                            <div className={`${styles.Bottomcontainer}`}>
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
