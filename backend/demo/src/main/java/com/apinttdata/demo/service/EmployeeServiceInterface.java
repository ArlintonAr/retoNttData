package com.apinttdata.demo.service;

import com.apinttdata.demo.entity.Employee;

import java.util.List;

public interface EmployeeServiceInterface {

    Employee findByIdEmployee(Long id);
    List<Employee> findAllEmployees();
    boolean saveEmployee(Employee employee);
    boolean updateEmployee(Long id,Employee employee);
    boolean deleteEmployee(Long id);

}
