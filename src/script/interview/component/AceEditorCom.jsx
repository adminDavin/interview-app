import React from 'react';
import AceEditor from 'react-ace';
import "brace";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import "brace/theme/tomorrow_night";
import 'brace/mode/java';
const theme = [
    {
        value: 'clouds',
        label: 'clouds'
    }, {
        value: 'chrome',
        label: 'chrome'
    }, {
        value: 'katzenmilch',
        label: 'katzenmilch'
    }, {
        value: 'tomorrow_night',
        label: 'tomorrow_night'
    }
];
const mode = [
    {
        value: 'python',
        label: 'python'
    }, {
        value: 'java',
        label: 'java'
    }, {
        value: 'typescript',
        label: 'typescript'
    }, {
        value: 'text',
        label: 'text'
    }, {
        value: 'sql',
        label: 'sql'
    }, {
        value: 'scala',
        label: 'scala'
    }
];
class AceEditorCom extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedtheme: 'tomorrow_night',
            selectedmode: 'java'
        };
        this.onChange = this
            .onChange
            .bind(this);
    }

    onChange(newValue) {
        console.log('change', newValue);
    }
    handleThemeChange = (selectedOption) => {
        this.setState({
            selectedtheme: selectedOption
        });
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    handleModeChange = (selectedOption) => {
        this.setState({
            selectedmode: selectedOption
        });
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    render() {
        return (
            <div className={ this.props.className }>
              <div className="text-primary">
                <p className="m-t-20">
                  <strong>
                                                    Please write Question 1's answer code at flow.
                                                </strong>
                </p>
              </div>
              <div className="row">
                <AceEditor className="col-9" mode="java" theme="tomorrow_night" onChange={ this.onChange } name="UNIQUE_ID_OF_DIV" editorProps={ {
 $blockScrolling: true
 } } />
                <div className="col bg-light text-dark list-inline">
                  <p className="m-t-20">
                    <strong>
                                                        theme
                                                    </strong>
                  </p>
                  <Select name="form-field-name" value={ this.state.selectedtheme } onChange={ this.handleThemeChange } options={ theme } />
                  <p className="m-t-20">
                    <strong>
                                                        mode
                                                    </strong>
                  </p>
                  <Select name="form-field-name" value={ this.state.selectedmode } onChange={ this.handleModeChange } options={ mode } />
                </div>
              </div>
            </div>
            );
    }
}

export default AceEditorCom;