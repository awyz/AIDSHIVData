var ageChart = echarts.init(document.getElementById('age'));

var options = {
    title : {
        text: 'Survey',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Placeholder1', 'Placeholder2', 'Placeholder3']
    },
    series: [
        {
            name: 'Distribution of Ages in Survey',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value:69, name: 'Placeholder1'},
                {value:69, name: 'Placeholder2'},
                {value:69, name: 'Placeholder3'}
            ],
        }
    ]
};

ageChart.setOption(options);
