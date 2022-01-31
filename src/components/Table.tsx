import React from 'react';
import TableItem from './TableItem';

type Props = {
    items: any[];
};

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
                return (<TableItem item={element} onClick={() => {}} />)
            })}
        </tbody>
    </table>;
};

export default Table;
