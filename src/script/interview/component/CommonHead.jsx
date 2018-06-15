import React from 'react';
import AceEditor from 'react-ace';
class CommonHead extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onChange = this
            .onChange
            .bind(this);
    }

    onChange(newValue) {
        console.log('change', newValue);
    }

    render() {
        return (
            <div className={this.props.className + " alert alert-primary"}>
                <div className="row">
                    <div className="col">
                        <span className="text-info font-weight-bold">Username:</span>
                        <span className="bg-light font-italic">davinzhang</span>
                    </div>
                    <div className="col">
                        <span className="text-info font-weight-bold">Interview testing name:</span>
                        <span className="bg-light font-italic">davinzhang</span>
                    </div>
                    <div className="col">
                        <span className="text-info font-weight-bold">Enterprise name:</span>
                        <span className="bg-light font-italic">davinzhang.com.cn</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommonHead;