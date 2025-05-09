import { Box,  Icon, Text } from "@chakra-ui/react"
import { FaEdit, FaList, FaPlus, FaSearch, FaTrash } from "react-icons/fa"
import { Link,  } from "react-router-dom"



const Dashboard=()=>{
    return(
        <>
        <Box bgColor="black"  width="100%" height="100%" display="flex" flexDirection="column" 
                    gap="2rem" justifyContent="start" padding="1rem">
           
           <h1>NTT DATA</h1>
           <Box className="employee">
            <Text fontStyle="italic" >Empleados</Text>
           </Box>
           <Box className="buttons" display="flex" flexDirection="column" gap="1rem">
              <Box ><Icon as={FaList} boxSize={4} mr={2} /> <Link to="/listEmployees" >Lista Empleados</Link></Box> 
              <Box ><Icon as={FaPlus} boxSize={4} mr={2} /><Link to="/addEmployee" >Agregar Empleado</Link></Box>           
              <Box><Icon as={FaSearch} boxSize={4} mr={2} /><Link to="/searchEmployee" >Buscar Empleado</Link></Box> 
              <Box><Icon as={FaTrash} boxSize={4} mr={2} /><Link to="/deleteEmployee" >Eliminar Empleado</Link></Box> 
              <Box><Icon as={FaEdit} boxSize={4} mr={2} /><Link to="/updateEmployee" >Actualizar Empleado</Link></Box>  
           </Box>
           <Box className="Office">
            <Text fontStyle="italic" >Oficinas</Text>
           </Box>

        </Box>
        </>
    )
}

export default Dashboard