

import axios from 'axios';

const OFFICE_API_URL = 'http://localhost:8080/api/nttdata/offices';

export const getOffices = () => axios.get(OFFICE_API_URL);