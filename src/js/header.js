import React from "react";
import CheckNewTask from "./checkNewTask";

function Header({columns, tasks, setTasks}) {
    return(
        <div>
            <CheckNewTask {...{columns, tasks, setTasks}}/>
            {/* <Search /> */}
            {/* <Users /> */}
        </div>
    )
}
export default Header;