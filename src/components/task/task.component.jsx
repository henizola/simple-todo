import React from 'react';
import { Table, Number, Name, Remove } from './task.styles.style';

const List = ({ tasks, searchField, removeItem }) => {
	return (
		<div className='list'>
			<Table>
				<tbody>
					{tasks.map((task, index) =>
						task.includes(searchField) ? (
							<tr key={index}>
								<Number className='number'>
									# {index + 1}
								</Number>
								<Name>{task}</Name>
								<Remove
									onClick={() => removeItem(index)}
									className='remove'
								>
									{' '}
									X{' '}
								</Remove>
							</tr>
						) : (
							<tr key={index}></tr>
						)
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default List;
