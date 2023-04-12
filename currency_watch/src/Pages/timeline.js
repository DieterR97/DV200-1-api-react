import React from "react";
// import axios to use in API Call
import axios from 'axios';
// import useState and useEffect
import { useState, useEffect } from "react";
// import array of currency codes
import { CurrencyCodes } from "../currency_codes";
// import specific chart component
import LineChart from "../components/LineChart";
import { Chart } from "chart.js";

function Timeline() {

    // endpoints to be used in API call
    const endpointLatest = 'latest';
    const endpointHistorical = 'historical';

    // API Key
    const api_key = 'b519f8f005e1e5b8db27f39b6aa3474c';

    // Base currency to compare other currencies to, to be used in API url
    var base = 'USD';
    // var symbols = 'ZAR'


    // ! have to create own list of currency codes
    // const endpointCurrencies = 'currencies';
    // var typeFiat = 'fiat'
    // ! have to create own list of currency codes
    // const [currencies, setCurrencies] = useState([]);

    // ! have to create own list of currency codes
    // useEffect(() => {
    //     const url = 'https://api.currencybeacon.com/v1/' + endpointCurrencies + '?api_key=' + api_key + '&type=' + typeFiat;
    //     axios.get(url).then((response) => {

    //         console.log(response.data.response.fiats)
    //         setCurrencies(response.data.response.fiats)

    //     });
    // }, []);

    // state for selected currency code
    const [currencySelected, setCurrencySelected] = useState([]);
    // state for latest exchange value
    const [currentExchange, setCurrentExchange] = useState('')

    // year and month string to be used in API url
    const dateJan = '2023-01-';

    // arrays and state arrays for currency Dates and Rates for selected currency
    const JanDates = [];
    const JanRates = []
    const [apiJanDates, setApiJanDates] = useState([]);
    const [apiJanRates, setApiJanRates] = useState([]);

    // range of data set array, either 31 or 8
    const [range, setRange] = useState('31');

    // controls whether to show graph or not
    const [showLine, setShowLine] = useState(false);

    useEffect(() => {

        // axios call to get latest exchange rate
        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected)
            .then(result => {

                setCurrentExchange(result.data.response.rates[currencySelected])
                // console.log(result.data.response.rates[currencySelected])

            })
            .catch(err => {
                console.log(err)
            })

        // for loop to generate array of exchange rates for 'range'
        for (let i = 1; i < range; i++) {
            let day2 = i
            if (i < 10) {
                day2 = '0' + i;
                JanDates.push(dateJan + day2)
            }
            else {
                JanDates.push(dateJan + day2)
            }
            axios.get('https://api.currencybeacon.com/v1/' + endpointHistorical + '?api_key=' + api_key + '&base=' + base + '&date=' + dateJan + day2 + '&symbols=' + currencySelected)
                .then(result => {
                    let singleDay2 = result.data.response.rates[currencySelected];
                    JanRates.push(singleDay2);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        setApiJanRates(JanRates);
        setApiJanDates(JanDates);
        // console.log(apiJanRates);

    }, [currencySelected, range]);



    useEffect(() => {

        // console.log(apiJanDates);
        // console.log(apiJanRates);

        const timer = setTimeout(() => {
            setLineData({
                labels: apiJanDates,
                datasets: [
                    {
                        label: 'Currency over 30 Days',
                        data: apiJanRates,
                        borderColor: 'rgb(0, 0, 0)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                ],
            })
        }, 3000);

        const actualRange = range - 1;
        setOptionsLine({
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: currencySelected
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    display: false
                },
                title: {
                    display: true,
                    text: currencySelected + ' Price Over Last ' + actualRange + ' Days',
                    font: {
                        size: 34,
                        style: 'italic',
                        family: 'Helvetica Neue'
                    }
                },
            },
        })

        if (currencySelected != '') {
            setShowLine(true);
        }

        return () => clearTimeout(timer);

    }, [apiJanRates]);



    const [lineData, setLineData] = useState();

    const [optionsLine, setOptionsLine] = useState({
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Currency'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Over Days',
            },
        },
    });



    return (
        <div style={{ background: 'linear-gradient(198deg, rgba(255,255,255,1) 24%, rgba(13,202,240,1) 70%)' }}>
            <h1>Timeline</h1>
            <select onChange={(e) => {
                console.log(e.target.value);
                setCurrencySelected(e.target.value);
            }}
                defaultValue="default"
                style={{ marginRight: 20 }}
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

            <select onChange={(e) => {
                setRange(e.target.value)
            }}>
                <option value='31'>30 Days</option>
                <option value='8'>7 Days</option>
            </select>

            {currencySelected != '' && <p style={{ color: '#0dcaf0' }}><b>{currencySelected}</b> Current Exchange Rate to USD: <b>{currentExchange}</b></p>}

            {/* {lineData ? <div style={{ width: 1200, margin: 'auto', paddingBottom: '20px' }}><LineChart ChartOptions={optionsLine} ChartData={lineData} /></div> : null} */}
            {/* only show graph if boolean is set to true */}
            {showLine && <div style={{ width: 1200, margin: 'auto', paddingBottom: '20px' }}><LineChart ChartOptions={optionsLine} ChartData={lineData} /></div>}

        </div>
    )
}

// export page component
export default Timeline;