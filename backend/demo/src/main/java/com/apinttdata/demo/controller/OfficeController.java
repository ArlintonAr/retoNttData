package com.apinttdata.demo.controller;

import com.apinttdata.demo.entity.Employee;
import com.apinttdata.demo.entity.Office;
import com.apinttdata.demo.service.EmployeeService;
import com.apinttdata.demo.service.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/nttdata/offices")
@CrossOrigin(origins ="*")
public class OfficeController {
    @Autowired
    private OfficeService officeService;

    @GetMapping
    public List<Office> getAllOffices() {
        return this.officeService.findAllOffices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Office> getOfficeById(@PathVariable Long id) {
        return ResponseEntity.ok(this.officeService.findByIdOffice(id));
    }

    @PostMapping
    public ResponseEntity<String> saveOffice(@RequestBody Office office) {
        boolean isSave =  this.officeService.saveOffice(office);
        if (!isSave) {
            return ResponseEntity.ok("Oficina NO se ha guardado correctamente");
        }
        return ResponseEntity.ok("Oficina Guardado correctamente");
    }
    @PutMapping("/{id}")
    public ResponseEntity<Boolean> updateOffice(@PathVariable Long id, @RequestBody Office office) {
        boolean isUpdated = this.officeService.updateOffice(id,office);
        if (isUpdated) {
            return ResponseEntity.ok(true);
        }else{
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOffice(@PathVariable Long id) {
        boolean isDelete =  this.officeService.deleteOffice(id);
        if(isDelete) {
            return ResponseEntity.ok("Oficina NO encontrado");
        }else{
            return ResponseEntity.ok("Oficina no eliminado");
        }
    }


}
