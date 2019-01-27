var caseManagementBarriersReason = document.getElementById("cMReasons");

var stackedBar = new Chart(caseManagementBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'I was not in stable living condition',
            'Did not have transportation',
            'Could not afford',
            'Did not know where to get it',
            'Did not qualify',
            'Concerned about privacy',
            'Nervous or afraid of what people might say',
            'Stigma due to HIV',
            'Service not available',
            'Discrimination because of race',
            'Discrimination because of sexual orientation',
            'Discrimination because of gender',
        ],
        datasets: [{
            label: "Very Difficult",
            data: [2,3,2,2,1,2,2,2,1,1,1,1],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [1,0,0,0,1,0,0,0,0,0,0,0],
            backgroundColor: "#F3FFB6",
        }]
    },
   'options': {
     scales: {
        'xAxes': [{
          'type': 'linear',
          'ticks': {
            'min': 0,
            'max': 70
          },
        }],
      },
      'legend': {
        'position': 'right',
      },
  },
})