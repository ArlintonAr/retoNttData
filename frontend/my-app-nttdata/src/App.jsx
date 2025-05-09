import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import ListEmployees from './components/empComponents/ListEmployees'

import DashboardPage from './pages/Employees'
import { Box } from '@chakra-ui/react'

import SearchEmployee from './components/empComponents/SearchEmployee'
import DeleteEmployee from './components/empComponents/DeleteEmployee'
import UpdateEmployee from './components/empComponents/UpdateEmployee'
import AddEmployees from './components/empComponents/AddEmployee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box display="flex" gap="1rem" >
        <Box className="content-dashboard" width="25%" height="100vh" >
          <DashboardPage/>
        </Box>

        <Box  width="75%">
          <Routes>
              <Route path='/listEmployees' element={<ListEmployees />}></Route>
              <Route path='/addEmployee' element={<AddEmployees />}></Route>
              <Route path='/updateEmployee' element={<UpdateEmployee />}></Route>
              <Route path='/searchEmployee' element={<SearchEmployee/>}></Route>
              <Route path='/deleteEmployee' element={<DeleteEmployee/>}></Route>
          </Routes>
        </Box>
      </Box>

    </>
  )
}

export default App
