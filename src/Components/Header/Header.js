import React from 'react'
import style from '../assests/css/Header.module.css'
import logo from '../assests/images/Logo.png'
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from '../Inputs/SearchBarCom/SearchBars';
import PrimaryButton from '../Buttons/PrimaryButton';
import OutlineButton from '../Buttons/OutlineButton';



function Header() {
    return (
        <>
            <section className={`${style.header}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className={`${style.leftPart}`}>
                                <img src={logo} alt="" />
                                <div className={`${style.menuBox}`}>
                                    <ul>
                                        <li><a href="">Buy Crypto</a></li>
                                        <li><a href="">Market</a></li>
                                        <li><a href="">Trade <IoIosArrowDown/> </a></li>
                                        <li><a href="">Future <IoIosArrowDown/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5">
                            <div className={`${style.rightPart}`}>
                                <SearchBar />
                                <PrimaryButton link={"/ChosePage"} title={"Sign Up"}/>
                                <OutlineButton link={"/SignIn"} title={"Sign In"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header