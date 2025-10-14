import React from "react";
import CheckNewTask from "./checkNewTask";
import Users from "./users";


function Header({columns, tasks, setTasks, users}) {
    return(
        <div className="users-box">
            <CheckNewTask {...{columns, tasks, setTasks, users}} />



            {/* <Search /> */}
            <Users {...{users}} />
        </div>
    )
}
export default Header;