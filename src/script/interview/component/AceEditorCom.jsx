import React from 'react'; 
import AceEditor from 'react-ace'; 
import  "brace";

import "brace/theme/xcode";
import'brace/mode/java';
class AceEditorCom extends React.Component {

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
                <AceEditor
                    mode="java"
                    theme="xcode"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
            </div>
        );
    }
}

export default AceEditorCom;