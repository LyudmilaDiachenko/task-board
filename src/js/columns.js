import React from "react";

function Columns({columns, setColumns}) {
    return (
        <div className="columns">
            <div className="column">
                <div class="column-header">Backlog</div>
            </div>
            {columns.map((e, i) => 
                <div className="column" key={'column-'+i}>
                    <div class="column-header">{e}</div>
                    <ul class="column-body">
                        {/* tasks.map */}
                        <li className="task">Task 1</li>
                        <li className="task">Task 2</li>

                        <li className="task">Add new task</li>
                    </ul>
                </div>
            )}
            <div className="column" title="Add new column">
                +
            </div>
        </div>
    )
}

export default Columns;