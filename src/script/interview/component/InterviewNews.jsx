import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';


class InterviewNews extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log(this.refs.main);
    var myChart = echarts.init(this.refs.main);
    var myChart1 = echarts.init(this.refs.main1);
    // 绘制图表
    myChart.setOption({
      title: {
        text: '应聘记录分布图'
      },
      tooltip: {},
      xAxis: {
        type: 'time',
      },
      yAxis: {},
      series: [{
        name: '应聘人数',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    myChart1.setOption({
      title: {
        text: '岗位需求分布图'
      },
      tooltip: {},
      xAxis: {
        data: ["java工程师", "python工程师", "系统运维工程师", "mysql数据库运维", "大数据库运维", "nosql数据库运维"]
      },
      yAxis: {},
      series: [{
        name: '需求人数',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  render() {
    return (
      <div className="row" style={ { margin: 15 } }>
        <div className="col-6 text-center border" style={ { height: 280 } }>
          <div ref="main" style={ { width: 500, height: 280 } }></div>
        </div>
        <div className="col-6 text-center border" style={ { height: 280 } }>
          <div ref="main1" style={ { width: 500, height: 280 } }></div>
        </div>
        <div className="alert alert-success m-t-10" role="alert" style={ { overflowY: "auto", maxHeight: 300 } }>
          <h4 className="alert-heading">最新动态</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert
            works with this kind of content.</p>
          <hr/>
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          <hr/>
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          <hr/>
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          <hr/>
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
      </div>
      );
  }
}


export default InterviewNews;