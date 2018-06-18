import React from 'react';

class OtherSetting extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}
  render() {
    return (
      <div className="row" style={ { margin: 15 } }>
        <button className="btn btn-primary">退出登录</button>
      </div>
      );
  }
}


export default OtherSetting;