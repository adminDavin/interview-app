import React from "react";
import ReactDOM from "react-dom";
import Application from "./script/interview/application.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import './style/interview.scss';
import Icon from './style/icon.png';
// import 'bootstrap';
// import 'bootstrap/js/dist/dropdown';
require('bootstrap-loader');
function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'demo'], ' ');
  element.id = "content";
  import("./script/interview/application.jsx").then((Application)=>{
    console.log(Application);
  });
  
  ReactDOM.render(<Application />, element);
  return element;
}
document.body.appendChild(component());
