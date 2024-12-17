import React from 'react'
import style from '../Components/assests/css/ChosenPage.module.css'
import logo from '../Components/assests/images/Logo.png'
import individual from '../Components/assests/images/individual.png'
import corporate from '../Components/assests/images/supporting-business-person-svgrepo-com 1.png'
import { Link } from 'react-router-dom';

export default function ChosenPage() {
  return (
    <>
      <section id="bgColor_forGlobal">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={`${style.welcome_container}`}>
                <header className={`${style.header}`}>
                  <img src={logo} alt="Cryptopulse Logo" className={`${style.logo} img-fluid`} />
                  <h1>Welcome back to Cryptopulse</h1>
                  <p>Sign in to continue your crypto trade</p>
                </header>
                <div className={`${style.card_flex}`}>
                  <Link to={`/SignUp`} className='d-block'>
                    <div className={`${style.card_container}`}>
                      <div className={`${style.card_icon}`}>
                        <img src={individual} alt="Individual Icon" className='img-fluid' />
                      </div>
                      <div className={`${style.card_title}`}>I'm individual</div>
                      <div className={`${style.card_subtitle}`}>Onboarding as an individual</div>
                    </div>
                  </Link>

                  <Link to={`/SignUp`} className='d-block'>
                    <div className={`${style.card_container}`}>
                      <div className={`${style.card_icon}`}>
                        <img src={corporate} alt="Corporate Icon" className='img-fluid' />
                      </div>
                      <div className={`${style.card_title}`}>I’m corporate</div>
                      <div className={`${style.card_subtitle}`}>Onboarding as a corporate</div>
                    </div>
                  </Link>
                </div>
                <div className={style.Bottomcontainer}>
                  <p className={style.mainText}>
                    <b>Already using Cryptopulse?</b> <Link to={'/SignUp'} className={style.signUpLink} >
                      Sign up
                    </Link>
                  </p>
                  <p className={style.disclaimer}>
                    By continuing, you agree to Cryptopulse Terms of Use and confirm <br /> that you have read Cryptopulse Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
