import React from 'react';

class BaseNavContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      child: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
      return true
    } else {
      return false
    }
  }

  componentDidMount() {
    this.updateRender(this.props, this.state);
  }

  componentWillUpdate(props, state) {
    this.updateRender(props, state);
  }

  updateElement(Element) {
    this.setState({
      child: <Element></Element>
    });
  }

  render() {
    return (
      <div className='row'>
        {this.state.child}
      </div>
    );
  }
}

export default BaseNavContent;