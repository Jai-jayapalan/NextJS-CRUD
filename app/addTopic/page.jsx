'use client'

import React,{ useState } from 'react'
import { useRouter } from 'next/navigation'

const AddTopic = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!title || !description) alert('Enter the required field')
    
    try {
        const res = await fetch('http://localhost:3000/api/topics',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, description})
        })
        if(res.ok){
          router.push('/')
        } else{
          throw new Error('Failed to create Topic')
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
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         placeholder='Enter the topic'/>
        <input
         className='border-slate-800 px-4 py-4'
         type="text" 
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         placeholder='Enter the Description' />
         <button type='submit' className='border px-4 py-4 bg-green-400 text-2xl font-bold text-white'>
            Add Topic
        </button>
    </form>
  )
}

export default AddTopic