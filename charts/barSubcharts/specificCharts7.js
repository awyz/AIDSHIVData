//doughnut chart for Dental Services
//still need to input values for sexual orienation and disability

// Dental general
var dentalBarriersReason = document.getElementById("denReasons");
var myChart = new Chart(dentalBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Could not afford',
            'Too long of a wait',
            'Service not available',
            'Did not know where to get it',
            'Did not qualify',
            'Nervous or afraid of what people might say',
            'Did not have transportation',
            'I was not in stable living condition',
            'Stigma due to HIV',
            'Concerned about privacy',
            'Did not have enough time off work',
            'Did not have childcare',
            'They did not speak my primary language',
            'Discrimination because of my HIV status'],

        datasets: [{
            label: "Very Difficult",
            data: [26,12,14,10,8,6,5,5,4,3,2,1,1,0],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [16,9,6,7,4,3,3,2,1,0,0,0,0,1],
            backgroundColor: "rgba(183, 18, 0, .38)",
        }]
    },

    options: {
        plugins: {
            color: '#000',
            datalabels: {
                color: '#000',
                display: function(context) {
                    return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                }
            }
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {fontColor: 'black'},
                scaleLabel:{
                    display:true,
                    labelString: 'Number of Individuals',
                    fontSize: 16,
                    fontColor: 'black'
                },
            }],
            yAxes: [{
                stacked: true,
                ticks: {fontColor: 'black'}
            }]
        },
        'legend': {
            labels: {
                fontColor: '#000'
            },
        },
    }});