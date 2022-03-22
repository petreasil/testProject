import axios from 'axios';


const API_URL = 'https://reqres.in/api/';

//get all Programs
const getProgram = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios.get(API_URL+'unknown', config)

    return response.data
}

// Delete Program
const deleteProgram = async (programId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + programId, config)
  
    return response.data
  }

const programService = {
    getProgram,
    deleteProgram
}

export default programService;