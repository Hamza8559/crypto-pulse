import React from 'react'
import style from '../Components/assests/css/LandingPage.module.css'
import Header from '../Components/Header/Header'
import GetStarted from '../Components/Buttons/Button'
import rightImgBanner from '../Components/assests/images/Bannerimage.png'
function Screen() {
  return (
    <>
      <Header />
      <section className='mt-5 pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={style.landingPage_content}>
                <a href="/login" className={`${style.login_link}`}>Sign In To Your Secure Wallet!</a>
                <h1 className={`${style.header_title} mt-4`}>The next-gen <br /><span>crypto wallet &</span> <br /> trading platform</h1>
                <p className={`${style.header_subtitle} mt-4`}>
                  All of your cryptocurrency in one place — from Bitcoin <br /> and Ethereum to Litecoin and Ripple.
                </p>
                <GetStarted title={"Get Started"}/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.landingPage__img}>
                <img src={rightImgBanner} alt="" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Screen