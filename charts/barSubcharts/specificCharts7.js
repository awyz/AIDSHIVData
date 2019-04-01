//doughnut chart for Dental Services
//still need to input values for sexual orienation and disability

// Dental general
var dentalBarriersReason = document.getElementById("denReasons");
var myChart = new Chart(dentalBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Could not afford',
            'Too long of a wait',
            'Service not available',
            'Did not know where to get it',
            'Did not qualify',
            'Nervous or afraid of what people might say',
            'Did not have transportation',
            'I was not in stable living condition',
            'Stigma due to HIV',
            'Concerned about privacy',
            'Did not have enough time off work',
            'Did not have childcare',
            'They did not speak my primary language',
            'Discrimination because of my HIV status'],

        datasets: [{
            label: "Very Difficult",
            data: [26,12,14,10,8,6,5,5,4,3,2,1,1,0],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [16,9,6,7,4,3,3,2,1,0,0,0,0,1],
            backgroundColor: "rgba(183, 18, 0, .38)",
        }]
    },

    options: {
        plugins: {
            datalabels: {
                display: function(context) {
                    return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                }
            }
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {fontColor: 'black'},
                scaleLabel:{
                    display:true,
                    labelString: 'Number of Individuals',
                    fontSize: 16,
                    fontColor: 'black'
                },
            }],
            yAxes: [{
                stacked: true,
                ticks: {fontColor: 'black'}
            }]
        }
    }});
// Dental general end
// Dental by ethnicity
var dentalBarriersEthnicity = document.getElementById("dentalEthnicity");
var chart2= new Chart(dentalBarriersEthnicity, {
    type: 'horizontalBar',
    data: {
        labels: [
            'White',
            'Native Hawaiian',
            'Hispanic',
            'American Indian',
            'Other Race',
            'Chinese',
            'Other Asian',
            'Filipino',
            'African American',
            'Korean',
            'Japanese',
            'Other Pacific Islander',
            'Samoan',
            'Guamanian',
            'Prefer not to answer',
            'Vietnamese',

        ],
        datasets: [{
            label: "Very Difficult",
            data: [16,9,5,2,1,4,3,2,2,1,1,0,1,1,0,0],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [12,2,2,3,4,0,1,0,0,1,1,2,0,0,1,1],
            backgroundColor: "rgba(183, 18, 0, .38)",
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
// Dental by ethnicity
// Dental by age
var dentalBarriersAge = document.getElementById("dentalAge");
var chart3 = new Chart(dentalBarriersAge, {
    type: 'horizontalBar',
    data: {
        labels: [
            '25-34',
            '35-44',
            '13-24',
            '45-54',
            '55+',
            ],
        datasets: [{
            label: "Very Difficult",
            data: [10,11,10,5,2],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [7,5,4,3,2],
            backgroundColor: "rgba(183, 18, 0, .38)",
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
// Dental by age
// Dental by education
var dentalBarriersEducation = document.getElementById("dentalEducation");
var myChart = new Chart(dentalBarriersEducation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Grades 9-11',
            'High School Diploma or GED',
            'Vocational/Technical School',
            'Some College or Associate\'s Degree',
            'Bachelor\'s Degree',
            'Graduate Degree'
            ],
        datasets: [{
            label: "Very Difficult",
            data: [14,11,5,4,2,2],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [9,4,3,2,2,1],
            backgroundColor: "rgba(183, 18, 0, .38)",
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
// Dental by education done

// Dental by income type
var dentalBarriersIncomeType = document.getElementById("dentalIncomeType");
var myChart = new Chart(dentalBarriersIncomeType, {
    type: 'horizontalBar',
    data: {
        labels: [
            'SSI/SSDI',
            'Employment Income',
            'Other',
        ],
        datasets: [{
            label: "Very Difficult",
            data: [26,8,4],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [15,3,4],
            backgroundColor: "rgba(183, 18, 0, .38)",
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
// Dental by income type END

// Dental by sexual orientation
var dentalBarriersSexualOrientation = document.getElementById("dentalSexualOrientation");
var myChart = new Chart(dentalBarriersSexualOrientation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Homosexual (Male)',
            'Heterosexual (Female),',
            'Bisexual (Male)',
            'Heterosexual (Male)',
            'Other',
            'Celibate',
            'Bisexual (Female)',
        ],
        datasets: [{
            label: "Very Difficult",
            data: [17,8,6,3,3,3,1],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [12,3,4,2,1,0,0],
            backgroundColor: "rgba(183, 18, 0, .38)",
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
// Dental by sexual orientation END

/*
//broken down by disability
var DentalBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var DentalOptions6 = {
    title: {
        text: 'Dental Barriers Broken Down by Disability',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Heart Disease','Depression','Anxiety','Chronic Pain',
		'Insomnia/Sleep Disorder', 'Arthritis','Other Mental Health Disorders',
		'Overactive Bladder', 'Sciatica','Migrane Headaches','Asthma',
		'Hearing Impairment', 'Irriatable Bowel Syndrome','Emphysema',
		'Cancer','Diabetes','Osteoporosis','Hepatitis C','Eczema','Ulcers','Epilepsy']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [2,4,4,4,
			2,2,1,
			1,"",2,2,
			2,1,1,
			2,1,1,3,1,1,1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [1,1,1,"",
			"","","",
			1,"",1,"",
			"","","",
			1,"","","","","","",],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DentalBarriersDisability.setOption(DentalOptions6);
*/
// Dental drug use
var dentalBarriersDrugUse = document.getElementById("dentalDrugUse");
var myChart = new Chart(dentalBarriersDrugUse, {
    type: 'horizontalBar',
    title: {
        text: 'Dental Barriers\nBroken Down by Drug Use',
        x: 'center'
    },
    data: {
        labels: [
        'None',
        'Methamphetamine',
        'Heroin',
        'Marijuana',
        'Ecstasy',
        ],
        datasets: [{
            label: "Very Difficult",
            data: [22,22,14,1,0],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [15,15,5,3,2],
            backgroundColor: "rgba(183, 18, 0, .38)",
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
// Dental drug use END

// Dental MoT
var dentalBarriersMoT = document.getElementById("dentalMoT");
var myChart = new Chart(dentalBarriersMoT, {
    type: 'horizontalBar',
    title: {
        text: 'Dental Barriers\nBroken Down by Method of Transmission',
        x: 'center'
    },
    data: {
        labels: [
        'Sex with Men',
        'Unknown',
        'Injection Drug Use',
        'Prefer Not to Answer',
        'Sex with Women',
        'Other',
        ],
        datasets: [{
            label: "Very Difficult",
            data: [27,8,4,2,1,0],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [16,2,2,1,2,1],
            backgroundColor: "rgba(183, 18, 0, .38)",
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
// Dental MoT END