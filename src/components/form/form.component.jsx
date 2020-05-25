import React, { useState } from 'react';
import { FormContainer, Input, Submit } from './form.styles.styled.jsx';

const Form = ({ addItem }) => {
	const [item, setItem] = useState('');

	return (
		<FormContainer
			onSubmit={event => {
				event.preventDefault();
				addItem(item);
				setItem('');
			}}
		>
			<Input
				type='text'
				value={item}
				onChange={event => setItem(event.target.value)}
				required
			/>
			<Submit type='submit'>Add Item</Submit>
		</FormContainer>
	);
};

export default Form;
