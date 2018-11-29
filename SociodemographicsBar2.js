var ageChart = document.getElementById('age');
var myChart = new Chart(ageChart, {
    type: 'horizontalBar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
            ]},
            {
                label: 'Epi Profile',
                data: [1, 2, 3, 4, 5, 6],
            }

        ]
    },
    options: createOptions('Percentage of People with HIV', 'Age', 398)
    // options: options
});

var ageChart = document.getElementById('caseManagement');
var myChart = new Chart(ageChart, {
    type: 'horizontalBar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [4, 12, 6, 5, 1, 3],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ]},
            {
                label: 'Epi Profile',
                data: [1, 2, 3, 4, 5, 6],
            }

        ]
    },
    options: createOptions('Percentage of People with HIV', 'Age', 398)
    // options: options
});

function createOptions(xAxisLabel, yAxisLabel, nValue) {

    var options = {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: xAxisLabel
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                    beginAtZero: true
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: yAxisLabel
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                },
                gridLines: {
                    display: false
                }
            }],
            legend: {
                display: true
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ": www" + tooltipItems.xLabel;
                        // console.log(label);
                        // return label;
                    }
                }
            }
        }
    }
    console.log(options);
    return options;
}