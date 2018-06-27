import React from 'react';
import {Nav, Icon} from 'rsuite';

import Loading from './../Loading.jsx';
import Loadable from 'react-loadable';

class BaseModule extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      router: ''
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
      return true
    } else {
      return false
    }
  }

  eventOnClickForNav(router) {
    this.setState({router: router});
  }

  getComponet(incomponent) {
    return Loadable({loader: incomponent, loading: Loading});
  }

  getNavs(navlist) {
    let navs = navlist.map((nav, index) => {
      let itemClassName = "nav-link ";
      let itemStyle = {};
      if (this.state.router == nav.name) {
        itemClassName = itemClassName + "active";
        itemStyle = {
          backgroundColor: 'red'
        };
      }
      return (
        <li key={nav.name + index} className="nav-item">
          <a
            className={itemClassName}
            style={itemStyle}
            onClick={this
            .eventOnClickForNav
            .bind(this, nav.name)}
            href={"#" + nav.name}>
            {nav.title}
          </a>
        </li>
      );
    });
    return navs;
  }

  getRsuiteNavs(navlist) {
    let navs = navlist.map((nav, index) => {
      let currentEle = false;
      if (this.state.router == nav.name) {
        currentEle = true;
      }

      return (
        <Nav.Item
          key={nav.name + index}
          icon={< Icon icon = {
          nav.icon
        } />}
          active={currentEle}
          onClick={this
          .eventOnClickForNav
          .bind(this, nav.name)}>
          {nav.title}
        </Nav.Item>
      );
    });
    return navs;
  }
}

export default BaseModule;