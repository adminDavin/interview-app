import React from 'react';
import mock from "./../mock.js";
import {ReactPainter} from 'react-painter';

class DesignDrawner extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                </div>
                <div className="border">
                    <ReactPainter
                        width={800}
                        height={500}
                        onSave={blob => console.log(blob)}
                        render={({triggerSave, canvas}) => (
                        <div>
                            <button onClick={triggerSave}>Save Canvas</button>
                            <div>{canvas}</div>
                        </div>
                    )}/>
                </div>
            </div>
        );
    }
}

export default DesignDrawner;