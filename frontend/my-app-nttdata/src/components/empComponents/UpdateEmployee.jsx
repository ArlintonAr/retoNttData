import {
  Box,
  Button,
  Input,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { getEmployeeById, updateEmployee } from '../../services/employeeService';

const UpdateEmployee = () => {
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

  const handleUpdate = async () => {
    try {
      await updateEmployee(employee.id, employee);
    //Limpio campos
    setEmployee(null)
    setSearchId('')
    } catch (error) {
        console.log(error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <Box width="100%" height="100vh" p={4} bgColor="black">
      <Heading size="lg" mb={6}>Actualizar Empleado</Heading>

      <Box mb={4}>
        <label htmlFor="searchId"  >
          <Text fontWeight="semibold" mb={.5}>ID del Empleado</Text>
        </label>
        <Input size="xs"
          id="searchId"
          type="number"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </Box>

      <Button size="xs" colorScheme="blue" mb={6} onClick={handleSearch}>
        Buscar
      </Button>

      {notFound && (
        <Text color="red.500" mb={4}>
          Empleado no encontrado.
        </Text>
      )}

      {employee && (
        <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" display="flex" gap="2rem" flexWrap="wrap">
          <Box mb={3}>
            <label>
              <Text>Nombre:</Text>
            </label>
            <Input size="xs"
              name="name"
              value={employee.name}
              onChange={handleChange}
            />
          </Box>

          <Box mb={3}>
            <label>
              <Text>DNI:</Text>
            </label>
            <Input size="xs"
              name="dni"
              value={employee.dni}
              isDisabled // No editable según tus reglas
            />
          </Box>

          <Box mb={3}>
            <label>
              <Text>Teléfono:</Text>
            </label>
            <Input size="xs"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
            />
          </Box>

          <Box mb={3}>
            <label>
              <Text>Dirección:</Text>
            </label>
            <Input size="xs"
              name="address"
              value={employee.address}
              onChange={handleChange}
            />
          </Box>

          <Box mb={3}>
            <label> 
              <Text>Fecha de nacimiento:</Text>
            </label>
            <Input size="xs"
              name="birthDate"
             
              value={employee.birthDate}
              onChange={handleChange}
            />
          </Box>

          <Button size="xs" colorScheme="green" onClick={handleUpdate}>
            Actualizar Empleado
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UpdateEmployee;