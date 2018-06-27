import React from 'react';
let temp = {
    tooltip() {
        return (
            <div className="card-body text-primary h-230">
                <Whisper
                    placement="top"
                    trigger="hover"
                    speaker={< Tooltip > This is a help < i > tooltip < /i> . </Tooltip >}>
                    <Button>Hover</Button>
                </Whisper>
            </div>
        );
    },
    cellExtendContent(data) {
        return (
            <div className='card border-light mb-3'>
                <div className="card-body text-primary h-230">
                    <h6 className="card-title">{data.name}</h6>
                    <small className="text-muted">{data.describe}</small>
                    <h6 className="card-title">{data.evaluate}</h6>
                    <small className="text-muted">{data.evaContent}</small>
                </div>
            </div>
        );
    }
}
export default temp;