import React, { useEffect, useState } from 'react'
import AddName from './AddName'
import Filtter from './Filtter'
import RenderPersons from './RenderPersons'
import axios from 'axios'
import Notification from './Notification'




const App = () => {
  
  const [ persons, setPersons] = useState([
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [message, setMessage] = useState(null)
  const [messageColor, setMessageColor] = useState('')
 

  useEffect(()=>{
    console.log("effect")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
        
      })
  }, [])

  const sendMessage = (message) => {
    console.log("message,color",message)
    setMessage(
      
      message
    )
    
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <Filtter persons = {persons} filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
      <Notification message={message} messageColor={messageColor}/>
        <AddName persons={persons} setPersons={setPersons} 
        newName={newName}setNewName={setNewName}
        newNumber={newNumber}setNewNumber={setNewNumber}
        setMessageColor={setMessageColor}
        sendMessage={sendMessage}/>
     
      <h2>Numbers</h2>
      
        <RenderPersons persons = {persons} setPersons={setPersons} 
        filter = {filter} setFilter={setFilter} 
        sendMessage={sendMessage} setMessageColor={setMessageColor}/>

    </div>
  )

}

export default App