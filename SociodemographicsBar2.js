// var canvas = document.getElementById("age");
// var ctx = canvas.getContext('2d');
//
// // // Global Options:
// // Chart.defaults.global.defaultFontColor = 'dodgerblue';
// // Chart.defaults.global.defaultFontSize = 16;
// //
// // Data with datasets options
// var data = {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//         {
//             label: "HIV Needs Assessment",
//             fill: true,
//             data: [11, 9, 4, 10, 3, 2]
//         },
//         {
//             label: "Epi Profile",
//             fill: true,
//             data: [11, 9, 4, 10, 3, 2]
//         }
//     ]
// };
//
// var options = {
//     tooltips: {
//         callbacks: {
//             label: function(tooltipItem, data) {
//                 return "$" + Number(tooltipItem.yLabel) + " and so worth it !";
//             }
//         }
//     },
//     title: {
//         display: true,
//         text: 'Ice Cream Truck',
//     },
//     scales: {
//         xAxes: [{
//             scaleLabel: {
//                 display: true,
//                 labelString: "someLabel"
//             },
//             ticks: {
//                 fontFamily: "'Open Sans Bold', sans-serif",
//                 fontSize: 11,
//                 beginAtZero: true
//             },
//         }],
//         yAxes: [{
//             scaleLabel: {
//                 display: true,
//                 labelString: "OtherLabel"
//             },
//             ticks: {
//                 fontFamily: "'Open Sans Bold', sans-serif",
//                 fontSize: 11,
//             },
//             gridLines: {
//                 display: false
//             }
//         }],
//         legend: {
//             display: true
//         },
//     }
// };
//
// // Chart declaration:
// var myBarChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: data,
//     options: options
// });

var ageChart = document.getElementById('age');
var ctx = ageChart.getContext('2d');



var myChart = new Chart(ctx, {
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

function createOptions(xAxisLabel, yAxisLabel, nValue) {

    var options = {
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label + ": www" + tooltipItems.xLabel;
                }
            }
        },
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
        }
    }
    console.log(options);
    return options;
}

// function generateLabel (tooltipItems, data) {
//     return data.datasets[tooltipItems.datasetIndex].label + ": www" + tooltipItems.xLabel;
// }