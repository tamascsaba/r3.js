define(function (require) {
    'use strict';

    var React = require('src/lib/react'),
        BarChart = require('src/r3').BarChart,
        LineChart = require('src/r3').LineChart;

    React.renderComponent(
        BarChart({
            data: [30, 10, 5, 8, 15, 10,15 ],
            width: 600,
            height: 600
        }),
        document.getElementById('bar-chart')
    );

    var data = [
        { name: 'First', color: 'red', value: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ]},
        { name: 'Secund', color: 'blue', value: [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]},
        { name: 'Third', color: 'green', value: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]}
    ];

    React.renderComponent(
        LineChart({
            data: data,
            width: 600,
            height: 600
        }),
        document.getElementById('line-chart')
    );
});