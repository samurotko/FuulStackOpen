import React from 'react'

const Filtter = (props) => {

 


    const handleFilter = (event) => {
      console.log("handleFilter",event.target.value)
      props.setFilter(event.target.value)
      console.log("handleFilter2",props.filter)
      console.log(props.persons.filter(person => person.name.toLowerCase().includes(props.filter)))
    }

    return(
        <form >
          <div>
            filter shown with <input 
              value={props.filter} 
              onChange={handleFilter}
              />
          </div>         
        </form>
    )
}

export default Filtter