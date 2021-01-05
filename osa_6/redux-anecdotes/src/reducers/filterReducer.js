
const initialState = ''

export const filterBy = (filter) => {
    
    return {
      type: 'FILTER',
      data: {
          filter: filter
        }
      }
}



const filterReducer = (state = initialState, action) => {
    

    switch(action.type){
        case 'FILTER':
            console.log("filtering",action.data.filter)
                   
            return action.data.filter

        default: return state
    }
}

export default filterReducer