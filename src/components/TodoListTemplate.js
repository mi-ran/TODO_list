import React from 'react';
import './TodoListTemplate.css';

/**
 * 함수형 컴포넌트
 * 파라미터로 받게 되는 것은 props
 * 원래는 (props) => {...}
**/
const TodoListTemplate = ({form, children}) => {
	return (
		<main className="todo-list-template">
			<div className="title">
				오늘 할 일
			</div>
			<section className="form-wrapper">
				{form}
			</section>
			<section className="todos-wrapper">
				{ children }
			</section>
		</main>
	);
};

export default TodoListTemplate;
