import React, { useState } from "react";


type Todo = {
    id: number;
    title: string;
    completed: boolean;
    important: boolean;
    dueDate?: Date;
}

function convertToBoolean(input: string): boolean {
    return JSON.parse(input.toLowerCase());
};

function ToDoList() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [importantTodo, setImportantTodo] = useState<boolean>(true);
    const [dateTodo, setDateTodo] = useState<Date| undefined >();

    const handleAddTodos = () => {
        if (newTodo) {
            setTodos([...todos, { id: todos.length + 1, title: newTodo, completed: false, important: importantTodo, dueDate: dateTodo}]);
            setNewTodo('');
            setDateTodo(undefined);
        }
    };

    const handleToggleTodos = (id: number) => {
        const updateTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updateTodos);
    };

    const handleDeleteTodos = (id: number) => {
        console.log("Delete Handler geklickt");
        setTodos((todos) => todos.filter(eachTodo => eachTodo.id !== id));
    }

    const handleImportantTodos = (id: number) => {
        console.log("Important Handler geklickt");
        const importantTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, important: !todo.important };
            }
            return todo;
        });
        setTodos(importantTodos);
    };

    const handleDateTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateTodo(new Date(event.target.value));
    }

    return (
        <div className="todo-container">
            <h1 className="todo-name"><b>To Do List</b></h1>
            <input className="todo-input" type="next" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <select id="important" value={importantTodo.toString()} onChange={e => setImportantTodo(convertToBoolean(e.target.value))}>
                <option value={true.toString()}>important</option>
                <option value={false.toString()}>not important</option>
            </select>
            <input className="todo-input" name="dueDate" type="date" value={dateTodo?.toISOString().substring(0,10)|| ''} onChange={handleDateTodos}  />
            <button className="add-button" onClick={handleAddTodos}>Add</button>
            <div className="todo-list">
                <ol>
                    {todos.map(todo => (
                        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.important ? 'red' : 'black' }} onClick={() => { return { todo } }}>
                            {todo.title} - Date: {todo.dueDate?.toLocaleDateString()}
                            <button className="extra-button" onClick={() => handleToggleTodos(todo.id)}>Done</button>
                            <button className="extra-button" onClick={() => handleImportantTodos(todo.id)}> Important</button>
                            <button className="extra-button" onClick={() => handleDeleteTodos(todo.id)}>Delete</button>
                        </li>

                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;