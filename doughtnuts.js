//pie charting

var myChart = echarts.init(document.getElementById('main'));
	
	var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['very easy','easy','n/a','difficult','very difficult']
    },
    series: [
        {
            name:'Difficulty Accessing Case Management',
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
                                {value:76, name:'n/a', itemStyle: {color: 'gray'}},

                {value:1, name:'very difficult', itemStyle: {color: 'rgb(118,42,131)'}},
                {value:5, name:'difficult', itemStyle: {color: 'rgb(175,141,195)'}},
                {value:39, name:'easy', itemStyle: {color:'rgb(161,217,155)'}},
                {value:277, name:'very easy', itemStyle: {color: 'green'}}
            ]
        }
    ]
};
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

