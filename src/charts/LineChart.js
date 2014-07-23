define(['../lib/react', '../lib/d3'], function(React, d3) {
    /**
     * Line Components
     */
    var Line = React.createClass({
        getDefaultProps: function() {
            return {
                path: '',
                color: 'blue',
                width: 2
            };
        },

        render: function() {
            return React.DOM.path({
                d: this.props.path,
                stroke: this.props.color,
                strokeWidth: this.props.width,
                fill: "none"
            });
        }
    });

    /**
     * DataGroup React Components
     */
    var DataGroup = React.createClass({
        getDefaultProps: function() {
            return {
                data: [],
                interpolate: 'linear'
            };
        },

        render: function() {
            var self = this,
                props = this.props,
                yScale = props.yScale,
                xScale = props.xScale;

            var path = d3.svg.line()
                .x(function(d) {
                    return xScale(d.x);
                })
                .y(function(d) {
                    return yScale(d.y);
                })
                .interpolate(this.props.interpolate);


            var lines = this.props.data.map(function(data, i) {
                return Line({
                    path: path(data.value),
                    color: data.color,
                    key: i
                });
            });


            return React.DOM.g(null, lines);
        }
    });


    /**
     * BarChart React Components
     */
    var LineChart = React.createClass({
        getDefaultProps: function() {
            return {
                width: 600,
                height: 300
            };
        },

        render: function() {

            var max = d3.max(this.props.data, function(d) {
                return d3.max(d.value, function(d2) { return d2.y;});
            });

            var xScale = d3.scale.linear()
                .domain([0, 6])
                .range([0, this.props.width]);

            var yScale = d3.scale.linear()
                .domain([0, max])
                .range([this.props.height, 0]);

            return React.DOM.svg({
                    width: this.props.width,
                    height: this.props.height
                },
                DataGroup({
                    data: this.props.data,
                    size: {
                        width: this.props.width,
                        height: this.props.height
                    },
                    xScale: xScale,
                    yScale: yScale,
                    color: "blue"
                })
            );
        }
    });

    return LineChart;
});