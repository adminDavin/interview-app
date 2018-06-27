import React from 'react';
import {Table} from 'rsuite';

import cellFamily from "./../base-component/cellFamily.jsx";
import fack from './../fackData.js';
import temp from './../template/common.jsx';
import DetailForOnQuestion from './DetailForOnQuestion.jsx';

const rowKey = 'id';
const ExpandCell = cellFamily.getExpandCell(rowKey);
const fakeData = fack.data;
const {Column, HeaderCell, Cell, Pagination} = Table;
const nomalColumn = [
  {
    width: 130,
    title: "问题名称",
    name: 'lastName'
  }, {
    width: 130,
    title: "问题类型",
    name: 'lastName'
  }, {
    width: 130,
    title: "问题描述",
    name: 'firstName'
  }, {
    width: 70,
    title: "状态",
    name: 'city'
  }, {
    width: 200,
    title: "修改时间",
    name: 'companyName'
  }, {
    width: 200,
    title: "创建时间",
    name: 'street'
  }
];

const fdata = {
  name: "问题描述",
  describe: "Some quick example text to build on the card title and make up the bulk of the c" +
      "ard's content.",
  evaluate: '答题评价',
  evaContent: '未评价'
};

class CodingTesting extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: fakeData,
      expandedRowKeys: []
    };

    this.handleExpanded = this
      .handleExpanded
      .bind(this);
  }

  handleExpanded(rowData, dataKey) {
    const {expandedRowKeys} = this.state;

    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach(key => {
      if (key === rowData[rowKey]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData[rowKey]);
    }
    this.setState({expandedRowKeys: nextExpandedRowKeys});
  }

  getExpandedContent(rowData) {
    let data = fdata;
    return (
      <div className='card border-light mb-3'>
        {temp.cellExtendContent(data)}
        <div className="card-footer text-center">
          <DetailForOnQuestion rowData={rowData}></DetailForOnQuestion>
        </div>
      </div>
    );
  }

  render() {
    const {expandedRowKeys, data} = this.state;
    return (
      <Table
        height={450}
        data={data}
        rowKey={rowKey}
        expandedRowKeys={expandedRowKeys}
        rowExpandedHeight={300}
        renderRowExpanded={rowData => this.getExpandedContent(rowData)}>

        <Column width={70} align="center">
          <HeaderCell>#</HeaderCell>
          <ExpandCell
            dataKey="id"
            expandedRowKeys={expandedRowKeys}
            onChange={this.handleExpanded}/>
        </Column>

        {nomalColumn.map((col, index) => {
          return cellFamily.commonCell(col, index);
        })}
      </Table>
    );
  }
}
export default CodingTesting;