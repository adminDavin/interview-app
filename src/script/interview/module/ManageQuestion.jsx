import React from 'react';
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';
import { Icon } from 'rsuite';
import { Message } from 'rsuite';
import { Table } from 'rsuite';
import CodeView from 'react-code-view';
import { SelectPicker, ButtonToolbar, Paragraph } from 'rsuite';
import { Input } from 'rsuite';
import { Modal } from 'rsuite';
const {Column, HeaderCell, Cell, Pagination} = Table;
const styles = {
  padding: 20,
  textAlign: "center"
};
const selectData = [
  {
    label: 'Eugenia',
    value: 'Eugenia',
    role: 'Master'
  }, {
    label: 'Kariane',
    value: 'Kariane',
    role: 'Master'
  }, {
    label: 'Louisa',
    value: 'Louisa',
    role: 'Master'
  }
];

const CustomCodeView = ({...props}) => (
  <Row>
    <Col md={ 12 }>
    <CodeView {...props} />
    </Col>
  </Row>
);
const dataList = [
  {
    id: 3,
    name: 'c',
    creator: 'zhangdawei',
    type: 'database',
    createTime: '2018/06/16',
    updateTime: '2018/06/16',
    question: "打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，...",
    status: "使用中"
  }
];

class ManageQuestion extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className={ this.props.className }>
        <Message description="Informational" />
        <div className="row" style={ { padding: 15 } }>
          <BasicDemo className="col-auto"></BasicDemo>
          <SelectPicker className="col-auto" data={ selectData } groupBy="role" appearance="ghost" placeholder="筛选问题" toggleComponentClass={ Button } />
          <span className="col-auto m-t-7">搜索全部:</span>
          <Input className="col-auto" style={ { width: 300 } } placeholder="database" />
        </div>
        <Table data={ dataList }>
          <Column sortable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id"></Cell>
          </Column>
          <Column sort resizable>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="name"></Cell>
          </Column>
          <Column sort resizable>
            <HeaderCell>creator</HeaderCell>
            <Cell dataKey="creator"></Cell>
          </Column>
          <Column sort resizable>
            <HeaderCell>type</HeaderCell>
            <Cell dataKey="type"></Cell>
          </Column>
          <Column sort resizable>
            <HeaderCell>createTime</HeaderCell>
            <Cell dataKey="createTime"></Cell>
          </Column>
          <Column sort resizable>
            <HeaderCell>updateTime</HeaderCell>
            <Cell dataKey="updateTime"></Cell>
          </Column>
          <Column sort resizable>
            <HeaderCell>status</HeaderCell>
            <Cell dataKey="status"></Cell>
          </Column>
          <Table.Column>
            <HeaderCell width={ 500 }>question</HeaderCell>
            <Cell dataKey="question"></Cell>
          </Table.Column>
        </Table>
        <Table.Pagination total={ 50 }></Table.Pagination>
      </div>
      );
  }
}

import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
class BasicDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      show: false
    });
  }
  open() {
    this.setState({
      show: true
    });
  }
  render() {
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button appearance="primary" onClick={ this.open }>新建问题</Button>
        </ButtonToolbar>
        <Modal size={ 'lg' } show={ this.state.show } onHide={ this.close } backdrop={ false } overflow={ false }>
          <Modal.Header>
            <Modal.Title>
              <Icon icon='shield' rotate={ 270 } size="2x" />
              <span>新建问题</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='card' style={ { padding: 10 } }>
              <Form layout="inline">
                <FormGroup>
                  <ControlLabel>问题名称</ControlLabel>
                  <FormControl name="username" style={ { width: 160 } } />
                  <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                  <SelectPicker className="col-auto" data={ selectData } groupBy="role" appearance="ghost" placeholder="问题类型" toggleComponentClass={ Button } />
                </FormGroup>
                <FormGroup>
                  <SelectPicker className="col-auto" data={ selectData } groupBy="role" appearance="ghost" placeholder="职位名称" toggleComponentClass={ Button } />
                </FormGroup>
              </Form>
              <Form fluid>
                <FormGroup>
                  <ControlLabel>问题描述</ControlLabel>
                  <FormControl rows={ 5 } name="textarea" componentClass="textarea" />
                  <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>其他</ControlLabel>
                  <FormControl rows={ 3 } name="textarea" componentClass="textarea" />
                </FormGroup>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.close } appearance="primary">
              Ok
            </Button>
            <Button onClick={ this.close } appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      );
  }
}
export default ManageQuestion;