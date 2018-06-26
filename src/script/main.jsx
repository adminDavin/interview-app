import React from "react";
import ReactDOM from "react-dom";

function getComponent() {
    let ele = document.createElement('div');
    import (/* webpackChunkName: "app" */
    "./interview/application.jsx").then(app => {
        let Application = app.default;
        ReactDOM.render(
            <Application/>, ele);
    })
    return ele;
}

export default getComponent;