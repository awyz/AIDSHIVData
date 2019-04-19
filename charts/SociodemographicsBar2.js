function createOptions(yAxisLabel, ifEpiProfileData, chart, xAxisLabel, percentage) {

    var epiTitleString = '';
    if(ifEpiProfileData) epiTitleString = 'Hawai`i State Epidemiological Profile / People Surveyed: 2,519'

    var options = {
        plugins: {
            color: '#000',
            datalabels: {
                color: '#000',
                formatter: function(value, context) {
                    return Math.round(value*100) + '%';
                },
                display: function(context) {
                    return context.dataset.data[context.dataIndex] >=.01; // or >= 1 or ...
                },
                round: function(context) {
                    return Math.ceil(context.dataset.data[context.dataIndex]);
                }
            }
        },
        title: {
            // text: ['HIV Needs Assessment 2018 / People Surveyed: 398', epiTitleString],
            // text: [chart, 'Needs Assessment ( n = 398)', epiTitleString],
            text: [chart],
            display: false,
            fontSize: 25
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: xAxisLabel,
                    fontSize: 18,
                    fontColor: 'black'
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                    beginAtZero: true,
                    fontSize: 18,
                    fontColor: 'black',
                    max: 1,
                    // stepSize: 100, /* total/4 shows 0, 25%, 50%, 75%, 100% */
                    callback: function(value, index, values) {
                        return (value * 100) + '%';
                    }
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    // labelString: yAxisLabel,
                    fontSize: 16,
                    fontColor: 'black'

                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 16,
                    fontColor: 'black'
                },
                gridLines: {
                    display: false,
                }
            }],
        },
        pointLabelFontFamily: "Quadon Extra Bold",
        scaleFontFamily: "Quadon Extra Bold",
        legend: {
            display: true,
            labels: {
                fontSize: 18,
                fontColor: 'black'
            }

        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {




                    if (!percentage) {




                        if (tooltipItems.datasetIndex === 0) {
                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel) + " (" + Math.ceil(tooltipItems.xLabel * 100 / 398) + "%)";
                        } else {
                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel) + " (" + Math.ceil(tooltipItems.xLabel * 100 / 2519) + "%)";
                        }
                    } else {




                        if (tooltipItems.datasetIndex === 0) {

                            console.log("nani4: " + tooltipItems.xLabel);

                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel * 398) + " (" + Math.ceil(tooltipItems.xLabel * 100 ) + "%)";
                        } else {

                            console.log("nani5: " + tooltipItems.xLabel);


                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel * 2519) + " (" + Math.ceil(tooltipItems.xLabel * 100 ) + "%)";
                        }
                    }
                    // afterLabel: function (tooltipItems, data) {
                    //     return  " (" + Math.ceil(tooltipItems.xLabel) + "%)";
                    // },
                }
            }
        }
    }
    return options;
}

// Age
var ageChart = document.getElementById('age');
var ctx = ageChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['55+', '45-54', '35-44', '25-34', '13-24', '<13'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                // data: [0.3, 0.5, 6.0, 10.6, 25.4, 57.3], <-- %, changed back to number using =CELL * 398/100
                // data: [228, 101, 42, 24, 2, 1], <-- Numbers
                data: [.57, .25, .11, .06, .01, 0],
                // data: [57.3, 25.4, 10.6, 6.0, .5, .3], <-- Actual data
                backgroundColor: [
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)'
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                // data: [0.2, 2.2, 11.4, 16.6, 34.1, 35.5],
                // data: [894, 859, 418, 287, 55, 5],
                data: [.355, .341, .166, .114, .022, .002],
                backgroundColor: [
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)'
                ]
            }

        ]
    },
    options: createOptions('Age', true, 'Age', 'Percentage of Sample', true)
});


// Case Management
var caseChart = document.getElementById('caseManagement');
var ctx = caseChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Life Foundation', ['Hawaii Island', 'HIV/AIDS Foundation'], 'Maui AIDS Foundation', 'Malama Pono (Kauai)'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                data: [.55, .259, .108, .08],
                // data: [219*100/298, 103*100/298, 43*100/298, 32*100/298],
                backgroundColor: [
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)'
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                // data: [0.2, 2.2, 11.4, 16.6, 34.1, 35.5],
                // data: [894, 859, 418, 287, 55, 5],
                data: [.684, .155, .122, .038],
                backgroundColor: [
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)'
                ]
            }
        ]
    },
    options: createOptions('Location of Case Management Services', true, 'Case Management Location', 'Percentage of Sample', true)
});








// Method of Transmission
var transmissionChart = document.getElementById('methodOfTransmission');
var ctx = transmissionChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: [ ['Male to Male', 'Sexual Contact'], ['Male to Female', 'Sexual Contact (Male)'], ['Male to Female', 'Sexual Contact (Female)'],
            'Injection Drug Use', 'Born HIV Infected', 'Other'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                data: [.676, .05, .095, .075, .0025, .05],
                // data: [269, 20, 38, 30, 1, 20],
                backgroundColor: [
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)'
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                data: [.719, .036, .066, .065, .006, .046],
                // data: [286, 14, 26, 26, 2, 18],
                backgroundColor: [
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)'
                ]}
        ]
    },
    options: createOptions('Method of Transmission', true, 'Method of Transmission', 'Percentage of Sample', true)
});

// Race
var raceChart = document.getElementById('race');
var ctx = raceChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['White', ['Native Hawaiian/', 'Pacific Islander'], 'African American', 'Asian', ['American Indian/', 'Alaskan Native'], 'Hispanic',
            'Multiple Races', 'Other', 'Prefer not to Answer'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                data: [.432, .0146, .025, .113, .005, .048, .216, .035, .008],
                // data: [172, 58, 10, 45, 2, 19, 86, 14, 3],
                backgroundColor: [
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                    'rgba(237, 119, 104, 0.4)',
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                data: [.494, .094, .066, .154, .002, .10, .085, .004, 0],
                // data: [197, 37, 26, 61, 1, 40, 32, 2, 0],
                backgroundColor: [
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)',
                    'rgba(118, 238, 206, 0.3)'
                ]}
        ]
    },
    options: createOptions('Race', true, 'Race', 'Percentage of Sample', true)
});



