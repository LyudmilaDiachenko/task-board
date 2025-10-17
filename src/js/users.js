import React from "react";

function Users({users}) {
    return (
        <div className="users-box">
            {users.map((user, i) => (
                <div key={'header-user-'+i}>
                    <img src={user.avatar} className="user-image" alt='User avatar' title={user.name}/>
                </div>
            ))}
        </div>
    )
}
export default Users;