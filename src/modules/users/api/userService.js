import axios from 'axios';

const API_URL = 'https://623b32422e056d1037eebed1.mockapi.io/api/v1/';

//get all Users
const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  const response = await axios.get(API_URL + 'users', config);

  return response.data;
};
//create user
const addUser = async (userData,token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
  
    const response = await axios.post(API_URL + 'users',userData, config);
  
    return response.data;
  };

  // Delete User
const deleteUser = async (userData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
  
    const response = await axios.delete(API_URL + 'users/'+ userData, config);
  
    return response.data;
  };

  //edit  Programs
const editUserId = async (id,userData,token) => {
    console.log(id,userData)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
   
    const response = await axios.put(API_URL + 'users/'+`${id}`,userData, config);
  
    return response.data;
  };

const userService = {
  getUsers,
  addUser,
  deleteUser,
  editUserId,

};

export default userService;
