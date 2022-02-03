import React from 'react';
import { put } from '../api/api';
import TableItem from './TableItem';

type Props = {
    items: any[];
};

async function markItemComplete(item: any) {
    await put(`api/panic`, { id: item.id, dateCreated: item.dateCreated })
        .then(() => console.log('updated status'))
        .catch(err => console.log(err));
}

const Table = (props: Props) => {
    return <table className="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">User</th>
                <th scope="col">Country</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">Assistance</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {props.items.length > 0 && props.items.map(element => {
                return (<TableItem item={element} onClick={() => markItemComplete(element)} />)
            })}
            {props.items.length === 0 && (
                <tr>
                    <td colSpan={7}>No items to show.</td>
                </tr>
            )}
        </tbody>
    </table>;
};

export default Table;
