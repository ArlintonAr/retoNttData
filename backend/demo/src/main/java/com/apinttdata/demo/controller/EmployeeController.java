package com.apinttdata.demo.controller;

import com.apinttdata.demo.entity.Employee;
import com.apinttdata.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/nttdata/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return this.employeeService.findAllEmployees();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = this.employeeService.findByIdEmployee(id);
        if (employee == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(employee) ;

    }

    @PostMapping
    public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) {
      boolean isSave =  this.employeeService.saveEmployee(employee);
      if (!isSave) {
          return ResponseEntity.ok("Empleado NO se ha guardado correctamente");
      }
        return ResponseEntity.ok("Empleado Guardado correctamente");
    }
    @PutMapping("/{id}")
    public ResponseEntity<Boolean> update(@PathVariable Long id, @RequestBody Employee employee) {
      boolean isUpdated = this.employeeService.updateEmployee(id,employee);
        if (isUpdated) {
            return ResponseEntity.ok(true);
        }else{
           return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
      boolean isDelete =  this.employeeService.deleteEmployee(id);
       if(isDelete) {
           return ResponseEntity.ok("Empleado NO encontrado");
       }else{
           return ResponseEntity.ok("Empleado no eliminado");
       }
    }

}
