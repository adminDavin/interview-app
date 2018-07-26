import React from 'react';
import mock from '../mock';
import PDF from 'react-pdf-js';
const pdf = require('pdfjs');
class CodingTesting extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: mock.detail
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    console.log(pdf);
  }
  handleChange() {
    console.log(this.refs.uploadFile.value);
  }
  onDocumentComplete = (pages) => {
    this.setState({page: 1, pages});
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
    let previousButton = <li className="previous" onClick={this.handlePrevious}>
      <a href="#">
        <i className="fa fa-arrow-left"></i>
        Previous</a>
    </li>;
    if (page === 1) {
      previousButton = <li className="previous disabled">
        <a href="#">
          <i className="fa fa-arrow-left"></i>
          Previous</a>
      </li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}>
      <a href="#">Next
        <i className="fa fa-arrow-right"></i>
      </a>
    </li>;
    if (page === pages) {
      nextButton = <li className="next disabled">
        <a href="#">Next
          <i className="fa fa-arrow-right"></i>
        </a>
      </li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    let a = new pdf.Document({file: "file:///C:/Users/davin-admin/Desktop/RPMBestPractices.pdf"});
    return (
      <div className="w-r100 card">
        {a}
        <div className="container">
          <div className="form-row align-items-center">
            <label className="col-auto col-form-label min-width-8">First Name</label>
            <input
              type="file"
              className="col form-control form-control-sm"
              ref="uploadFile"
              onChange={this.handleChange}/>
            <label className="col-auto col-form-label min-width-8">update time</label>
            <input type="text" className="col form-control form-control-sm"/>
          </div>
          <div>
            {/* <PDF
              file="file:///C:/Users/davin-admin/Desktop/RPMBestPractices.pdf"
              onDocumentComplete={this.onDocumentComplete}
              page={this.state.page}/> {pagination} */}
          </div>
        </div>
      </div>
    );
  }
}

export default CodingTesting;