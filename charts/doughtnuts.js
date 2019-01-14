//pie charting
app.title = 'Case Management Statistics';

option = {
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
                {value:5, name:'difficult', itemStyle: {color: 'blue'}},
                {value:1, name:'very difficult'},
                {value:76, name:'n/a', itemStyle: {color: 'gray'}},
                {value:39, name:'easy'},
                {value:277, name:'very easy', itemStyle: {color: 'green'}}
            ]
        }
    ]
};