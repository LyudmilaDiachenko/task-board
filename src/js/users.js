import React from "react";

function Users({users}) {
    return (
        <div className="users-box">
            {users.map((user, i) => (
                <div key={'header-user-'+i}>
                        {/* <span className="user-name">{user.name}</span> */}
                        <img src={user.avatar} className="user-image" alt='User avatar'/>
                    </div>
                ))
            }
        </div>
    )
}
export default Users;