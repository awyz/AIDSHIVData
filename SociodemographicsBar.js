// Age
var ageChart = echarts.init(document.getElementById('age'));
var ageOptions = {
    title: {
        text: 'Age',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile 2010-2015/ N = 598'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['HIV Needs Assessment', 'Epi Profile']
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
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [228, 101, 42, 24, 2, 1]
        },
        {
            name: 'Epi Profile',
            type: 'bar',
            data: [64, 134, 140, 191, 68, 1]
        }
    ]
};
ageChart.setOption(ageOptions);


// Case Management
var caseManagementChart = echarts.init(document.getElementById('caseManagement'));
var caseManagementOptions = {
    title: {
        text: 'Case Management',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile / No data available.'
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
        data: ['Malama Pono (Kauai)', 'Maui AIDS Foundation', 'Hawaii Island HIV/AIDS Foundation', 'Life Foundation']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [32, 43, 103, 219]
        },
    ]
};
caseManagementChart.setOption(caseManagementOptions);


// Disabilities
var disabilitiesChart = echarts.init(document.getElementById('disabilities'));
var disabilitiesOptions = {
    title: {
        text: 'Disabilities',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile / No data available.'
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
        data: ['Epilepsy', 'Ulcers', 'Eczema', 'Hepatitis C', 'Osteoporosis', 'Diabetes', 'Cancer',
            'Emphysema', 'Irritable Bowel Syndrome', 'Hearing Impairment', 'Asthma', 'Migraine Headaches', 'Sciatica',
            'Overactive Bladder', 'Other Mental Health Disorders', 'Arthritis', 'Insomnia/Sleep Disorder', 'Chronic Pain', 'Anxiety', 'Depression', 'Heart Disease']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [4, 5, 7, 9, 10, 10, 11, 14, 19, 20, 22, 24, 26, 28, 29, 50, 54, 69, 77, 86, 94]
        },
    ]
};
disabilitiesChart.setOption(disabilitiesOptions);


// Drug Use
var drugChart = echarts.init(document.getElementById('drugUse'));
var drugOptions = {
    title: {
        text: 'Drug Use',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile / No data available.'
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
        data: ['Other', 'Crack', 'Ecstasy', 'Heroin', 'Cocaine', 'Marijuana', 'Methamphetamine', 'None']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [4, 4, 4, 5, 6, 36, 131, 243]
        },
    ]
};
drugChart.setOption(drugOptions);


// Education
var educationChartSurvey = echarts.init(document.getElementById('educationSurvey'));
var educationOptionsSurvey = {
    title : {
        text: 'HIV Needs Assessment',
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
            name: 'Distribution of Education in HIV Needs Assessment',
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
educationChartSurvey.setOption(educationOptionsSurvey);

var educationChartProfile = echarts.init(document.getElementById('educationProfile'));
var educationOptionsProfile = {
    title : {
        text: 'Epi Profile',
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
            name: 'Distribution of Education in Epi Profile',
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
educationChartProfile.setOption(educationOptionsProfile);


// Method of Transmission
var methodOfTransmissionChartSurvey = echarts.init(document.getElementById('methodOfTransmissionSurvey'));
var methodOfTransmissionOptionsSurvey = {
    title : {
        text: 'HIV Needs Assessment',
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
            name: 'Distribution of Methods of Transmission in HIV Needs Assessment',
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
methodOfTransmissionChartSurvey.setOption(methodOfTransmissionOptionsSurvey);

var methodOfTransmissionChartProfile = echarts.init(document.getElementById('methodOfTransmissionProfile'));
var methodOfTransmissionOptionsProfile = {
    title : {
        text: 'Epi Profile',
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
            name: 'Distribution of Ages in Epi Profile',
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
methodOfTransmissionChartProfile.setOption(methodOfTransmissionOptionsProfile);


// Income Type
var incomeTypeChartSurvey = echarts.init(document.getElementById('incomeTypeSurvey'));
var incomeTypeOptionsSurvey = {
    title : {
        text: 'HIV Needs Assessment',
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
            name: 'Distribution of Income Type in Survey',
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

incomeTypeChartSurvey.setOption(incomeTypeOptionsSurvey);

var incomeTypeChartProfile = echarts.init(document.getElementById('incomeTypeProfile'));
var incomeTypeOptionsProfile = {
    title : {
        text: 'Epi Profile',
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
            name: 'Distribution of Income Type in Epi Profile',
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
incomeTypeChartProfile.setOption(incomeTypeOptionsProfile);


// Race
var raceChartSurvey = echarts.init(document.getElementById('raceSurvey'));
var raceOptionsSurvey = {
    title : {
        text: 'HIV Needs Assessment',
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
            name: 'Distribution of Race in HIV Needs Assessment',
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
raceChartSurvey.setOption(raceOptionsSurvey);

var raceChartProfile = echarts.init(document.getElementById('raceProfile'));
var raceOptionsProfile = {
    title : {
        text: 'Epi Profile',
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
            name: 'Distribution of Race in Epi Profile',
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
raceChartProfile.setOption(raceOptionsProfile);


// Sexual Orientation
var sexualOrientationChartSurvey = echarts.init(document.getElementById('sexualOrientationSurvey'));
var sexualOrientationOptionsSurvey = {
    title : {
        text: 'HIV Needs Assessment',
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
            name: 'Distribution of Sexual Orientation in Survey',
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

sexualOrientationChartSurvey.setOption(sexualOrientationOptionsSurvey);

var sexualOrientationChartProfile = echarts.init(document.getElementById('sexualOrientationProfile'));
var sexualOrientationOptionsProfile = {
    title : {
        text: 'Epi Profile',
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
            name: 'Distribution of Sexual Orientation in Epi Profile',
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
sexualOrientationChartProfile.setOption(sexualOrientationOptionsProfile);



