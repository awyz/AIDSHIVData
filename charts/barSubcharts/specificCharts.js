var caseManagementBarriersReason = document.getElementById("cMReasons");

var stackedBar = new Chart(caseManagementBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Could not afford',
            'Did not know where to get it',
            'Service not available',
            'Did not qualify',
            'Did not have transportation',
            'Concerned about privacy',
            'Discrimination because of race',
            'Discrimination because of sexual orientation',
            'Discrimination because of gender',
            'I was not in stable living condition',
            'Nervous or afraid of what people might say',
            'Stigma due to HIV',
        ],
        datasets: [{
            label: "Very Difficult",
            data: [2, 2, 1, 1, 3, 2, 1, 1, 1, 2, 2, 2],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [0,0,0,1,0,0,0,0,0,1,0,0],
            backgroundColor: "rgba(152, 148, 255, 1)",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});