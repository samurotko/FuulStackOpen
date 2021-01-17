import React from 'react'

import Service from './Services'


const AddName = (props) => {


  
  


const replaceNumber = (props) => {
  const person = props.persons.find(person => person.name === props.newName)

  const replace = () => {
    const changedPerson = {...person, number: props.newNumber}
      console.log("person", person)
      Service.update(person.id, changedPerson)
      .then(response =>  {
        props.setPersons(props.persons.map(i => i.id !== person.id ? i : response))
        props.setNewName('')
        props.setNewNumber('')
        props.sendMessage(`changed ${person.name}'s number to ${props.newNumber}`)
        props.setMessageColor('green')
      })
      .catch(error => {
        props.sendMessage(
          `information of ${person.name} has already been deleted from server`
        )
        props.setMessageColor('red')
        props.setPersons(props.persons.filter(n => n.id !== person.id))
      })
      
  }

  if(person.number.length!==0){
    if(window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)){
      replace()
    }
  }else{
    replace()
  }
}

const checkName = () => {
  console.log("newName",props.newName)


  if(props.persons.some(i => i.name === props.newName)){
    console.log("inIF")
    replaceNumber(props)
    
    return false
  }
  return true
}


const addName = (event) => {
  event.preventDefault()
  console.log("newName:",props.newName)
  console.log("newNumber:",props.newNumber)
  console.log('button clicked', event.target)
  if(checkName()){
    const newPerson = {
        name: props.newName,
        number: props.newNumber
    }
    Service.create(newPerson)
    .then(response => {
      props.setPersons(props.persons.concat(response.data))

      console.log("CoNpersons:",props.persons)
      props.sendMessage(`Added ${newPerson.name}`)

      props.setNewName('')
      props.setNewNumber('')
    })
  

  
    
  }
 
  console.log("persons:",props.persons)
}



const handleName = (event) => {
  console.log("handleName",event.target.value)
  props.setNewName(event.target.value)
}

const handleNumber = (event) => {
console.log("handleNumber",event.target.value)
props.setNewNumber(event.target.value)
}

return(
<form onSubmit={addName}>
          <div>
         
            name: <input 
              value={props.newName} 
              onChange={handleName}
              />
          </div>
          <div>
            number: <input 
              value={props.newNumber}
              onChange={handleNumber}
            />
          </div>
          <div>
              
            <button type="submit">add</button>
          </div>
        </form>
)

}

export default AddName
