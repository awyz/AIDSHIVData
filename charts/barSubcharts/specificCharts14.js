//housing

var housingBarriersReason = document.getElementById("housReasons");
var myChart = new Chart(housingBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Too long of a wait ',
            'Service not available',
            'Did not qualify',
            'Nervous or afraid of what people might say',
            'Did not know where to get it',
            'Stigma due to HIV',
            'Concerned about privacy',
            'Discrimination because of my HIV status',
            'Could not afford',
            'Did not have transportation',
            'I was not in stable living condition',
            'Discrimination because of sexual orientation',
            'Did not have enough time off work',
            'Discrimination because of race',
            'Discrimination because of gender',
            ],

        datasets: [{
            label: "Very Difficult",
            data: [14,9,9,8,6,6,6,4,0,5,4,2,2,1,1],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [3,8,0,1,2,1,0,2,5,0,1,1,0,0,0],
            backgroundColor: "#F3FFB6",
        }]
    },

    options: {
        scales: {
            xAxes: [{
                stacked: true,
                scaleLabel:{
                    display:true,
                    labelString: 'Number of Individuals',
                    fontSize: 16,
                    fontcolor: '#000'
                },
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }});

//top barrier too long of a wait
    
//doughnut chart for Paying for Housing
//still need to input values for sexual orienation and disability
/* 
var PayingForHousingDoughnut = echarts.init(document.getElementById('housingDesc'));
var PayingForHousingDoughnutOption = {
    title : {
        text: 'Paying For Housing',
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
            name:'PayingForHousing ',
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
                {value:249, name:'did not\n need service', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:58, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:48, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
PayingForHousingDoughnut.setOption(PayingForHousingDoughnutOption); */
//bar graph of PayingForHousing Respondents that answered very or too difficult
/* 
//broken down by ethnicity
var PayingForHousingBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
var PayingForHousingOptions1 = {
    title: {
        text: 'PayingForHousing Barriers Broken Down by Ethnicity',
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
PayingForHousingBarriersEthnicity.setOption(PayingForHousingOptions1);


//broken down by age
var PayingForHousingBarriersAge = echarts.init(document.getElementById('hivCmAge'));
var PayingForHousingOptions2 = {
    title: {
        text: 'PayingForHousing Barriers Broken Down by Age',
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
PayingForHousingBarriersAge.setOption(PayingForHousingOptions2);

//broken down by PayingForHousing
var PayingForHousingBarriersPayingForHousing = echarts.init(document.getElementById('hivCmPayingForHousing'));
var PayingForHousingOptions3 = {
    title: {
        text: 'PayingForHousing Barriers Broken Down by PayingForHousing',
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
PayingForHousingBarriersPayingForHousing.setOption(PayingForHousingOptions3);

//broken down by income type
var PayingForHousingBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
var PayingForHousingOptions4 = {
    title: {
        text: 'PayingForHousing Barriers\n Broken Down by Income Type',
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
        data: ['SSI/SSDI','PayingForHousing','Veteran\'s Benefits','Other']
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
PayingForHousingBarriersIncomeType.setOption(PayingForHousingOptions4);

//broken down by sexual orientation
var PayingForHousingBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
var PayingForHousingOptions5 = {
    title: {
        text: 'PayingForHousing Barriers\n Broken Down by Sexual Orientation',
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
PayingForHousingBarriersSexualOrientation.setOption(PayingForHousingOptions5);

//broken down by disability
var PayingForHousingBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var PayingForHousingOptions6 = {
    title: {
        text: 'PayingForHousing Barriers Broken Down by Disability',
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
PayingForHousingBarriersDisability.setOption(PayingForHousingOptions6);

//broken down by drug use
var PayingForHousingBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
var PayingForHousingOptions7 = {
    title: {
        text: 'PayingForHousing Barriers\n Broken Down by Drug Use',
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
PayingForHousingBarriersDrugUse.setOption(PayingForHousingOptions7);

//broken down by method of transmission 
var PayingForHousingBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
var PayingForHousingOptions8 = {
    title: {
        text: 'PayingForHousing Barriers\n Broken Down by Method of Transmission',
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
PayingForHousingBarriersMoT.setOption(PayingForHousingOptions8);
 */