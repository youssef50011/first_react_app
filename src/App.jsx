import { Component } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Portfolio from "./Component/Portfolio/Portfolio";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
export default class App extends Component{
render(){
    return (
        <>
        <Navbar/>
        <Home/>
        <div className="portfolio my-3">
        <Portfolio/>
        </div>
        <div className="portfolio my-4">
        <About/>
        </div>
        <div className="portfolio mt-4">
        <Contact/>
        </div>
        <Footer/>
        </>
    )
}
}