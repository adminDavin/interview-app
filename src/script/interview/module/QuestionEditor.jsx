import React from 'react';
import mock from "./../mock.js";

import AceEditorOfMine from "./../component/AceEditorOfMine.jsx";

class QuestionEditor extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header text-center">
                                questions lists
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><strong>name: the flower number question</strong></h5>
                                <p className="card-text">detail:
                                With supporting text below as a natural lead-in to additional content.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary btn-sm">check detail</a>
                                </div>
                                <hr/>
                                <h5 className="card-title"><strong>name: the flower number question</strong></h5>
                                <p className="card-text">detail:
                                With supporting text below as a natural lead-in to additional content.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary btn-sm">check detail</a>
                                </div>
                                <hr/>
                            </div> 
                        </div>
                    </div>
                    <div
                        className="col-9"
                        style={{
                        paddingLeft: 0
                    }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <CodeContent/> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

class CodeContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    onChange(newValue) {
        console.log('parent change', newValue);
    }
    render() {
        return (
            <div>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header p-0" id="headingOne">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Question descripte
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion">
                            <div className="card-body">
                                {mock.detail}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-t-15 m-b-0">
                    <div className="row justify-content-between">
                        <div className="col-auto p-b-0 m-l-15">
                            <strong>the answer area</strong>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary btn-sm m-r-10">save your code</button>
                            <button type="button" className="btn btn-primary btn-sm m-r-10">save your code to local</button>
                        </div>
                    </div>
                </div>
                <div className="card-body  p-15">
                    <div className="row collapse" id="collapseExample">
                        <div className="card card-body">
                            <canvas id="canvas" width="300" height="200"> 
                                Fallback content, in case the browser does not support Canvas. 
                            </canvas>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 m-b-0 alert alert-success">
                            <h4 className="text-center">Analysis Question</h4>
                            <hr/> 
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">what is your thought?</label>
                                <textarea
                                    className="form-control form-control-sm"
                                    value={"Write your thought about this question."}
                                    id="exampleFormControlTextarea1"
                                    onChange={this.onChange}
                                    rows="4"></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    drawn your thought
                                </button>
                            </div>
                            
                            <hr/>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Choose your coding language</label>
                                <select className="form-control form-control-sm" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div> 
                            <h6>import your code from your local.</h6>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile"/>
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>  
                        </div>
                        <div className="col-8 p-0 border">
                            <AceEditorOfMine data={mock.questionDetail} onChange={this.onChange}></AceEditorOfMine>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default QuestionEditor;