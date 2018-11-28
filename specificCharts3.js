//doughnut chart for Disability
//still need to input values for sexual orientation and Disabilities

var DisabilityDoughnut = echarts.init(document.getElementById('hivDisability'));
var DisabilityDoughnutOption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: false,
	
    series: [
        {
            name:'Aid at Home',
            type:'pie',
            radius: ['50%', '70%'],
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
                {value:6, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:6, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:3, name:'chose not\n to answer', itemStyle: {color: 'rgba(163, 155, 168, 1)'}},
                {value:329, name:'did not\n need service', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:26, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:28, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
DisabilityDoughnut.setOption(DisabilityDoughnutOption);
//bar graph of Disability Respondents that answered very or too difficult

//broken down by ethnicity
var DisabilityBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
var DisabilityOptions1 = {
    title: {
        text: 'Disability Barriers Broken Down by Ethnicity',
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
            data: ["", 1, 4, 1, 2,1,"",1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["","",3,"",1,
			1,"","","","",""","",
			"",1,"","",1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DisabilityBarriersEthnicity.setOption(DisabilityOptions1);


//broken down by age
var DisabilityBarriersAge = echarts.init(document.getElementById('hivCmAge'));
var DisabilityOptions2 = {
    title: {
        text: 'Disability Barriers Broken Down by Age',
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
            data: [3,3],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [4,1,1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DisabilityBarriersAge.setOption(DisabilityOptions2);

//broken down by education
var DisabilityBarriersEducation = echarts.init(document.getElementById('hivCmEducation'));
var DisabilityOptions3 = {
    title: {
        text: 'Disability Barriers Broken Down by Education',
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
        data: ['Graduate Degree','Bachelor\'s', 'Some College', 'Vocational School', 'High School','Grades 9-11','Prefer not to Answer']
    },
    series: [
        {
            name: 'Very Difficult',
            type: 'bar',
            data: [1,"",1,1,2,1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ['',1,4,'',1,'',''],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DisabilityBarriersEducation.setOption(DisabilityOptions3);

//broken down by income type
var DisabilityBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
var DisabilityOptions4 = {
    title: {
        text: 'Disability Barriers\n Broken Down by Income Type',
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
            data: [6],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [6],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DisabilityBarriersIncomeType.setOption(DisabilityOptions4);

//broken down by sexual orientation
var DisabilityBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
var DisabilityOptions5 = {
    title: {
        text: 'Disability Barriers\n Broken Down by Sexual Orientation',
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
DisabilityBarriersSexualOrientation.setOption(DisabilityOptions5);

//broken down by disability
var DisabilityBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var DisabilityOptions6 = {
    title: {
        text: 'Disability Barriers Broken Down by Disability',
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
DisabilityBarriersDisability.setOption(DisabilityOptions6);

//broken down by drug use
var DisabilityBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
var DisabilityOptions7 = {
    title: {
        text: 'Disability Barriers\n Broken Down by Drug Use',
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
            data: ["","","",1,1,1,4],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["","","","",2,3,""],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
DisabilityBarriersDrugUse.setOption(DisabilityOptions7);

//broken down by method of transmission 
var DisabilityBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
var DisabilityOptions8 = {
    title: {
        text: 'Disability Barriers\n Broken Down by Method of Transmission',
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
            data: [4,1,1,'','',''],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [4,'',1,1,'',1,'',''],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}

			
			
		}
    ]
};
DisabilityBarriersMoT.setOption(DisabilityOptions8);