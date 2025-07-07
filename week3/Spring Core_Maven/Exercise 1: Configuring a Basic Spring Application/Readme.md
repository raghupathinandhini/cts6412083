## cts 6412083
## Exercise 1: Configuring a Basic Spring Application

# LibraryManagement

A simple **Spring Framework** example demonstrating how to configure a basic application using **Spring XML configuration** in a **Maven project**.

This project shows how to:
- Use Spring Core to define beans and wire dependencies.
- Load an `ApplicationContext` using an XML file.
- Create simple Service and Repository classes.
- Run a Java main class to test your Spring configuration.

---

## 📌 **Project Structure**

LibraryManagement/
├── src/
│ ├── main/
│ │ ├── java/
│ │ │ ├── com.library/
│ │ │ │ ├── Main.java
│ │ │ ├── com.library.service/
│ │ │ │ ├── BookService.java
│ │ │ ├── com.library.repository/
│ │ │ │ ├── BookRepository.java
│ │ ├── resources/
│ │ │ ├── applicationContext.xml
├── pom.xml



##  **Steps to Run**

###  **1. Create the Maven Project**

- In **Eclipse**, use:
File → New → Maven Project

- Choose `maven-archetype-quickstart`.
- Enter:
- **Group Id:** `com.library`
- **Artifact Id:** `LibraryManagement`



###  **2. Add Spring Dependencies**

xml:
<dependencies>
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-context</artifactId>
  <version>5.3.30</version>
</dependency>
</dependencies>


 3. Configure the Application Context

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans
           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="bookRepository" class="com.library.repository.BookRepository"/>

    <bean id="bookService" class="com.library.service.BookService">
        <property name="bookRepository" ref="bookRepository"/>
    </bean>

</beans>

 4. Create the Service and Repository Classes
--code:
package com.library.repository;

public class BookRepository {
    public void saveBook() {
        System.out.println("Book saved to repository.");
    }
}

--code:
package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook() {
        System.out.println("Adding book...");
        bookRepository.saveBook();
    }
}
 5. Create the Main Class
--code:
package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook();
    }
}
##  How It Works

--applicationContext.xml defines the beans and their dependencies.
--Spring loads the context and wires BookRepository into BookService.

The Main class gets the BookService bean from Spring and calls addBook(), which saves a book using the repository.

## Requirements

--Java 8+
--Maven 3+
--Eclipse or IntelliJ IDEA

## To Run

--Right-click Main.java
--Choose Run As → Java Application

