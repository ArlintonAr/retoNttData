
import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react"

import { createEmployee } from "../../services/employeeService"
import { useState } from "react"




const AddEmployees = () => {


  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    phone: "",
    address: "",
    brirthDate: "",
    offices:[]
  })
  const [errors, setErrors] = useState({})
  const [errServ, setErrServ] = useState()
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.dni.trim()) newErrors.dni = 'El DNI es obligatorio';

    return newErrors;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    setErrServ('')

    if (Object.keys(newErrors).length > 0) return;

    try {

    
      await createEmployee(formData);

      setFormData({
        name: '',
        dni: '',
        phone: '',
        address: '',
        birthDate: '',
        offices:[]
      });

    } catch (error) {
      const status = error.response?.status
      if (status === 400 || status === 409) {
        setErrServ(typeof message === 'string' ? message : 'Empleado duplicado.');
      } else {
        setErrServ('Error inesperado al registrar el empleado.');
      }
      console.log(error)

    }
  }
  return (

    <Box padding="1rem" bgColor="black" height="100%" >
      <form formData={formData} setFormData={setFormData} onSubmit={handleSubmit} >
        <Fieldset.Root size="md" maxW="md" bgColor="black" >
          <Stack>
            <Fieldset.Legend>Agregar Nuevo Empleado</Fieldset.Legend>
            <Fieldset.HelperText>
              Por favor ingresa los datos del nuevo cliente.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content >
            <Field.Root  >
              <Field.Label>Nombres</Field.Label>
              <Input size="s" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </Field.Root>

            <Text color="red" fontSize="10px">{errors.name}</Text>


            <Field.Root>
              <Field.Label>DNI *</Field.Label>
              <Input size="s" name="dni" type="text" value={formData.dni} onChange={(e) => setFormData({ ...formData, dni: e.target.value })} />
            </Field.Root>
            <Text color="red" fontSize="10px">{errors.dni}</Text>

            <Field.Root>
              <Field.Label>Teléfono</Field.Label>
              <Input size="s" name="telefono" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </Field.Root>
            <Field.Root>
              <Field.Label >Direccion</Field.Label>
              <Input size="s" name="direccion" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </Field.Root>

            <Field.Root>
              <Field.Label>Fecha de Nacimiento YYYY-mm-dd</Field.Label>
              <Input size="s" name="fecha" value={formData.brithDate} onChange={(e) => setFormData({ ...formData, brithDate: e.target.value  })} />
            </Field.Root>

            {/* <Field.Root>
              <Field.Label>Oficina (ID)</Field.Label>
              <Input size="s" name="fecha" value={formData.offices} onChange={(e) => setFormData({ ...formData, offices: e.target.value })} />
            </Field.Root>
 */}
          </Fieldset.Content>

          <Text color="red" fontSize="10px">{errServ}</Text>

          <Button type="submit" onClick={handleSubmit} alignSelf="flex-start">
            Agregar
          </Button>
        </Fieldset.Root>


      </form>

    </Box>

  )

}
export default AddEmployees

