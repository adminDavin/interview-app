import React from 'react';
import { Icon, Input } from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';
import Img from 'react-image';
import BaseNavContent from './../base-component/BaseNavContent.jsx';
import BaseModule from './../base-component/BaseModule.jsx';

class Enterprise extends BaseModule {
  constructor(props, context) {
    super(props, context);
    this.state = {
      router: 'candidate-list',
    };
  }

  render() {
    return (
      <div className={ this.props.className }>
        <div style={ { padding: 15 } }>
          <div className="row alert alert-primary">
            <div className="col">
              <Icon className="m-r-10" icon='squares' size="4x" />
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
              <div className="row card-header">
                <button className="btn btn-light">
                  <Icon icon='edit' size="2x" />
                </button>
                <div className='col-auto text-center m-t-10' style={ { fontSize: 22 } }>
                  <strong> Technical department </strong>
                </div>
              </div>
              <div className="card-body">
                <dl className="row dl-horizontal">
                  <dt className="col-5">注册时间</dt>
                  <dd className="col-7">2018/06/18</dd>
                  <dt className="col-5">部门名称</dt>
                  <dd className="col-7">系统运维</dd>
                  <dt className="col-5">岗位需求人数</dt>
                  <dd className="col-7">5</dd>
                  <dt className="col-5">应聘人数</dt>
                  <dd className="col-7">0</dd>
                  <dt className="col-5">岗位需求</dt>
                  <dd className="col-7">5</dd>
                </dl>
              </div>
            </div>
            <div className="col card" style={ { marginLeft: 15 } }>
              <ul className="nav alert alert-dark">
                { this.getNavs(NAVLIST) }
              </ul>
              <NavContent router={ this.state.router }></NavContent>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

class NavContent extends BaseNavContent {
  updateRender(props, state) {
    let router = eleFindInArray(NAVLIST, 'name', props.router);
    if (router) {
      if (router == 'CandidateList') {
        this.updateElement(require("./../component/CandidateList.jsx").default);
      } else if (router == 'InterviewNews') {
        this.updateElement(require("./../component/InterviewNews.jsx").default);
      } else if (router == 'InterviewerList') {
        this.updateElement(require("./../component/InterviewerList.jsx").default);
      } else if (router == 'OtherSetting') {
        this.updateElement(require("./../component/OtherSetting.jsx").default);
      } else if (router == 'RecordCandidate') {
        this.updateElement(require("./../component/RecordCandidate.jsx").default);
      }
    }
  }
}

const NAVLIST = [{
  'name': 'record-candidate',
  'value': 'RecordCandidate',
  'title': '录入候选人'
}, {
  'name': 'interview-news',
  'value': 'InterviewNews',
  'title': '最新动态'
}, {
  'name': 'candidate-list',
  'value': 'CandidateList',
  'title': '候选人列表'
}, {
  'name': 'interview-list',
  'value': 'InterviewerList',
  'title': '面试官列表'
}, {
  'name': 'other-setting',
  'value': 'OtherSetting',
  'title': '其他设置'
}];

function eleFindInArray(li, name, value) {
  for (let ele of li) {
    let result = ele[name] == value ? ele['value'] : null;
    if (result) {
      return result;
    }
  }
}

export default Enterprise;