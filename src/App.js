import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Blog } from './pages/Blog';
import { Pricing } from './pages/Pricing';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes,Route,Link } from "react-router-dom";
import { LoginPage } from './components/Auth/LoginPage';
import { SignupPage } from './components/Auth/SignupPage';
import { TechnologySearch } from './pages/TechnologySearch';
import { CategorySearch } from './pages/CategorySearch';
import { EnailVerification } from './pages/EnailVerification';
import { ProfessionalDomainData } from './pages/ProfessionalDomainData';
import { TechnologyCompare } from './pages/TechnologyCompare';
import { useState } from 'react';
import { Symbol } from './components/Symbol';



function App() {
  const [islogin,setislogin]=useState(true)
  const [issignup,setissignup]=useState(true) 

  const Loginfunc=(prev)=> {
    console.log("execute login")
    setislogin(!prev)
  }

  const Signupfunc=(prev)=> {
    console.log("execute signup")
    setissignup(!prev)
  }
  return (
    <>
    
    <BrowserRouter>
    <Header
    islogin={islogin}
    setislogin={Loginfunc}
    issignup={issignup}
    setissignup={Signupfunc}
    
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Pricing" element={<Pricing/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="/Signup" element={<SignupPage/>} />
      <Route path="/Technologysearch" element={<TechnologySearch />} />
      <Route path="/Categorysearch" element={<CategorySearch />} />
      <Route path="/EnailVerification" element={<EnailVerification />} />
      <Route path="/ProfessionalDomainData" element={<ProfessionalDomainData />} />
      <Route path="/Technologycompare" element={<TechnologyCompare />} />

    </Routes>
    <Footer />
    <Symbol />
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
