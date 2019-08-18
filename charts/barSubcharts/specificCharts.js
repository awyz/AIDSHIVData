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
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [0,1,0,0,0,0,0,1,0,0,0,0],
            backgroundColor: "rgba(183, 18, 0, .38)",
        }]
    },
   'options': {
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
        'xAxes': [{
          stacked: true,
          scaleLabel:{
             display:true,
              labelString: 'Number of Individuals',
              fontSize: 16,
              fontColor: 'black'
            },
            ticks: {
                autoSkip: true,
                fixedStepSize: 1,
                stepSize: 1
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
  },
})