import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import Next from '../Components/Buttons/Button'
import idCard from '../Components/assests/images/icons/id-card.png'
import document from '../Components/assests/images/icons/document-text.png'
import passport from '../Components/assests/images/icons/passport.png'

export default function DocumentVerification() {
    const [selectedDocument, setSelectedDocument] = useState('');

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
                                                Your ID document will be scanned for
                                                personal data extraction.
                                            </p>
                                            <div className={styles.Docscontainer}>
                                                <h2 className={styles.title}>Document Type</h2>
                                                {[
                                                    { id: 'idCard', name: 'ID Card', icon: idCard },
                                                    { id: 'drivingLicense', name: 'Driving’s License', icon: document },
                                                    { id: 'passport', name: 'Passport', icon: passport }
                                                ].map((doc) => (
                                                    <div
                                                        key={doc.id}
                                                        className={`${styles.option} ${selectedDocument === doc.id ? styles.selected : ''}`}
                                                        onClick={() => setSelectedDocument(doc.id)}
                                                    >
                                                        <img src={doc.icon} alt={doc.name} className={styles.icon} />
                                                        {doc.name}
                                                        <span className={styles.radio}>
                                                            {selectedDocument === doc.id && <span className={styles.innerCircle}></span>}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <Next title={"Continue"} link={"/VerifyEmail/CreatePassword"} styled={{ width: "100%", marginTop: "20px" }} />
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
