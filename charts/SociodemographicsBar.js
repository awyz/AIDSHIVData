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
        },
    },
    legend: {
        data: ['HIV Needs Assessment', 'Epi Profile']
    },
    color: ['#F13535', '#2A8070'],
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
    color: ['#F13535'],
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
        text: 'Related Diseases',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile / No data available.'
    },
    color: ['#F13535'],
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
    color: ['#F13535'],
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
        data: ['None', 'Other', 'Crack', 'Ecstasy', 'Heroin', 'Cocaine', 'Marijuana', 'Methamphetamine']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [243, 4, 4, 4, 5, 6, 36, 131]
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
    color: ['#F13535'],
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
            'High School Diploma or GED', 'Some College or Associate\'s Degree']
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
    color: ['#F13535'],
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
        // data: ['SSI/SSDI', 'Employment Income', 'Veteran Benefits', 'Self-Employed', 'Other']
        data: ['Other', 'Veteran Benefits', 'Self-Employed', 'Employment Income', 'SSI/SSDI']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            // data: [227, 97, 5, 48, 21]
            data: [21, 5, 48, 97, 227]
        },
    ]
};
incomeChart.setOption(incomeOptions);


// Method of Transmission
var transmissionChart = echarts.init(document.getElementById('methodOfTransmission'));
var transmissionOptions = {
    title: {
        text: 'Method of Transmission',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile 2010-2015 / N=598'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color: ['#F13535', '#2A8070'],
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
        data: ['Other', 'Born HIV Infected', 'Injection Drug Use', 'Male to Female Sexual Contact (Female)',
            'Male to Female Sexual Contact (Male)', 'Male to Male Sexual Contact']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [20, 1, 30, 38, 20, 269]
            // data: [5, .25, 7.5, 9.54, 5, 67.59]
        },
        {
            name: 'Epi Profile',
            type: 'bar',
            // data: [15, 0, 7.36, 5.35, 8, 63.7]
            data: [93, 0, 44, 32, 48, 381]
        }
    ]
};
transmissionChart.setOption(transmissionOptions);


// Race
var raceChart = echarts.init(document.getElementById('race'));
var raceOptions = {
    title: {
        text: 'Race',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile 2010-2015 / N=598'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color: ['#F13535', '#2A8070'],
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
        data: ['Prefer not to Answer', 'Other', 'Multiple Races', 'Hispanic', 'American Indian/Alaskan Native', 'Asian',
            'African American', 'Pacific Islander', 'White']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [3, 14, 86, 19, 2, 45, 10, 58, 172]
        },
        {
            name: 'Epi Profile',
            type: 'bar',
            data: [0, 5, 74, 52, 2, 127, 44, 89, 205]
        }
    ]
};
raceChart.setOption(raceOptions);

// Sexual Orientation
var sexualChart = echarts.init(document.getElementById('sexualOrientation'));
var sexualOptions = {
    title: {
        text: 'Race',
        subtext: 'HIV Needs Assessment 2018 / N=398\nEpi Profile / No data available.'
    },
    color: ['#F13535'],
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
        data: ['Prefer not to Answer', 'Other', 'Celibate', 'Bisexual (Female)', 'Bisexual (Male)', 'Homosexual (Female)',
            'Homosexual (Male)', 'Heterosexual (Female)', 'Heterosexual (Male)']
    },
    series: [
        {
            name: 'HIV Needs Assessment',
            type: 'bar',
            data: [39, 14, 11, 6, 49, 0, 242, 48, 40]
        },
    ]
};
sexualChart.setOption(sexualOptions);



