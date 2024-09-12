import React from 'react'
import EditTopicForm from '../../components/EditTopicForm'

const getTopicById = async(id) => {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`)
  return res.json()
}

const EditTopics = async({ params }) => {
  const { id } = params
  const { topics } = await getTopicById(id)
  const { title, description } = topics
  return (
    <EditTopicForm id={id} title={title} desc={description} />
  )
}

export default EditTopics