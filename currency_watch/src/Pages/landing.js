import React from "react";
// import Hero from "../hero.jpeg"
import Hero2 from "../hero2.jpg"
// import logo for page
import logoEye from "../logoEye.svg"
// import mockup for page
import macScreenShot from "../MacBookAir_TimeLineScreenShot.png"

function Landing() {
    return (
        <div style={{ background: '#212529'}}>
            <div className="box">
                {/* Background hero image */}
                <img src={Hero2} className="hero-img" alt="hero"></img>

                {/* Logo */}
                <img className="welcome-logo" src={logoEye} />

                {/* Welcome Text */}
                <div className="welcome-text">
                    <h1>Welcome to Currency Watch</h1>
                </div>

                {/* API/Web Application description */}
                <div className="description-text">
                    <h4>Currency Watch provides an API from CurrencyBeacon with real-time and historical exchange rates
                        for 168 world currencies. Our real-time and historical exchange rate data is retrieved from
                        several major forex data providers, central banks and various commercial vendors in
                        real-time, validated, processed and delivered in seconds within the market window.</h4>
                </div>

                {/* Mockup */}
                <img className="welcome-mac" src={macScreenShot} />
            </div>
        </div>
    )
}

// export Landing component
export default Landing;