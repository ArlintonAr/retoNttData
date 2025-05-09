package com.apinttdata.demo.service;

import com.apinttdata.demo.entity.Employee;
import com.apinttdata.demo.entity.Office;

import java.util.List;

public interface OfficeServiceInterface {
    Office findByIdOffice(Long id);
    List<Office> findAllOffices();
    boolean saveOffice(Office office);
    boolean updateOffice(Long id,Office office);
    boolean deleteOffice(Long id);
}
