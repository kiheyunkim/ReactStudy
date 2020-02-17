import React,{ Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";    

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state={
            items:[]
        };

        this._inputElement= undefined;
    }

    addItem=(event)=>{
        let itemArray = this.state.items;

        if(this._inputElement.value !== ""){
            itemArray.unshift({
                text:this._inputElement.value,
                key:Date.now()
            })

            this.setState({
                items:itemArray
            });
        }

        console.log(itemArray);

        event.preventDefault();
    }

    deleteItem = (key) =>{
        let filteredItems = this.state.items.filter(element=>element.key !== key);
        this.setState({items:filteredItems});
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a)=>this._inputElement = a}
                        placegolder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete = {this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;