import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"
import CreateNew from './NewAnecdote'
import About from './About'
import AnecdoteList from './Anecdotes'
import Anecdote from './Anecdote'
import Notification from './Notification'

const Menu = () => {

    const [anecdotes, setAnecdotes] = useState([
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ])
      const [message, setMessage] = useState('')
      const [messageStyle, setMessageStyle] = useState(null)

    const padding = {
      paddingRight: 5
    }

      

    const addNew = (anecdote) => {
      console.log('new',anecdote)
        anecdote.id = (Math.random() * 10000).toFixed(0)
        setAnecdotes(anecdotes.concat(anecdote))
        console.log('anecdotes',anecdotes)
      }

    return (
      <div>
        <Router>
      

      <h1>Software anecdotes</h1>
      
      <div>
        <Link style={padding} to="/">anecdotes</Link>
        <Link style={padding} to="/create">create new</Link>
        <Link style={padding} to="/about">about</Link>
      </div>

      <Notification message={message} style={messageStyle}/>

      <Switch>
        <Route path="/anecdotes/:id">
            <Anecdote anecdotes={anecdotes} />
        </Route>
        <Route path="/create">
          <CreateNew addNew={addNew} setMessage={setMessage} setMessageStyle={setMessageStyle}/>
          
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
      </Router>
      </div>
    )
  }

export default Menu