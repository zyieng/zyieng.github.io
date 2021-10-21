const getOptions = ({title, legendData, xAxisData, data}) => {
    return {
        title: {
            text: title,
            left: 'center',
            bottom: 10
        },
        tooltip: {},
        legend: {
            data: legendData
        },
        xAxis: {
            data: xAxisData
        },
        yAxis: {},
        series: [{
            name: '文章数量',
            type: 'bar',
            data: data
        }]
    }
}