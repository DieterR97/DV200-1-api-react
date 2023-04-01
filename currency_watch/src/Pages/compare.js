import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
// import specific chart component
import LineChart from "../components/LineChart";


function Compare() {

    const endpointLatest = 'latest';
    const endpointCurrencies = 'currencies';
    const endpointHistorical = 'historical';

    const api_key = 'f3e9092fbf61bbd2495fbd10a402db8b';

    var base = 'USD';
    var symbols = 'ZAR'

    var typeFiat = 'fiat'
    var typeCrypto = 'crypto'

    const [exchange, setExchange] = useState('')
    const [currencies, setCurrencies] = useState([])

    const getExchange = () => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + symbols)
            .then(result => {

                console.log(result);

                // for currency to symbols rates
                console.log(result.data.response.rates.ZAR)
                setExchange(result.data.response.rates.ZAR)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const getCurrencies = () => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointCurrencies + '?api_key=' + api_key + '&type=' + typeFiat)
            .then(result => {

                console.log(result);

                // for currencies list
                console.log(result.data.response.fiats)



                // console.log(result.data.response.fiats.currency_code)
                // console.log(result.data.response.fiats.ZAR.currency_code)

                // setCurrencies(result.data.response.fiats.map((data) => data.currency_code))
                // setCurrencies(result.map((data) => data.data.response.fiats.currency_code))
                // console.log(currencies)

                // UserData.map((data) => data.year)

            })
            .catch(err => {
                console.log(err)
            })
    }





    // const JanRates = [];

    const date = '2023-01-';

    const getJanRates = () => {

        for (let i = 1; i < 7; i++) {
            if (i < 10) {
                const day = '0' + i;
                getDayRate(day)
            }
            else {
                const day = i;
                getDayRate(day)
            }
        }

        function getDayRate(day) {
            setTimeout(function () {


                axios.get('https://api.currencybeacon.com/v1/' + endpointHistorical + '?api_key=' + api_key + '&base=' + base + '&date=' + date + day + '&symbols=' + symbols)
                    .then(result => {

                        console.log(day);

                        console.log(result);

                        console.log(result.data.response.rates.ZAR);

                    })
                    .catch(err => {
                        console.log(err)
                    })

            }, 2000 * day);
        }
    }





    const getJanRates2 = () => {

        for (let i = 1; i < 7; i++) {
            if (i < 10) {
                const day = '0' + i;
                getDayRate2(day)
            }
            else {
                const day = i;
                getDayRate2(day)
            }
        }

        function getDayRate2(day) {

            axios.get('https://api.currencybeacon.com/v1/' + endpointHistorical + '?api_key=' + api_key + '&base=' + base + '&date=' + date + day + '&symbols=' + symbols)
                .then(result => {

                    console.log(day);

                    console.log(result);

                    console.log(result.data.response.rates.ZAR);

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }










    const dateJan = '2023-01-';

    const JanDates = [];
    const JanRates = [];

    for (let i = 1; i < 32; i++) {
        if (i < 10) {
            const day = '0' + i;
            JanDates.push(dateJan + day)
        }
        else {
            const day = i;
            JanDates.push(dateJan + day)
        }
    };

    // console.log(JanDates);

    const [apiJanRates, setApiJanRates] = useState([]);
    const [lineShow, setLineShow] = useState(false);

    useEffect(() => {

        for (let i = 1; i < 32; i++) {
            let day = i
            if (i < 10) {
                day = '0' + i;
            }
            axios.get('https://api.currencybeacon.com/v1/' + endpointHistorical + '?api_key=' + api_key + '&base=' + base + '&date=' + date + day + '&symbols=' + symbols)
                .then(result => {

                    let data = result.data.response.rates.ZAR;
                    JanRates.push(data);

                    // console.log(day);
                    // console.log(result);
                    // console.log(result.data.response.rates.ZAR);

                })
                .catch(err => {
                    console.log(err)
                })
        }

        setApiJanRates(JanRates);
        setLineShow(true);

    }, []);

    console.log(apiJanRates);





    // setup options for title
    const options = {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'R per $'
                }
            }
        }
    }

    // setup chart component
    const [lineChartDataJan, setLineChartDataJan] = useState({

        labels: JanDates,
        datasets: [
            {
                label: 'R per $',
                data: apiJanRates,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],

    });






    return (
        <div>
            <h1>Compare Currencies</h1>

            <button onClick={getExchange}>Get Exchange</button>
            <p>{exchange}</p>

            <button onClick={getCurrencies}>Get Currencies</button>
            {/* <p>{currencies}</p> */}
            <br /><br />

            <label htmlFor="currencyList">Currency Type</label>
            <select className="currencyList">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <br /><br />

            <button onClick={getJanRates}>Get Jan Rates</button>
            <br /><br />

            <button onClick={getJanRates2}>Get Jan Rates 2</button>
            <br /><br />

            <br />
            <h1>Line Chart</h1>
            <br />
            {/* <div style={{ width: 1200, margin: 'auto' }}>
                <LineChart ChartOptions={options} ChartData={lineChartDataJan} />
            </div> */}

            {lineShow ?
                <LineChart ChartOptions={options} ChartData={lineChartDataJan} />
                : <div>Loading...</div>}

            {/* {lineShow && <LineChart ChartOptions={options} ChartData={lineChartDataJan} />} */}


        </div>
    )
}

export default Compare;