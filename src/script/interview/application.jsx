import React from 'react';

import AceEditorCom from "./component/AceEditorCom.jsx"
// import SplitEditorCom from "./component/SplitEditorCom.jsx"
class Application extends React.Component {

  render() {
    return 
      (<div>
      <AceEditorCom></AceEditorCom>
      {/* <SplitEditorCom></SplitEditorCom> */}
    </div>);
  }
}

export default Application;