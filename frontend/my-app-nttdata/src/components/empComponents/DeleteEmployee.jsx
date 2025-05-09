import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  
} from '@chakra-ui/react';
import { useState } from 'react';

import { deleteEmployee, getEmployeeById } from '../../services/employeeService';

const DeleteEmployee = () => {
  const [searchId, setSearchId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [notFound, setNotFound] = useState(false);


  const handleSearch = async () => {
    try {
      const res = await getEmployeeById(searchId);
      setEmployee(res.data);
      setNotFound(false);
    } catch (error) {
      setEmployee(null);
      if (error.response?.status === 404) {
        setNotFound(true);
      } else {
        console.log(error)
      }
    }
  };

  const handleDelete = async () => {
    if (!confirm('¿Deseas eliminar este empleado?')) return;

    try {
      await deleteEmployee(employee.id);
     
      setEmployee(null);
      setSearchId('');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Box widows="100%" height="100vh" bgColor="black" p={6}>
      <Heading size="lg" mb={6}>Eliminar Empleado por ID</Heading>

      <Box mb={4}>
        <label htmlFor="deleteId">
          <Text fontWeight="semibold" mb={1}>ID del Empleado</Text>
        </label>
        <Input
          id="deleteId"
          type="number"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </Box>

      <Button colorScheme="blue" mb={6} onClick={handleSearch}>
        Buscar
      </Button>

      {notFound && (
        <Text color="red.500" mb={4}>
          Empleado no encontrado.
        </Text>
      )}

      {employee && (
        <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
          <Text><strong>ID:</strong> {employee.id}</Text>
          <Text><strong>Nombre:</strong> {employee.name}</Text>
          <Text><strong>DNI:</strong> {employee.dni}</Text>
          <Text><strong>Teléfono:</strong> {employee.phone}</Text>
          <Text><strong>Dirección:</strong> {employee.address}</Text>
          <Text><strong>Nacimiento:</strong> {employee.birthDate}</Text>
                    <Text><strong>Oficinas:</strong> 
                       {employee.offices.length > 0 ?(                             
                                              employee.offices.map((offi)=>(     
                                                  <span key={offi.id || offi}>{offi.name} </span>
                                              ))
                                          ):(
                                              <span>Remoto</span>
                                          )}     
                    </Text>

          <Button mt={4} colorScheme="red" onClick={handleDelete}>
            Eliminar Empleado
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DeleteEmployee;