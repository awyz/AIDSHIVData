var caseManagementBarriersReason = document.getElementById("cMReasons");

var stackedBar = new Chart(caseManagementBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Did not have transportation',
            'I was not in stable living condition',
            'Could not afford',
            'Did not know where to get it',
            'Stigma due to HIV',
            'Concerned about privacy',
            'Nervous or afraid of what people might say',
            'Did not qualify',
            'Service not available',
            'Discrimination because of race',
            'Discrimination because of sexual orientation',
            'Discrimination because of gender',
        ],
        datasets: [{
            label: "Very Difficult",
            data: [3,2,2,2,2,2,2,1,1,1,1,1],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [0,1,0,0,0,0,0,1,0,0,0,0],
            backgroundColor: "#F3FFB6",
        }]
    },
   'options': {
     scales: {
        'xAxes': [{
          stacked: true,
          scaleLabel:{
             display:true,
              labelString: 'Number of Individuals',
              fontSize: 16,
              fontcolor: '#000'
            },
          // 'ticks': {
          //     beginAtZero: true,
          //     'min': 0,
          //   'max': 3
          // },
        }],
         yAxes: [{
            stacked: true
         }]
      },
      'legend': {
        'position': 'right',
      },
  },
})