import axios from 'axios'
import { getFromSessionStorage, saveToSessionStorage } from '../storage';
import urls from '../urls'

const BASE_URL = urls.baseUrl

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = BASE_URL;

let user_id = getFromSessionStorage('user_id')
let role = getFromSessionStorage('role')

const signIn = async ({
    params
}: any) => {
    console.log(params)
try {
    let resp = await axios.post(urls.loginUrl, {...params})
    let signin_data = await resp.data
    if(signin_data.success === true){
        await saveToSessionStorage("authenticated", true)
        await saveToSessionStorage("user_id", signin_data.data.user.id)
        await saveToSessionStorage("is_root", signin_data.data.is_root)
        await saveToSessionStorage("is_admin", signin_data.data.is_admin)
        return ({ success: true, data: signin_data.data, message: signin_data.message })
    }
    else {
        return ({ success: false, data: null, message: signin_data.message })
    }
} catch (error: any) {
    console.log(error)
    try {
        if (error.response) {
            return ({ success: false, data: null, message: error.response.data.message })
        }
        else {
            return ({ success: false, data: null, message: 'Failed to sign you in. Try again later' })
        }
    } catch (error) {
        return ({ success: false, data: null, message: 'Failed to sign you in. Try again later' })

    }
}
}

const assignAdmin = async ({params}: any) => {
    try{
        let resp = await axios.post(urls.assingAdminUrl, params)
        let resp_data = await resp.data;

        console.log(resp_data)
        
        return ({ success: true, data: resp_data, message: resp_data.msg })
    }
    catch(error){
        return ({ success: false, data: null, message: "Failed to create thread. Try again later" })
    }
}


const searchUsername = async ({params}: any) => {

    try {
        let user_params = {username: params.username}
        let resp = await axios.get(urls.searchUserUrl, {params: {...user_params}})

        let data = await resp.data
        return ({success: data?.success, users: data?.users})
    } catch (error) {
        return ({
            success: false, data: null, message: 'Failed to search for user. Try again later'
        })
    }
}

export {
    signIn,
    assignAdmin,
    searchUsername
}

