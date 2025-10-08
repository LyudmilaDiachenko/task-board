import React from "react";
import AddColumn from "./addColumn";
import { IoMdAdd } from "react-icons/io";

function Columns({columns, setColumns}) {


    return (
        <div className="columns">
            <div className="column">
                <div className="column-header">Backlog</div>
            </div>
            {columns.map((e, i) => 
                <div className="column" key={'column-'+i}>
                    <div className="column-header">{e}</div>
                    <ul className="column-body">
                        {/* tasks.map */}
                        <li className="task">Task 1</li>
                        <li className="task">Task 2</li>

                        <li className="task">
                            Add new task
                        </li>
                    </ul>
                </div>
            )}
            <div className="column" title="Add new column">
                <div className="column-header">
                    Add new column
                </div>
                <AddColumn {...{columns, setColumns}}/>
            </div>
        </div>
    )
}

export default Columns;