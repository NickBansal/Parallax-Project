export const parallaxData1 = [
    {
        start: 0,
        end: '1500px',
        properties: [
            {
                startValue: 100,
                endValue: 0,
                property: 'height',
                unit: 'vh'
            },
        ],

    },
    {
        start: 0,
        end: '500px',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
                // unit: 'px
            },
        ],
    }
];

export const parallaxData2 = [
    {
        start: 0,
        end: '250px',
        properties: [
            {
                startValue: 0,
                endValue: 100,
                property: 'translateX',
                unit: 'px'
            },
        ],
    },
    {
        start: '250px',
        end: '500px',
        properties: [
            {
                startValue: 0,
                endValue: 100,
                property: 'blur',
                unit: 'px'
            },
            {
                startValue: 100,
                endValue: 0,
                property: 'translateX',
                unit: 'px'
            },
            {
                startValue: 0,
                endValue: 180,
                property: 'rotate'
            },
        ],
    },
    {
        start: '500px',
        end: '750px',
        properties: [
            {
                startValue: 0,
                endValue: 100,
                property: 'translateX',
                unit: 'px'
            },
            {
                startValue: 180,
                endValue: 360,
                property: 'rotate'
            },
            {
                startValue: "#3cb99c",
                endValue: "#FFD700",
                property: "backgroundColor"
            },
            {
                startValue: "#FFD700",
                endValue: "#3cb99c",
                property: "color"
            },
        ],
    },
    {
        start: '750px',
        end: '1000px',
        properties: [
            {
                startValue: 100,
                endValue: 0,
                property: 'translateX',
                unit: 'px'
            },
        ],
    },
];

export const parallaxData3 = [
    {
        start: 0,
        end: '10px',
        properties: [
            {
                startValue: 0,
                endValue: 1000,
                property: 'blur',
                unit: 'px'
            },
        ],
    }
];