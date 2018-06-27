import React from 'react';
import {Table, IconButton, Icon} from 'rsuite';
const {Column, HeaderCell, Cell} = Table;

let cellFamily = {
    getExpandCell(rowKey) {
        return ({
            rowData,
            dataKey,
            expandedRowKeys,
            onChange,
            ...props
        }) => (
            <Table.Cell {...props}>
                <IconButton
                    size="xs"
                    appearance="subtle"
                    onClick={() => {
                    onChange(rowData);
                }}
                    icon={< Icon icon = {
                    expandedRowKeys.some(key => key === rowData[rowKey])
                        ? 'minus-square-o'
                        : 'plus-square-o'
                } />}/>
            </Table.Cell>
        );
    },
    commonCell(col, index) {
        return (
            <Column width={col.width} key={col.name + index}>
                <HeaderCell>{col.title}</HeaderCell>
                <Cell dataKey={col.name}/>
            </Column>
        );
    }
}
export default cellFamily;