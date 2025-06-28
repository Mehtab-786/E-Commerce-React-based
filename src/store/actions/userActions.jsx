import axios from '../../utils/AxiosConfig'
import { loadUser, removeUser  } from '../reducers/UserSlice'

export const asyncCurrentUser = () => async (dispatch, getstate) => {
    try {
        let currentUser = JSON.parse(localStorage.getItem('user'))
        if(currentUser) dispatch(loadUser(currentUser))
    } catch (error) {
        console.log(error)
    }
}
export const asyncUpdateUser = (id,user) => async (dispatch, getstate) => {
    try {

        let {data} = await axios.patch('/users/'+id,user)
        localStorage.setItem('user',JSON.stringify(data))        
        dispatch(loadUser(data))
    } catch (error) {
        console.log(error)
    }
}

export const asyncRegisterUser = (user) => async (dispatch, getstate) => {
    try {
        await axios.post('/users',user)
    } catch (error) {
        console.log(error)
    }
}
export const asyncLogoutUser = () => async (dispatch, getstate) => {
    try {
        localStorage.removeItem('user')
        dispatch(removeUser())
    } catch (error) {
        console.log(error)
    }
}
export const asyncDeleteUser = (id) => async (dispatch, getstate) => {
    try {
        await axios.delete('/users/'+id)
        dispatch(asyncLogoutUser())
    } catch (error) {
        console.log(error)
    }
}

export const asyncLoggedInUser = (user) => async (dispatch, getstate) => {
    try {
        let {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem('user',JSON.stringify(data[0]))
        dispatch(asyncCurrentUser())
    } catch (error) {
        console.log(error)
    }
}

