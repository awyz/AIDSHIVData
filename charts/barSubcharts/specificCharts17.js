//Alternative Therapy

var altTherapyBarriersReason = document.getElementById("therReasons");
var myChart = new Chart(altTherapyBarriersReason, {
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
            'Discrimination because of sexual orientation',
            'I was not in stable living condition',
            'Nervous or afraid of what people might say',
            'Stigma due to HIV',
            'Discrimination because of my HIV status',
            ],

        datasets: [{
            label: "Very Difficult",
            data: [29,12,13,6,7,1,2,2,2,1,1,1,1,0,0],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [35,18,16,15,5,4,3,1,0,1,1,1,0,1,1],
            backgroundColor: "#F3FFB6",
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

// Ethnicity

var altTherapyEthnicity = document.getElementById("altTherapyEthnicity");
var myChart = new Chart(altTherapyEthnicity, {
    type: 'horizontalBar',
    data: {
        labels: [
            'White',
            'Native Hawaiian',
            'Hispanic',
            'Chinese',
            'Japanese',
            'Other Race',
            'American Indian',
            'Filipino',
            'Korean',
            'Prefer not to answer',
            'Other Asian',
            'African American',
            'Samoan',
            ],
        datasets: [{
            label: "Very Difficult",
            data: [22,8,2,5,4,4,1,5,2,0,1,0,0],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [19,7,12,2,3,2,5,0,2,2,1,1,1],
            backgroundColor: "#F3FFB6",
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
// Ethnicity end

// Age

var altTherapyAge = document.getElementById("altTherapyAge");
var myChart = new Chart(altTherapyAge, {
    type: 'horizontalBar',
    data: {
        labels: [
            '55+',
            '45-54',
            '35-44',
            '25-34',
            //'13-24', '<13'
        ],

        datasets: [{
            label: "Very Difficult",
            data: [20,7,4,4],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [17,18,5,3],
            backgroundColor: "#F3FFB6",
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
// Age end

// Education

var altTherapyEducation = document.getElementById("altTherapyEducation");
var myChart = new Chart(altTherapyEducation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Some College or Associate\'s Degree',
            'High School Diploma or GED',
            'Bachelor\'s Degree',
            'Graduate Degree',
            'Grades 9-11',
            'Vocational/Technical School',
            ],
        datasets: [{
            label: "Very Difficult",
            data: [16,9,6,3,0,1],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [14,11,6,7,3,2],
            backgroundColor: "#F3FFB6",
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
// Education end

// Income

var altTherapyIncome = document.getElementById("altTherapyIncomeType");
var myChart = new Chart(altTherapyIncome, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Other', 'SSI/SSDI', 'Employment Income'
        ],

        datasets: [{
            label: "Very Difficult",
            data: [5,19, 11],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [26,11,6],
            backgroundColor: "#F3FFB6",
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
// Income end

// Sexual orientation

var altTherapySexualOrientation = document.getElementById("altTherapySexualOrientation");
var myChart = new Chart(altTherapySexualOrientation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Homosexual (Male)',
            'Heterosexual (Female)',
            'Heterosexual (Male)',
            'Other',
            'Bisexual (Female)',
            'Bisexual (Male)',
            'Homosexual(Female)',
            'Celibate',
        ],

        datasets: [{
            label: "Very Difficult",
            data: [22,6,4,1,1,1,0,1],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [30,6,1,2,2,2,2,0],
            backgroundColor: "#F3FFB6",
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
// Sexual orientation END

// Drug use

var altTherapyDrugs = document.getElementById("altTherapyDrugUse");
var myChart = new Chart(altTherapyDrugs, {
    type: 'horizontalBar',
    data: {
        labels: [
            'None',
            'Marijuana',
            'Methamphetamine',
            'Ecstasy',
            'Other',
            'Crack',
            'Heroin',
            'Cocaine',
        ],

        datasets: [{
            label: "Very Difficult",
            data: [19,13,5,2,0,1,1,1],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [27,15,2,0,1,0,0,0],
            backgroundColor: "#F3FFB6",
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
// Drug use END

// MoT

var altTherapyMoT = document.getElementById("altTherapyMoT");
var myChart = new Chart(altTherapyMoT, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Sex with Men',
            'Injection Drug Use',
            'Unknown',
            'Prefer Not to Answer',
            'Sex with Women',
            'Other',
            'Born HIV Infected',
            'Blood Products or Transfusions',
        ],

        datasets: [{
            label: "Very Difficult",
            data: [28,7,2,0,1,1,0,0],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [35,1,5,2,1,0,1,1],
            backgroundColor: "#F3FFB6",
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
// MoT END

//still need to input values for sexual orienation and disability
/* 
var AlternativeTherapyDoughnut = echarts.init(document.getElementById('altTherapy'));
var AlternativeTherapyDoughnutOption = {
    title : {
        text: 'Alternative Therapy Statistics',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['too difficult', 'possible but\n very difficult', 
		'chose not\n to answer','did not\n need service','possible with\n some work','easy']
    },
    series: [
        {
            name:'Access to Alternative Therapy Services',
            type:'pie',
            radius: ['45%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:43, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:35, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:241, name:'chose not\n to answer', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:7, name:'did not\n need service',itemStyle: {color: 'rgba(163, 155, 168, 1)'} },
                {value:43, name:'possible with\n some work', itemStyle: {color: '#F3FFB6'}},
                {value:29, name:'easy', itemStyle: {color: '#FF9505'}}
            ]
        }
    ]
};
AlternativeTherapyDoughnut.setOption(AlternativeTherapyDoughnutOption);
*/


//broken down by disability
/* var AlternativeTherapyBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var AlternativeTherapyOptions6 = {
    title: {
        text: 'AlternativeTherapy Barriers Broken Down by Disability',
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
AlternativeTherapyBarriersDisability.setOption(AlternativeTherapyOptions6);
 */
