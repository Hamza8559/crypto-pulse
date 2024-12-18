import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import Next from '../Components/Buttons/Button'
import camra from '../Components/assests/images/icons/Group14462.png'
import document from '../Components/assests/images/icons/Group14461.png'

export default function TakePutureProfile() {
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
                                                Please select a way to complete document
                                                verification.
                                            </p>
                                            <div className={styles.Docscontainer}>
                                                <h2 className={styles.title}>Upload Type</h2>
                                                {[
                                                    { id: 'picture', name: 'Take picture with phone', icon: camra },
                                                    { id: 'Uploadphotos', name: 'Upload photos', icon: document },
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
                                            <Next title={"Next"} link={"/TakePictureDocs"} styled={{ width: "100%", marginTop: "90px" }} />
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
