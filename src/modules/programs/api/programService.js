import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL2;


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

//create  Programs
const createProgram = async (programData,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };
  console.log(programData)
  const response = await axios.post(API_URL + 'programs',programData, config);

  return response.data;
};

//edit  Programs
const editProgramId = async (id,programData,token) => {
  console.log(id,programData)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };
 
  const response = await axios.put(API_URL + 'programs/'+`${id}`,programData, config);

  return response.data;
};

// Delete Program
const deleteProgram = async (programData, token) => {
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
  createProgram,
  editProgramId
};

export default programService;
