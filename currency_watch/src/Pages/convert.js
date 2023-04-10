import React from "react";
import { CurrencyCodes } from "../currency_codes";
import axios from 'axios';
import { useState, useEffect } from "react";
import CompareScreenshot from '../MacBook Air_CompareScreenshot.png'

function Convert() {

    const endpointConvert = 'convert';

    const api_key = '3adcdbb1074c952217f648676ec9305f';

    const [currencyFrom, setCurrencyFrom] = useState([]);
    const [currencyTo, setCurrencyTo] = useState([]);
    const [amount, setAmount] = useState([]);
    const [converted, setConverted] = useState([]);

    const handleChange = (event) => {
        setAmount(event.target.value);
        setConverted('');
    };

    // function to get new conversion
    const convertAmount = () => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointConvert + '?api_key=' + api_key + '&from=' + currencyFrom + '&to=' + currencyTo + '&amount=' + amount)
            .then(response => {

                console.log(response);
                console.log(response.data.response.value);

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
                <label for="amount">Currency Amount</label>
                <input id="amount" name="amount" type="number" placeholder="0" onChange={handleChange} value={amount} required autocomplete="off" style={{ margin: '10px'}} />
                <button onClick={convertAmount} >CONVERT</button>
            </div>

            {converted !== '' && <h1 style={{ color: 'black' }}>{currencyTo} {converted}</h1>}

            <img src={CompareScreenshot} style={{ width: '50%'}}/>


        </div>
    )
}

export default Convert;