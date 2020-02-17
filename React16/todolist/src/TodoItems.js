import React, {Component} from "react";
import FlipMove from 'react-flip-move'
class TodoItems extends Component{
    
    deleteTask = (key) => {
        this.props.delete(key);
    }
    
    createTask = (item)=>{
        return <li key={item.key} onClick={()=>this.deleteTask(item.key)}>{item.text}</li>;
    }
    
    render(){
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTask);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul> 
            
        );
    }
};


export default TodoItems;