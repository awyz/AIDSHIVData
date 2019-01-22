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
            'Discrimination because of my HIV status'],

        datasets: [{
            label: "Very Difficult",
            data: [29, 12, 7, 13, 6, 1, 1, 2, 1, 0, 1, 1, 2, 2, 0],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [35,18,5,16,15,4,0,0,1,1, 1,1,3,1,1],
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

// Ethnicity

var altTherapyEthnicity = document.getElementById("altTherapyEthnicity");
var myChart = new Chart(altTherapyEthnicity, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Prefer not to answer', 'Other Race', 'Other Asian', 'Hispanic', 'American Indian', 'Filipino', 'Korean', 'Chinese', 'Japanese','African American', 'Samoan', 'Native Hawaiian', 'White'],
        datasets: [{
            label: "Very Difficult",
            data: [0,4,1,2,1,5,2,5,4,0,0,8,22],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [2,2,1,12,5,0,2,2,3,1,1,7,19],
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
// Ethnicity end

// Age

var altTherapyAge = document.getElementById("altTherapyAge");
var myChart = new Chart(altTherapyAge, {
    type: 'horizontalBar',
    data: {
        labels: [
            '55+', '45-54', '35-44', '25-34',
            //'13-24', '<13'
        ],

        datasets: [{
            label: "Very Difficult",
            data: [20,7,4,4],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [17,18,5,3],
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
// Age end

// Education

var altTherapyEducation = document.getElementById("altTherapyEducation");
var myChart = new Chart(altTherapyEducation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Grades 9-11', 'High School Diploma or GED', 'Vocational/Technical School', 'Some College or Associate\'s Degree', 'Bachelor\'s Degree', 'Graduate Degree'],
        datasets: [{
            label: "Very Difficult",
            data: ["",9,1,16,6,3],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [3,11,2,14,6,7],
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
// Education end

// Income

var altTherapyIncome = document.getElementById("altTherapyIncomeType");
var myChart = new Chart(altTherapyIncome, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Other', 'Employment Income', 'SSI/SSDI'
        ],

        datasets: [{
            label: "Very Difficult",
            data: [5,11,19],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [26,6,11],
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
// Income end

// Sexual orientation

var altTherapySexualOrientation = document.getElementById("altTherapySexualOrientation");
var myChart = new Chart(altTherapySexualOrientation, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Other','Celibate','Bisexual (Female)', 'Bisexual (Male)','Homosexual(Female)','Homosexual (Male)', 'Heterosexual (Female)', 'Heterosexual (Male)'
        ],

        datasets: [{
            label: "Very Difficult",
            data: [1,1,1,1,0,22,6,4],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [2,0,2,2,2,30,6,1],
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
// Sexual orientation END

// Drug use

var altTherapyDrugs = document.getElementById("altTherapyDrugUse");
var myChart = new Chart(altTherapyDrugs, {
    type: 'horizontalBar',
    data: {
        labels: [
            'None', 'Other', 'Crack', 'Ecstasy', 'Heroin', 'Cocaine', 'Methamphetamine', 'Marijuana'
        ],

        datasets: [{
            label: "Very Difficult",
            data: [19, 0, 1, 2, 1, 1, 5, 13],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [27, 1, 0, 0, 0, 0, 2, 15],
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
// Drug use END

// MoT

var altTherapyMoT = document.getElementById("altTherapyMoT");
var myChart = new Chart(altTherapyMoT, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Other','Prefer Not to Answer','Unknown', 'Born HIV Infected', 'Blood Products or Transfusions','Injection Drug Use', 'Sex with Women', 'Sex with Men'
        ],

        datasets: [{
            label: "Very Difficult",
            data: [1,0,2,0,0,7,1,28],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [0,2,5,1,1,1,1,35],
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
                {value:43, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:29, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
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
