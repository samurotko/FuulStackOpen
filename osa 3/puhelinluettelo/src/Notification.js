import React from 'react'



const Notification = (props) => {
  console.log("props",props)
  const notificationStyle =  {
  color: props.messageColor,
  background: 'lightgrey',
  fontSize: '20px',
  borderStyle: 'solid',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px'
}

    if (props.message === null) {
      return null
    }
  
    return (
      <div className="notification" style={notificationStyle}>
        {props.message}
      </div>
    )
  }


  export default Notification