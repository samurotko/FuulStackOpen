import React, { useState } from 'react'
import { Redirect, Switch, Route } from "react-router-dom"
import UseField from '../hooks/index'

const CreateNew = (props) => {
    //const [content, setContent] = useState('')
    //const [author, setAuthor] = useState('')
    //const [info, setInfo] = useState('')
    const [submited, setSubmited] = useState(false)

    const content =UseField('content')
    const author = UseField('author')
    const info = UseField('info')
    
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
      setSubmited(true)
      props.setMessage(`a new anecdote ${content.value} was created`)
      props.setMessageStyle({
        border: 'solid',
        padding: 10,
        borderWidth: 2
      })
      setTimeout(()=>props.setMessage(''),5000)
      setTimeout(()=>props.setMessageStyle(null),5000)
    }

    const resetAll = () => {
      content.reset()
      author.reset()
      info.reset()
    }
  
    return (
        <div>
            {submited ? 
            <Redirect to="/"/>      
            : 
            <div>
                <h2>create a new anecdote</h2>
                <form onSubmit={handleSubmit}>
                    
                  <div>
                    content
                    <input {...content} />
                  </div>
                  <div>
                    author
                    <input {...author} />
                  </div>
                  <div>
                    url for more info
                    <input {...info} />
                  </div>
                  <button type='submit'>create</button>
                  <button type = 'button' onClick={resetAll} >clear</button>
                </form>
                
            </div>}
        </div>
    )
  
  }

  export default CreateNew