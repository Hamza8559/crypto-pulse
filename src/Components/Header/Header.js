import React, { use, useState } from 'react'
import style from '../assests/css/Header.module.css'
import logo from '../assests/images/Logo.png'
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from '../Inputs/SearchBarCom/SearchBars';
import PrimaryButton from '../Buttons/PrimaryButton';
import OutlineButton from '../Buttons/OutlineButton';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
    const [dropDowns, setdropDowns] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        sideBar: false
    })
    return (
        <>
            <section className={`${style.header}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`${style.colLeft} col-6`}>
                            <div className={`${style.leftPart}`}>
                                <img src={logo} alt="" />
                                <div className={`${style.menuBox}`}>
                                    <ul>
                                        <li><Link to="">Buy Crypto</Link></li>
                                        <li><Link to="">Market</Link></li>
                                        <li onMouseEnter={() =>
                                            setdropDowns(prevState => ({ ...prevState, one: true }))}>
                                            <Link to="">Trade <IoIosArrowDown /> </Link>
                                            {
                                                dropDowns.one ?
                                                    <ul onMouseLeave={() =>
                                                        setdropDowns(prevState => ({ ...prevState, one: false }))}
                                                        className={`${style.subMenuBox__one}`}>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                    </ul> : false
                                            }

                                        </li>
                                        <li onMouseEnter={() =>
                                            setdropDowns(prevState => ({ ...prevState, two: true }))}>
                                            <Link to="">Future <IoIosArrowDown /></Link>
                                            {
                                                dropDowns.two ?
                                                    <ul onMouseLeave={() =>
                                                        setdropDowns(prevState => ({ ...prevState, two: false }))}
                                                        className={`${style.subMenuBox__one}`}>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                        <li><Link to="">Menu 1</Link></li>
                                                    </ul> : false
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-2"></div> */}
                        <div className={`${style.colRight} col-lg-6`}>
                            <div className={`${style.rightPart}`}>
                                <SearchBar />
                                <PrimaryButton link={"/ChosePage"} title={"Sign Up"} className={style.hiddenSign__Up} />
                                <OutlineButton link={"/SignIn"} title={"Sign In"} className={style.hiddenSign__In} />
                                <FaBars onClick={() => setdropDowns(prevState => ({ ...prevState, sideBar: true }))} />
                            </div>
                        </div>
                    </div>
                </div>

                {
                    dropDowns?.sideBar ?
                        <div className={`${style.sideBar}`}>
                            <div className={`${style.inner_sideBar}`}>
                                <img src={logo} alt="" />
                                 <IoCloseOutline 
                                    onClick={() => setdropDowns(prevState => ({ ...prevState, sideBar: false }))}
                                    className={style.close_icon} />
                                <hr />
                                <ul>
                                    <li><Link to="">By Crypto</Link></li>
                                    <li><Link to="">Market</Link></li>
                                    <li
                                        onClick={() => setdropDowns(prevState => ({ ...prevState, three: !prevState.three }))}
                                    > <Link to="">Trade <IoIosArrowDown /></Link>
                                        {
                                            dropDowns.three ?
                                                <ul className={`${style.mobile_subMenu}`}>
                                                    <li style={{ borderTop: "1px solid lightgray" }}><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                </ul> : false
                                        }
                                    </li>
                                    <li onClick={() => setdropDowns(prevState => ({ ...prevState, four: !prevState.four }))}><Link to="">Future <IoIosArrowDown /></Link>
                                        {
                                            dropDowns.four ?
                                                <ul className={`${style.mobile_subMenu}`}>
                                                    <li style={{ borderTop: "1px solid lightgray" }}><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                    <li><Link to="">Menu 1 </Link></li>
                                                </ul> : false
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    : false
                }

            </section>
        </>
    )
}

export default Header