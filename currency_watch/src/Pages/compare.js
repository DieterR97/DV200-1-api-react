import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
// import specific chart component
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import PolarAreaChart from "../components/PolarAreaChart";
import RadarChart from "../components/RadarChart";
import { CurrencyCodes } from "../currency_codes";

function Compare() {

    const endpointLatest = 'latest';
    const endpointHistorical = 'historical';

    const api_key = '3adcdbb1074c952217f648676ec9305f';

    var base = 'USD';
    // var symbols = 'ZAR'

    const [latestExchange1, setLatestExchange1] = useState('')
    const [latestExchange2, setLatestExchange2] = useState('')
    const [currencySelected1, setCurrencySelected1] = useState([]);
    const [currencySelected2, setCurrencySelected2] = useState([]);

    const yearDate = '2022-';

    const YearDates1 = [];
    const YearRates1 = [];
    const [apiYearRates1, setApiYearRates1] = useState([]);

    const YearDates2 = [];
    const YearRates2 = [];
    const [apiYearRates2, setApiYearRates2] = useState([]);

    useEffect(() => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected1)
            .then(result => {

                // console.log(result);

                // for currency to symbols rates
                // console.log(result.data.response.rates[currencySelected])

                setLatestExchange1(result.data.response.rates[currencySelected1])

            })
            .catch(err => {
                console.log(err)
            })

        for (let i = 1; i < 13; i++) {
            let month1 = i
            if (i < 10) {
                month1 = '0' + i;
                YearDates1.push(yearDate + month1 + '-01')
            }
            else {
                YearDates1.push(yearDate + month1 + '-01')
            }
            axios.get('https://api.currencybeacon.com/v1/' + endpointHistorical + '?api_key=' + api_key + '&base=' + base + '&date=' + yearDate + month1 + '-01' + '&symbols=' + currencySelected1)
                .then(result => {
                    let singleDay1 = result.data.response.rates[currencySelected1];
                    YearRates1.push(singleDay1);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        setApiYearRates1(YearRates1);
        console.log(apiYearRates1);



        // setup options for title
        setOptionsBar1({
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: currencySelected1
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected1 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        })

        // setup chart component
        setBarData1({
            labels: YearDates1,
            datasets: [
                {
                    label: currencySelected1 + ' Exchange Rate to USD',
                    data: apiYearRates1,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        })

        // setup options for title
        setOptionsPie1({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected1 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        });

        // setup chart component
        setPieData1({
            labels: YearDates1,
            datasets: [
                {
                    label: currencySelected1 + ' Exchange Rate to USD',
                    data: apiYearRates1,
                }
            ],
        });

        // setup options for title
        setOptionsPolar1({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected1 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        });

        // setup chart component
        setPolarData1({
            labels: YearDates1,
            datasets: [
                {
                    label: currencySelected1 + ' Exchange Rate to USD',
                    data: apiYearRates1,
                }
            ],
        });

        // setup options for title
        setOptionsRadar1({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected1 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        });

        // setup chart component
        setRadarData1({
            labels: YearDates1,
            datasets: [
                {
                    label: currencySelected1 + ' Exchange Rate to USD',
                    data: apiYearRates1,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }
            ],
        });

    }, [currencySelected1]);










    useEffect(() => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected2)
            .then(result => {

                // console.log(result);

                // for currency to symbols rates
                // console.log(result.data.response.rates[currencySelected])

                setLatestExchange2(result.data.response.rates[currencySelected2])

            })
            .catch(err => {
                console.log(err)
            })


        for (let i = 1; i < 13; i++) {
            let month2 = i
            if (i < 10) {
                month2 = '0' + i;
                YearDates2.push(yearDate + month2 + '-01')
            }
            else {
                YearDates2.push(yearDate + month2 + '-01')
            }
            axios.get('https://api.currencybeacon.com/v1/' + endpointHistorical + '?api_key=' + api_key + '&base=' + base + '&date=' + yearDate + month2 + '-01' + '&symbols=' + currencySelected2)
                .then(result => {
                    let singleDay2 = result.data.response.rates[currencySelected2];
                    YearRates2.push(singleDay2);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        setApiYearRates2(YearRates2);
        console.log(apiYearRates2);



        // setup options for title
        setOptionsBar2({
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: currencySelected2
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected2 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        })

        // setup chart component
        setBarData2({
            labels: YearDates2,
            datasets: [
                {
                    label: currencySelected2 + ' Exchange Rate to USD',
                    data: apiYearRates2,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        })

        // setup options for title
        setOptionsPie2({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected2 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        });

        // setup chart component
        setPieData2({
            labels: YearDates2,
            datasets: [
                {
                    label: currencySelected2 + ' Exchange Rate to USD',
                    data: apiYearRates2,
                }
            ],
        });

        // setup options for title
        setOptionsPolar2({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected2 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        });

        // setup chart component
        setPolarData2({
            labels: YearDates2,
            datasets: [
                {
                    label: currencySelected2 + ' Exchange Rate to USD',
                    data: apiYearRates2,
                }
            ],
        });

        // setup options for title
        setOptionsRadar2({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: currencySelected2 + ' Exchange Rate to USD - 12 Month History',
                },
            },
        });

        // setup chart component
        setRadarData2({
            labels: YearDates2,
            datasets: [
                {
                    label: currencySelected2 + ' Exchange Rate to USD',
                    data: apiYearRates2,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }
            ],
        });

    }, [currencySelected2]);
















    // setup options for title
    const [optionsBar1, setOptionsBar1] = useState({
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
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [barData1, setBarData1] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    });

    // setup options for title
    const [optionsBar2, setOptionsBar2] = useState({
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
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [barData2, setBarData2] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    });









    // setup options for title
    const [optionsPie1, setOptionsPie1] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [pieData1, setPieData1] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
            }
        ],
    });

    // setup options for title
    const [optionsPie2, setOptionsPie2] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [pieData2, setPieData2] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
            }
        ],
    });






    // setup options for title
    const [optionsPolar1, setOptionsPolar1] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [polarData1, setPolarData1] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
            }
        ],
    });

    // setup options for title
    const [optionsPolar2, setOptionsPolar2] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [polarData2, setPolarData2] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
            }
        ],
    });




    // setup options for title
    const [optionsRadar1, setOptionsRadar1] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [radarData1, setRadarData1] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ],
    });

    // setup options for title
    const [optionsRadar2, setOptionsRadar2] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Currency Exchange Rate to USD',
            },
        },
    });

    // setup chart component
    const [radarData2, setRadarData2] = useState({
        labels: [1, 2, 3],
        datasets: [
            {
                label: 'Currency Exchange Rate to USD',
                data: [1, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ],
    });






    return (
        <div>
            <h1>Compare Currencies</h1>

            <div style={{ width: 1200, display: 'flex', margin: 'auto' }}>

                <div style={{ width: 600, margin: 'auto' }}>
                    <select onChange={(e) => {
                        console.log(e.target.value);
                        setCurrencySelected1(e.target.value);
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
                    {currencySelected1 !== '' && <p style={{ color: '#0dcaf0' }}>Latest Exchange Rate for <b>{currencySelected1}</b> against USD is: <b>{latestExchange1}</b></p>}
                    <BarChart ChartOptions={optionsBar1} ChartData={barData1} />
                    <br /><br />
                    <PieChart ChartOptions={optionsPie1} ChartData={pieData1} />
                    <br /><br />
                    <RadarChart ChartOptions={optionsRadar1} ChartData={radarData1} />
                    <br /><br />
                    <PolarAreaChart ChartOptions={optionsPolar1} ChartData={polarData1} />

                </div>
                <div style={{ width: 600, margin: 'auto' }}>
                    <select onChange={(e) => {
                        console.log(e.target.value);
                        setCurrencySelected2(e.target.value);
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
                    {currencySelected2 !== '' && <p style={{ color: '#0dcaf0' }}>Latest Exchange Rate for <b>{currencySelected2}</b> against USD is: <b>{latestExchange2}</b></p>}
                    <BarChart ChartOptions={optionsBar2} ChartData={barData2} />
                    <br /><br />
                    <PieChart ChartOptions={optionsPie2} ChartData={pieData2} />
                    <br /><br />
                    <RadarChart ChartOptions={optionsRadar2} ChartData={radarData2} />
                    <br /><br />
                    <PolarAreaChart ChartOptions={optionsPolar2} ChartData={polarData2} />


                </div>

            </div>

        </div>
    )
}

export default Compare;