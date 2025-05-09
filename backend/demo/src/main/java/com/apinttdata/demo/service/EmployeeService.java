package com.apinttdata.demo.service;

import com.apinttdata.demo.entity.Employee;
import com.apinttdata.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements EmployeeServiceInterface {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee findByIdEmployee(Long id) {
        Employee employee = this.employeeRepository.findById(id).orElse(null);
        return employee;
    }

    @Override
    public List<Employee> findAllEmployees() {
       List<Employee> employees =this.employeeRepository.findAll();
       return  employees;
    }

    @Override
    public boolean saveEmployee(Employee employee) {
      Employee employeeFind = this.findByIdEmployee(employee.getId());
      if (employeeFind != null) {
          return false;
      }
      this.employeeRepository.save(employee);
      return true;

    }

    @Override
    public boolean updateEmployee(Long id ,Employee employee) {
        Employee employeeFind = this.findByIdEmployee(id);
        if (employeeFind != null) {
            employeeFind.setName(employee.getName());
            employeeFind.setPhone(employee.getPhone());
            employeeFind.setAddress(employee.getAddress());
            employeeFind.setBirthDate(employee.getBirthDate());

          this.employeeRepository.save(employeeFind);
          return true;
        }
        return false;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        Employee employeeFind = this.findByIdEmployee(id);
        if (employeeFind != null) {
            this.employeeRepository.delete(employeeFind);
            return true;
        }
        return false;
    }
}
