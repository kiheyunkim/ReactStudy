import React, {Component} from "react"

class TodoListComponent extends Component{  
    render(){
        const li_item=this.props.items.map((item)=>{
             return <li key={item.key}> {item.text} </li>
        });
        return (
            <ul>
                {li_item}
            </ul>
        );
    }
}


export default TodoListComponent;