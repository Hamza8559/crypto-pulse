import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import Next from '../Components/Buttons/Button'
import ReactFlagsSelect from "react-flags-select";
import idCard from '../Components/assests/images/icons/id-card.png'
import document from '../Components/assests/images/icons/document-text.png'
import userid from '../Components/assests/images/icons/userid.png'
import playIcon from '../Components/assests/images/icons/play-svgrepo-com 1.png'



export default function SelectResidency() {
    const [selected, setSelected] = useState("");

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
                                            <h1 className={styles.title}>Let’s get you verified</h1>
                                            <p className={styles.subtitle}>
                                                Select your residency and follow the steps
                                            </p>
                                            <label className={`${styles.ResidencyLabel}`}>Residency</label>
                                            <ReactFlagsSelect
                                                selected={selected}
                                                onSelect={(code) => setSelected(code)}
                                                searchable={false}
                                                placeholder={"Select"}
                                                alignOptionsToRight={true}
                                            />
                                            <div className={styles.documentscontainer}>
                                                <h2>We need following documents:</h2>
                                                <ul className={styles.list}>
                                                    <li>
                                                        <span className={styles.icon}>
                                                            <img src={idCard} alt="Personal Info" />
                                                        </span>
                                                        Personal Information
                                                    </li>
                                                    <li>
                                                        <span className={styles.icon}>
                                                            <img src={document} alt="Government ID" />
                                                        </span>
                                                        Government issue ID card
                                                    </li>
                                                    <li>
                                                        <span className={styles.icon}>
                                                            <img src={userid} alt="Liveness Check" />
                                                        </span>
                                                        Liveness check
                                                    </li>
                                                </ul>
                                            </div>
                                            <button className={styles.identity_button}>
                                                How to verify my identity?
                                                <img src={playIcon} className={styles.icon} />
                                                <span>Play</span>
                                            </button>
                                            <Next title={"Next"} link={"/Nationality"} styled={{ width: "100%", marginTop: "30px" }} />
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
