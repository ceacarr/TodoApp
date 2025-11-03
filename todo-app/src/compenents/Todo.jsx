import React, { use, useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
    const[todoList, setTodoList] = useState(localStorage.getItem("todos") ? 
    JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();  
       
        if(inputText === ''){
             return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            completed: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = '';
    }
    const deleteTodo = (id) => {
     setTodoList((prev) =>{
        return prev.filter((todo) => todo.id !== id);
     })
}

const toggle = (id) => {
    setTodoList((prevTodos) => {
        return prevTodos.map((todo) => {
if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }  
            return todo;
        })
    })
}

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
}, [todoList]);


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md 
    flex flex-col p-7 min-h-[600px] rounded-xl'> 

    <div className='flex items-center mb-7 gap-3'>
        <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-2xl font-semibold '>Please add to do</h1>
    </div>
    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
         placeholder:text-slate-600  rounded-full px-4 py-3 justify-between cursor-pointer 
     transition-all duration-200 hover:bg-gray-300 ' type="text" placeholder='Add' />
        <button onClick={add} className='border-none rounded-full bg-blue-500 w-32 h-14 
        text-white text-lg font-medium px-4 py-3 justify-between transition-all duration-200 hover:bg-blue-800 cursor-pointer '>+</button>
    </div>
    <div>
          {todoList.map((item, index) => {
           return <TodoItems key={index} text={item.text} id={item.id} completed={item.completed} deleteTodo={deleteTodo} toggle={toggle}/>
          })}

    </div>
    </div>
  )
}
export default Todo