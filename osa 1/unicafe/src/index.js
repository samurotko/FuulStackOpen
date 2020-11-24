import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = (props) => (
  <button onClick={props.handeleClick}> {props.text} </button>
)

const Statistics = (props) => {



  if(props.val!==0){

    return (
      <table>
        <tbody>
          {props.data.map(i => (
            
            <tr key={i.id}>
            <td>{i.name}</td>
            <td>{i.value}</td>
            <td>{i.other}</td>
            </tr>
          
          ))}
        </tbody>
      </table>
      
    )
        }
        else
        return <>No feedback given</>
  
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const data = [{id: 1, name:"good ", value: good}, 
                {id: 2, name:"neutral ", value: neutral}, 
                {id: 3, name:"bad ", value: bad}, 
                {id: 4, name:"all ", value: all}, 
                {id: 5, name:"average ", value: (good - bad)/all}, 
                {id: 6, name:"positive ", value: good/all*100, other:" %"}]
 

  return (
   
    <div>
      <h1>give feedback</h1>
      <Button handeleClick={() => setGood(good + 1)} text="good"/>
      <Button handeleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handeleClick={() => setBad(bad + 1)} text="bad"/>

      <h1>statistics</h1>
      <Statistics data={data} val={all}/>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)