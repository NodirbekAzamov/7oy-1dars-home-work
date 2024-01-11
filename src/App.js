import React, { useState } from 'react'
import Menu from './Component/Task 2/Menu'
import { Route, Routes } from 'react-router-dom'
import Users from './Component/Task 2/Users'
import Todo from './Component/Task 2/Todo'
import Photos from './Component/Task 2/Photos'
import Albums from './Component/Task 2/Albums'
import Comments from './Component/Task 2/Comments'
import Posts from './Component/Task 2/Posts'
import UserForm from './Component/Task 1/UserForm'
export default function App() {
  const [count, setCount] = useState(1)


  return (


    <div>
        <h1 className='text-center'>Home work 1-task</h1>

      {/* taks - 2 */}
      <div className=' d-flex gap-5'>
        <div>
          <Menu />
        </div>

        <div className='m-5'>
          <Routes>
            <Route path='users' element={<Users count={count} setCount={setCount} />} />
            <Route path='todo' element={<Todo />} />
            <Route path='photos' element={<Photos />} />
            <Route path='albums' element={<Albums />} />
            <Route path='comments' element={<Comments />} />
            <Route path='posts' element={<Posts />} />
          </Routes>
        </div>
      </div>

      <hr />

      {/* task -1 */}
        <h1 className='text-center'>Home work 2-task</h1>
        <div className='my-5'>
            <UserForm />
        </div>
    </div>
  )
}
