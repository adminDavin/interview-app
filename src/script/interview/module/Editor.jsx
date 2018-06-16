import React from 'react';
import AceEditorCom from "./../component/AceEditorCom.jsx";
class Editor extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className={ this.props.className }>
        <div className="col card">
          <div className="m-t-10 row container-fluid">
            <ul className="col-auto pagination">
              <li className="disabled page-item">
                <a href="#" className="page-link">Previous question</a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">Next question</a>
              </li>
            </ul>
            <div className="col-auto offset-3">
              <button className="btn disabled">
                <strong>1/10</strong>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <strong>Question 1</strong>: how to count a number of this.</div>
            <div className="card-body">
              <p className="card-text">打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个“水仙花数”，因为153=1的三次方＋5的三次方＋3的三次方。</p>
            </div>
            <div className="card-header">
              <strong>Remark</strong>: how do you think this question?</div>
            <div className="card-body">
              <p className="card-text">Text for this card.</p>
            </div>
          </div>
        </div>
        <AceEditorCom className="col card"></AceEditorCom>
      </div>
      );
  }
}

export default Editor;