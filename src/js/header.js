import React from "react";
import CheckNewTask from "./checkNewTask";

function Header({columns, tasks, setTasks, users}) {
    return(
        <div className="users-box">
            <CheckNewTask {...{columns, tasks, setTasks, users}}/>
            
            
            {users.map((user, i) => {
                return (
                    <div key={'header-user-'+i}>
                        {/* <span className="user-name">{user.name}</span> */}
                        <img src={user.avatar} className="user-image"/>
                    </div>
                )
            })}
            

            {/* <Search /> */}
            {/* <Users /> */}
        </div>
    )
}
export default Header;