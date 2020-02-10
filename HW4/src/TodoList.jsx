import React, {Component} from "react"
import TodoListComponent from "./TodoListComponent";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.input = undefined;
    }

    state={
        items: []
     }
     
    render(){
        return(
            <div>
                <div>
                    <input ref={value=>this.input=value}></input>
                    <button onClick={()=>{
                        this.state.items.unshift({
                            text:this.input.value,
                            key: Date.now()
                        });

                        this.setState({items:this.state.items});
                    }}>add</button>
                    <TodoListComponent items = {this.state.items}/>
                </div>
            </div>

        )
    }
}

export default TodoList;