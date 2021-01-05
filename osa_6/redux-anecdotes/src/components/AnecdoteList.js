import React from 'react'
import { connect } from 'react-redux'
import { like } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {


const vote = (id) => {
    const toUpdate = props.anecdotes.find(n => n.id === id)

    const updated = {
      content: toUpdate.content,
      votes: toUpdate.votes + 1,
      id: id,
    }

    props.like(updated)
    props.notification(`you voted ${updated.content}`,5)

  }

  const filterBy = () => {
    
      
     const filtered = props.anecdotes.filter(anecdote => {
      
      return anecdote.content.toLowerCase().includes(props.filter)
    })
    
    return filtered
    
  }


return(
    <div>
    {filterBy().map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </div>
)
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  like,
  notification
}

const connectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default connectedAnecdoteList