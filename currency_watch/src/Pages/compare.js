import React from "react";
// import axios to use in API Call
import axios from 'axios';
// import useState and useEffect
import { useState, useEffect } from "react";
// import specific chart components
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import PolarAreaChart from "../components/PolarAreaChart";
import RadarChart from "../components/RadarChart";
// import array of currency codes
import { CurrencyCodes } from "../currency_codes";

function Compare() {

    // endpoints to be used in API call
    const endpointLatest = 'latest';
    const endpointHistorical = 'historical';

    // API Key
    const api_key = 'b519f8f005e1e5b8db27f39b6aa3474c';

    // Base currency to compare other currencies to, to be used in API url
    var base = 'USD';
    // var symbols = 'ZAR'

    // 2 states for each latest exchange value
    const [latestExchange1, setLatestExchange1] = useState('')
    const [latestExchange2, setLatestExchange2] = useState('')
    // 2 states for each selected currency code
    const [currencySelected1, setCurrencySelected1] = useState([]);
    const [currencySelected2, setCurrencySelected2] = useState([]);

    // year string to be used in API url
    const yearDate = '2022-';

    // arrays and state arrays for currency Dates and Rates for 1st selected currency
    const YearDates1 = [];
    const YearRates1 = [];
    const [apiYearRates1, setApiYearRates1] = useState([]);
    const [apiYearDates1, setApiYearDates1] = useState([]);

    // arrays and state arrays for currency Dates and Rates for 2nd selected currency
    const YearDates2 = [];
    const YearRates2 = [];
    const [apiYearRates2, setApiYearRates2] = useState([]);
    const [apiYearDates2, setApiYearDates2] = useState([]);

    // booleans to control whether to show sets of Graphs for each selected currency
    const [showGraphSet1, setShowGraphSet1] = useState(false);
    const [showGraphSet2, setShowGraphSet2] = useState(false);



    useEffect(() => {
        
        // axios call to get latest exchange rate
        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected1)
            .then(result => {

                setLatestExchange1(result.data.response.rates[currencySelected1])

            })
            .catch(err => {
                console.log(err)
            })

        // for loop to generate array of 12 exchange rates for the 12 months of 2022
        for (let i = 1; i < 13; i++) {
            // month string to be used in API call
            let month1 = i
            // if i < 10 add '0' to month string to be formatted correctly for API url
            if (i < 10) {
                // month string to be used in API call
                month1 = '0' + i;
                // array to contain year-month-day values for graph data labels
                YearDates1.push(yearDate + month1 + '-01')
            }
            else {
                // array to contain year-month-day values for graph data labels
                YearDates1.push(yearDate + month1 + '-01')
            }
            // axios call to get 1 months (1 day in the month)) exchange rate
            axios.get('https://api.currencybeacon.com/v1/' + endpointHistorical + '?api_key=' + api_key + '&base=' + base + '&date=' + yearDate + month1 + '-01' + '&symbols=' + currencySelected1)
                .then(result => {
                    // set singleDay to actual exchange rate
                    let singleDay1 = result.data.response.rates[currencySelected1];
                    // push singleDay (exchange rate) to YearRates array
                    YearRates1.push(singleDay1);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        // set Rates and dates state arrays to be used in chart data and options
        setApiYearRates1(YearRates1);
        setApiYearDates1(YearDates1);
        // console.log(apiYearRates1);

        // listener to make useEffect run on currency selected change
    }, [currencySelected1]);



    // useEffect to run when rates state array is set
    // this 'second' array is needed so that actual current array is used for graph data
    useEffect(() => {

        // console.log(apiYearRates1);

        // use setTimeout to give data a chance to load
        const timer1 = setTimeout(() => {

            // setup chart component
            setBarData1({
                labels: apiYearDates1,
                datasets: [
                    {
                        label: currencySelected1 + ' Exchange Rate to USD',
                        data: apiYearRates1,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ]
            })

            // setup chart component
            setPieData1({
                labels: apiYearDates1,
                datasets: [
                    {
                        label: currencySelected1 + ' Exchange Rate to USD',
                        data: apiYearRates1,
                    }
                ],
            });

            // setup chart component
            setPolarData1({
                labels: apiYearDates1,
                datasets: [
                    {
                        label: currencySelected1 + ' Exchange Rate to USD',
                        data: apiYearRates1,
                    }
                ],
            });

            // setup chart component
            setRadarData1({
                labels: apiYearDates1,
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
        }, 2000);

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

        // show graphs if a currency is selected
        if (currencySelected1 != '') {
            setShowGraphSet1(true);
        }

        return () => clearTimeout(timer1);

        // run useEffect when apiYearRates1 is set
    }, [apiYearRates1])


    // same logic as above just for second currency selected
    useEffect(() => {
        axios.get('https://api.currencybeacon.com/v1/' + endpointLatest + '?api_key=' + api_key + '&base=' + base + '&symbols=' + currencySelected2)
            .then(result => {

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
        setApiYearDates2(YearDates2);
        // console.log(apiYearRates2);

    }, [currencySelected2]);


    // same logic as above just for second currency selected
    useEffect(() => {

        // console.log(apiYearRates2);

        const timer2 = setTimeout(() => {

            // setup chart component
            setBarData2({
                labels: apiYearDates2,
                datasets: [
                    {
                        label: currencySelected2 + ' Exchange Rate to USD',
                        data: apiYearRates2,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ]
            })

            // setup chart component
            setPieData2({
                labels: apiYearDates2,
                datasets: [
                    {
                        label: currencySelected2 + ' Exchange Rate to USD',
                        data: apiYearRates2,
                    }
                ],
            });

            // setup chart component
            setPolarData2({
                labels: apiYearDates2,
                datasets: [
                    {
                        label: currencySelected2 + ' Exchange Rate to USD',
                        data: apiYearRates2,
                    }
                ],
            });

            // setup chart component
            setRadarData2({
                labels: apiYearDates2,
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

        }, 2000);

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

        if (currencySelected2 != '') {
            setShowGraphSet2(true);
        }

        return () => clearTimeout(timer2);

    }, [apiYearRates2])



    // setup chart component
    const [barData1, setBarData1] = useState();

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
    const [barData2, setBarData2] = useState();

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
    const [pieData1, setPieData1] = useState();

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
    const [pieData2, setPieData2] = useState();

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
    const [polarData1, setPolarData1] = useState();

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
    const [polarData2, setPolarData2] = useState();

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
    const [radarData1, setRadarData1] = useState();

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
    const [radarData2, setRadarData2] = useState();

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



    return (
        <div>
            <h1>Compare Currencies</h1>

            <div style={{ width: 1200, display: 'flex', margin: 'auto' }}>

                <div style={{ width: 600, margin: 'auto' }}>
                    {/* select box for currency code selection */}
                    <select onChange={(e) => {
                        console.log(e.target.value);
                        setCurrencySelected1(e.target.value);
                    }}
                        defaultValue="default"
                    >
                        {/* map currency codes to options */}
                        <option value={"default"}>Choose Currency</option>
                        {CurrencyCodes.map((data) => {
                            return (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            );
                        })}
                    </select>
                    {/* only show if a currency is selected */}
                    {currencySelected1 != '' && <p style={{ color: '#0dcaf0' }}>Latest Exchange Rate for <b>{currencySelected1}</b> against USD is: <b>{latestExchange1}</b></p>}
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
                    {currencySelected2 != '' && <p style={{ color: '#0dcaf0' }}>Latest Exchange Rate for <b>{currencySelected2}</b> against USD is: <b>{latestExchange2}</b></p>}
                </div>

            </div>

            <div style={{ width: 1200, display: 'flex', margin: 'auto' }}>

                <div style={{ width: 600, margin: 'auto' }}>
                    {/* only show graphs if boolean is set to true */}
                    {showGraphSet1 && <BarChart ChartOptions={optionsBar1} ChartData={barData1} />}
                    <br /><br />
                    {showGraphSet1 && <PieChart ChartOptions={optionsPie1} ChartData={pieData1} />}
                    <br /><br />
                    {showGraphSet1 && <RadarChart ChartOptions={optionsRadar1} ChartData={radarData1} />}
                    <br /><br />
                    {showGraphSet1 && <PolarAreaChart ChartOptions={optionsPolar1} ChartData={polarData1} />}
                </div>

                <div style={{ width: 600, margin: 'auto' }}>
                    {showGraphSet2 && <BarChart ChartOptions={optionsBar2} ChartData={barData2} />}
                    <br /><br />
                    {showGraphSet2 && <PieChart ChartOptions={optionsPie2} ChartData={pieData2} />}
                    <br /><br />
                    {showGraphSet2 && <RadarChart ChartOptions={optionsRadar2} ChartData={radarData2} />}
                    <br /><br />
                    {showGraphSet2 && <PolarAreaChart ChartOptions={optionsPolar2} ChartData={polarData2} />}
                </div>

            </div>

        </div>
    )
}

// export page component
export default Compare;