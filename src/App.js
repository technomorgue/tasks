import React, {Component} from 'react';
import Todos from './todos';

export default class App extends Component{
	state={
		'todos':[
			{'name': 'Walk the dog', 'id': 0},
			{'name': 'Bake a cake', 'id': 1},
			{'name': 'Study for the test', 'id': 2}
		]
	}

	deleteTodos=(id)=>{

		let todos=this.state.todos.filter(todo=>{
			return todo.id!==id;
		})

		this.setState({
			todos: todos
		})
	}

	render(){
		return (
    		<div className="App">
				<h1>To-do list app using React</h1>

				<Todos deleteTodos={this.deleteTodos} todos={this.state.todos}>
				</Todos>

   			</div>
		);
	}
};
