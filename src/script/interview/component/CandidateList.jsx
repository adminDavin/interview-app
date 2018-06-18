import React from 'react';
import { Table, Checkbox, Whisper, IconButton, Icon, Divider } from 'rsuite';
require('bootstrap-loader');
const {Column, HeaderCell, Cell, Pagination} = Table;
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



const ImageCell = ({rowData, dataKey, ...props}) => (
  <Cell {...props} style={ { padding: 0 } }>
    <div style={ {
 width: 40,
 height: 40,
 background: '#f5f5f5',
 borderRadius: 20,
 marginTop: 2,
 overflow: 'hidden',
 display: 'inline-block'
 } }>
      <img src={ rowData[dataKey] } width="44" />
    </div>
  </Cell>
);

const CheckCell = ({rowData, onChange, checkedKeys, dataKey, ...props}) => (
  <Cell {...props} style={ { padding: 0 } }>
    <div style={ { lineHeight: '46px' } }>
      <Checkbox value={ rowData[dataKey] } inline onChange={ onChange } checked={ checkedKeys.some(item => item === rowData[dataKey]) } />
    </div>
  </Cell>
);

const EmailCell = ({rowData, dataKey, ...props}) => (
  <Cell {...props}>
    <a href={ `mailto:${rowData[dataKey]}` }>
      { rowData[dataKey] }
    </a>
  </Cell>
);

const Menu = ({onSelect}) => (
  <Dropdown.Menu onSelect={ onSelect }>
    <Dropdown.Item eventKey={ 3 }>Download As...</Dropdown.Item>
    <Dropdown.Item eventKey={ 4 }>Export PDF</Dropdown.Item>
    <Dropdown.Item eventKey={ 5 }>Export HTML</Dropdown.Item>
    <Dropdown.Item eventKey={ 6 }>Settings</Dropdown.Item>
    <Dropdown.Item eventKey={ 7 }>About</Dropdown.Item>
  </Dropdown.Menu>
);

const MenuPopover = ({onSelect, ...rest}) => (
  <Popover {...rest} full>
    <Menu onSelect={ onSelect } />
  </Popover>
);

let tableBody;

class CustomWhisper extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
  }
  handleSelectMenu(eventKey, event) {
    console.log(eventKey);
    this.trigger.hide();
  }
  render() {
    return (
      <Whisper placement="autoVerticalLeft" trigger="click" triggerRef={ ref => {
                                                                     this.trigger = ref;
                                                                   } } container={ () => {
                                                                                                                                                                                                                                                            return tableBody;
                                                                                                                                                                                                                                                          } } speaker={ <MenuPopover onSelect={ this.handleSelectMenu } /> }>
        { this.props.children }
      </Whisper>
      );
  }
}

const ActionCell = ({rowData, dataKey, ...props}) => {
  function handleAction() {
    alert(`id:${rowData[dataKey]}`);
  }
  return (
    <Cell {...props} className="link-group">
      <IconButton appearance="subtle" onClick={ handleAction } icon={ <Icon icon="edit2" /> } />
      <CustomWhisper>
        <IconButton appearance="subtle" icon={ <Icon icon="more" /> } />
      </CustomWhisper>
    </Cell>
    );
};

const data = fakeData.filter((v, i) => i < 20);
class CustomColumnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedKeys: [],
      data
    };
    this.handleCheckAll = this.handleCheckAll.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheckAll(value, checked) {
    const checkedKeys = checked ? data.map(item => item.id) : [];
    this.setState({
      checkedKeys
    });
  }
  handleCheck(value, checked) {
    const {checkedKeys} = this.state;
    const nextCheckedKeys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter(item => item !== value);

    this.setState({
      checkedKeys: nextCheckedKeys
    });

    console.log(this.table);
  }
  render() {
    const {data, checkedKeys} = this.state;

    let checked = false;
    let indeterminate = false;

    if (checkedKeys.length === data.length) {
      checked = true;
    } else if (checkedKeys.length === 0) {
      checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
      indeterminate = true;
    }

    return (
      <div style={ { width: "100%" } }>
        <Table height={ 550 } data={ data }>
          <Column width={ 50 } align="center">
            <HeaderCell style={ { padding: 0 } }>
              <div style={ { lineHeight: '40px' } }>
                <Checkbox inline checked={ checked } indeterminate={ indeterminate } onChange={ this.handleCheckAll } />
              </div>
            </HeaderCell>
            <CheckCell dataKey="id" checkedKeys={ checkedKeys } onChange={ this.handleCheck } />
          </Column>
          <Column width={ 80 } align="center">
            <HeaderCell>姓名</HeaderCell>
            <ImageCell dataKey="name" />
          </Column>
          <Column width={ 160 }>
            <HeaderCell>手机号码</HeaderCell>
            <Cell dataKey="zipCode" />
          </Column>
          <Column width={ 300 }>
            <HeaderCell>邮箱</HeaderCell>
            <EmailCell dataKey="email" />
          </Column>
          <Column width={ 200 }>
            <HeaderCell>应聘职位</HeaderCell>
            <Cell dataKey="zipCode" />
          </Column>
          <Column width={ 200 }>
            <HeaderCell>技术特长</HeaderCell>
            <Cell dataKey="zipCode" />
          </Column>
          <Column width={ 200 }>
            <HeaderCell>操作</HeaderCell>
            <ActionCell dataKey="operation" />
          </Column>
        </Table>
      </div>
      );
  }
}
class CandidateList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}
  render() {
    return (<CustomColumnTable/>
      );
  }
}


export default CandidateList;