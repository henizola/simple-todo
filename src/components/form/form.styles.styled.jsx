import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
`;
export const Submit = styled.button`
	margin: center;
	color: aqua;
	background-color: darkslategray;
	width: 200px;
	font-size: large;
	height: 25px;
	margin: auto;
	margin-top: 10px;
	border: none;
	&:hover {
		background-color: rgb(70, 100, 100);
	}
`;

export const Input = styled.input`
	color: aqua;
	background-color: darkslategray;
	height: 25px;
	font-size: large;
	width: 250px;
	margin: auto;
	text-align: center;
	margin-top: 10px;
	border: none;
`;
