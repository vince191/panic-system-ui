import React from 'react';
import TableItem from './TableItem';
import axios from 'axios';

type Props = {
    items: any[];
};

async function markItemComplete(id: any) {
    const url = `${process.env.REACT_APP_PANIC_ENDPOINT}?id=${id}` ?? '';
    await axios.put(url).then(res => console.log('updated status')).catch(err => console.log(err));
}

const Table = (props: Props) => {
    return <table className="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">User</th>
                <th scope="col">Address</th>
                <th scope="col">Assistance</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map(element => {
                return (<TableItem item={element} onClick={() => markItemComplete(element.id)} />)
            })}
        </tbody>
    </table>;
};

export default Table;
