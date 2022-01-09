// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";

import React, { useState, useEffect } from "react";
function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        console.log("i am on delete of to do ", todo);
        // Deleting this way in react doesnt work
        // let index = todos.indexOf(todo);
        //todos.splice(index, 1);
        setTodos(
            todos.filter((e) => {
                return e !== todo;
            })
        );
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    const addTodo = (title, desc) => {
        console.log("i am adding this todo", title, desc);
        let sno;
        if (todos.length == 0) {
            sno = 0;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        };
        setTodos([...todos, myTodo]);
        console.log(myTodo);
    };
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        // jsx
        <>
            <Header title="My Todos List" searchbar={true} />
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </>
    );
}

export default App;
