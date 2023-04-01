import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { CurrencyCodes } from "../currency_codes";

function Timeline() {

    const endpointLatest = 'latest';
    const endpointCurrencies = 'currencies';
    const api_key = 'f3e9092fbf61bbd2495fbd10a402db8b';
    var typeFiat = 'fiat'
    var base = 'USD';
    // var symbols = 'ZAR'

    const [currencies, setCurrencies] = useState([]);
    const [currencySelected, setCurrencySelected] = useState([]);

    const [exchange, setExchange] = useState('')

    useEffect(() => {
        const url = 'https://api.currencybeacon.com/v1/' + endpointCurrencies + '?api_key=' + api_key + '&type=' + typeFiat;
        axios.get(url).then((response) => {

            console.log(response.data.response.fiats)
            setCurrencies(response.data.response.fiats)
            // console.log(currencies)
            // let currencyCode = []
            // console.log(response.data.response.fiats.length);
            // for (let i = 0; i < response.data.response.fiats.length; i++) {
            //     const element = response.data.response.fiats;
            //     console.log(element);
            // }

            // console.log(result.data.response.fiats.currency_code)
            // console.log(result.data.response.fiats.ZAR.currency_code)

            // setCurrencies(result.data.response.fiats.map((data) => data.currency_code))
            // setCurrencies(result.map((data) => data.data.response.fiats.currency_code))
            // console.log(currencies)

        });
    }, []);

    useEffect(() => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected)
            .then(result => {

                console.log(result);

                // for currency to symbols rates
                console.log(result.data.response.rates[currencySelected])
                
                setExchange(result.data.response.rates[currencySelected])

            })
            .catch(err => {
                console.log(err)
            })
    }, [currencySelected]);


    // const getExchange = () => {
    //     axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected)
    //         .then(result => {

    //             console.log(result);

    //             // for currency to symbols rates
    //             console.log(result.data.response.rates.currencySelected)
    //             setExchange(result.data.response.rates.currencySelected)

    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <div>
            <h1>Timeline</h1>
            <select onChange={(e) => {
                console.log(e.target.value);
                setCurrencySelected(e.target.value);
                // getExchange();
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

            <p>Exchange Rate: {exchange}</p>


        </div>
    )
}

export default Timeline;