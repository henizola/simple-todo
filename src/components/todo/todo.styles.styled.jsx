import styled from 'styled-components';

export const TodoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	background-color: rgb(126, 55, 30);
	box-shadow: 5px 5px rgb(78, 71, 71);
	border-radius: 0px 0px 25px 25px;
`;
export const FormContainer = styled.form`
	margin: auto;
	width: 250px;
`;

export const TodoC = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;

	height: 70px;
`;
export const Title = styled.div`
	margin-left: 30px;
	width: 30%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const Remove = styled.h4`
	width: 12%;
	margin-right: 9px;
	border: none;
`;

export const AddButton = styled.button`
		color: aqua;
		background-color: darkslategray;
		width: 200px;
		font-size: large;
		height: 25px;
		margin: auto;
		margin-top: 10px;
		border: none;
		&:hover {
			background-color: rgb(90, 110, 110);
			border: 1px solid white;
`;
