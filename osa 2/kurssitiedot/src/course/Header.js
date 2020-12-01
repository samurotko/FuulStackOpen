import React from 'react'
import Content from './Content'
import Total from './Total'
const Header = (props) => {
    //nimet
    
    return(
        <>
          <h3>
            {props.course.name}
          </h3>
          
            {props.course.parts.map( (content)=> console.log("content is ",content) || <p key={content.id}><Content course={content} /></p>)}
          
          <h4>
            <Total course={props.course.parts} />
          </h4>
        </>
      )
    }

    export default Header