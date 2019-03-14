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
                    if (percentage) {
                        max: 100
                    }
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
                    fontcolor: '#000'
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

// Age
var ageChart = document.getElementById('age');
var ctx = ageChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['55+', '45-54', '35-44', '25-34', '13-24', '<13'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                // data: [0.3, 0.5, 6.0, 10.6, 25.4, 57.3], <-- %, changed back to number using =CELL * 398/100
                // data: [228, 101, 42, 24, 2, 1], <-- Numbers
                data: [57.3, 25.4, 10.6, 6.0, .5, .3],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                // data: [0.2, 2.2, 11.4, 16.6, 34.1, 35.5],
                // data: [894, 859, 418, 287, 55, 5],
                data: [35.5, 34.1, 16.6, 11.4, 2.2, .2],
                backgroundColor: [
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)'
                ]
            }

        ]
    },
    options: createOptions('Age', true, 'Breakdown By Age', 'Percentage of Sample', true)
});


// Case Management
var caseChart = document.getElementById('caseManagement');
var ctx = caseChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Life Foundation', 'Hawaii Island HIV/AIDS Foundation', 'Maui AIDS Foundation', 'Malama Pono (Kauai)'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                data: [55, 25.9, 10.8, 8],
                // data: [219*100/298, 103*100/298, 43*100/298, 32*100/298],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                // data: [0.2, 2.2, 11.4, 16.6, 34.1, 35.5],
                // data: [894, 859, 418, 287, 55, 5],
                data: [68.4, 15.5, 12.2, 3.8],
                backgroundColor: [
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)'
                ]
            }
        ]
    },
    options: createOptions('Location of Case Management Services', false, 'Breakdown By Case Management', 'Percentage of Sample', true)
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
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
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
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
        ]
    },
    options: createOptions('Drugs', false, 'Breakdown By Drug Use', 'Number of Individuals', false)
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
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
        ]
    },
    options: createOptions('Level of Education', false, 'Breakdown By Education Level', 'Number of Individuals', false)
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
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
        ]
    },
    options: createOptions('Income Source', false, 'Breakdown By Income Source', 'Number of Individuals', false)
});


// Method of Transmission
var transmissionChart = document.getElementById('methodOfTransmission');
var ctx = transmissionChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Male to Male Sexual Contact', 'Male to Female Sexual Contact (Male)', 'Male to Female Sexual Contact (Female)',
            'Injection Drug Use', 'Born HIV Infected', 'Other'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                data: [67.6, 5, 9.5, 7.5, .25, 5],
                // data: [269, 20, 38, 30, 1, 20],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                data: [71.9, 3.6, 6.6, 6.5, 0.6, 4.6],
                // data: [286, 14, 26, 26, 2, 18],
                backgroundColor: [
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)'
                ]}
        ]
    },
    options: createOptions('Method of Transmission', true, 'Breakdown By Method of Transmission', 'Percentage of Sample', true)
});

// Race
var raceChart = document.getElementById('race');
var ctx = raceChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['White', 'Native Hawaiian/Pacific Islander', 'African American', 'Asian', 'American Indian/Alaskan Native', 'Hispanic',
            'Multiple Races', 'Other', 'Prefer not to Answer'],
        datasets: [
            {
                label: 'Needs Assessment (n=398)',
                data: [43.2, 14.6, 2.5, 11.3, 0.5, 4.8, 21.6, 3.5, 0.8],
                // data: [172, 58, 10, 45, 2, 19, 86, 14, 3],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                ]},
            {
                label: 'Epidemiological Profile (n=2,519)',
                data: [49.4, 9.4, 6.6, 15.4, 0.2, 10, 8.5, 0.4, 0],
                // data: [197, 37, 26, 61, 1, 40, 32, 2, 0],
                backgroundColor: [
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)',
                    'rgba(104, 99, 240, 1)'
                ]}
        ]
    },
    options: createOptions('Race', true, 'Breakdown By Race', 'Percentage of Sample', true)
});


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
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
        ]
    },
    options: createOptions('Sexual Orientation', false, 'Breakdown By Sexual Orientation', 'Number of Individuals', false)
});
