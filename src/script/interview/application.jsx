import React from 'react';
import CommonHead from "./component/CommonHead.jsx";
import Candidate from "./module/Candidate.jsx";
import Editor from "./module/Editor.jsx";
import Enterprise from "./module/Enterprise.jsx";
import Interviewer from "./module/Interviewer.jsx";
class Application extends React.Component {

  render() {
    // return (
    //   <div className="container-fluid">
    //     <Candidate></Candidate>
    //   </div>
    //   );
    return (
      <div className="container-fluid">
        <Interviewer></Interviewer>
      </div>
      );

  // return (
  //   <div className="container-fluid">
  //     <Enterprise></Enterprise>
  //   </div>
  //   );
  // return (
  //   <div className="container-fluid">
  //     <CommonHead className="container"></CommonHead>
  //     <Editor className="row container-fluid"></Editor>
  //   </div>
  //   );
  }
}

export default Application;