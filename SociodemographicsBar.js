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
var educationChart = echarts.init(document.getElementById('education'));
var educationOptions = {
    title: {
        text: 'Education',
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
        data: ['Grades 1-8', 'Vocational/Technical School', 'Grades 9-11', 'Graduate Degree', 'Bachelor\'s Degree',
            'High School Diploma or GED', 'Some College of Associate\'s Degree']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [7, 19, 24, 46, 72, 89, 141]
        },
    ]
};
educationChart.setOption(educationOptions);


// Income type
var incomeChart = echarts.init(document.getElementById('incomeType'));
var incomeOptions = {
    title: {
        text: 'Income Type',
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
        data: ['Grades 1-8', 'Vocational/Technical School', 'Grades 9-11', 'Graduate Degree', 'Bachelor\'s Degree',
            'High School Diploma or GED', 'Some College of Associate\'s Degree']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [7, 19, 24, 46, 72, 89, 141]
        },
    ]
};
incomeChart.setOption(incomeOptions);


// Method of Transmission
var transmissionChart = echarts.init(document.getElementById('methodOfTransmission'));
var transmissionOptions = {
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
        data: ['Sex with Men', 'Sex with Women', 'Sharing Needles or Works', 'Blood Products or Transfusion',
            'I was Born HIV infected', 'Don\'t know / Unknown', 'Prefer not to Answer', 'Other']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [307, 20,	30, 10, 1, 38, 10, 10]
        },
    ]
};
transmissionChart.setOption(transmissionOptions);


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



