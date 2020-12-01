import React from 'react'
import Part from './Part'


const Content = (props) => {
    //osat ja tehtävämäärät
      console.log("part is ",props)
     
    
      return(
        <>
          
          <Part name={props.course.name} exercises={props.course.exercises} />
          
        </>
      )
    }

    export default Content