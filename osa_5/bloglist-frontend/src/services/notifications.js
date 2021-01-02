import React from 'react'



const notification = (props) => {
  

  if (props.message === null) {
        return null
  }
    console.log('props',props)
    const notificationStyle =  {
        color: props.message.messageColor,
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    
  
  return (
      <div className='notification' style={notificationStyle}>
          {props.message.message}
      </div>
  )
}


export default notification