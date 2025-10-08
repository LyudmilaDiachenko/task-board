import React, { useState } from "react";

function AddColumn({columns, setColumns}) {
    const [title, setTitle] = useState("")

    function AddColumn(){
        if (!title.trim()) return;
        setColumns([...columns, title])
        setTitle("");
    }

    return (
        <div className="add-column-box">
            <label>
                <input className="add-column-title"
                    type="text" 
                    placeholder="Title"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </label>
            <div>
                <button className="add-column-btn" type="button" onClick={AddColumn}>Add column</button>
            </div>
        </div>
    )
}

export default AddColumn;