import React from 'react';
import BaseNavContent from './../base-component/BaseNavContent.jsx';


class Interviewer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      router: 'demandpost-list'
    };
  }

  eventOnClickForNav(router) {
    this.setState({
      router: router
    });
  }

  render() {
    let navs = NAVLIST.map((nav, index) => {
      let itemClassName = "nav-link ";
      let itemStyle = {};
      if (this.state.router == nav.name) {
        itemClassName = itemClassName + "active";
        itemStyle = {
          backgroundColor: 'red'
        };
      }
      return (
        <li key={ nav.name + index } className="nav-item">
          <a className={ itemClassName } style={ itemStyle } onClick={ this.eventOnClickForNav.bind(this, nav.name) } href={ "#" + nav.name }>
            { nav.title }
          </a>
        </li>
        );
    });

    return (
      <div className={ this.props.className }>
        <div style={ { padding: 15 } }>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">应聘者管理系统</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                { navs }
              </ul>
            </div>
          </nav>
          <div className="w-r100">
            <NavContent router={ this.state.router }></NavContent>
          </div>
        </div>
      </div>
      );
  }
}

const NAVLIST = [{
  'name': 'candidate-list',
  'value': 'CandidateList',
  'title': '候选人列表'
}, {
  'name': 'demandpost-list',
  'value': 'DemandPostList',
  'title': '岗位需求管理'
}, {
  'name': 'other-setting',
  'value': 'OtherSetting',
  'title': '设置'
}];

class NavContent extends BaseNavContent {
  updateRender(props, state) {
    let router = eleFindInArray(NAVLIST, 'name', props.router);
    if (router) {
      if (router == 'CandidateList') {
        this.updateElement(require("./../component/CandidateList.jsx").default);
      } else if (router == 'DemandPostList') {
        this.updateElement(require("./../component/DemandPostList.jsx").default);
      }
    }
  }
}

function eleFindInArray(li, name, value) {
  for (let ele of li) {
    let result = ele[name] == value ? ele['value'] : null;
    if (result) {
      return result;
    }
  }
}


export default Interviewer;