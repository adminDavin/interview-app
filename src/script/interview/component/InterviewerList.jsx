import React from 'react';
import { Table, Checkbox, Whisper, IconButton, Icon, Divider } from 'rsuite';
require('bootstrap-loader');
const {Column, HeaderCell, Cell, Pagination} = Table;
import { Button, SelectPicker, ButtonToolbar, Paragraph } from 'rsuite';

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


const fakeData = [{
  id: 1,
  avartar: 'https://s3.amazonaws.com/uifaces/faces/twitter/justinrob/128.jpg',
  city: 'New Amieshire',
  email: 'Leora13@yahoo.com',
  firstName: 'Ernest Schuppe SchuppeSchuppeSchuppeSchuppeSchuppeSchuppe Schuppe',
  lastName: 'Schuppe',
  street: 'Ratke Port',
  zipCode: '17026-3154',
  date: '2016-09-23T07:57:40.195Z',
  bs: 'global drive functionalities',
  catchPhrase: 'Intuitive impactful software',
  companyName: 'Lebsack - Nicolas',
  words: 'saepe et omnis',
  sentence: 'Quos aut sunt id nihil qui.',
  stars: 820,
  followers: 70
}];



class InterviewerList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: fakeData
    };
  }

  componentDidMount() {}
  render() {
    return (
      <div className="w-r100" style={ { margin: 15 } }>
        <div className="w-r100 text-left">
          <BasicDemo className="col-auto"></BasicDemo>
        </div>
        <Table className="w-r100" height={ 550 } data={ this.state.data } onRowClick={ data => {
                                                                                         console.log(data);
                                                                                       } }>
          <Column width={ 70 } align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={ 200 } fixed>
            <HeaderCell>姓名</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>
          <Column width={ 200 }>
            <HeaderCell>当前职位</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>
          <Column width={ 200 }>
            <HeaderCell>所属项目</HeaderCell>
            <Cell dataKey="city" />
          </Column>
          <Column width={ 200 }>
            <HeaderCell>岗位需求</HeaderCell>
            <Cell dataKey="street" />
          </Column>
          <Column width={ 300 }>
            <HeaderCell>查看详情</HeaderCell>
            <Cell dataKey="companyName" />
          </Column>
        </Table>
      </div>
      );
  }
}



import { Modal, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
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
          <Button appearance="primary" onClick={ this.open }>添加面试官</Button>
        </ButtonToolbar>
        <Modal size={ 'lg' } show={ this.state.show } onHide={ this.close } backdrop={ false } overflow={ false }>
          <Modal.Header>
            <Modal.Title>
              <Icon icon='shield' rotate={ 270 } size="2x" />
              <span>添加面试官</span>
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

export default InterviewerList;