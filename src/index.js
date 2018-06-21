import React from "react";
import ReactDOM from "react-dom";
import Application from "./script/interview/application.jsx";

import './style/interview.scss';
import 'bootstrap';

async function getComponent() {
  return document.createElement('div');
}

getComponent().then(component => {
  ReactDOM.render( < Application / > , component);
  document.body.appendChild(component);
});