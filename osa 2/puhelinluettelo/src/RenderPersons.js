import React from 'react'
import Service from './Services'

    const deletePerson = (person,persons,setPersons,sendMessage,setMessageColor) => {
        if(window.confirm(`Delete ${person.name} ?`)){
        console.log("clicked delete", person.id,persons,setPersons)
        Service.deletePerson(person.id)
        .then(response => {
            console.log(persons,persons.filter(i =>  !(i.id===person.id)))
            setPersons(persons.filter(i =>  !(i.id===person.id)))
            console.log("persons after delete:",response)
            sendMessage(`Deleted ${person.name}`)
            setMessageColor('green')
          })
        }
    }

const RenderPersons = (props) => {

    

    
    

    console.log("filtered",props, props.persons.filter(person => person.name.toLowerCase().includes(props.filter)))



    return(  props.persons.filter(person => person.name.toLowerCase().includes(props.filter))
        .map(person => 
        <div>
        
        <p key={person.id}>{person.name} {person.number} 
         <button onClick = {()=>deletePerson(person,props.persons,props.setPersons,props.sendMessage,props.setMessageColor)}>delete</button>
        </p>
        </div>))

}

export default RenderPersons