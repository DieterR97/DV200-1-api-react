import React from "react";
// import array of currency codes
import { CurrencyCodes } from "../currency_codes";
// import axios to use in API Call
import axios from 'axios';
// import useState and useEffect
import { useState, useEffect } from "react";
// import mockup for page
import CompareScreenshot from '../MacBook Air_CompareScreenshot.png'

function Convert() {

    // endpoint to be used in API call
    const endpointConvert = 'convert';

    // API Key
    const api_key = 'b519f8f005e1e5b8db27f39b6aa3474c';

    const [currencyFrom, setCurrencyFrom] = useState([]);
    const [currencyTo, setCurrencyTo] = useState([]);
    const [amount, setAmount] = useState([]);
    const [converted, setConverted] = useState([]);

    // on amount change run this function
    const handleChange = (event) => {
        // set amount to value of number input
        setAmount(event.target.value);
        // set converted to null so that dom which displays result updates
        setConverted('');
    };

    // function to get new conversion
    const convertAmount = () => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointConvert + '?api_key=' + api_key + '&from=' + currencyFrom + '&to=' + currencyTo + '&amount=' + amount)
            .then(response => {

                console.log(response);
                console.log(response.data.response.value);

                // set converted amount and fix it to 2 decimal places
                setConverted(response.data.response.value.toFixed(2));

            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div style={{ background: 'linear-gradient(49deg, rgba(255,255,255,1) 24%, rgba(13,202,240,1) 70%)', height: '100vh', width: '100%' }}>
            <h1 style={{ color: 'black' }}>Convert Currencies</h1>

            <div style={{ display: 'flex' }}>
                <div style={{ margin: 'auto', display: 'flex' }}>

                    <p style={{ margin: 'auto', display: 'flex', marginRight: '15px' }}>Convert</p>
                    <select onChange={(e) => {
                        console.log(e.target.value);
                        setCurrencyFrom(e.target.value);
                        setConverted('');
                    }}
                        defaultValue="default"
                    >
                        <option value={"default"}>Choose Currency</option>
                        {CurrencyCodes.map((data) => {
                            return (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            );
                        })}
                    </select>

                    <p style={{ margin: 'auto', display: 'flex', marginLeft: '15px', marginRight: '15px' }}>to</p>

                    <select onChange={(e) => {
                        console.log(e.target.value);
                        setCurrencyTo(e.target.value);
                        setConverted('');
                    }}
                        defaultValue="default"
                    >
                        <option value={"default"}>Choose Currency</option>
                        {CurrencyCodes.map((data) => {
                            return (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            );
                        })}
                    </select>

                </div>
            </div>

            <div>
                <label htmlFor="amount">Currency Amount</label>
                <input id="amount" name="amount" type="number" placeholder="0" onChange={handleChange} value={amount} required autoComplete="off" style={{ margin: '10px' }} />
                <button onClick={convertAmount} >CONVERT</button>
            </div>

            {/* only display result if converted is not null */}
            {converted !== '' && <h1 style={{ color: 'black' }}>{currencyTo} {converted}</h1>}

            {/* mockup for page */}
            <img src={CompareScreenshot} style={{ width: '50%' }} />


        </div>
    )
}

// export page component
export default Convert;