import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
//nimet

return(
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>
  )
}

const Part = (props) => {
 
return(
  <div>
      <h1>
        <p>
          {props.name} {props.exercises}
        </p>
      </h1>
    </div>
)
}

const Content = (props) => {
//osat ja tehtävämäärät
  console.log(props)
 

  return(
    <>
      
      <Part name={props.content.parts[0].name} exercises={props.content.parts[0].exercises}/>
    
      <Part name={props.content.parts[1].name} exercises={props.content.parts[1].exercises}/>
      
      <Part name={props.content.parts[2].name} exercises={props.content.parts[2].exercises}/>
    
    </>
  )
}

const Total = (props) => {

  //tehtävien yhteismäärä

const e1 = props.total.parts[0].exercises
const e2 = props.total.parts[1].exercises
const e3 = props.total.parts[2].exercises

  return(
    <div>
      <h1>
        <p>
        Number of exercises {e1+e2+e3}
        </p>
      </h1>
    </div>
  )
}


const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <>
      <Header course={course} />
      <Content content={course} />
      <Total  total={course}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))