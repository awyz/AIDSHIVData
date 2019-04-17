//doughnut chart for Insurance Payment Services
//don't use for big bar graph
//still need to input values for sexual orienation and disability

// todo UNUSED!!!!!!!!!!!!!

var ctx = document.getElementById("cMReasons");
var myChart = new Chart(ctx, {
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
            'Discrimination because of race',
            'Discrimination because of sexual orientation',
            'Discrimination because of gender',
            'I was not in stable living condition',
            'Nervous or afraid of what people might say',
            'Stigma due to HIV',
            'Discrimination because of my HIV status'],

        datasets: [{
            label: "Very Difficult",
            data: [2, 2, 0, 1, 1, 3, 0, 0, 2, 0, 1, 1, 1, 2, 2, 2, 0],
            backgroundColor: "rgba(104, 99, 240, 1)",
        },{
            label: "Too Difficult",
            data: [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
            backgroundColor: "rgba(152, 148, 255, 1)",
        }]
    },

    options: {
        plugins: {
            color: '#000',
            datalabels: {
                display: function(context) {
                    return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                }
            }
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {fontColor: 'black'}

            }],
            yAxes: [{
                stacked: true,
                ticks: {fontColor: 'black'}

            }]
        }
    }});

var InsurancePaymentDoughnut = echarts.init(document.getElementById('InsurancePaymentDesc'));
var InsurancePaymentDoughnutOption = {
    title : {
        text: 'Case Management Statistics',
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
            name:'Access to Insurance Payment Services',
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
                {value:2, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:9, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:5, name:'chose not\n to answer', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:273, name:'did not\n need service',itemStyle: {color: 'rgba(163, 155, 168, 1)'} },
                {value:47, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:62, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
InsurancePaymentDoughnut.setOption(InsurancePaymentDoughnutOption);
//bar graph of InsurancePayment Respondents that answered very or too difficult

// broken down by ethnicity
// var InsurancePaymentBarriersEthnicity = echarts.init(document.getElementById('hivCmEthnicity'));
// var InsurancePaymentOptions1 = {
    // title: {
        // text: 'InsurancePayment Barriers Broken Down by Ethnicity',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['Prefer not to answer','Native Hawaiian','White','African American','Hispanic',
		// 'American Indian', 'Asian Indian', 'Chinese', 'Filipino','Japanese','Korean', 'Vietnamese', 
		// 'Guamanian', 'Samoan', 'Other Pacific Islander', 'Other Asian', 'Other Race']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: ["", 1, 4,"",1],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: [""],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		// }
    // ]
// };
// InsurancePaymentBarriersEthnicity.setOption(InsurancePaymentOptions1);


// broken down by age
// var InsurancePaymentBarriersAge = echarts.init(document.getElementById('hivCmAge'));
// var InsurancePaymentOptions2 = {
    // title: {
        // text: 'InsurancePayment Barriers Broken Down by Age',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['55+', '45-54', '35-44', '25-34', '13-24', '<13']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: [2,3,1],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}
        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: [""],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		// }
    // ]
// };
// InsurancePaymentBarriersAge.setOption(InsurancePaymentOptions2);

// broken down by education
// var InsurancePaymentBarriersEducation = echarts.init(document.getElementById('hivCmEducation'));
// var InsurancePaymentOptions3 = {
    // title: {
        // text: 'InsurancePayment Barriers Broken Down by Education',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['Graduate Degree','Bachelor\'s', 'Some College', 'Vocational School', 'High School',"Grades 9-11",'Prefer not to Answer']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: [2,1,1,"",2,"",""],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: [''],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		// }
    // ]
// };
// InsurancePaymentBarriersEducation.setOption(InsurancePaymentOptions3);

// broken down by income type
// var InsurancePaymentBarriersIncomeType = echarts.init(document.getElementById('hivCmIncomeType'));
// var InsurancePaymentOptions4 = {
    // title: {
        // text: 'InsurancePayment Barriers\n Broken Down by Income Type',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['SSI/SSDI','Employement','Veteran\'s Benefits','Other']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: [4,1,"",1],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: [''],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		// }
    // ]
// };
// InsurancePaymentBarriersIncomeType.setOption(InsurancePaymentOptions4);

// broken down by sexual orientation
// var InsurancePaymentBarriersSexualOrientation = echarts.init(document.getElementById('hivCmSexualOrientation'));
// var InsurancePaymentOptions5 = {
    // title: {
        // text: 'InsurancePayment Barriers\n Broken Down by Sexual Orientation',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['Heterosexual','Homosexual','Bisexual',
		// 'Non-Binary','Other','Prefer not to answer']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: ["","","","",""],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: ["",""],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		// }
    // ]
// };
// InsurancePaymentBarriersSexualOrientation.setOption(InsurancePaymentOptions5);

// broken down by disability
// var InsurancePaymentBarriersDisability = echarts.init(document.getElementById('hivCmDisability'));
// var InsurancePaymentOptions6 = {
    // title: {
        // text: 'InsurancePayment Barriers Broken Down by Disability',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['Heart Disease','Depression','Anxiety','Chronic Pain',
		// 'Insomnia/Sleep Disorder', 'Arthritis','Other Mental Health Disorders',
		// 'Overactive Bladder', 'Sciatica','Migrane Headaches','Asthma',
		// 'Hearing Impairment', 'Irriatable Bowel Syndrome','Emphysema',
		// 'Cancer','Diabetes','Osteoporosis','Hepatitis C','Eczema','Ulcers','Epilepsy']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: [2,4,4,4,
			// 2,2,1,
			// 1,"",2,2,
			// 2,1,1,
			// 2,1,1,3,1,1,1],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: [1,1,1,"",
			// "","","",
			// 1,"",1,"",
			// "","","",
			// 1,"","","","","","",],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		// }
    // ]
// };
// InsurancePaymentBarriersDisability.setOption(InsurancePaymentOptions6);

// broken down by drug use
// var InsurancePaymentBarriersDrugUse = echarts.init(document.getElementById('hivCmDrugUse'));
// var InsurancePaymentOptions7 = {
    // title: {
        // text: 'InsurancePayment Barriers\n Broken Down by Drug Use',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['Cocaine','Crack','Ecstasy','Heroin', 'Marijuana',
		// 'Meth','None of the Above','Other']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: ["","","","",2,1,3],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: ["","","","",""],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}
			
		// }
    // ]
// };
// InsurancePaymentBarriersDrugUse.setOption(InsurancePaymentOptions7);

// broken down by method of transmission 
// var InsurancePaymentBarriersMoT = echarts.init(document.getElementById('hivCmMoT'));
// var InsurancePaymentOptions8 = {
    // title: {
        // text: 'InsurancePayment Barriers\n Broken Down by Method of Transmission',
    // },
    // tooltip: {
        // trigger: 'axis',
        // axisPointer: {
            // type: 'shadow'
        // }
    // },
    // grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
    // },
    // xAxis: {
        // type: 'value',
        // boundaryGap: [0, 0.01]
    // },
    // yAxis: {
        // type: 'category',
        // data: ['Sex With Men','Sex With Women','Sharing Needles',
		// 'Blood Products or Transfusions','Was Born Infected','Unknown','Other','Prefer Not to Answer']
    // },
    // series: [
        // {
            // name: 'Very Difficult',
            // type: 'bar',
            // data: [3,"",1,1,'',1],
			// itemStyle:{color: 'rgba(255, 166, 166, 1)'}

        // },
		// {
			// name:'Too Difficult',
			// type: 'bar',
			// data: [''],
			// itemStyle: {color: 'rgba(255, 104, 107, 1)'}

			
			
		// }
    // ]
// };
// InsurancePaymentBarriersMoT.setOption(InsurancePaymentOptions8);
