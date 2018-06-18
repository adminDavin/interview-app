import React from 'react';

class RecordCandidate extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}
  render() {
    return (
      <div className="w-r100 justify-content-md-center" style={ { margin: 15 } }>
        <div className="row">
          <h3 className='col'><strong>录入候选人信息</strong></h3>
          <button className="col-auto btn btn-primary align-items-end  m-r-10">提交候选人信息</button>
        </div>
        <hr/>
        <form>
          <div className="row align-items-start">
            <div className="col">
              <label htmlFor="exampleInputEmail1">姓名</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <div className="invalid-feedback"> Valid first name is required.</div>
            </div>
            <div className="col">
              <label htmlFor="lastName">邮箱</label>
              <input className="form-control" id="lastName" placeholder="" value="" required="" type="text" />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col">
              <label htmlFor="lastName">联系电话</label>
              <input className="form-control" id="lastName" placeholder="" value="" required="" type="text" />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>
          <hr/>
          <div>
            <label htmlFor="exampleInputEmail1">现居地址</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <div className="invalid-feedback"> Valid first name is required.</div>
          </div>
          <hr/>
          <div className="row align-items-start">
            <div className="col-4">
              <label htmlFor="exampleInputEmail1">上传照片</label>
              <div id="emailHelp" style={ { backgroundColor: "red", height: 200 } } className="form-text text-muted">We'll never share your email with anyone else.</div>
              <div className="invalid-feedback"> Valid first name is required.</div>
            </div>
            <div className="col card" style={ { height: 240, marginRight: 15 } }>
              <label htmlFor="lastName">上传简历</label>
              <input className="form-control" id="lastName" placeholder="" value="" required="" type="text" />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
              <label htmlFor="lastName">技术特长</label>
              <input className="form-control" id="lastName" placeholder="" value="" required="" type="text" />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>
        </form>
      </div>
      );
  }
}


export default RecordCandidate;