import React from 'react';
import Task from '../task/task.component'
import Form from '../form/form.component';
import './todo.styles.scss';
import {todo} from './todo.util'

class  Todo extends React.Component{

        constructor(){
            super();
            this.state={

                tasks:[],
                searchField:''
            }
        }



 onSearchChange=event=>this.setState({searchField:event.target.value.toLowerCase()});

addItem=item=>{
    let items=[...this.state.tasks];
    items.push(item);
    this.setState({tasks:items});
}

removeItem=(item)=>{
    let items=[...this.state.tasks];
    items.splice(item,1);
    this.setState({tasks:items});
}

componentDidMount(){
    this.setState({tasks:todo})
}





        render(){
        const {tasks,searchField}=this.state;
        return <div className="todo">

                <Form addItem={this.addItem} />
                    <input type="text" placeholder='search' onChange={this.onSearchChange} className='search'/>
                    <button  className='add' onClick={()=>this.setState({tasks:todo})} >Reset List</button>
                   <div className="todo-list">
                        <div className='title'>
                         <h2 ># </h2>
                         <h2> ToDo</h2>
                         
                   </div>
                   <h4 className='remove'> X </h4>
                   </div>
                 <Task tasks={tasks} searchField={searchField} removeItem={this.removeItem} />
            </div>
    }
    

}
export default Todo;