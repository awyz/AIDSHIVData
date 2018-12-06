function createOptions(yAxisLabel, ifEpiProfileData) {

    var epiTitleString = '';
    if(ifEpiProfileData) epiTitleString = 'Hawaii\'s HIV/AIDS Survey / People Surveyed: 2,519'

    var options = {
        title: {
            text: ['HIV Needs Assessment 2018 / People Surveyed: 398', epiTitleString],
            display: true,
            fontSize: 25
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage of People with HIV',
                    fontSize:16,
                    fontcolor: '#000'
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                    beginAtZero: true,
                    fontSize:16,
                    fontcolor: '#000'
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: yAxisLabel,
                    fontSize:16,
                    fontcolor: '#000'
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize:16,
                    fontcolor: '#000'
                },
                gridLines: {
                    display: false,
                }
            }],
        },
        pointLabelFontFamily : "Quadon Extra Bold",
        scaleFontFamily : "Quadon Extra Bold",
        legend: {
            display: ifEpiProfileData,
            labels: {
                fontSize: 18
            }

        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    if(tooltipItems.datasetIndex === 0) {
                        return data.datasets[tooltipItems.datasetIndex].label + " Value: " + Math.round(tooltipItems.xLabel / 100 * 398);
                    } else {
                        return data.datasets[tooltipItems.datasetIndex].label + " Value: " + Math.round(tooltipItems.xLabel / 100 * 2519);
                    }
                },
                afterLabel: function (tooltipItems, data) {
                    return  data.datasets[tooltipItems.datasetIndex].label + " Percentage: " + tooltipItems.xLabel + "%";
                },
            }
        },
    }
    return options;
}

// Age
var ageChart = document.getElementById('age');
var ctx = ageChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['<13', '13-24', '25-34', '35-44', '45-54', '55+'],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [0.3, 0.5, 6.0, 10.6, 25.4, 57.3],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
            {
                label: 'State Survey',
                data: [0.2, 2.2, 11.4, 16.6, 34.1, 35.5],
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
    options: createOptions('Age', true)
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
                label: 'HIV Needs Assessment',
                data: [55, 25.9, 10.8, 8],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
        ]
    },
    options: createOptions('Case Management Provider', false)
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
                label: 'HIV Needs Assessment',
                data: [23.6, 21.6, 19.3, 17.3, 13.6, 12.6, 7.3, 7, 6.5, 6, 5.5, 5, 4.8, 3.5, 2.8, 2.5, 2.5, 2.3, 1.8, 1.3, 1],
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
    options: createOptions('Related Diseases', false)
});


// Drug Use
var drugChart = document.getElementById('drugUse');
var ctx = drugChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Marijuana', 'Methamphetamine', 'Cocaine', 'Heroin', 'Ecstasy', 'Crack', 'Other', 'None'],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [32.9, 9, 1.5, 1.3, 1, 1, 1, 61],
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
    options: createOptions('Drugs', false)
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
                label: 'HIV Needs Assessment',
                // data: [35.4, 22.4, 18.1, 11.6, 6, 4.8, 1.8],
                data: [11.6, 18.1, 35.4, 4.8, 22.4, 6, 1.8],
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
    options: createOptions('Level of Education', false)
});


// Income Type
var incomeChart = document.getElementById('incomeType');
var ctx = incomeChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['SSI/SSDI', 'Employment Income', 'Self-Employed', 'Veteran Benefits', 'Other'],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [57, 24.4, 12, 1.3, 5.3],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
        ]
    },
    options: createOptions('Income Type', false)
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
                label: 'HIV Needs Assessment',
                data: [67.6, 5, 9.5, 7.5, .25, 5],
                backgroundColor: [
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)',
                    'rgba(255, 104, 107, 1)'
                ]},
            {
                label: 'State Survey',
                data: [71.9, 3.6, 6.6, 6.5, 0.6, 4.6],
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
    options: createOptions('Method of Transmission', true)
});


// Race
var raceChart = document.getElementById('race');
var ctx = raceChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['White', 'Pacific Islander', 'African American', 'Asian', 'American Indian/Alaskan Native', 'Hispanic',
            'Multiple Races', 'Other', 'Prefer not to Answer'],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [43.2, 14.6, 2.5, 11.3, 0.5, 4.8, 21.6, 3.5, 0.8],
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
                label: 'State Survey',
                data: [49.4, 9.2, 6.6, 15.4, 0.2, 10, 8., 0.5, 0],
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
    options: createOptions('Race', true)
});


// Sexual Orientation
var sexChart = document.getElementById('sexualOrientation');
var ctx = sexChart.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Heterosexual (Male)', 'Heterosexual (Female)', 'Homosexual (Male)', 'Homosexual (Female)', 'Bisexual (Male)',
            'Bisexual (Female)', 'Celibate', 'Other', 'Prefer not to Answer'],
        datasets: [
            {
                label: 'HIV Needs Assessment',
                data: [10.1, 12.1, 60.8, 0, 12.3, 1.5, 2.8, 3.5, 9.8],
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
    options: createOptions('Sexual Orientation', false)
});
