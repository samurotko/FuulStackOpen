import React, { useState } from 'react'
import blogService from '../services/blogs'



const Blog = ({ blog ,blogs, setBlogs }) => {
    const [viewAll, setViewAll] = useState(false)

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      
    }

    const hideWhenVisible = { display: viewAll ? 'none' : '' }
    const showWhenVisible = { display: viewAll ? '' : 'none' }
    
    const toggleVisibility = () => {
        setViewAll(!viewAll)
    }

    const likeBlog = async () => {

          const likeBlog = {
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: blog.likes +1,
            user: blog.user,
            id: blog.id
          }

          const index = blogs.findIndex(blog => blog.id===likeBlog.id)
          console.log('index',index)
          const likedBlog = await blogService.put(likeBlog)

          console.log('liked',likedBlog)
          const newBlogs = [...blogs]
          newBlogs.splice(index,1,likedBlog)
          console.log(newBlogs)
          setBlogs(newBlogs.sort((a,b) => b.likes-a.likes))
    }

    const removeBlog = async () => {
          if(window.confirm(`remove blog ${blog.title} by ${blog.author}`)){
            
          const id = blog.id
          const newBlogs = [...blogs]
          console.log('index',blogs.findIndex(blog => blog.id===id))
          newBlogs.splice(blogs.findIndex(blog => blog.id===id),1)
          console.log(newBlogs)
          setBlogs(newBlogs)

          await blogService.remove(id)
          }
        
    }

      return(
          <div id='blog' style={blogStyle}>
            <div  style={hideWhenVisible}>
              {blog.title} {blog.author}
              <button id ='view' onClick={toggleVisibility}>view</button>
            </div>
            <div   style={showWhenVisible}>
              <p>{blog.title} {blog.author}
                  <button onClick={toggleVisibility}>hide</button>
              </p>
              <p>{blog.url}</p>
              <p id='likes'>likes {blog.likes}
                  <button id='like' onClick={likeBlog}>like</button>
              </p>
              <p>{blog.user}</p>
                  <button id='remove' onClick={removeBlog}>remove</button>
              
            </div>
            
          </div>
      )}

export default Blog
