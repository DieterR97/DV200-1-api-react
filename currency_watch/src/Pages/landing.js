import React from "react";
import Hero from "../hero.jpeg"
import Hero2 from "../hero2.jpg"
// import { Card } from "react-bootstrap";

function Landing() {

    return (
        <div>

            {/* <h1>Landing</h1> */}

            <div class="box">
                <img src={Hero2} className="hero-img" alt="hero"></img>

                <div class="welcome-text">
                    <h1>Welcome to Currency Watch</h1>
                </div>

                <div class="description-text">
                    <h4>Currency Watch provides an API from CurrencyBeacon with real-time and historical exchange rates
                        for 168 world currencies. Our real-time and historical exchange rate data is retrieved from
                        several major forex data providers, central banks and various commercial vendors in
                        real-time, validated, processed and delivered in seconds within the market window.</h4>
                </div>
            </div>

        </div>

    )
}

export default Landing;