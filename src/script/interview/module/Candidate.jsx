import React from 'react';
import { Icon, Button } from 'rsuite';
import { Nav, Navbar, Dropdown } from 'rsuite';
import PDF from 'react-pdf-js';
class Candidate extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className={ this.props.className }>
        <div style={ { padding: 15 } }>
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
              <dl className="dl-horizontal">
                <dt>应聘者</dt>
                <dd>张大伟</dd>
                <dt>年龄</dt>
                <dd>30</dd>
                <dt>工作经验</dt>
                <dd>5年</dd>
                <dt>联系电话</dt>
                <dd>18758268513</dd>
              </dl>
            </div>
            <div className="col alert alert-light">
              <Nav className="">
                <Nav.Item icon={ <Icon icon="github-alt" /> }>岗位信息</Nav.Item>
                <Nav.Item icon={ <Icon icon="github-alt" /> }>个人简历</Nav.Item>
                <Nav.Item icon={ <Icon icon="circle" /> }>Coding测评</Nav.Item>
                <Nav.Item icon={ <Icon icon="circle" /> }>其他招聘岗位信息</Nav.Item>
              </Nav>
              <Icon icon="circle" />
              <Button appearance="primary">更新简历</Button>
              <MyPdfViewer></MyPdfViewer>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

class MyPdfViewer extends React.Component {
  state = {};

  onDocumentComplete = (pages) => {
    this.setState({
      page: 1,
      pages
    });
  }

  handlePrevious = () => {
    this.setState({
      page: this.state.page - 1
    });
  }

  handleNext = () => {
    this.setState({
      page: this.state.page + 1
    });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={ this.handlePrevious }><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={ this.handleNext }><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          { previousButton }
          { nextButton }
        </ul>
      </nav>
      );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF file={ require("./../../../style/1127-运维-罗时顺.pdf") } onDocumentComplete={ this.onDocumentComplete } page={ this.state.page } />
        { pagination }
      </div>
    )
  }
}
export default Candidate;