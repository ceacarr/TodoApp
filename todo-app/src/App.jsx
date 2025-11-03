import React from 'react'
import Todo from './compenents/Todo'
import './index.css'


const App = () => {
  return (
    <div className='bg-neutral-700 grid min-h-screen place-items-center p-5'>
  <h1 class="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
  Todo List App
</h1>
      <Todo/>
    </div>
  )
}

export default App
