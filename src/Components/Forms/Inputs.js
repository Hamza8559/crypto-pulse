import React, { useState } from 'react'
import { GrHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";
import './input.css'

const EmailInput = ({ text, placeHolder, className }) => {
    return (
        <>
            <div className={className + " " + 'emailInputBox'}>
                <label>{text}</label>
                <input type="email" placeholder={placeHolder} />
            </div>
        </>
    )
}

const NumberInput = ({ text, placeHolder, className }) => {
    return (
        <>
            <div className={className + " " + 'emailInputBox'}>
                <label>{text}</label>
                <input type="number" placeholder={placeHolder} />
            </div>
        </>
    )
}

const Password = ({ text1, placeHolder1,value1,onChange1,text2,placeHolder2,value2,onChange2,className }) => {
    const [isPasswordShow, setPasswordShow] = useState(false)
    const [isConPasswordShow, setConPasswordShow] = useState(false)
    return (
        <>
            <div className={className + " " + 'password'}>
                <label>{text1}</label>
                <div>
                    <input value={value1} onChange={onChange1} type={isPasswordShow ? "password" : "text"} placeholder={placeHolder1} />
                    {
                        isPasswordShow == false ?
                            <GrHide onClick={() => { setPasswordShow(true) }} /> :
                            <BiShow onClick={() => { setPasswordShow(false) }} />
                    }
                </div>
            </div>
            <div className={className + " " + 'password'}>
                <label>{text2}</label>
                <div>
                    <input value={value2} onChange={onChange2} type={isConPasswordShow ? "password" : "text"} placeholder={placeHolder2} />
                    {
                        isConPasswordShow == false ?
                            <GrHide onClick={() => { setConPasswordShow(true) }} /> :
                            <BiShow onClick={() => { setConPasswordShow(false) }} />
                    }
                </div>
            </div>
        </>
    )
}
export { EmailInput, NumberInput, Password };
