import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import anecdotes from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

//const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

anecdotes.getAll().then(anecdote =>{
  console.log('index',anecdote)
  store.dispatch(initializeAnecdotes(anecdote))
})