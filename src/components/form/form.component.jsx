import React, { useState } from 'react';
import './form.styles.scss';

const Form = ({ addItem }) => {
	const [item, setItem] = useState('');

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				addItem(item);
				setItem('');
			}}
		>
			<input
				type='text'
				value={item}
				onChange={event => setItem(event.target.value)}
				required
			/>
			<button className='submit' type='submit'>
				Add Item
			</button>
		</form>
	);
};

export default Form;
