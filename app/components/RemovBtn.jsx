'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { HiOutlineTrash } from 'react-icons/hi'

const RemovBtn = async({ id }) => {

  const router = useRouter()
  const removeTopic = async() => {
    const confirmed = confirm('Are you sure to delete?')
    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'DELETE'
      })
      if(res.ok){
        router.refresh()
      }else{
        throw new Error('Failed to delete data')
      }
    }
  }

  return (
    <button onClick={removeTopic} className='text-red-500'>
        <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemovBtn