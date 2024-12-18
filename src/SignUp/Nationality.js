import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import Next from '../Components/Buttons/Button'
import ReactFlagsSelect from "react-flags-select";
import { TextInput, DateInput } from '../Components/Forms/Inputs'

export default function Nationality() {
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
                                            <h1 className={styles.title}>Personal Information</h1>
                                            <p className={styles.subtitle}>
                                            Please provide the following information as
                                            shown on your passport or ID card.
                                            </p>
                                            <label className={`${styles.ResidencyLabel}`}>Nationality</label>
                                            <ReactFlagsSelect
                                                className="ReactFlagsSelect"
                                                selected={selected}
                                                onSelect={(code) => setSelected(code)}
                                                searchable={false}
                                                placeholder={"Select"}
                                                alignOptionsToRight={true}
                                            />
                                            <TextInput text={"Legal Name"} placeHolder={"Full Name"} className={""} />
                                            <DateInput text={"Date of Birth"} placeHolder={"Full Name"} className={""} />
                                            <Next title={"Next"} link={"/HomeAddress"} styled={{ width: "100%", marginTop: "30px" }} />
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
