import moment from 'moment';
import React from 'react';
import { Check } from '@material-ui/icons';

type Props = {
    item: any;
    onClick: () => void;
};

const TableItem = (props: Props) => {
    let date = moment(props.item.dateCreated).format('D MMM, YYYY HH:mm A');
   

    return <tr>
        <th className="align-middle">{date}</th>
        <td className="align-middle">{`${props.item.user.firstName} ${props.item.user.lastName}`}</td>
        <td className="align-middle">{props.item.address.country}</td>
        <td className="align-middle">{props.item.address.city}</td>
        <td className="align-middle">{props.item.address.address}</td> 
        <td className="align-middle">{props.item.requestType}</td>
        <td className="align-middle"><button type="button" className="btn btn-outline-success" onClick={props.onClick}><Check /> complete</button></td>
    </tr>
};

export default TableItem;
