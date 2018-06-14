import React from 'react';
import {split as SplitEditor} from 'react-ace';
// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/xcode';

class SplitEditorCom extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        console.log('change', newValue);
    }

    render() {
        return (
            <div>
                <SplitEditor
                    mode="java"
                    theme="xcode"
                    splits={1}
                    orientation="beside"
                    value={['hi']}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                />
            </div>
        );
    }
};

export default SplitEditorCom;