import React from "react";
import Card from "./Card"

function DoneImg(props) {

    if (props.done) {
        return (<img src="./assets/done.png" alt="done"></img>)
    } else {
        return (<img src="./assets/undone.png" alt="undone"></img>)
    }
}

function ListItem(props) {

    return (<li>
        <Card className={props.item.done ? "done item" : "item"}>
            <div className="item-text">
                <h6>{props.item.text[0]}</h6>
                <p>{props.item.text[1]}</p>
            </div>
            <div className="control">
                <div onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></div>
                <div onClick={() => { props.onItemDeleted(props.item) }}><img src="./assets/bin.png" alt="delete"></img></div>
            </div>
        </Card>
    </li>)
}

export default ListItem