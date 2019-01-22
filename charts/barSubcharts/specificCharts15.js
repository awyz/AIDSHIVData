//Bills

var billsBarriersReason = document.getElementById("bilReasons");
var myChart = new Chart(billsBarriersReason, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Service not available',
            'Did not know where to get it',
            'Too long of a wait ',
            'Could not afford',
            'Did not qualify',
            'Nervous or afraid of what people might say',
            'Did not have enough time off work',
            'Did not have transportation',
            'Stigma due to HIV',
            'Concerned about privacy',
            'Discrimination because of sexual orientation',
            'Discrimination because of my HIV status',
            'Discrimination because of race',
            'Discrimination because of gender',
            'I was not in stable living condition',
            ],

        datasets: [{
            label: "Very Difficult",
            data: [5,9,3,0,7,4,3,2,2,2,2,2,1,1,1],
            backgroundColor: "#FF9505",
        },{
            label: "Too Difficult",
            data: [11,5,10,10,1,3,1,1,1,0,0,0,0,0,0],
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

//doughnut chart for Paying for Bills
//still need to input values for sexual orienation and disability
/* 
var PayingForBillsDoughnut = echarts.init(document.getElementById('billsDesc'));
var PayingForBillsDoughnutOption = {
    title : {
        text: 'Paying For Bills',
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
            name:'PayingForBills ',
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
                {value:16, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:16, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:7, name:'chose not\n to answer', itemStyle: {color: 'rgba(163, 155, 168, 1)'}},
                {value:283, name:'did not\n need service', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:47, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:29, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
PayingForBillsDoughnut.setOption(PayingForBillsDoughnutOption); */
//bar graph of PayingForBills Respondents that answered very or too difficult
/* 
//broken down by ethnicity
var PayingForBillsBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
var PayingForBillsOptions1 = {
    title: {
        text: 'PayingForBills Barriers Broken Down by Ethnicity',
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
PayingForBillsBarriersEthnicity.setOption(PayingForBillsOptions1);


//broken down by age
var PayingForBillsBarriersAge = echarts.init(document.getElementById('hivCmAge'));
var PayingForBillsOptions2 = {
    title: {
        text: 'PayingForBills Barriers Broken Down by Age',
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
PayingForBillsBarriersAge.setOption(PayingForBillsOptions2);

//broken down by PayingForBills
var PayingForBillsBarriersPayingForBills = echarts.init(document.getElementById('hivCmPayingForBills'));
var PayingForBillsOptions3 = {
    title: {
        text: 'PayingForBills Barriers Broken Down by PayingForBills',
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
PayingForBillsBarriersPayingForBills.setOption(PayingForBillsOptions3);

//broken down by income type
var PayingForBillsBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
var PayingForBillsOptions4 = {
    title: {
        text: 'PayingForBills Barriers\n Broken Down by Income Type',
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
        data: ['SSI/SSDI','PayingForBills','Veteran\'s Benefits','Other']
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
PayingForBillsBarriersIncomeType.setOption(PayingForBillsOptions4);

//broken down by sexual orientation
var PayingForBillsBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
var PayingForBillsOptions5 = {
    title: {
        text: 'PayingForBills Barriers\n Broken Down by Sexual Orientation',
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
PayingForBillsBarriersSexualOrientation.setOption(PayingForBillsOptions5);

//broken down by disability
var PayingForBillsBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
var PayingForBillsOptions6 = {
    title: {
        text: 'PayingForBills Barriers Broken Down by Disability',
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
PayingForBillsBarriersDisability.setOption(PayingForBillsOptions6);

//broken down by drug use
var PayingForBillsBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
var PayingForBillsOptions7 = {
    title: {
        text: 'PayingForBills Barriers\n Broken Down by Drug Use',
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
PayingForBillsBarriersDrugUse.setOption(PayingForBillsOptions7);

//broken down by method of transmission 
var PayingForBillsBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
var PayingForBillsOptions8 = {
    title: {
        text: 'PayingForBills Barriers\n Broken Down by Method of Transmission',
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
PayingForBillsBarriersMoT.setOption(PayingForBillsOptions8);
 */