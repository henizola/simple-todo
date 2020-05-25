import React, { useState, useEffect } from 'react';
import Task from '../task/task.component';
import Form from '../form/form.component';
import './todo.styles.scss';
import { todo } from './todo.util';

const Todo = () => {
	const [tasks, setTasks] = useState([]);
	const [searchField, SetSearchField] = useState('');

	const addItem = item => {
		let items = [...tasks];
		items.push(item);
		setTasks(items);
	};

	const removeItem = item => {
		let items = [...tasks];
		items.splice(item, 1);
		setTasks(items);
	};

	useEffect(() => setTasks(todo), []);

	return (
		<div className='todo'>
			<Form addItem={addItem} />
			<input
				type='text'
				placeholder='search'
				onChange={event =>
					SetSearchField(event.target.value.toLowerCase())
				}
				className='search'
			/>
			<button className='add' onClick={() => setTasks(todo)}>
				Reset List
			</button>
			<div className='todo-list'>
				<div className='title'>
					<h2># </h2>
					<h2> ToDo</h2>
				</div>
				<h4 className='remove'> X </h4>
			</div>
			<Task
				tasks={tasks}
				searchField={searchField}
				removeItem={removeItem}
			/>
		</div>
	);
};
export default Todo;
