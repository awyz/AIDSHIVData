//pie charting

var caseManagementDoughnut = echarts.init(document.getElementById('hivDesc'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: false, 
	{
        orient: 'vertical',
        x: 'left',
        data:['easy','possible with\n some work','chose not\n to answer','did not\n need service','possible but\n very difficult','too difficult']
    },
    series: [
        {
            name:'Access to Case Management',
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
                {value:1, name:'too difficult', itemStyle: {color: 'rgba(255, 104, 107, 1)'}},
                {value:5, name:'possible but\n very difficult', itemStyle: {color: 'rgba(255, 166, 166, 1)'}},
                {value:1, name:'chose not\n to answer', itemStyle: {color: 'rgba(163, 155, 168, 1)'}},
                {value:75, name:'did not\n need service', itemStyle: {color: 'rgba(184, 197, 214, 1)'}},
                {value:39, name:'possible with\n some work', itemStyle: {color: 'rgba(152, 148, 255, 1)'}},
                {value:277, name:'easy', itemStyle: {color: 'rgba(104, 99, 240, 1)'}}
            ]
        }
    ]
};
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
    series: 
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [228, 101, 42, 24, 2, 1]
        }
        
};
ageChart.setOption(ageOptions);
