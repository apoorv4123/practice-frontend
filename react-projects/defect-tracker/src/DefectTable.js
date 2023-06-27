import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";

const DefectTable = () => {
    const [defects, setDefects] = useState([]);

    const changeDefectStatus = (id) => {
        setDefects((currentState) => {
            return currentState.map((item) => {
                if (item.id === id) {
                    item.status = "Closed";
                }
                return item;
            })
        })
    }

    useEffect(() => {
        setDefects(JSON.parse(localStorage.getItem("defects")));
    }, []);

    return <>
        <h3>View Defects</h3>
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        defects.map((item) => {
                            return <TableRow
                                {...item}
                                key={item.id}
                                onUpdate={changeDefectStatus}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default DefectTable;