import React from 'react'

import Header from './Header'


const Course = (props) => {


    return(
        <>
        {props.course.map( (header)=> console.log("header is ", header) || <p key={header.id}><Header course={header} /></p>)}
        
        </>
    )
   
    
}

export default Course