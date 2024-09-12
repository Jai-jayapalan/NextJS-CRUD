import React from 'react'
import RemovBtn from './RemovBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const getTopics = async() => {
    try {

        const res = await fetch('http://localhost:3000/api/topics', {cache: 'no-store'})

        if(!res.ok) throw new Error("Failed to fetch data")
        
        return res.json()

    } catch (error) {
        console.log(error.message);
    }
}

const TopicsList = async() => {

    const { topics } = await getTopics()
    
    return (
        <>
            {
                topics.map((topic, index) => (
                    <div className='flex mt-4 border border-slate-100 p-5 justify-between items-start gap-4' key={index}>
                        <div>
                            <h2 className='font-bold text-2xl'>{topic.title}</h2>
                            <div>{topic.description}</div>
                        </div>
                        <div className='flex gap-2'>
                            <RemovBtn id={topic._id} />
                            <Link href={`/editTopic/${topic._id}`}>
                                <HiPencilAlt
                                    size={24}
                                />
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TopicsList