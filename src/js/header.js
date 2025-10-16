import React from "react";
import CheckNewTask from "./checkNewTask";
import Users from "./users";
import Search from "./search";


function Header({columns, tasks, setTasks, users,searchRequest, setSearchRequest}) {
    return(
        <div className="header">
            <Search {...{searchRequest, setSearchRequest}}/>
            <CheckNewTask {...{columns, tasks, setTasks, users}} />
            <Users {...{users}} />
        </div>
    )
}
export default Header;