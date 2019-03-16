function createOptions(yAxisLabel, ifEpiProfileData, chart, xAxisLabel, percentage) {

    var epiTitleString = '';
    if(ifEpiProfileData) epiTitleString = 'Hawai`i State Epidemiological Profile / People Surveyed: 2,519'

    var options = {
        title: {
            // text: ['HIV Needs Assessment 2018 / People Surveyed: 398', epiTitleString],
            // text: [chart, 'Needs Assessment ( n = 398)', epiTitleString],
            text: [chart],
            display: true,
            fontSize: 25
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: xAxisLabel,
                    fontSize: 16,
                    fontcolor: '#000'
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                    beginAtZero: true,
                    fontSize: 16,
                    fontcolor: '#000',
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: yAxisLabel,
                    fontSize: 16,
                    fontcolor: '#000'
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 16,
                    fontcolor: '#000',
                },
                gridLines: {
                    display: false,
                }
            }],
        },
        pointLabelFontFamily: "Quadon Extra Bold",
        scaleFontFamily: "Quadon Extra Bold",
        legend: {
            display: ifEpiProfileData,
            labels: {
                fontSize: 18
            }

        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    if (!percentage) {
                        if (tooltipItems.datasetIndex === 0) {
                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel) + " (" + Math.ceil(tooltipItems.xLabel * 100 / 398) + "%)";
                            ;
                        } else {
                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel) + " (" + Math.ceil(tooltipItems.xLabel * 100 / 2519) + "%)";
                        }
                    } else {
                        if (tooltipItems.datasetIndex === 0) {
                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel * 398 /100) + " (" + Math.ceil(tooltipItems.xLabel) + "%)";
                        } else {
                            return data.datasets[tooltipItems.datasetIndex].label + ": " + Math.round(tooltipItems.xLabel * 2519 / 100) + " (" + Math.ceil(tooltipItems.xLabel) + "%)";
                        }
                    }
                    // afterLabel: function (tooltipItems, data) {
                    //     return  " (" + Math.ceil(tooltipItems.xLabel) + "%)";
                    // },
                }
            }
        }
    }
    return options;
}

// Sexual Orientation
var sexChart = document.getElementById('sexualOrientation');
var ctx = sexChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Homosexual (Male)', 'Bisexual (Male)', 'Heterosexual (Female)',
            'Heterosexual (Male)','Prefer not to Answer', 'Other','Celibate',
            'Bisexual (Female)', 'Homosexual (Female)'
        ],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                // data: [10.1, 12.1, 60.8, 0, 12.3, 1.5, 2.8, 3.5, 9.8],
                data: [242,49,48,40,39,14,11,6,0],
                backgroundColor: [
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e'
                ]},
        ]
    },
    options: createOptions('Sexual Orientation', false, 'Breakdown By Sexual Orientation', 'Number of Individuals', false)
});


// Income Type
var incomeChart = document.getElementById('incomeType');
var ctx = incomeChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['SSI/SSDI', 'Employment', 'Self-Employed', 'Veteran Benefits', 'Other'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                // data: [57, 24.4, 12, 1.3, 5.3],
                data: [227, 97, 48, 5, 21],
                backgroundColor: [
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e'
                ]},
        ]
    },
    options: createOptions('Income Source', false, 'Breakdown By Income Source', 'Number of Individuals', false)
});

// Education
var educationChart = document.getElementById('education');
var ctx = educationChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        // labels: ['Some College or Associate\'s Degree', 'High School Diploma or GED', 'Bachelor\'s Degree', 'Graduate Degree',
        //     'Grades 9-11', 'Vocational/Technical School', 'Grades 1-8'],
        labels: ['Graduate Degree', 'Bachelor\'s Degree', 'Some College or Associate\'s Degree', 'Vocational/Technical School',
            'High School Diploma or GED', 'Grades 9-11', 'Grades 1-8'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                // data: [11.6, 18.1, 35.4, 4.8, 22.4, 6, 1.8],
                data: [46, 72, 141, 19, 89, 24, 7],
                backgroundColor: [
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e'
                ]},
        ]
    },
    options: createOptions('Level of Education', false, 'Breakdown By Education Level', 'Number of Individuals', false)
});


// Disabilities
var disabilitiesChart = document.getElementById('disabilities');
var ctx = disabilitiesChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Heart Disease', 'Depression', 'Anxiety', 'Chronic Pain', 'Insomnia/Sleep Disorder', 'Arthritis',
            'Other Mental Health Disorders', 'Overactive Bladder', 'Sciatica', 'Migraine Headaches', 'Asthma',
            'Hearing Impairment', 'Irritable Bowel Syndrome', 'Emphysema', 'Cancer', 'Diabetes', 'Osteoporosis',
            'Hepatitis C', 'Eczema', 'Ulcers', 'Epilepsy'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                // data: [23.6, 21.6, 19.3, 17.3, 13.6, 12.6, 7.3, 7, 6.5, 6, 5.5, 5, 4.8, 3.5, 2.8, 2.5, 2.5, 2.3, 1.8, 1.3, 1],
                data: [94, 86, 77, 69, 54, 50, 29, 28, 26, 24, 22, 20, 19, 14, 11, 10, 10, 9, 7, 5, 4],
                backgroundColor: [
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e'
                ]},
        ]
    },
    options: createOptions('Chronic Conditions', false, 'Prevalence of Chronic Conditions', 'Number of Individuals', false)
});



// Drug Use
var drugChart = document.getElementById('drugUse');
var ctx = drugChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['None', 'Marijuana', 'Methamphetamine', 'Cocaine', 'Heroin', 'Ecstasy', 'Crack', 'Other'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                // data: [32.9, 9, 1.5, 1.3, 1, 1, 1, 61],
                data: [243, 131, 36, 6, 5, 4, 4, 4],
                backgroundColor: [
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e',
                    '#ff9e9e'
                ]},
        ]
    },
    options: createOptions('Drugs', false, 'Breakdown By Drug Use', 'Number of Individuals', false)
});