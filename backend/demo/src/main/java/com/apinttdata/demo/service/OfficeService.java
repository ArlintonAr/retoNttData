package com.apinttdata.demo.service;

import com.apinttdata.demo.entity.Employee;
import com.apinttdata.demo.entity.Office;
import com.apinttdata.demo.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfficeService implements OfficeServiceInterface {

    @Autowired
    private OfficeRepository officeRepository;


    @Override
    public Office findByIdOffice(Long id) {
        Office office = this.officeRepository.findById(id).orElse(null);
        return office;
    }

    @Override
    public List<Office> findAllOffices() {
        List<Office> offices =this.officeRepository.findAll();
        return  offices;
    }

    @Override
    public boolean saveOffice(Office office) {
        Office officeFind = this.findByIdOffice(office.getId());
        if (officeFind != null) {
            return false;
        }
        this.officeRepository.save(office);
        return true;
    }

    @Override
    public boolean updateOffice(Long id, Office office) {
        Office officeFind = this.findByIdOffice(id);
        if (officeFind != null) {
            officeFind.setName(office.getName());
            officeFind.setLocation(office.getLocation());
            this.officeRepository.save(officeFind);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteOffice(Long id) {
        return false;
    }
}
