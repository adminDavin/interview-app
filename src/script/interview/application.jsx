import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Loading from './Loading.jsx';
import Loadable from 'react-loadable';

import (/* webpackChunkName: "rsuite.css" */
'rsuite/dist/styles/rsuite.min.css');

function getComponet(incomponent) {
  return Loadable({loader: incomponent, loading: Loading});
}

class Application extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter basename='/#!/iw'>
          <Switch>
            <Route
              path="/candidate"
              component={getComponet(() => import (/* webpackChunkName: "candidate" */
            "./module/Candidate.jsx"))}/>
            <Route
              path="/interviewer"
              component={getComponet(() => import (/* webpackChunkName: "interviewer" */
            "./module/Interviewer.jsx"))}/>
            <Route
              path="/enterprise"
              component={getComponet(() => import (/* webpackChunkName: "enterprise" */
            "./module/Enterprise.jsx"))}/>
            <Route
              path="/question-editor"
              component={getComponet(() => import (/* webpackChunkName: "questionEditor" */
            "./module/QuestionEditor.jsx"))}/>
            <Route
              path="/design-drawner"
              component={getComponet(() => import (/* webpackChunkName: "designDrawner" */
            "./module/DesignDrawner.jsx"))}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Application;
