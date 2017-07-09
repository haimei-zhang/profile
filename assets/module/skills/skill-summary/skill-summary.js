/**
 * Created by Haimei on 09/07/2017.
 */
var skillSummary = {
  addPieChart: function () {
    var pieChart = echarts.init(document.getElementById('pieChart'));
    var piePatternSrc = skillSummaryPattern;

    var piePatternImg = new Image();
    piePatternImg.src = piePatternSrc;

    var itemStyle = {
      normal: {
        opacity: 0.7,
        color: {
          image: piePatternImg,
          repeat: 'repeat'
        },
        borderWidth: 3,
        borderColor: '#235894'
      }
    };
    var option = {
      title: {
        text: '',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {},
      series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
          normal: {
            textStyle: {
              fontSize: 18,
              color: '#235894'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: '#235894'
            }
          }
        },
        data: [
          {value: 8, name: 'HTML & CSS'},
          {value: 7, name: 'JavaScript'},
          {value: 3, name: 'Advanced JavaScript'},
          {value: 7, name: 'Visualisation'},
          {value: 4, name: 'Diagrams'},
          {value: 3, name: 'Backend'},
          {value: 5, name: 'Data Analysis'}
        ],
        itemStyle: itemStyle
      }]
    };

    pieChart.setOption(option);
    window.onresize = pieChart.resize;
  },
  init: function () {
    this.addPieChart();
  }
};

$(document).ready(function () {
  skillSummary.init();
});