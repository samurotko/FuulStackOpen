import React from 'react'
import { connect } from 'react-redux'
import {filterBy} from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    
    props.filterBy(event.target.value)
  }

  
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input 
      onChange={handleChange} />
    </div>
  )
}



const mapDispatchToProps = { filterBy }

const connectedFilter = connect(null, mapDispatchToProps)(Filter)

export default connectedFilter