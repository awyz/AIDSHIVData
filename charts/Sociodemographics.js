// Age
var ageChartSurvey = echarts.init(document.getElementById('ageSurvey'));
var ageOptionsSurvey = {
    title : {
        text: 'HIV Needs Assessment',
        subtext: '2018 / N=398',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['<13', '13-24', '25-34', '35-44', '45-54', '55+']
    },
    series: [
        {
            name: 'Distribution of Ages in HIV Needs Assessment',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value:1, name: '<13'},
                {value:2, name: '13-24'},
                {value:24, name: '25-34'},
                {value:42, name: '35-44'},
                {value:101, name: '45-54'},
                {value:228, name: '55+'}
            ],
        }
    ]
};
ageChartSurvey.setOption(ageOptionsSurvey);

var ageChartProfile = echarts.init(document.getElementById('ageProfile'));
var ageOptionsProfile = {
    title : {
        text: 'Epi Profile',
        subtext: '2010-2015 / N=598',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['<13', '13-24', '25-34', '35-44', '45-54', '55+']
    },
    series: [
        {
            name: 'Distribution of Ages in Epi Profile',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value:1, name: '<13'},
                {value:68, name: '13-24'},
                {value:191, name: '25-34'},
                {value:140, name: '35-44'},
                {value:134, name: '45-54'},
                {value:64, name: '55+'}
            ],
        }
    ]
};
ageChartProfile.setOption(ageOptionsProfile);


// Case Management
var caseManagementChartSurvey = echarts.init(document.getElementById('caseManagementSurvey'));
var caseManagementOptionsSurvey = {
    title : {
        text: 'HIV Needs Assessment',
        subtext: '2018 / N=397',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Life Foundation', 'Malama Pono', 'HIHAF', 'Maui AIDS Foundation']
    },
    series: [
        {
            name: 'Distribution of Case Management Providers in HIV Needs Assessment',
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: [
                {value:219, name: 'Life Foundation'},
                {value:32, name: 'Malama Pono'},
                {value:103, name: 'HIHAF'},
                {value:43, name: 'Maui AIDS Foundation'}
            ],
        }
    ]
};

caseManagementChartSurvey.setOption(caseManagementOptionsSurvey);

var caseManagementChartProfile = echarts.init(document.getElementById('caseManagementProfile'));
var caseManagementOptionsProfile = {
    title : {
        text: 'Epi Profile',
        subtext: 'No data available.',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []
    },
    series: [
        {
            name: 'Distribution of Disabilities in Epi Profile',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
            ],
        }
    ]
};
caseManagementChartProfile.setOption(caseManagementOptionsProfile);


// Disabilities
var disabilityChartSurvey = echarts.init(document.getElementById('disabilitySurvey'));
var disabilityOptionsSurvey = {
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
        data: ['Heart Disease', 'Arthritis', 'Chronic Pain', 'Diabetes', 'Depression', 'Anxiety', 'Hepatitis C',
            'Migraine Headaches', 'Insomnia/Sleep Disorder', 'Hearing Impairment', 'Asthma', 'Overactive Bladder',
            'Sciatica', 'Irritable Bowel Syndrome', 'Osteoporosis', 'Eczema', 'Cancer', 'Emphysema', 'Ulcers', 'Epilepsy',
            'Multiple Sclerosis']
    },
    series: [
        {
            name: 'Distribution of Disabilities in HIV Needs Assessment',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value:69, name: 'Heart Disease'},
                {value:69, name: 'Arthritis'},
                {value:69, name: 'Chronic Pain'},
                {value:69, name: 'Diabetes'},
                {value:69, name: 'Depression'},
                {value:69, name: 'Anxiety'},
                {value:69, name: 'Hepatitis C'},
                {value:69, name: 'Migraine Headaches'},
                {value:69, name: 'Insomnia/Sleep Disorder'},
                {value:69, name: 'Hearing Impairment'},
                {value:69, name: 'Asthma'},
                {value:69, name: 'Overactive Bladder'},
                {value:69, name: 'Sciatica'},
                {value:69, name: 'Irritable Bowel Syndrome'},
                {value:69, name: 'Osteoporosis'},
                {value:69, name: 'Eczema'},
                {value:69, name: 'Cancer'},
                {value:69, name: 'Emphysema'},
                {value:69, name: 'Ulcers'},
                {value:69, name: 'Epilepsy'},
                {value:69, name: 'Minor Sclerosis'},
            ],
        }
    ]
};

disabilityChartSurvey.setOption(disabilityOptionsSurvey);

var disabilityChartProfile = echarts.init(document.getElementById('disabilityProfile'));
var disabilityOptionsProfile = {
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
            name: 'Distribution of Disabilities in Epi Profile',
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
disabilityChartProfile.setOption(disabilityOptionsProfile);


// Drug Use
var drugUseChartSurvey = echarts.init(document.getElementById('drugUseSurvey'));
var drugUseOptionsSurvey = {
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
            name: 'Distribution of Drug Use in Survey',
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

drugUseChartSurvey.setOption(drugUseOptionsSurvey);

var drugUseChartProfile = echarts.init(document.getElementById('drugUseProfile'));
var drugUseOptionsProfile = {
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
            name: 'Distribution of Drug Use in Epi Profile',
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
drugUseChartProfile.setOption(drugUseOptionsProfile);


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



