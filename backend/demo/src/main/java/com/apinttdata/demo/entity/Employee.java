package com.apinttdata.demo.entity;

import jakarta.persistence.*;


import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="employee")
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(unique = true,nullable = true)
    private String dni;

    private String phone;
    private String address;

    @Column(name = "birth_date")
    private Date birthDate;

    @ManyToMany
    @JoinTable(
            name = "employee_office",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "office_id")
    )
    private List<Office> offices;


    public Employee() {}
    public Employee (Long id ){
        this.id = id;
    }
    public Employee (String name,String dni,String phone,String address,Date birthDate,List<Office> offices ){
        this.name = name;
        this.dni = dni;
        this.phone = phone;
        this.address = address;
        this.birthDate = birthDate;
        this.offices = offices;
    }

    public Employee (Long id,String name,String dni,String phone,String address,Date birthDate,List<Office> offices ){
        this(name,dni,phone,address,birthDate,offices);
        this.id = id;
    }


    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDni() {
        return dni;
    }

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public List<Office> getOffices() {
        return offices;
    }




    public void setName(String name) {
        this.name = name;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public void setOffices(List<Office> offices) {
        this.offices = offices;
    }


    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return id == employee.id && Objects.equals(name, employee.name) && Objects.equals(dni, employee.dni) && Objects.equals(phone, employee.phone) && Objects.equals(address, employee.address) && Objects.equals(birthDate, employee.birthDate) && Objects.equals(offices, employee.offices);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, dni, phone, address, birthDate, offices);
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Employee{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", dni='").append(dni).append('\'');
        sb.append(", phone='").append(phone).append('\'');
        sb.append(", address='").append(address).append('\'');
        sb.append(", birthDate=").append(birthDate);
        sb.append(", offices=").append(offices);
        sb.append('}');
        return sb.toString();
    }
}
