import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '../Components/assests/css/SignUp.module.css'
import logo from '../Components/assests/images/Logo.png'
import Next from '../Components/Buttons/Button'
import ReactFlagsSelect from "react-flags-select";
import { TextInput, DateInput, NumberInput } from '../Components/Forms/Inputs'

export default function HomeAddress() {
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
                                            <h1 className={styles.title}>Home Address</h1>
                                            <p className={styles.subtitle}>
                                                Fill in your current residential address.
                                            </p>
                                            <TextInput text={"Full Address"} placeHolder={"Enter your street address and apartment"} className={""} />
                                            <NumberInput text={"Postal Code (Optional)"} placeHolder={"Enter your postal/ZIP code"} className={""} />
                                            <label className={`${styles.ResidencyLabel} mt-2`}>Nationality</label>
                                            <ReactFlagsSelect
                                                className="ReactFlagsSelect"
                                                selected={selected}
                                                onSelect={(code) => setSelected(code)}
                                                searchable={false}
                                                placeholder={"Enter Your City"}
                                                alignOptionsToRight={true}
                                            />
                                            <Next title={"Next"} link={"/DocumentVerification"} styled={{ width: "100%", marginTop: "30px" }} />
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
