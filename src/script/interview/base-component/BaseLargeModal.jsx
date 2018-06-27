import React from 'react';
import {Modal, Icon, Button} from 'rsuite';

class BaseLargeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.close = this
      .close
      .bind(this);
    this.open = this
      .open
      .bind(this);
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

  updateRender(props, state) {}
  close() {
    this.setState({show: false});
  }
  open() {
    this.setState({show: true});
  }
  comRender(title, content) {
    return (
      <Modal
        size={'lg'}
        show={this.state.show}
        onHide={this.close}
        backdrop={false}
        overflow={false}
        full={true}>
        <Modal.Header>
          <Modal.Title>
            <Icon icon='shield' rotate={270} className='m-lb-5'/>
            <span className='m-lb-5'>
              <strong>{title}</strong>
            </span>
            <hr style={{
              margin: 0
            }}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close} appearance="primary">
            Ok
          </Button>
          <Button onClick={this.close} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BaseLargeModal;