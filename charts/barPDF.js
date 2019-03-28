// todo Change the fonts

var group;

var barOptions_stacked = {
    plugins: {
        datalabels: {
            display: function(context) {
                return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
            }
        }
    },
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
//                    fontSize:16,
                fontcolor: '#000'
            },
            stacked: true
        }]
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
    title: {
        text: "Access to Services",
        display: false,
//            fontSize: 40
    },
    legend: {
        display: true,
        position: 'right',
        labels: {
//                fontSize: 18
        }
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItems, data) {
                var percentage = Math.round((tooltipItems.xLabel * 100) / 398);
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + " ("+ percentage + "%)";
            },
        }
    }
};

var ctx = document.getElementById("myBarChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["HIV Case Management", "Dental Care", "Paying Medical Costs", "Information", "Paying for Food", "Alternative Therapy", "Housing", ["Enrolling in", "Insurance Coverage"], "Paying Bills", "Social Support", "Counseling",  "Assistance at Home", "Employment", "Education",
            ["Help with Alcohol", "and Drug Abuse"]],
        datasets: [{ // Easy
            label: "Easy",
            data: [277, 134, 99, 120, 44, 29, 48, 62, 29, 55, 54, 28, 5, 3, 12],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{ // Possible but required some work
            label: "Possible with some work",
            data: [39, 67, 73, 32, 74, 43, 58, 47, 47, 24, 15, 26, 15, 11, 11],
            backgroundColor: "rgba(152, 148, 255, 1)",
        }, { // Possible but very difficult
            label: "Possible but very difficult",
            data: [5, 38, 24, 6, 26, 35, 26, 9, 16, 7, 5, 6, 8, 4, 1],
            backgroundColor: "#FF9505",
        }, { // Too difficult to access
            label: "Too difficult to access",
            data: [1, 22, 5, 0, 10, 43, 10, 2, 16, 5, 14, 6, 3, 13, 2],
            backgroundColor: "#F3FFB6",
//                hoverBackgroundColor: "rgba(166, 60, 6, 1)"
        }, { // blanks
            label: "Did not need service",
            data: [75, 132, 194, 238, 237, 241, 249, 273, 283, 300, 303, 329, 360, 360, 366],
            backgroundColor: "rgba(184, 197, 214, 1)"
        }, { // No
            label: "Chose not to answer",
            data: [1, 5, 3, 2, 7, 7, 7, 5, 7, 7, 7, 3, 7, 7, 6],
            backgroundColor: "rgba(163, 155, 168, 1)"
        }]
    },

    options: barOptions_stacked,
});

// Show everything
window.onload=function(){
    document.getElementById("hivDesc").style.display='block';
    document.getElementById("dentalDesc").style.display='block';
    document.getElementById("counselingDesc").style.display='block';
    document.getElementById("infoDesc").style.display='block';
    document.getElementById("altTherapyDesc").style.display='block';
    document.getElementById("homeAidDesc").style.display='block';
    document.getElementById("medDesc").style.display='block';
    document.getElementById("insuranceDesc").style.display='block';
    document.getElementById("abuseDesc").style.display='block';
    document.getElementById("socialDesc").style.display='block';
    document.getElementById("jobDesc").style.display='block';
    document.getElementById("eduDesc").style.display='block';
    document.getElementById("foodDesc").style.display='block';
    document.getElementById("housingDesc").style.display='block';
    document.getElementById("billsDesc").style.display='block';
}

document.getElementById("myBarChart").onclick = function (evt) {
    var activePoint = myChart.getElementAtEvent(evt)[0];
    var data = activePoint._chart.data;
    var datasetIndex = activePoint._datasetIndex;
    var label = data.datasets[datasetIndex].label;
    var value = data.datasets[datasetIndex].data[activePoint._index];

    console.log("index: " + datasetIndex);
    console.log(myChart.data.labels[activePoint._index]);
    console.log(barOptions_stacked);

    location.hash = "#theBox";

    console.log(label, value, datasetIndex);
    closeAll();


    

}
