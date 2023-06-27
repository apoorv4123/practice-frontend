import React, { useState } from "react";

const TableRow = ({ id, category, description, priority, status }) => {
    const [dStatus, setStatus] = useState(status);

    const updateStatus = () => {
        setStatus("Closed");
    }

    return <>
        <tr>
            <td>{id}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{priority}</td>
            <td>{dStatus}</td>
            <td><button className="btn btn-primary" onClick={updateStatus}>Change Status</button></td>
        </tr>
    </>
}

export default TableRow;