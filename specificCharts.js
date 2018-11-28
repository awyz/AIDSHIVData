//doughnut chart for Case Management 
//still need to input values for sexual orientation and disability

var caseManagementDoughnut = echarts.init(document.getElementById('hivDesc'));
var caseManagementDoughnutOption = {
	title : {
        text: 'Case Management Statistics',
		subtext: 'Top Barriers: \n1.\n2.',
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
            name:'Access to Case Management',
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
                {value:1, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:5, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:1, name:'chose not\n to answer',itemStyle: {color: 'rgba(184, 197, 214, 1)'} },
                {value:75, name:'did not\n need service', itemStyle: {color: 'rgba(163, 155, 168, 1)'}},
                {value:39, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:277, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        },
		   {
            name: 'Barriers for Respondents that answered "Very Difficult"',
            type: 'bar',
            data:[
				{value:2, name:'Could not afford'},
				{value:2, name:'Did not know where to get it'},
				{value:0, name:'Too long of a wait '},
				{value:1, name:'Service not available'},
				{value:1, name:'Did not qualify'},
				{value:3, name:'Did not have transportation'},
				{value:0, name:'Did not have childcare'},
				{value:0, name:'Did not have enough time off work'},
				{value:2, name:'Concerned about privacy'},
				{value:0, name:'They did not speak my primary language'},
				{value:1, name:'Discrimination because of race'},
				{value:1, name:'Discrimination because of sexual orientation'},
				{value:1, name:'Discrimination because of gender'},
				{value:2, name:'I was not in stable living condition'},
				{value:2, name:'Nervous or afraid of what people might say'},
				{value:2, name:'Stigma due to HIV'},
				{value:0, name:'Discrimination because of my HIV status'}
				
			]
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Barriers for Respondents that answered "Very Difficult"',
			type: 'bar',
			  data:[
					{value:0, name:'Could not afford'},
					{value:0, name:'Did not know where to get it'},
					{value:0, name:'Too long of a wait '},
					{value:0, name:'Service not available'},
					{value:1, name:'Did not qualify'},
					{value:0, name:'Did not have transportation'},
					{value:0, name:'Did not have childcare'},
					{value:0, name:'Did not have enough time off work'},
					{value:0, name:'Concerned about privacy'},
					{value:0, name:'They did not speak my primary language'},
					{value:0, name:'Discrimination because of race'},
					{value:0, name:'Discrimination because of sexual orientation'},
					{value:0, name:'Discrimination because of gender'},
					{value:0, name:'I was not in stable living condition'},
					{value:1, name:'Nervous or afraid of what people might say'},
					{value:0, name:'Stigma due to HIV'},
					{value:0, name:'Discrimination because of my HIV status'}
				]
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
caseManagementDoughnut.setOption(caseManagementDoughnutOption);
//bar graph of Case Management Respondents that answered very or too difficult
//broken down by reason

    
     
    
//broken down by ethnicity
var caseManagementBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
var caseManagementOptions1 = {
    title: {
        text: 'Case Management Barriers Broken Down by Ethnicity',
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
            data: [1, 1, 2],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["","",1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
caseManagementBarriersEthnicity.setOption(caseManagementOptions1);


//broken down by age
var caseManagementBarriersAge = echarts.init(document.getElementById('hivCmAge'));
var caseManagementOptions2 = {
    title: {
        text: 'Case Management Barriers Broken Down by Age',
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
            data: [2,3],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
caseManagementBarriersAge.setOption(caseManagementOptions2);

//broken down by education
var caseManagementBarriersEducation = echarts.init(document.getElementById('hivCmEducation'));
var caseManagementOptions3 = {
    title: {
        text: 'Case Management Barriers Broken Down by Education',
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
            data: ['',"",3,1,1,"",""],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ['',1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
caseManagementBarriersEducation.setOption(caseManagementOptions3);

//broken down by income type
var caseManagementBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
var caseManagementOptions4 = {
    title: {
        text: 'Case Management Barriers\n Broken Down by Income Type',
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
            data: [4,"","",1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
caseManagementBarriersIncomeType.setOption(caseManagementOptions4);

//broken down by sexual orientation
var caseManagementBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
var caseManagementOptions5 = {
    title: {
        text: 'Case Management Barriers\n Broken Down by Sexual Orientation',
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
            data: [3,1,"","",1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["",1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
caseManagementBarriersSexualOrientation.setOption(caseManagementOptions5);

//broken down by disability
var caseManagementBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var caseManagementOptions6 = {
    title: {
        text: 'Case Management Barriers Broken Down by Disability',
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
caseManagementBarriersDisability.setOption(caseManagementOptions6);

//broken down by drug use
var caseManagementBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
var caseManagementOptions7 = {
    title: {
        text: 'Case Management Barriers\n Broken Down by Drug Use',
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
            data: ["","","","",3,"",2],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: ["","","","",1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		}
    ]
};
caseManagementBarriersDrugUse.setOption(caseManagementOptions7);

//broken down by method of transmission 
var caseManagementBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
var caseManagementOptions8 = {
    title: {
        text: 'Case Management Barriers\n Broken Down by Method of Transmission',
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
            data: [2,"",1,1,'',1],
			itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        },
		{
			name:'Too Difficult',
			type: 'bar',
			data: [1],
			itemStyle: {color: 'rgba(255, 104, 107, 1)'}

			
			
		}
    ]
};
caseManagementBarriersMoT.setOption(caseManagementOptions8);
