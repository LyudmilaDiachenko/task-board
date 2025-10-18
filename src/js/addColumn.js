import React, { useState } from "react";


function AddColumn({columns, setColumns}) {
    const [title, setTitle] = useState("")
    const [showInput, setShowInput] = useState(false)

    function AddColumn(){
        if (!title.trim()) return;
        setColumns([...columns, title])
        setTitle("");
        setShowInput(!showInput)
    }

    return (
        <div className="add-column-box">
            <div className="add-column-plus">
                <div 
                    onClick={_ => setShowInput(!showInput)}
                >
                    +
                </div> 
            </div>
            <label className={showInput ? 'active' : ''}>
                <input className="add-column-title"
                    type="text" 
                    placeholder="Title"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <button 
                    className="add-column-btn" 
                    type="button" 
                    onClick={AddColumn}
                >
                    Add column
                </button>
            </label>
        </div>
    )
}

export default AddColumn;