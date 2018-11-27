//pie charting

<<<<<<< HEAD
var caseManagementDoughnut = echarts.init(document.getElementById('hivDesc'));
option = {
=======
var myChart = echarts.init(document.getElementById('main'));
	
	var option = {
>>>>>>> Quinne
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
<<<<<<< HEAD
    legend: false, 
	{
        orient: 'vertical',
        x: 'left',
        data:['easy','possible with\n some work','chose not\n to answer','did not\n need service','possible but\n very difficult','too difficult']
    },
    series: [
        {
            name:'Access to Case Management',
=======
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['very easy','easy','n/a','difficult','very difficult']
    },
    series: [
        {
            name:'Difficulty Accessing Case Management',
>>>>>>> Quinne
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
<<<<<<< HEAD
                {value:1, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:5, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:1, name:'chose not\n to answer', itemStyle: {color: 'rgba(163, 155, 168, 1)'}},
                {value:75, name:'did not\n need service', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:39, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:277, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
=======
                                {value:76, name:'n/a', itemStyle: {color: 'gray'}},

                {value:1, name:'very difficult', itemStyle: {color: 'rgb(118,42,131)'}},
                {value:5, name:'difficult', itemStyle: {color: 'rgb(175,141,195)'}},
                {value:39, name:'easy', itemStyle: {color:'rgb(161,217,155)'}},
                {value:277, name:'very easy', itemStyle: {color: 'green'}}
>>>>>>> Quinne
            ]
        }
    ]
};
<<<<<<< HEAD
caseManagementDoughnut.setOption(option);

//ethnicity breakdown
var cMethnicty = echarts.init(document.getElementById('hivCmEthnicity'));
var ageOptions = {
    title: {
        text: 'Case Management Needs Ethnicty Breakdown',
        subtext: 'HIV Needs Assessment 2018 / N=398'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
=======
		myChart.setOption(option);



//barriers for case management


var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['didn\'t know where to get it', 'Wait Too Long','Didn\'t Qualify'
        ,'No Transportation', 'No Cild Care', 'No Time Off Work', 'Privacy Concerns',
        'Did Not Speak Language', 'Discrimination of Race', 'Discrimination of Sex', 
        'Living Situation Unstable', 'Afraid of Social Norms', 'HIV Stigma',
        'Discrimination Due to HIV']
    },
>>>>>>> Quinne
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
<<<<<<< HEAD
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['55+', '45-54', '35-44', '25-34', '13-24', '<13']
    },
    series: 
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [228, 101, 42, 24, 2, 1]
        }
        
};
ageChart.setOption(ageOptions);
=======
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['didn\'t know where to get it', 'Wait Too Long','Didn\'t Qualify'
        ,'No Transportation', 'No Cild Care', 'No Time Off Work', 'Privacy Concerns',
        'Did Not Speak Language', 'Discrimination of Race', 'Discrimination of Sex', 
        'Living Situation Unstable', 'Afraid of Social Norms', 'HIV Stigma',
        'Discrimination Due to HIV']
    },
    series: [
        {
            name: 'Difficult',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 2, 1,1,3,0,0,2,0,1,1,1,2,2]
        },
        {
            name: 'Too Difficult',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,]
        },
        
    ]
};

//Gender Breakdown Goes Here


//barriers for case management



var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['White only','Native Hawaiian', 'Prefer not to Answer']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
                data: ['White only','Native Hawaiian', 'Prefer not to Answer']
    },
    series: [
        {
            name: 'Difficult',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [
			{value:[3,1,0], itemStyle: {color: 'rgb(175,141,195)'}}
			]
        },
        {
            name: 'Too Difficult',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [
			{value:1, itemStyle: {color: 'rgb(118,42,131)'}}]
        },
        
    ]

};

>>>>>>> Quinne
