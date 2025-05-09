import { Box, Table } from "@chakra-ui/react"
import { getEmployees } from "../../services/employeeService"

import { useEffect, useState } from "react"

const ListEmployees = () => {

    const [employees, setEmployees] = useState([]);


    const loadEmployees = async () => {
        try {
            const response = await getEmployees();
            
           
            setEmployees(response.data);
            
        } catch (error) {
            console.error("Error al cargar empleados: ", error)
        }
    }

    useEffect(() => {
        loadEmployees();
       
       
    }, [])

     console.log(employees)
    return (
        <>
            <Box overflowY="auto" height="100vh" bgColor="black">
                <Table.Root size="sm">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Id</Table.ColumnHeader>
                            <Table.ColumnHeader>Nombres</Table.ColumnHeader>
                            <Table.ColumnHeader>DNI</Table.ColumnHeader>
                            <Table.ColumnHeader>Telefono</Table.ColumnHeader>
                            <Table.ColumnHeader>Direccion</Table.ColumnHeader>
                            <Table.ColumnHeader>Fecha de Nacimiento</Table.ColumnHeader>
                            <Table.ColumnHeader>Oficinas</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {employees.map((emp) => (
                            <Table.Row key={emp.id}>
                                 <Table.Cell>{emp.id}</Table.Cell>
                                <Table.Cell>{emp.name}</Table.Cell>
                                <Table.Cell>{emp.dni}</Table.Cell>
                                <Table.Cell>{emp.phone}</Table.Cell>
                                <Table.Cell>{emp.address}</Table.Cell>
                                <Table.Cell>{emp.birthDate}</Table.Cell>
                                <Table.Cell>
                                    {emp.offices.length > 0 ?(                             
                                    emp.offices.map((offi)=>(     
                                        <span key={offi.id || offi}>{offi.name} </span>
                                    ))
                                ):(
                                    <span>Remoto</span>
                                )}
                                </Table.Cell>
                                
                                
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>

            </Box>
        </>
    )
}
export default ListEmployees