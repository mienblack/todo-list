import React, { useState } from "react";

function TodoForm(props) {

    const [textTitle, setTextTitle] = useState('')
    const [textDesc, setTextDesc] = useState('')

    function handleChange(e) {

        let t = e.target.value
        if (e.target.name == "title") {
            setTextTitle(t)
        }
        if (e.target.name == "description") {
            setTextDesc(t)
        }
        
    }

    function addItem(event) {
        event.preventDefault()
        if (textTitle) {
            //setItems([...items, text])
            props.onAddItem([textTitle, textDesc])
            setTextTitle("")
            setTextDesc("")
        }
    }
    return (

        <form id="add-form">
            <input type="text" onChange={handleChange} value={textTitle} placeholder="Título" name="title"/>
            <input type="text" onChange={handleChange} value={textDesc} placeholder="Descrição" name="description"/>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm