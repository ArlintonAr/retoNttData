import axios from "axios";

const API_URL = "http://localhost:8080/api/nttdata/employees"


export const getEmployees = () => axios.get(API_URL);
export const getEmployeeById = (id) => axios.get(`${API_URL}/${id}`);
export const createEmployee = (data) => axios.post(API_URL, data,{
      headers: {
        'Content-Type': 'application/json',
      },
    } );

export const updateEmployee = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);