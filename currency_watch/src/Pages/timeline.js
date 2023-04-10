import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { CurrencyCodes } from "../currency_codes";
import LineChart from "../components/LineChart";

function Timeline() {

    const endpointLatest = 'latest';
    const endpointHistorical = 'historical';

    const api_key = '3adcdbb1074c952217f648676ec9305f';
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


    const [currencySelected, setCurrencySelected] = useState([]);
    const [currentExchange, setCurrentExchange] = useState('')

    const dateJan = '2023-01-';

    const JanDates = [];
    const JanRates = [];

    const [apiJanRates, setApiJanRates] = useState([]);
    const [range, setRange] = useState('31');

    useEffect(() => {

        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected)
            .then(result => {

                // console.log(result);

                // for currency to symbols rates
                // console.log(result.data.response.rates[currencySelected])

                setCurrentExchange(result.data.response.rates[currencySelected])

            })
            .catch(err => {
                console.log(err)
            })

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
        console.log(apiJanRates);

        setLineData({
            labels: JanDates,
            datasets: [
                {
                    label: 'Currency over 30 Days',
                    data: apiJanRates,
                    borderColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            ],
        })

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

    }, [currencySelected, range]);









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
        <div style={{ background: 'linear-gradient(198deg, rgba(255,255,255,1) 24%, rgba(13,202,240,1) 70%)'}}>
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
                <option value='2'>1 Day</option>
            </select>

            {currencySelected != '' && <p style={{ color: '#0dcaf0' }}><b>{currencySelected}</b> Current Exchange Rate to USD: <b>{currentExchange}</b></p>}

            {lineData ? <div style={{ width: 1200, margin: 'auto', paddingBottom: '20px' }}><LineChart ChartOptions={optionsLine} ChartData={lineData} /></div> : null}

        </div>
    )
}

export default Timeline;