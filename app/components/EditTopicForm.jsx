'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({ id, title, desc }) => {

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(desc)

  console.log(`Title => ${title}, Description => ${desc}`);

  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newTitle, newDescription })
      })
      if(res.ok){
        router.push('/')
      } else{
        throw new Error('Failed to update data')
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input
         className='border-slate-800 px-4 py-4'
         type="text" 
         value={newTitle}
         onChange={(e) => setNewTitle(e.target.value)}
         placeholder='Enter the topic'/>
        <input
         className='border-slate-800 px-4 py-4'
         type="text"
         value={newDescription}
         onChange={(e) => setNewDescription(e.target.value)}
         placeholder='Enter the Description' />
         <button type='submit' className='border px-4 py-4 bg-green-400 text-2xl font-bold text-white'>
            Update Topic
        </button>
    </form>
  )
}

export default EditTopicForm