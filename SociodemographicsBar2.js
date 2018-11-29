function createOptions(xAxisLabel, yAxisLabel) {

    return options = {
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
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: yAxisLabel
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                }
            }],
            legend: {
                display: true
            }
        }
    }
}

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
    options: createOptions('Percentage of People with HIV', 'Age'),
});