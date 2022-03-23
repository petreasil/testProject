import axios from 'axios';

const API_URL = 'https://623b32422e056d1037eebed1.mockapi.io/api/v1/';


//get all Programs
const getProgram = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  const response = await axios.get(API_URL + 'programs', config);

  return response.data;
};

//create all Programs
const createProgram = async (token,programId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  const response = await axios.post(API_URL + 'programs'+programId, config);

  return response.data;
};

// Delete Program
const deleteProgram = async (programData, token) => {
  console.log(programData)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  const response = await axios.delete(API_URL + 'programs/'+ programData, config);

  return response.data;
};

const programService = {
  getProgram,
  deleteProgram,
  createProgram
};

export default programService;
