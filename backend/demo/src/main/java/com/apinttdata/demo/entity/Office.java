package com.apinttdata.demo.entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="office")
public class Office implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private String name;

    private String location;

    @ManyToMany(mappedBy = "offices")
    private List<Employee> employees;


    public Office() {}
    public Office(Long id) {
        this.id = id;
    }
    public Office( String name, String location, List<Employee> employees) {
        this.name = name;
        this.location = location;
        this.employees = employees;
    }

    public Office(Long id, String name, String location, List<Employee> employees) {
        this(name,location,employees);
        this.id = id;

    }

    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Office office = (Office) o;
        return Objects.equals(id, office.id) && Objects.equals(name, office.name) && Objects.equals(location, office.location) && Objects.equals(employees, office.employees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, location, employees);
    }


    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Office{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", location='").append(location).append('\'');
        sb.append(", employees=").append(employees);
        sb.append('}');
        return sb.toString();
    }
}
