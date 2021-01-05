import React from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createNew(content)
    props.notification(`you created new anecdote: ${content}`,5)
    
  }


  return (
    <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type="submit">create</button>
      </form>
  )
}


const mapDispatchToProps = { 
  createNew,
  notification
 }


const connectedNewAnecdote = connect(null, mapDispatchToProps)(NewAnecdote)

export default connectedNewAnecdote