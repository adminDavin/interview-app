import React from 'react';
class Interviewer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
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
                <li className="nav-item active">
                  <a className="nav-link" href="#">应聘者列表 <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">岗位需求管理</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">个人信息维护</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      );
  }
}

export default Interviewer;