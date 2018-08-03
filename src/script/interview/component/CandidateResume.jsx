import React from 'react';
import mock from '../mock';
// import PDF from 'react-pdf-js'; const pdf = require('pdfjs');
class CandidateResume extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: mock.detail
    };
  }
  render() {
    // let a = new pdf.Document({file:
    // "file:///C:/Users/davin-admin/Desktop/RPMBestPractices.pdf"});
    return (
      <div className="w-r100 card">
        ceshi
      </div>
    );
  }
}

export default CandidateResume;