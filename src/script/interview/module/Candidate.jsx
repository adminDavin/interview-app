import React from 'react';
import {Icon, Button} from 'rsuite';
import {Nav} from 'rsuite';
import BaseModule from './../base-component/BaseModule';
import BaseNavContent from './../base-component/BaseNavContent.jsx';

class Candidate extends BaseModule {
  constructor(props, context) {
    super(props, context);
    this.state = {
      router: 'demond-massage',
      navContent: PageNotFound
    };
  }
  componentDidMount() {
    this.eventOnClickForNav(this.props.location.pathname.split('/')[2]);
  }
  eventOnClickForNav(navName) {
    console.log(this.props);
    console.log(navName)
    if (navName == null) {
      navName = this.state.router;
    }
    this
      .props
      .history
      .push(this.props.match.path + "/" + navName);
    this.getNavContent(eleFindInArray(NAVLIST, 'name', navName));
  }

  getNavContent(router) {
    let element = PageNotFound;
    if (router == null) {
      this.setState({navContent: element});
    } else {
      if (router == 'DemondMassage') {
        element = this.getComponet(() => import (/* webpackChunkName: "demondMassage" */
        "./../component/DemondMassage.jsx"));
      } else if (router == 'CandidateMessage') {
        element = this.getComponet(() => import (/* webpackChunkName: "candidateMessage" */
        "./../component/CandidateMessage.jsx"));
      } else if (router == 'CandidateResume') {
        element = this.getComponet(() => import (/* webpackChunkName: "candidateResume" */
        "./../component/CandidateResume.jsx"));
      } else if (router == 'CodingTesting') {
        element = this.getComponet(() => import (/* webpackChunkName: "codingTesting" */
        "./../component/CodingTesting.jsx"));
      }
      this.setState({navContent: element, router: router});
    }

  }

  getHeader() {
    return (
      <div className="row alert alert-primary">
        <div className="col">
          <Icon icon='avatar' size="3x"/>
          <span style={{
            fontSize: 28
          }}>davinzhang@outlook.com</span>
        </div>
        <div className="col-auto justify-content-md-center m-t-10">
          <Button className="m-r-10 m-b-5" onClick={this.close} appearance="primary">企业文化</Button>
          <Button className="m-r-10 m-b-5" onClick={this.close} appearance="primary">联系HR</Button>
          <Icon icon='help-o' size="2x"/>
        </div>
      </div>
    );
  }

  getLeft() {
    return (
      <div>
        <img
          style={{
          padding: 30
        }}
          className="card-img-top"
          src={require("./../../../style/user.jpg")}
          alt="enterprise"/>
        < hr/>
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
    );
  }

  render() {
    let NavContent = this.state.navContent;
    return (
      <div className="p-15">
        {this.getHeader()}
        <div className="row">
          <div className="col-1">
            {this.getLeft()}
          </div>
          <div className="col alert alert-light">
            <Nav appearance="subtle">
              {this.getRsuiteNavs(NAVLIST)}
            </Nav>
            <NavContent props={this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

class PageNotFound extends React.Component {
  render() {
    return <div>page not found</div>
  }
}

const NAVLIST = [
  {
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
  }
];

function eleFindInArray(li, name, value) {
  for (let ele of li) {
    let result = ele[name] == value
      ? ele['value']
      : null;
    if (result) {
      return result;
    }
  }
}
export default Candidate;