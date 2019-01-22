//doughnut chart for Dental Services
//still need to input values for sexual orienation and disability

// Dental general
var dentalBarriersReason = document.getElementById("denReasons");
var myChart = new Chart(dentalBarriersReason, {
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
            'I was not in stable living condition',
            'Nervous or afraid of what people might say',
            'Stigma due to HIV',
            'Discrimination because of my HIV status'],

        datasets: [{
            label: "Very Difficult",
            data: [26, 10, 12, 14, 8, 5, 1, 2, 3, 1, 5, 6, 4, 0],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [16,7,9,6,4,3,0,0,0,0,0,0,0,2,3,1,1],
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
// Dental general end
// Dental by ethnicity
var dentalBarriersEthnicity = document.getElementById("dentalEthnicity");
var chart2= new Chart(dentalBarriersEthnicity, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Prefer not to answer', 'Other Race', 'Other Asian', 'Other Pacific Islander', 'Hispanic',
            'American Indian', 'Filipino', 'Vietnamese', 'Korean', 'Chinese', 'Japanese',
            'African American', 'Samoan', 'Guamanian', 'Native Hawaiian', 'White'],
        datasets: [{
            label: "Very Difficult",
            data: [0,1,3,0,5,2,2,0,1,4,1,2,1,1,9,16],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [1,41,0,2,3,0,0,1,0,1,0,0,0,2,12],
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
// Dental by ethnicity
// Dental by age
var dentalBarriersAge = document.getElementById("dentalAge");
var chart3 = new Chart(dentalBarriersAge, {
    type: 'horizontalBar',
    data: {
        labels: [
            '55+', '45-54', '35-44', '25-34', '13-24'],
        datasets: [{
            label: "Very Difficult",
            data: [2,5,11,10,10],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [2,3,5,7,4],
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
// Dental by age
// Dental by education
var dentalBarriersEducation = document.getElementById("dentalEducation");
var myChart = new Chart(dentalBarriersEducation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Grades 9-11', 'High School Diploma or GED', 'Vocational/Technical School', 'Some College or Associate\'s Degree', 'Bachelor\'s Degree', 'Graduate Degree'],
        datasets: [{
            label: "Very Difficult",
            data: [2,11,2,14,5,4],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [2,4,1,9,3,2],
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
// Dental by education done

// Dental by income type
var dentalBarriersIncomeType = document.getElementById("dentalIncomeType");
var myChart = new Chart(dentalBarriersIncomeType, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Other', 'Employment Income', 'SSI/SSDI'
        ],
        datasets: [{
            label: "Very Difficult",
            data: [4,8,26],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [4,3,15],
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
// Dental by income type END

// Dental by sexual orientation
var dentalBarriersSexualOrientation = document.getElementById("dentalSexualOrientation");
var myChart = new Chart(dentalBarriersSexualOrientation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Heterosexual (Male)',
            'Bisexual (Male)',
            'Homosexual (Male)',
            'Heterosexual (Female),',
            'Bisexual (Female)',
            'Celibate',
            'Other'
        ],
        datasets: [{
            label: "Very Difficult",
            data: [3,6,17,8,1,3,3],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [2,4,12,3,"","",1],
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
        labels: ['None', 'Ecstasy', 'Heroin', 'Marijuana', 'Methamphetamine'],
        datasets: [{
            label: "Very Difficult",
            data: [22,0,14,1,22],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [15,2,5,3,15],
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
        labels: ['Other','Prefer Not to Answer','Unknown', 'Injection Drug Use', 'Sex with Women', 'Sex with Men'],
        datasets: [{
            label: "Very Difficult",
            data: [0,2,8,4,1,27],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [1,1,2,2,2,16],
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
// Dental MoT END