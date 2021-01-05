import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


const App = () => {

  const message = useSelector(state => state.notification)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes)
  }, [dispatch])

  return (
    <div>
      <p>{message}</p>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnecdoteList/>
      <h2>create new</h2>
      <NewAnecdote/>
    </div>
  )
}

export default App