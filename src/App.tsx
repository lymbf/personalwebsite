import React from 'react';
import './App.css';
import Header from "./View/Header/header";
import GradientBg1 from "./View/UIComponents/GradientBG1/gradientBg1";
import useInit from "./Application/init";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./View/Footer/Footer";
import Articles from "./View/Articles/Articles";
import Main from "./View/Main/Main";
import About from "./View/About/About";
import Contact from "./View/Contact/Contact";
function App() {

    useInit();
  return (
    <div className="App">
        <Router>
            <GradientBg1/>
            <Header/>
            <Routes>
                <Route path = '/articles' element = {<Articles/>}/>
                <Route path = '/about' element = {<About/>}/>
                <Route path = '/contact' element = {<Contact/>}/>
                <Route path = '/' element = {<Main/>}/>
            </Routes>
            <Footer/>
        </Router>

    </div>
  );
}

export default App;
