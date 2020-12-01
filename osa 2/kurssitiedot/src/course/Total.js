import React from 'react'


const Total = (props) => {

    //tehtävien yhteismäärä
 
  console.log("total props: ",props)
  
  const total = props.course.reduce((acc, cur)=>console.log("acc, cur: ",acc,cur.exercises) || ( acc + cur.exercises),0)
  
    return(
      <>
          
          Total of {total} exercises
 
      </>
    )
  }

  export default Total