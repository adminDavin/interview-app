import React from 'react';
import { Icon } from 'rsuite';
import { Input } from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';
import Img from 'react-image';
// import Icon from './../../../style/icon.png';

class Enterprise extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className={ this.props.className }>
        <div style={ { padding: 15 } }>
          <div className="row alert alert-primary">
            <div className="col">
              <Icon className="m-l-20" icon='squares' rotate={ 270 } size="4x" />
              <span className="m-r-10" style={ { fontSize: 28 } }>davinzhan.com.cn</span>
            </div>
            <div className="col-3">
              <Input className="m-t-20" style={ { width: 300 } } placeholder="发布岗位需求" />
            </div>
            <div className="col-3">
              <Input className="m-t-20" style={ { width: 300 } } placeholder="切换部门" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 card" style={ { backgroundColor: "aliceblue" } }>
              <img style={ { padding: 30 } } className="card-img-top" src={ require("./../../../style/icon.png") } alt="enterprise" />
              <div className="card-header">
                <p className='text-center m-t-20' style={ { fontSize: 22 } }><strong> Technical department </strong></p>
              </div>
              <div className="card-body">
                <dl className="dl-horizontal">
                  <dt>注册时间</dt>
                  <dd>2018/06/18</dd>
                  <dt>部门名称</dt>
                  <dd>系统运维</dd>
                  <dt>岗位需求人数</dt>
                  <dd>5</dd>
                  <dt>应聘人数</dt>
                  <dd>0</dd>
                  <dt>岗位需求</dt>
                  <dd>5</dd>
                </dl>
              </div>
            </div>
            <div className="col card" style={ { marginLeft: 15 } }>
              <ul className="nav alert alert-dark">
                <li className="nav-item">
                  <a className="nav-link active" href="#">首页</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">应聘者列表</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">岗位需求列表</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">面试官列表</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">HR列表</a>
                </li>
              </ul>
              <div className="row">
                <div className="col text-center border" style={ { height: 280 } }>
                  应聘记录轨迹图
                </div>
                <div className="col text-center border" style={ { height: 280 } }>
                  岗位需求分布图
                </div>
              </div>
              <div className="alert alert-success m-t-10" role="alert" style={ { overflowY: "auto", maxHeight: 300 } }>
                <h4 className="alert-heading">最新动态</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an
                  alert works with this kind of content.</p>
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
          </div>
        </div>
      </div>
      );
  }
}

export default Enterprise;