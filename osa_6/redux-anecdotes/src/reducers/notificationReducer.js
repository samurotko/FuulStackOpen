const initialState = ''
var timer

export const notification = (message, time) => {

    
    
    console.log('timer',timer)
    return dispatch => {
    
    clearTimeout(timer);
    timer = setTimeout(()=>dispatch(deleteNotification()),time*1000)

    dispatch({
        type: 'NOTIFICATION',
        data: {message: message, time: time}
    })
    // return dispatch => {
    //     setTimeout(()=>dispatch(deleteNotification()),time*1000)
    //     dispatch({
    //         type: 'NOTIFICATION',
    //         data: {message: message, time: time}
    //         })
    // }
    }
}

export const addNotification = (message) => {
    console.log('message',message)
    return {
      type: 'ADD_NOTIFICATION',
      data: {message: message}
      }
}

export const deleteNotification = () => {
    return {
      type: 'DELETE_NOTIFICATION'
      }
}


const notificationReducer = (state = initialState, action) => {
    

    switch(action.type){
        case 'ADD_NOTIFICATION':
            console.log("notification",action.data.message)
            return action.data.message
        case 'DELETE_NOTIFICATION':
            
            return ''
        case 'NOTIFICATION':
            console.log("notification",action.data)
            
            
            return action.data.message
        default: return state
    }


}

export default notificationReducer