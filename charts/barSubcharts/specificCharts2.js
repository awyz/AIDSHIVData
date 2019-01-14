//Information
var informationBarriersReason = echarts.init(document.getElementById('infoReasons'));
var informationOptions0 = {
	title: {
        text: 'Information Barriers Broken Down by Reason',
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
				{value:2, name:'Could not afford'},
				{value:5, name:'Did not know where to get it'},
				{value:0, name:'Too long of a wait '},
				{value:1, name:'Service not available'},
				{value:0, name:'Did not qualify'},
				{value:2, name:'Did not have transportation'},
				{value:0, name:'Did not have childcare'},
				{value:0, name:'Did not have enough time off work'},
				{value:3, name:'Concerned about privacy'},
				{value:0, name:'They did not speak my primary language'},
				{value:0, name:'Discrimination because of race'},
				{value:0, name:'Discrimination because of sexual orientation'},
				{value:0, name:'Discrimination because of gender'},
				{value:3, name:'I was not in stable living condition'},
				{value:2, name:'Nervous or afraid of what people might say'},
				{value:1, name:'Stigma due to HIV'},
				{value:0, name:'Discrimination because of my HIV status'}
				],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		
		{
			name:'Too Difficult',
			type: 'bar',
			 data: [
				{value:0, name:'Could not afford'},
				{value:0, name:'Did not know where to get it'},
				{value:0, name:'Too long of a wait '},
				{value:0, name:'Service not available'},
				{value:0, name:'Did not qualify'},
				{value:0, name:'Did not have transportation'},
				{value:0, name:'Did not have childcare'},
				{value:0, name:'Did not have enough time off work'},
				{value:0, name:'Concerned about privacy'},
				{value:0, name:'They did not speak my primary language'},
				{value:0, name:'Discrimination because of race'},
				{value:0, name:'Discrimination because of sexual orientation'},
				{value:0, name:'Discrimination because of gender'},
				{value:0, name:'I was not in stable living condition'},
				{value:0, name:'Nervous or afraid of what people might say'},
				{value:0, name:'Stigma due to HIV'},
				{value:0, name:'Discrimination because of my HIV status'},
				],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		},
		
    ]
};
//top barrier could not afford
    
     informationBarriersReason.setOption(informationOptions0);
//doughnut chart for Information 
//still need to input values for sexual orienation and disability

var InformationDoughnut = echarts.init(document.getElementById('idoughnut'));
var InformationDoughnutOption = {
    title : {
        text: 'Access to Information Statistics',
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
            name:'Access to Information',
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
                {value:0, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:6, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:2, name:'chose not\n to answer', itemStyle: {color: 'rgba(163, 155, 168, 1)'}},
                {value:238, name:'did not\n need service', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:32, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:120, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
InformationDoughnut.setOption(InformationDoughnutOption);
//bar graph of Information Respondents that answered very or too difficult

//broken down by ethnicity
var InformationBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
var InformationOptions1 = {
    title: {
        text: 'Information Barriers Broken Down by Ethnicity',
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
InformationBarriersEthnicity.setOption(InformationOptions1);


//broken down by age
var InformationBarriersAge = echarts.init(document.getElementById('hivCmAge'));
var InformationOptions2 = {
    title: {
        text: 'Information Barriers Broken Down by Age',
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
InformationBarriersAge.setOption(InformationOptions2);

//broken down by education
var InformationBarriersEducation = echarts.init(document.getElementById('hivCmEducation'));
var InformationOptions3 = {
    title: {
        text: 'Information Barriers Broken Down by Education',
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
InformationBarriersEducation.setOption(InformationOptions3);

//broken down by income type
var InformationBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
var InformationOptions4 = {
    title: {
        text: 'Information Barriers\n Broken Down by Income Type',
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
InformationBarriersIncomeType.setOption(InformationOptions4);

//broken down by sexual orientation
var InformationBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
var InformationOptions5 = {
    title: {
        text: 'Information Barriers\n Broken Down by Sexual Orientation',
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
InformationBarriersSexualOrientation.setOption(InformationOptions5);

//broken down by disability
var InformationBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var InformationOptions6 = {
    title: {
        text: 'Information Barriers Broken Down by Disability',
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
InformationBarriersDisability.setOption(InformationOptions6);

//broken down by drug use
var InformationBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
var InformationOptions7 = {
    title: {
        text: 'Information Barriers\n Broken Down by Drug Use',
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
InformationBarriersDrugUse.setOption(InformationOptions7);

//broken down by method of transmission 
var InformationBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
var InformationOptions8 = {
    title: {
        text: 'Information Barriers\n Broken Down by Method of Transmission',
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
InformationBarriersMoT.setOption(InformationOptions8);
