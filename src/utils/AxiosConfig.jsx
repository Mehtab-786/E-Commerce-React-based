import axios from 'axios'

const instance =  axios.create({
    baseURL:'https://json-server-eta-seven.vercel.app/'    
})

export default instance