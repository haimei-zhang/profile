/**
 * Created by Haimei on 09/07/2017.
 */
var exercise = {

  getDate: function() {
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    return exerciseData.filter(function (date) {
      return date["YYYY-MM-DD"] >= startDate && date["YYYY-MM-DD"] <= endDate;
    });
  },

  showBarCharts: function (selectedData) {
    var dateList = [];
    var MingStatsList = [];
    var MayStatsList = [];
    for (var i = 0; i < selectedData.length; i += 2) {
      dateList.push(selectedData[i]["YYYY-MM-DD"]);
      MayStatsList.push(selectedData[i]["Stats"]);
    }
    for (var j = 1; j < selectedData.length; j += 2) {
      MingStatsList.push(selectedData[j]["Stats"]);
    }

    var barChart = echarts.init(document.getElementById('barChart'));
    var option = {
      title : {
        text: '',
        subtext: ''
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['Ming','May']
      },
      toolbox: {
        show : true,
        feature : {
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true}
        },
        itemSize: 28,
        itemGap: 12,
        right: 12
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          data : dateList
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'Ming',
          type:'bar',
          data: MingStatsList,
          markPoint : {
            data : [
              {type : 'max', name: 'max'},
              {type : 'min', name: 'min'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name: 'average'}
            ]
          }
        },
        {
          name:'May',
          type:'bar',
          data: MayStatsList,
          markPoint : {
            data : [
              {name : 'max', value : 182.2, xAxis: 7, yAxis: 183},
              {name : 'min', value : 2.3, xAxis: 11, yAxis: 3}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name : 'average'}
            ]
          }
        }
      ]
    };
    barChart.setOption(option);
    window.onresize = barChart.resize;
  },

  addEvent: function() {
    var _this = this;
    $("#search").on("click", function() {
      var selectedData = _this.getDate();
      _this.showBarCharts(selectedData);
    });
  },

  init: function () {
    this.addEvent();
    $("#search").trigger("click");

  }

};

$(document).ready(function() {
  exercise.init();
});