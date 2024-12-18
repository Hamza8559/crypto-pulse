import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './LandingPage/Screen';
import ChosenPage from './SignUp/ChosenPage';
import SignUp from './SignUp/SignUp';
import VerifyEmail from './SignUp/VerifyEmail';
import CreatePassword from './SignUp/CreatePassword';
import SelectResidency from './SignUp/SelectResidency';
import Nationality from './SignUp/Nationality';
import DocumentVerification from './SignUp/DocumentVerification';
import SignIn from './SignUp/SignIn';
import HomeAddress from './SignUp/HomeAddress';
import TakePictureDocs from './SignUp/TakePictureDocs';
import TakePutureProfile from './SignUp/TakePutureProfile';
export default function Routing() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/ChosePage" element={<ChosenPage />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp/VerifyEmail" element={<VerifyEmail />} />   
                <Route path="/VerifyEmail/CreatePassword" element={<CreatePassword />} />   
                <Route path="/SelectResidency" element={<SelectResidency />} />       
                <Route path="/Nationality" element={<Nationality />} />          
                <Route path="/HomeAddress" element={<HomeAddress />} /> 
                <Route path="/DocumentVerification" element={<DocumentVerification />} /> 
                <Route path="/TakePictureDocs" element={<TakePictureDocs />} /> 
                <Route path="/TakePutureProfile" element={<TakePutureProfile />} /> 
            </Routes>
        </Router>
    </>
  )
}
