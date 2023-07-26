import React from "react";
import Header from './components/Header';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return(
        <div>
            <Header/>
            <PortfolioContainer />
            <Footer/>
        </div>
    );
};

export default App;
