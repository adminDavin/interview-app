import './style/interview.scss';
import ( /* webpackChunkName: "bootstrap" */
  'bootstrap');

import ('./script/main').then(component => {
  let getComponent = component.default;
  let ele = getComponent();
  document
    .body
    .appendChild(ele);
});