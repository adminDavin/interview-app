import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

class AceEditorOfMine extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: this.props.data
        }
    }
    onChange(newValue) {
        console.log('change', newValue);
    }
    render() {
        return (<AceEditor
            mode="java"
            theme="github"
            onChange={this.props.onChange}
            name="UNIQUE_ID_OF_DIV"
            defaultValue={this.state.data}
            width={'100%'}
            editorProps={{
            $blockScrolling: true
        }}/>);
    }
}

export default AceEditorOfMine;