//barriers for case management

var myChart = echarts.init(document.getElementById('cMbarriers'));
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
            data: [2, 2, 1,1,3,"","",2,"",1,1,1,2,2]
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
            data: ["","","","",1,"","","","","","","","",1,"",""]
        },
        
    ]
};
		myChart.setOption(option);



