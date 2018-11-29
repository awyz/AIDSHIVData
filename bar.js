    // todo Change the fonts

    var group;

    var barOptions_stacked = {
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
                    fontSize:11
                },
                stacked: true
            }]
        },
        legend:{
            display:false
        },
        pointLabelFontFamily : "Quadon Extra Bold",
        scaleFontFamily : "Quadon Extra Bold",
        title: {
            text: "Access to Services",
            display: false,
            fontSize: 40
        },
        legend: {
            display: true,
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel;
                }, //todo Fix these percentages!!!!
                afterLabel: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i=0; i < allData.length; i++) {
                            total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return (tooltipPercentage + '%');
                }
            }
        }
    };

// todo Decide on a color palette

    var ctx = document.getElementById("myBarChart");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["HIV Case Management", "Dental Care", "Counseling", "Information", "Alternative Therapy", "Aid at Home", "Paying Medical Costs", "Enrolling in Insurance Coverage", "Help with Alcohol/Drug Abuse", "Social Support", "Employment", "Education", "Paying for Food", "Housing", "Paying Bills"],

            datasets: [{ // Easy
                label: "Easy",
                data: [277, 134, 54, 120, 29, 28, 99, 62, 12, 55, 5, 3, 44, 48, 29],
                backgroundColor: "rgba(104, 99, 240, 1)",
            },{ // Possible but required some work
                label: "Possible with some work",
                data: [39, 67, 15, 32, 43, 26, 73, 47, 11, 24, 15, 11, 74, 58, 47],
                backgroundColor: "rgba(152, 148, 255, 1)",
            }, { // Possible but very difficult
                label: "Possible but very difficult",
                data: [5, 38, 5, 6, 35, 6, 24, 9, 1, 7, 8, 4, 26, 26, 16],
                backgroundColor: "rgba(255, 166, 166, 1)",
            }, { // Too difficult to access
                label: "Too difficult to access",
                data: [1, 22, 14, 0, 43, 6, 5, 2, 2, 5, 3, 13, 10, 10, 16],
                backgroundColor: "rgba(255, 104, 107, 1)",
//                hoverBackgroundColor: "rgba(166, 60, 6, 1)"
            }, { // blanks
                label: "Chose not to answer",
                data: [1, 5, 7, 2, 241, 3, 3, 5, 6, 7, 7, 7, 7, 7, 7],
                backgroundColor: "rgba(184, 197, 214, 1)"
            }, { // No
                label: "Did not need service",
                data: [75, 132, 303, 238, 7, 329, 194, 273, 366, 300, 360, 360, 237, 249, 283],
                backgroundColor: "rgba(163, 155, 168, 1)"
            }]
        },

        options: barOptions_stacked,
    });

    // Hide everything
    window.onload=function(){
        document.getElementById("hivDesc").style.display='none';
        document.getElementById("dentalDesc").style.display='none';
        document.getElementById("counselingDesc").style.display='none';
        document.getElementById("infoDesc").style.display='none';
        document.getElementById("altTherapyDesc").style.display='none';
        document.getElementById("homeAidDesc").style.display='none';
        document.getElementById("medDesc").style.display='none';
        document.getElementById("insuranceDesc").style.display='none';
        document.getElementById("abuseDesc").style.display='none';
        document.getElementById("socialDesc").style.display='none';
        document.getElementById("jobDesc").style.display='none';
        document.getElementById("eduDesc").style.display='none';
        document.getElementById("foodDesc").style.display='none';
        document.getElementById("housingDesc").style.display='none';
        document.getElementById("billsDesc").style.display='none';
    }

    document.getElementById("myBarChart").onclick = function (evt) {
        var activePoint = myChart.getElementAtEvent(evt)[0];
        var data = activePoint._chart.data;
        var datasetIndex = activePoint._datasetIndex;
        var label = data.datasets[datasetIndex].label;
        var value = data.datasets[datasetIndex].data[activePoint._index];

        console.log("index: " + datasetIndex);
        console.log(myChart.data.labels[activePoint._index]);

        // location.hash = "#theBox";

        function closeAll() {
            console.log("Close everything");
            document.getElementById("hivDesc").style.display='none';
            document.getElementById("dentalDesc").style.display='none';
            document.getElementById("counselingDesc").style.display='none';
            document.getElementById("infoDesc").style.display='none';
            document.getElementById("altTherapyDesc").style.display='none';
            document.getElementById("homeAidDesc").style.display='none';
            document.getElementById("medDesc").style.display='none';
            document.getElementById("insuranceDesc").style.display='none';
            document.getElementById("abuseDesc").style.display='none';
            document.getElementById("socialDesc").style.display='none';
            document.getElementById("jobDesc").style.display='none';
            document.getElementById("eduDesc").style.display='none';
            document.getElementById("foodDesc").style.display='none';
            document.getElementById("housingDesc").style.display='none';
            document.getElementById("billsDesc").style.display='none';
        }

        console.log(label, value, datasetIndex);
        closeAll();


        // Sees which bar has been clicked & acts accordingly
        switch(myChart.data.labels[activePoint._index]) {
            case ("HIV Case Management"): // HIV Case Management
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("hivDesc");
                if(x.style.display == "block") {
                    x.style.display = "none";
                }
                else {
                    x.style.display = "block";
                }
                break;

            case ("Dental Care"): // Dental
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("dentalDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Counseling"): // Counseling
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("counselingDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Information"): // Info
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("infoDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Alternative Therapy"): // Easy alt therapy
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("altTherapyDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Aid at Home"): // Assistance at home
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("homeAidDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Paying Medical Costs"): // Medical costs
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("medDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Enrolling in Insurance Coverage"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("insuranceDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Help with Alcohol/Drug Abuse"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("abuseDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Social Support"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("socialDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Employment"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("jobDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Education"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("eduDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Paying for Food"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("foodDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Housing"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("housingDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;

            case ("Paying Bills"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("billsDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                break;
        }

    }