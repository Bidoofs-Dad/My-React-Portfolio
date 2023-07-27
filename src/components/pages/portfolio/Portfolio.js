import React from "react";
import '../../styles/Portfolio.css'
import Fabricate from '../../../assets/Fabricate.png'

export default function Portfolio() {
    return(
    <div className="portfolio">
        <h2>My Portfolio!</h2>
        <div className="portfolioCards">
        <div className="portfolioCard"><a href='https://fabricate.herokuapp.com/'><img src={Fabricate} alt='temp'></img></a></div>
        <div className="portfolioCard"><img src={Fabricate} alt='temp'></img></div>
        <div className="portfolioCard"><img src={Fabricate} alt='temp'></img></div>
        <div className="portfolioCard"><img src={Fabricate} alt='temp'></img></div>
        <div className="portfolioCard"><img src={Fabricate} alt='temp'></img></div>
        <div className="portfolioCard"><img src={Fabricate} alt='temp'></img></div>
        </div>
        
    </div>
    );
};