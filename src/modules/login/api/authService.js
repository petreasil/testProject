import axios from 'axios';


const API_URL = process.env.REACT_APP_BASE_URL;

//register user
const register = async (userData) => {
    const response = await axios.post(API_URL+'register', userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}
//login user
const login = async (userData) => {
    console.log(userData);
    //let queryString = Object.keys(userData).reduce((acc,item)=> `&${acc}${item}=${userData[item]}`,`?`);
    const queryString = Object.keys(userData).map(( key ) => `${key}=${userData[key]}`).join('&');

    const response = await axios.post(API_URL+'login'+`?${queryString}`, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


//logout user
const logout = ()=>{
    localStorage.removeItem('user')
}
const authService = {
    register,
    logout,
    login
}

export default authService