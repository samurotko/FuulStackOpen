import React, { useState } from 'react'
import blogs from './blogs'
import PropTypes from 'prop-types'


const AddBlog = (props) => {

  const [newTitle, setNewTitle] = useState('') 
  const [newAuthor, setNewAuthor] = useState('') 
  const [newUrl, setNewUrl] = useState('') 

    const addBlog = async(event) => {
        event.preventDefault()
        
        const blog = {
            title: newTitle,
            author: newAuthor,
            url: newUrl
        }
        console.log('creatin blog',blog)
        const createdBlog = await blogs.create(blog)
        console.log('created',createdBlog)
        props.setBlogs(props.blogs.concat(createdBlog))
        
        setNewAuthor('')
        setNewTitle('')
        setNewUrl('')
        props.setNotification({ messageColor:'green',message:`A new blog ${blog.title} by ${blog.author} added` })
        setTimeout(() => {
            props.setNotification(null)
          }, 5000)
        
    }


    const handleTitle = (event) => {
        console.log('handleTitle',event.target.value)
        setNewTitle(event.target.value)
    }

    const handleAuthor = (event) => {
        console.log('handleAuthor',event.target.value)
        setNewAuthor(event.target.value)
    }

    const handleUrl = (event) => {
        console.log('handleUrl',event.target.value)
        setNewUrl(event.target.value)
    }

    return(
    <form onSubmit={addBlog}>
        <div>
       
          title: <input 
            id='title'
            value={newTitle} 
            onChange={handleTitle}
            />
        </div>
        <div>
          author: <input 
            id='author'
            value={newAuthor}
            onChange={handleAuthor}
          />
        </div>
        <div >
          url: <input 
            id='url'
            value={newUrl}
            onChange={handleUrl}
          />
        </div>
        <div>
            
          <button type='submit'>create</button>
        </div>
      </form>
      )

}

AddBlog.propTypes = {
  
  blogs:PropTypes.array.isRequired,
  setBlogs: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired
}

export default AddBlog