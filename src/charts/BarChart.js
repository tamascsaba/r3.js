define(['../lib/react', '../lib/d3'], function(React, d3) {
    /**
     * Bar React Components
     */
    var Bar = React.createClass({
        getDefaultProps: function() {
            return {
                width: 0,
                height: 0,
                offset: 0
            };
        },
        render: function() {
            return React.DOM.rect({
                fill: this.props.color,
                width: this.props.width,
                height: this.props.height,
                x: this.props.offset,
                y: this.props.availableHeight - this.props.height
            });
        }
    });

    /**
     * DataGroup React Components
     */
    var DataGroup = React.createClass({
        getDefaultProps: function() {
            return {
                title: '',
                data: []
            };
        },
        render: function() {
            var props = this.props;

            var yScale = d3.scale.linear()
                .domain([0, d3.max(this.props.data)])
                .range([0, this.props.height]);

            var xScale = d3.scale.ordinal()
                .domain(d3.range(this.props.data.length))
                .rangeRoundBands([0, this.props.width], 0.05);

            var bars = this.props.data.map(function(point, i) {
                return Bar({
                    height: yScale(point),
                    width: xScale.rangeBand(),
                    offset: xScale(i),
                    availableHeight: props.height,
                    color: props.color,
                    key: i,
                });

            });

            return React.DOM.g(null, bars);
      }
    });

    /**
     * BarChart React Components
     */
    var BarChart = React.createClass({
        render: function() {
            return React.DOM.svg({
                    width: this.props.width,
                    height: this.props.height
                }, DataGroup({
                    data: this.props.data,
                    width: this.props.width,
                    height: this.props.height,
                    color: "blue"
                })
            );
        }
    });

    return BarChart;
});