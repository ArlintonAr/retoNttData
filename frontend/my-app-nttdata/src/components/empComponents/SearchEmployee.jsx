import { useState } from "react";
import { getEmployeeById } from "../../services/employeeService";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";


const SearchEmployee = ()=>{
   
        
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
      if (error.response.status === 404) {
        setNotFound(true);
      } else {
        console.log("Error al buscar empleado")
      }
    }
  };

  return (
    <Box width="100%" height="100vh"  mx="auto" bgColor="black" p={6}>
      <Heading size="lg" mb={6}>Buscar Empleado por ID</Heading>

 
      <Box mb={4}>
        <label>ID del Empleado</label>
        <Input
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
        </Box>
      )}
    </Box>
  );
    
}
export default SearchEmployee 