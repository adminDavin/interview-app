import React from 'react';
import {
  RadioGroup,
  Radio,
  CheckPicker,
  Icon,
  Popover,
  Cascader,
  DateRangePicker
} from 'rsuite';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import fack from './../fackData.js';
import mock from '../mock';
import {Typeahead} from 'react-typeahead';

class CandidateMessage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: fack.data,
      radioList: 'A',
      search: ""
    };
  }

  handleChange(name, value) {
    if (name == 'search') {
      console.log("------------------", name, this.refs.search.value);
      this.setState({[name]: this.refs.search.value});
    } else {
      this.setState({[name]: value});
      console.log(name, value);
    }
  }

  render() {
    return (
      <div className="card">
        <div className="container">
          <form className="m-t-15">
            <h3>base profile</h3>
            <hr/>
            <div className="form-group form-row align-items-center">
              <label className="col-auto col-form-label min-width-8">Email address</label>
              <input
                type="email"
                className="col form-control form-control-sm"
                placeholder="name@example.com"/>
            </div>
            <div className="form-group form-row align-items-center">
              <label className="col-auto col-form-label min-width-8">First Name</label>
              <input
                type="email"
                className="col form-control form-control-sm"
                id="exampleFormControlInput1"
                placeholder="dawei"/>
              <label className="col-auto col-form-label">last Name</label>
              <input
                type="email"
                className="col form-control form-control-sm"
                placeholder="zhang"/>
            </div>

            <div className="form-group form-row">
              <label className="col-auto col-form-label min-width-8">Phone Number</label>
              <input
                type="text"
                className="col form-control form-control-sm"
                placeholder="zhang"/>
              <label className="col-auto col-form-label m-l-20">
                Sex
              </label>
              <div className="col">
                <RadioGroup
                  inline
                  name="radioList"
                  value={this.state.radioList}
                  onChange={value => {
                  this.handleChange('radioList', value);
                }}>
                  <Radio value="A"><Icon icon='male'/></Radio>
                  <Radio value="B"><Icon icon='female'/></Radio>
                </RadioGroup>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-auto col-form-label min-width-8">current location</label>
              <Cascader className="col" data={mock.province} valueKey="name" labelKey="name"/>
              <label className="col-auto col-form-label">Detailed address</label>
              <input
                type="text"
                className="col form-control form-control-sm"
                placeholder="Detailed address"/>
            </div>

            <h3>education</h3>
            <hr/>
            <div className="form-group form-row">
              <label className="col-auto col-form-label min-width-8">University name</label>
              <input
                type="text"
                className="col form-control max-height-2"
                placeholder="Detailed address"/>

              <div className="col input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Education
                  </label>
                </div>
                <select className="custom-select">
                  <option defaultValue>大专</option>
                  <option value="1">本科</option>
                  <option value="2">硕士</option>
                  <option value="3">博士</option>
                </select>
              </div>
            </div>
            <div className="form-group form-row">

              <label className="col-auto col-form-label  min-width-8">Graduation time</label>
              <DayPickerInput
                className="form-control form-control-sm"
                onDayChange={day => console.log(day)}/>
              <label className="col-auto col-form-label">Study major</label>
              <input
                type="text"
                className="col form-control form-control-sm"
                placeholder="maths"/>
            </div>
            <h3>skilled</h3>
            <hr/>
            <div className="form-group form-row">

              <label className="col-auto col-form-label min-width-8">Working years</label>
              <input
                type="number"
                className="col-1 form-control form-control-sm m-r-30"
                placeholder="maths"/>
              <label className="col-auto col-form-label">
                Main job position
              </label>
              <input
                type="text"
                className="col form-control form-control-sm"
                placeholder="maths"/>
            </div>
            <div className="form-group form-row">
              <div className="col">
                <CheckPicker
                  data={mock.mutilSelectData}
                  placement="autoVerticalLeft"
                  groupBy="role"
                  placeholder="Select skilled keywords"
                  renderMenuItem={(label, item) => {
                  return <div><i className="rs-icon rs-icon-user"/> {label}</div>;
                }}
                  renderMenuGroup={(label, item) => {
                  return (
                    <div>
                      <i className="rs-icon rs-icon-group"/> {label}
                      - ({item.children.length})
                    </div>
                  );
                }}
                  renderValue={(value, items) => {
                  return (
                    <span>
                      <span
                        style={{
                        color: '#575757'
                      }}>
                        <i className="rs-icon rs-icon-user"/>
                        Users :
                      </span>
                      {value.join(' , ')}
                    </span>
                  );
                }}/>
              </div>
            </div>
            <h3>Self evaluation</h3>
            <hr/>
            <div className="form-group">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: "",
      visible: false
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleKeyDown = this
      .handleKeyDown
      .bind(this);
  }

  handleChange() {
    if (this.refs.search.value.length > 2) {
      this.setState({"value": this.refs.search.value, visible: true});
    } else {
      this.setState({"value": this.refs.search.value});
    }
  }

  handleKeyDown(e) {
    console.log(this, e.target);
  }

  render() {
    return (
      <div>
        <div className="form-row">
          <input
            type="search"
            className="form-control"
            ref='search'
            value={this.state.value}
            onChange={this
            .handleChange
            .bind()}
            placeholder="java oracle mysql spring...."/>
          <Popover title="Title" visible={this.state.visible} className="col-12 m-t-45">
            <ul className="navbar-nav" onKeyDown={this.handleKeyDown} autoFocus>
              <li className="nav-item active" tabIndex={1}>
                <a className="nav-link">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item" tabIndex={2}>
                <a className="nav-link">Features</a>
              </li>
              <li className="nav-item" tabIndex={3}>
                <a className="nav-link">Pricing</a>
              </li>
              <li className="nav-item" tabIndex={4}>
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </Popover>
        </div>
      </div>
    );
  }
}

export default CandidateMessage;