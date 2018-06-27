import React from 'react';
import {
  Table,
  Checkbox,
  Whisper,
  IconButton,
  Icon,
  Divider
} from 'rsuite';
require('bootstrap-loader');
const {Column, HeaderCell, Cell, Pagination} = Table;
import {
  Button,
  SelectPicker,
  ButtonToolbar,
  Paragraph,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'rsuite';
import BaseLargeModal from "./../base-component/BaseLargeModal.jsx";

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

const fakeData = [
  {
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
  }
];

const ActionCell = ({
  rowData,
  dataKey,
  ...props
}) => {
  function handleAction() {
    alert(`id:${rowData[dataKey]}`);
  }
  return (
    <Cell {...props} className="link-group">
      <DetailModal rowData={rowData}></DetailModal>
    </Cell>
  );
};

class DemondMassage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: fakeData
    };
  }

  render() {
    return (
      <div className="w-r100" style={{
        margin: 15
      }}>
        <div className="w-r100 text-left">
          <CreateDemandModal className="col-auto"></CreateDemandModal>
        </div>
        <Table className="w-r100" height={550} data={this.state.data}>
          <Column width={70} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id"/>
          </Column>
          <Column width={200} fixed>
            <HeaderCell>岗位名称</HeaderCell>
            <Cell dataKey="firstName"/>
          </Column>
          <Column width={200}>
            <HeaderCell>需求人数</HeaderCell>
            <Cell dataKey="lastName"/>
          </Column>
          <Column width={200}>
            <HeaderCell>需求部门</HeaderCell>
            <Cell dataKey="city"/>
          </Column>
          <Column width={200}>
            <HeaderCell>更新时间</HeaderCell>
            <Cell dataKey="street"/>
          </Column>
          <Column width={300}>
            <HeaderCell>查看详情</HeaderCell>
            <ActionCell dataKey="companyName"/>
          </Column>
        </Table>
      </div>
    );
  }
}

class DetailModal extends BaseLargeModal {
  constructor(props) {
    super(props);
  }
  modalContent() {
    let data = this.props.rowData;
    return (
      <div className='card' style={{
        padding: 10
      }}>
        <Form layout="inline" formValue={data}>
          <FormGroup>
            <ControlLabel>岗位需求ID:</ControlLabel>
            <Divider vertical/>
            <FormControl name="id" readOnly/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>岗位名称:</ControlLabel>
            <Divider vertical/>
            <FormControl name="firstName" readOnly/>
          </FormGroup>
        </Form>
        <Form layout="inline" formValue={data}>
          <FormGroup>
            <ControlLabel>所属部门:</ControlLabel>
            <Divider vertical/>
            <FormControl name="firstName" readOnly/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>发布人</ControlLabel>
            <Divider vertical/>
            <FormControl name='city' readOnly/>
          </FormGroup>
        </Form>
        <Form layout="inline" formValue={data}>
          <FormGroup>
            <ControlLabel>需求人数:</ControlLabel>
            <Divider vertical/>
            <FormControl name="date" readOnly/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>上一次更新时间:</ControlLabel>
            <Divider vertical/>
            <FormControl name="date" readOnly/>
          </FormGroup>
        </Form>
        <hr style={{
          marginTop: 0
        }}/>
        <Form fluid formValue={data}>
          <FormGroup>
            <ControlLabel>岗位说明:</ControlLabel>
            <FormControl rows={10} name="firstName" componentClass="textarea"/>
          </FormGroup>
        </Form>
      </div>
    );
  }
  render() {
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button appearance="primary" onClick={this.open}>查看详情</Button>
        </ButtonToolbar>
        {this.comRender("查看详情", this.modalContent())}
      </div>
    );
  }
}

class CreateDemandModal extends DetailModal {
  render() {
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button appearance="primary" onClick={this.open}>添加岗位需求</Button>
        </ButtonToolbar>
        {this.comRender("添加岗位需求", this.modalContent())}
      </div>
    );
  }
}
export default DemondMassage;