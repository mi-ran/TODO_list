import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
	id = 3
	state = {
		input: '',
		todos: [
			{ id: 0, text: ' test', checked: false },
			{ id: 1, text: ' test', checked: true },
			{ id: 2, text: ' test', checked: false}
		]
	}

	handleChange = (e) => {
		this.setState({
			input: e.target.value
		});
	}

	handleCreate = () => {
		const { input, todos } = this.state;
		this.setState({
			input: '',
			todos: todos.concat({
				id: this.id++,
				text: input,
				checked: false
			})
		});
	}

	handleKeyPress = (e) => {
		if(e.key === 'Enter') {
			this.handleCreate();
		}
	}

	handleToggle = (id) => {
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);
		const selected = todos[index];
		const nextTodos = [...todos];

		nextTodos[index] = {
			...selected,
			checked: !selected.checked
		};

		this.setState({
			todos: nextTodos
		});
	}

	render() {
		const { input, todos } = this.state;
		const {
			handleChange,
			handleCreate,
			handleKeyPress,
			handleToggle
		} = this;

		return (
			<TodoListTemplate form={(
				<Form
					value={input}
					onKeyPress={handleKeyPress}
					onChange={handleChange}
					onCreate={handleCreate}
				/>
			)}>
				<TodoItemList todos={todos} onToggle={handleToggle}/>
			</TodoListTemplate>
		);
	}
}

export default App;

/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
*/
