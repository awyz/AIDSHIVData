//doughnut chart for Dental Services
//still need to input values for sexual orienation and disability
var dentalBarriersReason = echarts.init(document.getElementById('denReasons'));
var dentalOptions0 = {
	title: {
        text: 'Dental Barriers Broken Down by Reason',
		x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
	legend: {
		orient: 'vertical',
		left:'right',
        text: 'Top Barriers: \n1.\n2.'
	},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
		max: 40
    },
    yAxis: {
        type: 'category',
        data: ['Could not afford',
		'Did not know where to get it',
		'Too long of a wait',
		'Service not available',
		'Did not qualify',
		'Did not have transportation', 
		'Did not have childcare', 
		'Did not have enough time off work', 
		'Concered about privacy',
		'They did not speak my primary language',
		'Discrimination because of race', 
		'Discrimination because of sexual orientation', 
		'Discrimination because of gender',
		'I was not in stable living condition', 
		'Nervous or afraid of what people might say',
		'Stigma due to HIV', 
		'Discrimination because of my HIV status']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [
				{value:26, name:'Could not afford'},
				{value:10, name:'Did not know where to get it'},
				{value:12, name:'Too long of a wait '},
				{value:14, name:'Service not available'},
				{value:8, name:'Did not qualify'},
				{value:5, name:'Did not have transportation'},
				{value:1, name:'Did not have childcare'},
				{value:2, name:'Did not have enough time off work'},
				{value:3, name:'Concerned about privacy'},
				{value:1, name:'They did not speak my primary language'},
				{value:0, name:'Discrimination because of race'},
				{value:0, name:'Discrimination because of sexual orientation'},
				{value:0, name:'Discrimination because of gender'},
				{value:5, name:'I was not in stable living condition'},
				{value:6, name:'Nervous or afraid of what people might say'},
				{value:4, name:'Stigma due to HIV'},
				{value:0, name:'Discrimination because of my HIV status'}
				],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		
		{
			name:'Too Difficult',
			type: 'bar',
			 data: [
				{value:16, name:'Could not afford'},
				{value:7, name:'Did not know where to get it'},
				{value:9, name:'Too long of a wait '},
				{value:6, name:'Service not available'},
				{value:4, name:'Did not qualify'},
				{value:3, name:'Did not have transportation'},
				{value:0, name:'Did not have childcare'},
				{value:0, name:'Did not have enough time off work'},
				{value:0, name:'Concerned about privacy'},
				{value:0, name:'They did not speak my primary language'},
				{value:0, name:'Discrimination because of race'},
				{value:0, name:'Discrimination because of sexual orientation'},
				{value:0, name:'Discrimination because of gender'},
				{value:2, name:'I was not in stable living condition'},
				{value:3, name:'Nervous or afraid of what people might say'},
				{value:1, name:'Stigma due to HIV'},
				{value:1, name:'Discrimination because of my HIV status'},
				],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		},
		
    ]
};
dentalBarriersReason.setOption(dentalOptions0);

//dental doughnut
/* 
var DentalDoughnut = echarts.init(document.getElementById('doughnutDental'));
var DentalDoughnutOption = {
    title : {
        text: 'Dental Services Statistics',
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
            name:'Access to Dental Services',
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
                {value:22, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:132, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:5, name:'chose not\n to answer', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:238, name:'did not\n need service',itemStyle: {color: 'rgba(163, 155, 168, 1)'} },
                {value:67, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:134, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
DentalDoughnut.setOption(DentalDoughnutOption);
//bar graph of Dental Respondents that answered very or too difficult
*/
//broken down by ethnicity
var DentalBarriersEthnicity = echarts.init(document.getElementById('dentalEthnicity'));
var DentalOptions1 = {
    title: {
        text: 'Dental Barriers Broken Down by Ethnicity',
		x:'center'
    },
	legend: {
		orient: 'vertical',
		left:'right',
        data: ["","","","Very Difficult", "Too Difficult"]
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
            data: ["",9,16,2,5,2,"",4,2,1,1,"",1,1,"",3,1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [1,2,12,"",2,3,"","","",1,1,"","","","",1,4],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DentalBarriersEthnicity.setOption(DentalOptions1);

//broken down by age
var DentalBarriersAge = echarts.init(document.getElementById('dentalAge'));
var DentalOptions2 = {
    title: {
        text: 'Dental Barriers Broken Down by Age',
		x: 'center'
    },
	legend: {
		orient: 'vertical',
		left:'right',
        data: ["","","","Very Difficult", "Too Difficult"]
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
        boundaryGap: [0, 1.75]
    },
    yAxis: {
        type: 'category',
        data: ['55+', '45-54', '35-44', '25-34', '13-24', '<13']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [2,5,11,10,10,""],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [2,3,5,7,4,""],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DentalBarriersAge.setOption(DentalOptions2);

//broken down by education
var DentalBarriersEducation = echarts.init(document.getElementById('dentalEducation'));
var DentalOptions3 = {
    title: {
        text: 'Dental Barriers Broken Down by Education',
		x:'center'
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
            data: [4,5,14,2,11,2],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [2,3,9,1,4,2],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DentalBarriersEducation.setOption(DentalOptions3);

//broken down by income type
var DentalBarriersIncomeType = echarts.init(document.getElementById('dentalIncomeType'));
var DentalOptions4 = {
    title: {
        text: 'Dental Barriers\n Broken Down by Income Type',
		x:'center'
    },
	legend: {
		orient: 'vertical',
		left:'right',
        data: ["","","","Very Difficult", "Too Difficult"]
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
        data: ['SSI/SSDI','Employement','Veteran\'s Benefits','Other']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [26,8,"",4],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [15,3,"",4],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DentalBarriersIncomeType.setOption(DentalOptions4);

//broken down by sexual orientation
var DentalBarriersSexualOrientation = echarts.init(document.getElementById('dentalSexualOrientation'));
var DentalOptions5 = {
    title: {
        text: 'Dental Barriers\n Broken Down by Sexual Orientation',
		x:'center'
    },
	legend: {
		orient: 'vertical',
		left:'right',
        data: ["","","","Very Difficult", "Too Difficult"]
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
        data: ['Prefer not to answer','Other','Celibate','Bisexual (Female)', 'Bisexual (Male)',
            'Homosexual(Female)','Homosexual (Male)', 'Heterosexual (Female)', 'Heterosexual (Male)']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [3,6,17,8,1,3,"",3],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [2,4,12,3,"","","",1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DentalBarriersSexualOrientation.setOption(DentalOptions5);
/**
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
//broken down by drug use
var DentalBarriersDrugUse = echarts.init(document.getElementById('dentalDrugUse'));
var DentalOptions7 = {
    title: {
        text: 'Dental Barriers\n Broken Down by Drug Use',
		x:'center'
    },
	legend: {
		orient: 'vertical',
		left:'right',
        data: ["","","","Very Difficult", "Too Difficult"]
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
            data: ["","","",14,1,22,""],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["","",2,5,3,15,""],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DentalBarriersDrugUse.setOption(DentalOptions7);

//broken down by method of transmission 
var DentalBarriersMoT = echarts.init(document.getElementById('dentalMoT'));
var DentalOptions8 = {
    title: {
        text: 'Dental Barriers\n Broken Down by Method of Transmission',
		x:'center'
    },
	legend: {
		orient: 'vertical',
		left:'right',
        data: ["","","","Very Difficult", "Too Difficult"]
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
            data: [27,1,4,"","",8,"",2],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [16,2,2,"","",2,1,1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}

			
			
		}
    ]
};
DentalBarriersMoT.setOption(DentalOptions8);
 