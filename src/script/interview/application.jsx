import React from 'react';
import CommonHead from "./component/CommonHead.jsx";
import Editor from "./module/Editor.jsx";
class Application extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <CommonHead className="container"></CommonHead>
        <Editor className="row container-fluid"></Editor>
      </div>
    );
  }
}

export default Application;