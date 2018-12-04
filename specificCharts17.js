//Alternative Therapy
var AlternativeTherapyBarriersReason = echarts.init(document.getElementById('therReasons'));
var AlternativeTherapyOptions0 = {
	title: {
        text: 'Alternative Therapy Barriers Broken Down by Reason',
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
        data: ["","","","Very Difficult", "Too Difficult"]
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
				{value:29, name:'Could not afford'},
				{value:12, name:'Did not know where to get it'},
				{value:7, name:'Too long of a wait '},
				{value:13, name:'Service not available'},
				{value:6, name:'Did not qualify'},
				{value:1, name:'Did not have transportation'},
				{value:1, name:'Did not have childcare'},
				{value:2, name:'Did not have enough time off work'},
				{value:1, name:'Concerned about privacy'},
				{value:0, name:'They did not speak my primary language'},
				{value:0, name:'Discrimination because of race'},
				{value:1, name:'Discrimination because of sexual orientation'},
				{value:0, name:'Discrimination because of gender'},
				{value:1, name:'I was not in stable living condition'},
				{value:2, name:'Nervous or afraid of what people might say'},
				{value:2, name:'Stigma due to HIV'},
				{value:0, name:'Discrimination because of my HIV status'}
				],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		
		{
			name:'Too Difficult',
			type: 'bar',
			 data: [
				{value:35, name:'Could not afford'},
				{value:18, name:'Did not know where to get it'},
				{value:5, name:'Too long of a wait '},
				{value:16, name:'Service not available'},
				{value:15, name:'Did not qualify'},
				{value:4, name:'Did not have transportation'},
				{value:0, name:'Did not have childcare'},
				{value:0, name:'Did not have enough time off work'},
				{value:1, name:'Concerned about privacy'},
				{value:1, name:'They did not speak my primary language'},
				{value:0, name:'Discrimination because of race'},
				{value:1, name:'Discrimination because of sexual orientation'},
				{value:0, name:'Discrimination because of gender'},
				{value:1, name:'I was not in stable living condition'},
				{value:3, name:'Nervous or afraid of what people might say'},
				{value:1, name:'Stigma due to HIV'},
				{value:1, name:'Discrimination because of my HIV status'},
				],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		},
		
    ]
};
//top barrier could not afford
    
     AlternativeTherapyBarriersReason.setOption(AlternativeTherapyOptions0);
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
//bar graph of AlternativeTherapy Respondents that answered very or too difficult

//broken down by ethnicity
var AlternativeTherapyBarriersEthnicity = echarts.init(document.getElementById('dentalEthnicity'));
var AlternativeTherapyOptions1 = {
    title: {
        text: 'Alternative Therapy Barriers Broken Down by Ethnicity',
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
        max: 40
    },
    yAxis: {
        type: 'category',
        data: ['Prefer not to answer', 'Other Race', 'Other Asian', 'Other Pacific Islander', 'Hispanic',
            'American Indian', 'Asian Indian', 'Filipino', 'Vietnamese', 'Korean', 'Chinese', 'Japanese',
            'African American', 'Samoan', 'Guamanian', 'Native Hawaiian', 'White']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [0,4,1,0,2,1,0,5,0,2,5,4,0,0,0,8,22],
            itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
            data: [2,2,1,0,12,5,0,0,0,2,2,3,1,1,0,7,19],
            itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
AlternativeTherapyBarriersEthnicity.setOption(AlternativeTherapyOptions1);


//broken down by age
var AlternativeTherapyBarriersAge = echarts.init(document.getElementById('dentalAge'));
var AlternativeTherapyOptions2 = {
    title: {
        text: 'Alternative Therapy Barriers Broken Down by Age',
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
        max: 40
    },
    yAxis: {
        type: 'category',
        data: ['55+', '45-54', '35-44', '25-34', '13-24', '<13']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [20,7,4,4,0,0],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [17,18,5,3,0],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
AlternativeTherapyBarriersAge.setOption(AlternativeTherapyOptions2);

//broken down by education
var AlternativeTherapyBarriersEducation = echarts.init(document.getElementById('dentalEducation'));
var AlternativeTherapyOptions3 = {
    title: {
        text: 'Alternative Therapy Barriers Broken Down by Education',
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
        max: 40
    },
    yAxis: {
        type: 'category',
        data: ['Prefer not to Answer', 'Grades 9-11', 'High School Diploma or GED', 'Vocational/Technical School',
            'Some College or Associate\'s Degree', 'Bachelor\'s Degree', 'Graduate Degree']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [3,6,16,1,9,"",""],
            data: ["","",9,1,16,6,3],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
            data: ["",3,11,2,14,6,7],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
AlternativeTherapyBarriersEducation.setOption(AlternativeTherapyOptions3);

//broken down by income type
var AlternativeTherapyBarriersIncomeType = echarts.init(document.getElementById('dentalIncomeType'));
var AlternativeTherapyOptions4 = {
    title: {
        text: 'Alternative Therapy Barriers\n Broken Down by Income Type',
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
        max: 40
    },
    yAxis: {
        type: 'category',
        data: ['Other', 'Veteran Benefits', 'Employment Income', 'SSI/SSDI']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [5,"",11,19],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
            data: [26,"",6,11],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
AlternativeTherapyBarriersIncomeType.setOption(AlternativeTherapyOptions4);

//broken down by sexual orientation
var AlternativeTherapyBarriersSexualOrientation = echarts.init(document.getElementById('dentalSexualOrientation'));
var AlternativeTherapyOptions5 = {
    title: {
        text: 'Alternative Therapy Barriers\n Broken Down by Sexual Orientation',
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
        max: 40
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
            data: ['',1,1,1,1,
			0,22,6,4],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
            data: [0,2,0,2,2,2,30,6,1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
AlternativeTherapyBarriersSexualOrientation.setOption(AlternativeTherapyOptions5);

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
//broken down by drug use
var AlternativeTherapyBarriersDrugUse = echarts.init(document.getElementById('dentalDrugUse'));
var AlternativeTherapyOptions7 = {
    title: {
        text: 'Alternative Therapy Barriers\n Broken Down by Drug Use',
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
        max: 40
    },
    yAxis: {
        type: 'category',
        data: ['None', 'Other', 'Crack', 'Ecstasy', 'Heroin', 'Cocaine', 'Marijuana', 'Methamphetamine'],
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [19, 0, 1, 2, 1, 1, 13, 5],
            itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
            data: [27, 1, 0, 0, 0, 0, 15, 2],
            itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
AlternativeTherapyBarriersDrugUse.setOption(AlternativeTherapyOptions7);

//broken down by method of transmission 
var AlternativeTherapyBarriersMoT = echarts.init(document.getElementById('dentalMoT'));
var AlternativeTherapyOptions8 = {
    title: {
        text: 'Alternative Therapy Barriers\n Broken Down by Method of Transmission',
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
        max: 40
    },
    yAxis: {
        type: 'category',
        data: ['Other','Prefer Not to Answer','Unknown', 'Born HIV Infected', 'Blood Products or Transfusions',
            'Injection Drug Use', 'Sex with Women', 'Sex with Men']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [1,0,2,0,0,7,1,28],
            itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
            data: [0,2,5,1,1,1,1,35],
            itemStyle: {color: 'rgba(255, 104, 107, 1)'}

			
			
		}
    ]
};
AlternativeTherapyBarriersMoT.setOption(AlternativeTherapyOptions8);
