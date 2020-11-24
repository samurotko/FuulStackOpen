import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

const Button = (props) => {
  
  return <button onClick={props.handeleClick}> {props.text} </button>
}


const App = (props) => {
 

  const [selected, setSelected] = useState(0)
  const [votes, updateVotes] = useState(new Uint8Array(anecdotes.length))



  const next = () => {
    const rand = getRandom(0,anecdotes.length-1)
    setSelected(rand)
  }

  const vote = () => {
    console.log(votes)
    console.log(selected)
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)
    updateVotes(copy)
    
  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handeleClick={next} text="next anecdote"/>
      <Button handeleClick={vote} text="vote"/>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes}  />,
  document.getElementById('root')
)