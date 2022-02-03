import React from 'react';

type Props = {
    item: any;
    onClick: () => void;
};

const TableItem = (props: Props) => {
    return <tr>
        <th className="align-middle">{props.item.dateCreated}</th>
        <td className="align-middle">{`${props.item.user.firstName} ${props.item.user.lastName}`}</td>
        <td className="align-middle">{props.item.address.address}</td>
        <td className="align-middle">{props.item.requestType}</td>
        <td className="align-middle"><button type="button" className="btn btn-outline-primary" onClick={props.onClick}>Complete</button></td>
    </tr>
};

export default TableItem;
