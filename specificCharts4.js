//doughnut chart for MedicalCosts
//still need to input values for sexual orientation and disabilities

var MedicalCostsDoughnut = echarts.init(document.getElementById('hivMedicalCosts'));
var MedicalCostsDoughnutOption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend:  false,
	
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
MedicalCostsDoughnut.setOption(MedicalCostsDoughnutOption);
//bar graph of MedicalCosts Respondents that answered very or too difficult

//broken down by ethnicity
var MedicalCostsBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
var MedicalCostsOptions1 = {
    title: {
        text: 'Medical Cost Barriers Broken Down by Ethnicity',
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
MedicalCostsBarriersEthnicity.setOption(MedicalCostsOptions1);


//broken down by age
var MedicalCostsBarriersAge = echarts.init(document.getElementById('hivCmAge'));
var MedicalCostsOptions2 = {
    title: {
        text: 'Medical Cost Barriers Broken Down by Age',
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
MedicalCostsBarriersAge.setOption(MedicalCostsOptions2);

//broken down by education
var MedicalCostsBarriersEducation = echarts.init(document.getElementById('hivCmEducation'));
var MedicalCostsOptions3 = {
    title: {
        text: 'Medical Cost Barriers Broken Down by Education',
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
MedicalCostsBarriersEducation.setOption(MedicalCostsOptions3);

//broken down by income type
var MedicalCostsBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
var MedicalCostsOptions4 = {
    title: {
        text: 'Medical Cost Barriers\n Broken Down by Income Type',
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
MedicalCostsBarriersIncomeType.setOption(MedicalCostsOptions4);

//broken down by sexual orientation
var MedicalCostsBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
var MedicalCostsOptions5 = {
    title: {
        text: 'Medical Cost Barriers\n Broken Down by Sexual Orientation',
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
MedicalCostsBarriersSexualOrientation.setOption(MedicalCostsOptions5);

//broken down by MedicalCosts
var MedicalCostsBarriersMedicalCosts = echarts.init(document.getElementById('hivCmMedicalCosts'));
var MedicalCostsOptions6 = {
    title: {
        text: 'Medical Cost Barriers Broken Down by MedicalCosts',
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
MedicalCostsBarriersMedicalCosts.setOption(MedicalCostsOptions6);

//broken down by drug use
var MedicalCostsBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
var MedicalCostsOptions7 = {
    title: {
        text: 'Medical Cost Barriers\n Broken Down by Drug Use',
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
MedicalCostsBarriersDrugUse.setOption(MedicalCostsOptions7);

//broken down by method of transmission 
var MedicalCostsBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
var MedicalCostsOptions8 = {
    title: {
        text: 'Medical Cost Barriers\n Broken Down by Method of Transmission',
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
MedicalCostsBarriersMoT.setOption(MedicalCostsOptions8);