import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async (newObject) => {
    const config = {
      headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const put = async (edited) => {
    const url = baseUrl+'/'+edited.id
    console.log('posting to',url)
    const response = await axios.put(url, edited)
    console.log(response)
    return response.data
}

const remove = async (props) => {
    const url = baseUrl+'/'+props
    console.log('url',url)
    console.log(props)
    const config = {
      headers: { Authorization: token },
    }

    
    const response = await axios.delete(url,config)
    console.log(response)
    return response.data
}

export default { setToken,getAll,create,put,remove }