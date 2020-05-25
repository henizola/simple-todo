import React, { useState, useEffect } from 'react';
import Task from '../task/task.component';
import Form from '../form/form.component';
import { todo } from './todo.util';
import { TodoContainer, AddButton, TodoC, Title } from './todo.styles.styled';
import { Remove } from './todo.styles.styled';
import { Input } from '../form/form.styles.styled';

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
		<TodoContainer>
			<Form addItem={addItem} />
			<Input
				type='text'
				placeholder='search'
				onChange={event =>
					SetSearchField(event.target.value.toLowerCase())
				}
				className='search'
			/>
			<AddButton onClick={() => setTasks(todo)}>Reset List</AddButton>
			<TodoC>
				<Title>
					<h2># </h2>
					<h2> ToDo</h2>
				</Title>
				<Remove> X </Remove>
			</TodoC>
			<Task
				tasks={tasks}
				searchField={searchField}
				removeItem={removeItem}
			/>
		</TodoContainer>
	);
};
export default Todo;
