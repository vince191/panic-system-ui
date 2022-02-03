import React, { useEffect, useState } from 'react';
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

    const [items, setItems] = useState(props.items);
    
    function removeItem(element: any) { 
        setItems(items.filter(x=> x.id !== element.id));
    }

    useEffect(() => {
        setItems(props.items);
    },[props.items])

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
            {items.length > 0 && items.map(element => {
                return (<TableItem item={element} onClick={() => markItemComplete(element).then(() => removeItem(element))} />)
            })}
            {items.length === 0 && (
                <tr>
                    <td colSpan={7}>No items to show.</td>
                </tr>
            )}
        </tbody>
    </table>;
};

export default Table;
