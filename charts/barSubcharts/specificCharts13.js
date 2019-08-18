//paying for food

var foodBarriersReason = document.getElementById("fooReasons");
var myChart = new Chart(foodBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Did not qualify',
            'Service not available',
            'Too long of a wait ',
            'Did not have transportation',
            'Did not know where to get it',
            'Nervous or afraid of what people might say',
            'Could not afford',
            'Concerned about privacy',
            'Stigma due to HIV',
            'Discrimination because of sexual orientation',
            'I was not in stable living condition',
            'Discrimination because of my HIV status',
            'Did not have enough time off work',
            'Discrimination because of race',
            'Discrimination because of gender',
            ],

        datasets: [{
            label: "Very Difficult",
            data: [14,10,9,9,7,5,0,4,4,3,2,2,1,1,1],
            backgroundColor: "rgba(237, 119, 104, 0.4)",
        },{
            label: "Too Difficult",
            data: [1,5,6,0,2,1,6,0,0,0,0,0,0,0,0],
            backgroundColor: "rgba(183, 18, 0, .38)",
        }]
    },

    options: {
        plugins: {
            color: '#000',
            datalabels: {
                color: '#000',
                display: function(context) {
                    return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                }
            }
        },
        scales: {
            xAxes: [{
                stacked: true,
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
        },
        'legend': {
            labels: {
                fontColor: '#000'
            },
        },
    }});

//doughnut chart for Paying for Food
//still need to input values for sexual orienation and disability
/* 
var PayingForFoodDoughnut = echarts.init(document.getElementById('foodDesc'));
var PayingForFoodDoughnutOption = {
    title : {
        text: 'Paying For Food',
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
            name:'PayingForFood ',
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
                {value:10, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:26, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:7, name:'chose not\n to answer', itemStyle: {color: 'rgba(163, 155, 168, 1)'}},
                {value:237, name:'did not\n need service', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:74, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:44, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
PayingForFoodDoughnut.setOption(PayingForFoodDoughnutOption); */
//bar graph of PayingForFood Respondents that answered very or too difficult
/* 
//broken down by ethnicity
var PayingForFoodBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
var PayingForFoodOptions1 = {
    title: {
        text: 'PayingForFood Barriers Broken Down by Ethnicity',
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
        data: ['Prefer not to answer','Native Hawaiian','White','African American','Hispanic',
		'American Indian', 'Asian Indian', 'Chinese', 'Filipino','Japanese','Korean', 'Vietnamese', 
		'Guamanian', 'Samoan', 'Other Pacific Islander', 'Other Asian', 'Other Race']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: ["", 1, 4,"",1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [""],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
PayingForFoodBarriersEthnicity.setOption(PayingForFoodOptions1);


//broken down by age
var PayingForFoodBarriersAge = echarts.init(document.getElementById('hivCmAge'));
var PayingForFoodOptions2 = {
    title: {
        text: 'PayingForFood Barriers Broken Down by Age',
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
        data: ['55+', '45-54', '35-44', '25-34', '13-24', '<13']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [2,3,1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [""],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
PayingForFoodBarriersAge.setOption(PayingForFoodOptions2);

//broken down by PayingForFood
var PayingForFoodBarriersPayingForFood = echarts.init(document.getElementById('hivCmPayingForFood'));
var PayingForFoodOptions3 = {
    title: {
        text: 'PayingForFood Barriers Broken Down by PayingForFood',
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
        data: ['Graduate Degree','Bachelor\'s', 'Some College', 'Vocational School', 'High School',"Grades 9-11",'Prefer not to Answer']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [2,1,1,"",2,"",""],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [''],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
PayingForFoodBarriersPayingForFood.setOption(PayingForFoodOptions3);

//broken down by income type
var PayingForFoodBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
var PayingForFoodOptions4 = {
    title: {
        text: 'PayingForFood Barriers\n Broken Down by Income Type',
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
        data: ['SSI/SSDI','PayingForFood','Veteran\'s Benefits','Other']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [4,1,"",1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [''],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
PayingForFoodBarriersIncomeType.setOption(PayingForFoodOptions4);

//broken down by sexual orientation
var PayingForFoodBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
var PayingForFoodOptions5 = {
    title: {
        text: 'PayingForFood Barriers\n Broken Down by Sexual Orientation',
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
        data: ['Heterosexual','Homosexual','Bisexual',
		'Non-Binary','Other','Prefer not to answer']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: ["","","","",""],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["",""],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
PayingForFoodBarriersSexualOrientation.setOption(PayingForFoodOptions5);

//broken down by disability
var PayingForFoodBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var PayingForFoodOptions6 = {
    title: {
        text: 'PayingForFood Barriers Broken Down by Disability',
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
PayingForFoodBarriersDisability.setOption(PayingForFoodOptions6);

//broken down by drug use
var PayingForFoodBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
var PayingForFoodOptions7 = {
    title: {
        text: 'PayingForFood Barriers\n Broken Down by Drug Use',
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
        data: ['Cocaine','Crack','Ecstasy','Heroin', 'Marijuana',
		'Meth','None of the Above','Other']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: ["","","","",2,1,3],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["","","","",""],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
PayingForFoodBarriersDrugUse.setOption(PayingForFoodOptions7);

//broken down by method of transmission 
var PayingForFoodBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
var PayingForFoodOptions8 = {
    title: {
        text: 'PayingForFood Barriers\n Broken Down by Method of Transmission',
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
        data: ['Sex With Men','Sex With Women','Sharing Needles',
		'Blood Products or Transfusions','Was Born Infected','Unknown','Other','Prefer Not to Answer']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [3,"",1,1,'',1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [''],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}

			
			
		}
    ]
};
PayingForFoodBarriersMoT.setOption(PayingForFoodOptions8);
 */