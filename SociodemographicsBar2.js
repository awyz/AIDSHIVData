function createOptions(yAxisLabel, ifEpiProfileData) {

    var epiTitleString = '';
    if(ifEpiProfileData) epiTitleString = 'Epi Profile 2010-2015 / N = 2,519'

    var options = {
        title: {
            text: ['HIV Needs Assessment 2018 / N = 398', epiTitleString],
            display: true,
            fontSize: 20
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage of People with HIV'
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                    beginAtZero: true
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: yAxisLabel
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                },
                gridLines: {
                    display: false,
                }
            }],
        },
        pointLabelFontFamily : "Quadon Extra Bold",
        scaleFontFamily : "Quadon Extra Bold",
        legend: {
            display: ifEpiProfileData
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
                label: 'Epi Profile',
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
        labels: ['Methamphetamine', 'Maijuana', 'Cocaine', 'Heroin', 'Ecstasy', 'Crack', 'Other', 'None'],
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