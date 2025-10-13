import React from "react";
import CheckNewTask from "./checkNewTask";

function Header({columns, tasks, setTasks, users}) {
    return(
        <div>
            <CheckNewTask {...{columns, tasks, setTasks, users}}/>
            {users.map((user, i) => {
                return (
                    <div key={'header-user-'+i}>
                        {user.name}
                        <img src={user.avatar} />
                    </div>
                )
            })}

            {/* <Search /> */}
            {/* <Users /> */}
        </div>
    )
}
export default Header;