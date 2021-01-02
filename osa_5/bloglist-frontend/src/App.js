import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 
import AddBlog from './services/addBlog'
import Notification from './services/notifications'
import Togglable from './services/Togglable'


const App = () => {
    const [blogs, setBlogs] = useState([])
    const [notification, setNotification] = useState(null)
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
  

    useEffect(() => {
        blogService.getAll().then(blogs =>
          setBlogs( blogs.sort((a,b) => b.likes-a.likes) )
        )  
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        blogService.setToken(user.token)
      
      }
    }, [])
  


    const handleLogin = async (event) => {
      event.preventDefault()
      console.log('logging in with', username, password)

      try {
        const user = await loginService.login({
          username, password,
        })

        window.localStorage.setItem(
          'loggedUser', JSON.stringify(user)
        ) 

        console.log('userdata',user)
        blogService.setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')
        console.log('logged in!')
      } catch (exception) {
        setNotification({ messageColor: 'red',message:'wrong username or password' })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      }
    }



    
    if (user === null) {
    return (
    <div>
      <Notification message={notification}/>
      <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            username
              <input
              type="text"
              id='username'
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
              <input
              type="password"
              id='password'
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button id="login-button" type="submit">login</button>
        </form>
        </div>
  )}
  return(
    <div>
      <h2>blogs</h2>
      <Notification message={notification}/>
      <p>{user.name} logged in</p>
      <button onClick={() => window.localStorage.clear()}>logOut</button>
        
        <h2>Create new</h2>
        <Togglable buttonLabel='new blog'>
        <AddBlog 
        blogs={blogs} setBlogs={setBlogs}
          setNotification={setNotification}/>
        </Togglable>

        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog}
                blogs={blogs} setBlogs={setBlogs} />
        )}
      </div>
    )
}

export default App