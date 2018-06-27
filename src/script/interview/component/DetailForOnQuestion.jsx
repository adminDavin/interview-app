import React from 'react';

import {
    Button,
    SelectPicker,
    ButtonToolbar,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Table,
    Checkbox,
    Whisper,
    IconButton,
    Icon,
    Divider,
    Tooltip,
    Panel
} from 'rsuite';

import BaseLargeModal from "./../base-component/BaseLargeModal.jsx";
import AceEditorCom from './AceEditorCom.jsx';

class DetailForOnQuestion extends BaseLargeModal {
    constructor(props) {
        super(props);
    }
    modalContent() {
        console.log(this.props.rowData);
        let data = this.props.rowData;
        return (
            <div className='card'>
                <Panel header={< h3 > Panel title < /h3>} bordered>
                    <Paragraph/>
                </Panel>
                <AceEditorCom></AceEditorCom>

            </div>
        );
    }
    render() {
        return (
            <div className="modal-container">
                <ButtonToolbar>
                    <Button appearance="primary" onClick={this.open}>查看详情</Button>
                </ButtonToolbar>
                {this.comRender("问题详情", this.modalContent())}
            </div>
        );
    }
}

export default DetailForOnQuestion;