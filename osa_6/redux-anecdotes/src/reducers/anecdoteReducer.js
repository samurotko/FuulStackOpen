import anecdotes from '../services/anecdotes'

//const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//     }
// }

export const createNew = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdotes.postNew(anecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
  
}

export const like = (newObject) => {

  return async dispatch => {
    const updated = await anecdotes.update(newObject)
    console.log('updated is',updated)
    dispatch({
      type: 'LIKE_ANECDOTE',
      data: newObject,
    })
  }

}

export const initializeAnecdotes = () => {
  
  return async dispatch => {
    const allAnecdotes = await anecdotes.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: allAnecdotes,
    })
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){

    case 'NEW_ANECDOTE':
      console.log("case new, state is",state)
      console.log('action.data is',action.data)
      return [...state, action.data]

    case 'LIKE_ANECDOTE':

      console.log("liking, state is",state)
   
      const liked = action.data
      console.log('liked is',liked)
      return state.map(a =>
        a.id !== liked.id ? a : liked 
      ).sort((a,b) => b.votes-a.votes)

    case 'INIT_ANECDOTES':
      console.log('initing',action.data)
      return action.data
      

    default: 
      return state
  }
  
}

export default anecdoteReducer