import React from 'react';
import { Icon, Button } from 'rsuite';
import { Nav, Navbar, Dropdown } from 'rsuite';
import MyPdfViewer from './../component/MyPdfViewer.jsx';
import BaseModule from './../base-component/BaseModule';
import BaseNavContent from './../base-component/BaseNavContent.jsx';

class Candidate extends BaseModule {
  constructor(props, context) {
    super(props, context);
    this.state = {
      router: 'demond-massage1'
    };
  }
  render() {
    return (
      <div style={ { padding: 15 } }>
        <div className={ this.props.className }>
          <div className="row alert alert-primary">
            <div className="col">
              <Icon icon='avatar' size="3x" />
              <span style={ { fontSize: 28 } }>davinzhang@outlook.com</span>
            </div>
            <div className="col-auto justify-content-md-center m-t-10">
              <Button className="m-r-10 m-b-5" onClick={ this.close } appearance="primary">企业文化</Button>
              <Button className="m-r-10 m-b-5" onClick={ this.close } appearance="primary">联系HR</Button>
              <Icon icon='help-o' size="2x" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 card">
              <img style={ { padding: 30 } } className="card-img-top" src={ require("./../../../style/user.jpg") } alt="enterprise" />
              <hr />
              <div className="card-body">
                <dl className="row dl-horizontal">
                  <dt className="col-4">应聘者</dt>
                  <dd className="col-6">张大伟</dd>
                  <dt className="col-4">年龄</dt>
                  <dd className="col-8">30</dd>
                  <dt className="col-4">工作经验</dt>
                  <dd className="col-8">5年</dd>
                  <dt className="col-4">联系电话</dt>
                  <dd className="col-8">18758268513</dd>
                  <dt className="col-4">邮箱地址</dt>
                  <dd className="col-8">18758268513@162.com</dd>
                  <dt className="col-4">应聘职位</dt>
                  <dd className="col-8">研发工程师</dd>
                </dl>
              </div>
            </div>
            <div className="col alert alert-light">
              <Nav appearance="subtle">
                { this.getRsuiteNavs(NAVLIST) }
              </Nav>
              <MyPdfViewer></MyPdfViewer>
              <NavContent></NavContent>
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
      if (router == 'DemondMassage') {
        this.updateElement(require("./../component/DemondMassage.jsx").default);
      } else if (router == 'CandidateMessage') {
        this.updateElement(require("./../component/CandidateMessage.jsx").default);
      } else if (router == 'CandidateResume') {
        this.updateElement(require("./../component/CandidateResume.jsx").default);
      } else if (router == 'CodingTesting') {
        this.updateElement(require("./../component/CodingTesting.jsx").default);
      }
    }
  }
}

const NAVLIST = [{
  name: 'demond-massage',
  title: '岗位信息',
  value: 'DemondMassage',
  icon: 'github-alt'
}, {
  name: 'candidate-massage',
  title: '候选人信息',
  value: 'CandidateMessage',
  icon: 'github-alt'
}, {
  name: 'candidate-resume',
  title: '候选人简历',
  value: 'CandidateResume',
  icon: 'github-alt'
}, {
  name: 'coding-testing',
  title: 'Coding测评',
  value: 'CodingTesting',
  icon: 'circle'
}];


function eleFindInArray(li, name, value) {
  for (let ele of li) {
    let result = ele[name] == value ? ele['value'] : null;
    if (result) {
      return result;
    }
  }
}
export default Candidate;