import React from 'react';

type Props = {
    item: any;
    onClick: () => void;
};

const TableItem = (props: Props) => {
    return <tr>
        <th scope="row">{props.item.dateCreated}</th>
        <td>{`${props.item.user.firstName} ${props.item.user.lastName}`}</td>
        <td>{props.item.address}</td>
        <td>{props.item.requestType}</td>
        <td><button type="button" className="btn btn-outline-primary" onClick={props.onClick}>Complete</button></td>
    </tr>
};

export default TableItem;
