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
                    fontSize:11,
                    fontColor: 'black'
                },
                scaleLabel:{
                    display:true,
                    labelString: 'Number of Individuals',
                    fontSize: 16,
                    fontColor: 'black'
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
                    fontColor: 'black'
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
                backgroundColor: "rgba(56, 178, 0, 0.38)",
            },{ // Possible but required some work
                label: "Possible with some work",
                data: [39, 67, 73, 32, 74, 43, 58, 47, 47, 24, 15, 26, 15, 11, 11],
                backgroundColor: "rgba(254, 250, 128, 0.52)",
            }, { // Possible but very difficult
                label: "Possible but very difficult",
                data: [5, 38, 24, 6, 26, 35, 26, 9, 16, 7, 5, 6, 8, 4, 1],
                backgroundColor: "rgba(237, 119, 104, 0.4)",
            }, { // Too difficult to access
                label: "Too difficult to access",
                data: [1, 22, 5, 0, 10, 43, 10, 2, 16, 5, 14, 6, 3, 13, 2],
                backgroundColor: "rgba(183, 18, 0, 0.38)",
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
        console.log(barOptions_stacked);

        location.hash = "#theBox";

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
                window.location.hash = "#hivCaseManagement";
                break;

            case ("Dental Care"): // Dental
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("dentalDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.href = '#dentalDesc';
                break;

            case ("Counseling"): // Counseling
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("counselingDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#counseling";
                break;

            case ("Information"): // Info
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("infoDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#info";
                break;

            case ("Alternative Therapy"): // Easy alt therapy
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("altTherapyDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#therapy";
                break;

            case ("Assistance at Home"): // Assistance at home
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("homeAidDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#assist";
                break;

            case ("Paying Medical Costs"): // Medical costs
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("medDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#medical";
                break;

            case ("Enrolling in Insurance Coverage"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("insuranceDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#insurance";
                break;

            case ("Help with Alcohol/Drug Abuse"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("abuseDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#abuse";
                break;

            case ("Social Support"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("socialDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#social";
                break;

            case ("Employment"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("jobDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#job";
                break;

            case ("Education"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("eduDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#accessEducation";
                break;

            case ("Paying for Food"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("foodDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#food";
                break;

            case ("Housing"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("housingDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#housing";
                break;

            case ("Paying Bills"):
                document.getElementById("instructions").style.display = "none";
                var x = document.getElementById("billsDesc");
                if(x.style.display == "block")
                    x.style.display = "none"
                else
                    x.style.display = "block";
                window.location.hash = "#bills";
                break;
        }
        if (myChart.data.labels[activePoint._index][0].includes("Help with Alcohol")) {
            document.getElementById("instructions").style.display = "none";
            var x = document.getElementById("abuseDesc");
            if(x.style.display == "block")
                x.style.display = "none"
            else
                x.style.display = "block";
            window.location.hash = "#abuse";
        }
        else if (myChart.data.labels[activePoint._index][0].includes("Enrolling in")) {
            document.getElementById("instructions").style.display = "none";
            var x = document.getElementById("insuranceDesc");
            if(x.style.display == "block")
                x.style.display = "none"
            else
                x.style.display = "block";
            window.location.hash = "#insurance";

        }

    }
