import React from 'react'
import  {useParams} from "react-router-dom"
  
  const Anecdote = ({ anecdotes }) => {
    const id = useParams().id
    console.log('id',id,Number(id))
    const anecdote = anecdotes.find(n => n.id === id)
    console.log('anecdote',anecdote)
    return (
      <div>
        <h2>{anecdote.content} by {anecdote.author}</h2>
        <p>has {anecdote.votes} votes</p>
      </div>
    )
}

export default Anecdote