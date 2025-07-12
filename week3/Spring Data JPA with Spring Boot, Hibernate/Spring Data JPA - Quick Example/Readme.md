## cts 6412083
## Spring Data JPA — Quick Example
##  Project Overview

This project is a step-by-step guide for setting up Spring Data JPA with Hibernate and MySQL using Spring Boot.
It demonstrates how to:

--Create a Spring Boot Maven project
--Connect to a MySQL database
--Map a table to a JPA entity
--Use a repository interface
--Create a service layer
--Test everything in the main application.

✅ Software Prerequisites
Before starting, make sure you have:
MySQL Server 8.0
MySQL Workbench 8 (or any client)
Eclipse IDE for Enterprise Java Developers 2019-03 R
Maven 3.6.2

## 1. Project Creation — Spring Initializr
Go to Spring Initializer
Group: com.cognizant
Artifact: orm-learn
Description: Demo project for Spring Data JPA and Hibernate

## 2️. Import Project in Eclipse

## 3️. MySQL Database Setup
Open MySQL Command Line or Workbench.
Create a new schema named ormlearn.


## 5️. Build Project with Maven
Open a terminal in the project root.


## 6️. Add Logging in OrmLearnApplication
 
--Code:
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");
    }

}


## 7️. Understand Project Structure
src/main/java — Contains main application code.
src/main/resources — Contains config files like application.properties.
src/test/java — Contains unit/integration tests.
OrmLearnApplication.java — Contains main() and acts as the entry point.

@SpringBootApplication — Combines:
@Configuration
@EnableAutoConfiguration
@ComponentScan
pom.xml — Maven file managing dependencies and plugins.

## Project Structure:
com.cognizant.ormlearn
├── OrmLearnApplication.java
├── model
│   └── Country.java
├── repository
│   └── CountryRepository.java
└── service
    └── CountryService.java

## SME should explain:

The XML configuration.
Dependency hierarchy: Right-click pom.xml → Dependency Hierarchy.

## 8️. Country Table in Database
--Code:
create table country (
  co_code varchar(2) primary key,
  co_name varchar(50)
);

insert into country values ('IN', 'India');
insert into country values ('US', 'United States of America');

## 9️. Create Persistence Class
--Code:
package com.cognizant.ormlearn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "country")
public class Country {

    @Id
    @Column(name = "co_code")
    private String code;

    @Column(name = "co_name")
    private String name;

    // Getters and setters
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // toString
    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
## Key Points:

@Entity → JPA entity.
@Table → Maps class to table.
@Id → Primary key.
@Column → Maps fields to columns.

## 1️0️. Create Repository Interface

package com.cognizant.ormlearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
}


## 1️1️. Create Service Layer

--Code:
package com.cognizant.ormlearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
}


## 1️2. Test Everything in OrmLearnApplication

--Code:
import org.springframework.context.ApplicationContext;
import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End");
    }
}

## Run OrmLearnApplication 

