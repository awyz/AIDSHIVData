function createOptions(yAxisLabel) {

    var options = {
        title: {
            text: ['HIV Needs Assessment 2018 / N = 398', 'Epi Profile 2010-2015 / N = 2,519'],
            display: true,
            fontSize: 20
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage of People with HIV'
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
                    display: false,
                }
            }],
        },
        pointLabelFontFamily : "Quadon Extra Bold",
        scaleFontFamily : "Quadon Extra Bold",
        legend: {
            display: true,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    if(tooltipItems.datasetIndex === 0) {
                        return data.datasets[tooltipItems.datasetIndex].label + " Value: " + Math.round(tooltipItems.xLabel / 100 * 398);
                    } else {
                        return data.datasets[tooltipItems.datasetIndex].label + " Value: " + Math.round(tooltipItems.xLabel / 100 * 2519);
                    }
                },
                afterLabel: function (tooltipItems, data) {
                    return  data.datasets[tooltipItems.datasetIndex].label + " Percentage: " + tooltipItems.xLabel;
                },
            }
        },
    }
    return options;
}

var ageChart = document.getElementById('age');
var ctx = ageChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['<13', '13-24', '25-34', '35-44', '45-54', '55+'],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [0.3, 0.5, 6.0, 10.6, 25.4, 57.3],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 99, 132)'
                ]},
            {
                label: 'Epi Profile',
                data: [0.2, 2.2, 11.4, 16.6, 34.1, 35.5],
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 162, 235)'
                ]
            }

        ]
    },
    options: createOptions('Age')
});