import React from 'react'
import tick from  '../assets/tick.png'
import not_tick from  '../assets/not_tick.png'
import delete_icon from  '../assets/delete.png' 


const TodoItems = ({text, id, completed, deleteTodo, toggle}) => {
  return (
    <div onClick={()=> {toggle(id)}} className='flex-items-center my-3 gap-2 bg-gray-100
     rounded-full px-4 py-3 justify-between cursor-pointer hover:bg-gray-300
     transition-all duration-200'>
        <div className='flex flex-1 items-center cursor-pointer'>
             <img src={completed ? tick : not_tick} alt="" className='w-6' />
             <p className={`tex-slate-700 ml-4 text[17px] decoration-slate-500
               ${completed ? "line-through" : ""}`}>{text}</p>
        </div>
         <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className='ml-85 w-4 cursor-pointer' />

           
    </div>
  )
}
export default TodoItems