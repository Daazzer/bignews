// 渲染顶部的统计框
$.ajax({
  url: window.bignews.data_info,
  success(res, textStatus, xhr) {
    if (xhr.status === 200) {
      for (const key in res) {
        $(`#${key}>em`).text(res[key]);
      }
    }
  },
  error(xhr, textStatus) {
    console.log(`${textStatus}!! 获取数据失败`);
  }
});

// 获取文章日更数
$.ajax({
  url: window.bignews.data_article,
  success(res) {
    if (res.code === 200) {
      loadCurve(res.date);
    }
  },
  error(xhr, textStatus) {
    console.log(`${textStatus}!! 获取文章日更数失败`);
  }
});

// 获取各类文章统计
$.ajax({
  url: window.bignews.data_category,
  success(res) {
    console.log(res);
    if (res.code === 200) {
      loadPie(res.date);
    }
  },
  error(xhr, textStatus) {
    console.log(`${textStatus}!! 获取各类文章统计数据失败`);
  }
});

// 获取最近七天访问数统计
/* $.ajax({
  url: window.bignews.data_visit,
  success(res) {
    console.log(res);
  }
}); */

/**
 * 加载一个折线图
 * @param {Array} data 用于加载折线图的数据
 */
function loadCurve(data) {
  const myChart = echarts.init($('#curve_show')[0]);

  const xAxisData = [];
  const seriesData = [];

  data.forEach(item => {
    xAxisData.push(item.date);
    seriesData.push(item.count);
  });

  const option = {
    tooltip: {
      trigger: 'axis',
      position(point) {
        return [point[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: '月新增文章数',
    },
    xAxis: {
      name: '日',
      type: 'category',
      boundaryGap: false,
      data: xAxisData
    },
    legend: {
      data: ['新增文章'],
      top: '40'
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      },
      right: 50
    },
    yAxis: {
      boundaryGap: [0, '100%']
    },
    series: [
      {
        name: '新增文章',
        type: 'line',
        smooth: true,
        sampling: 'average',
        itemStyle: { color: '#f80' },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,136,0,0.39)'
          }, {
            offset: .34,
            color: 'rgba(255,180,0,0.25)'
          },
          {
            offset: 1,
            color: 'rgba(255,222,0,0.00)'
          }])
        },
        data: seriesData
      }
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

/**
 * 加载一个饼状图
 * @param {Array} data 用于加载饼状图的数据
 */
function loadPie(data) {
  const myChart = echarts.init($('#pie_show')[0]);

  const seriesData = data.map(item => ({
    name: item.name,
    value: item.articles
  }));

  const option = {
    title: {
      left: 'center',
      text: '分类文章数量比',
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'horizontal',
      x: 'center',
      data: ['爱生活', '趣美味', '爱旅行', '爱电影', '爱游泳'],
      top: 10,
      left: '80%'
    },
    color: ['#5885e8', '#13cfd5', '#00ce68', '#ff9565', '#20ff19'],
    series: [
      {
        name: '分类名称',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        data: seriesData
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

/**
 * 加载一个柱状图
 * @param {Array} data 用于加载柱状图的数据
 */
function loadColumn(data) {
  const myChart = echarts.init($('#column_show')[0]);

  const option = {
    title: {
      left: 'center',
      text: '分类访问量',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {        // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      },

    },
    legend: {
      data: ['爱生活', '趣美味', '爱旅行', '爱电影', '爱游泳'],
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['一月', '二月', '三月', '四月']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    color: ['#5885e8', '#13cfd5', '#00ce68', '#ff9565', '#20ff19'],
    series: [
      {
        name: '爱生活',
        type: 'bar',
        data: [320, 332, 301, 334]
      },
      {
        name: '趣美味',
        type: 'bar',
        data: [220, 132, 101, 134]
      },
      {
        name: '爱旅行',
        type: 'bar',
        data: [220, 182, 191, 234]
      },
      {
        name: '爱电影',
        type: 'bar',
        data: [150, 232, 201, 154]
      },
      {
        name: '爱游泳',
        type: 'bar',
        data: [262, 118, 364, 426],
      },
    ]
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

loadColumn();
