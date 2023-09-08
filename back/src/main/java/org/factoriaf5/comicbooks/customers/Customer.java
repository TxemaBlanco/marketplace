package org.factoriaf5.comicbooks.customers;

import java.util.List;
import java.util.Set;

import org.factoriaf5.comicbooks.genres.Genre;
import org.factoriaf5.comicbooks.orders.Order;

import jakarta.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @Column(name = "email")
    private String email;

    @Column(name = "dni")
    private String dni;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "surname2")
    private String surname2;

    @Column(name = "street")
    private String street;

    @Column(name = "number")
    private int number;

    @Column(name = "gate")
    private String gate;

    @Column(name = "stair")
    private String stairs;

    @Column(name = "floor")
    private String floor;

    @Column(name = "letter")
    private String letter;

    @Column(name = "postalcode")
    private int postalcode;

    @Column(name = "town")
    private String town;

    @Column(name = "province")
    private String province;

    @Column(name = "password")
    private String password;

    // @ManyToMany
    // @JoinTable(name="customers_orders", joinColumns={@JoinColumn(name="customer_email",referencedColumnName = "email")}, inverseJoinColumns={@JoinColumn(name="order_id",referencedColumnName = "id")})
    // private Set<Order> orders;

    @ManyToMany(mappedBy = "customers")
    public Set<Order> orders;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getSurname2() {
        return surname2;
    }

    public void setSurname2(String surname2) {
        this.surname2 = surname2;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getGate() {
        return gate;
    }

    public void setGate(String gate) {
        this.gate = gate;
    }

    public String getStairs() {
        return stairs;
    }

    public void setStairs(String stairs) {
        this.stairs = stairs;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getLetter() {
        return letter;
    }

    public void setLetter(String letter) {
        this.letter = letter;
    }

    public int getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(int postalcode) {
        this.postalcode = postalcode;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
