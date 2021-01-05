import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('getAll',response.data)
  return response.data
}

const postNew = async (content) => {
    const object = { 
        content: content, 
        votes: 0 
    }
    const response = await axios.post(baseUrl, object)
    console.log('posting',response.data)
    return response.data
  }

  const update = async (newObject) => {
      console.log('updating',`${baseUrl}/${newObject.id}`, newObject)
    const response = await axios.put(`${baseUrl}/${newObject.id}`, newObject)
    return response.data
  }

export default { getAll, postNew, update }