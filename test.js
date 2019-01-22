var caseManagement_stacked = {
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero:true,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
            scaleLabel:{
                display:false
            },
            gridLines: {
            },
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:16,
                fontcolor: '#000'
            },
            stacked: true
        }]
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
    title: {
        text: 'Case Management Barriers Broken Down by Reason',
        fontSize: 40
    },
    legend: {
        display: true,
        position: 'right',
        labels: {
            fontSize: 18
        }
    },
};

var ctx = document.getElementById("cMReasons");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Could not afford',
            'Did not know where to get it',
            'Too long of a wait ',
            'Service not available',
            'Did not qualify',
            'Did not have transportation',
            'Did not have childcare',
            'Did not have enough time off work',
            'Concerned about privacy',
            'They did not speak my primary language',
            'Discrimination because of race',
            'Discrimination because of sexual orientation',
            'Discrimination because of gender',
            'I was not in stable living condition',
            'Nervous or afraid of what people might say',
            'Stigma due to HIV',
            'Discrimination because of my HIV status'],

        datasets: [{
            label: "Very Difficult",
            data: [2, 2, 0, 1, 1, 3, 0, 0, 2, 0, 1, 1, 1, 2, 2, 2, 0],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
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
    }});