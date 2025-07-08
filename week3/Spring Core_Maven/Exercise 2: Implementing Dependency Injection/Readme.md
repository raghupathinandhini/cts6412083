## cts 6412083
## Exercise 2: Implementing Dependency Injection
## Scenario
In this exercise, you will learn how to manage dependencies between the BookService and BookRepository classes using Spring Framework’s Inversion of Control (IoC) and Dependency Injection (DI) features.
This is an essential step in building loosely coupled, maintainable, and testable applications with Spring.

## Objectives

--Configure Spring beans in an XML configuration file.
--Wire the BookRepository dependency into the BookService bean.
--Use setter injection for better flexibility and testability.
--Verify the configuration by running the main application.

## Project Structure

LibraryManagement/
├── src/main/java/
│   ├── com/example/library/
│   │   ├── BookRepository.java
│   │   ├── BookService.java
│   │   ├── LibraryManagementApplication.java
├── src/main/resources/
│   ├── applicationContext.xml
├── pom.xml

## Steps :
## 1️. Modify the XML Configuration

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans
           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- Define BookRepository bean -->
    <bean id="bookRepository" class="com.example.library.BookRepository" />

    <!-- Define BookService bean and inject BookRepository -->
    <bean id="bookService" class="com.example.library.BookService">
        <property name="bookRepository" ref="bookRepository" />
    </bean>

</beans>

 ## 2️. Update the BookService Class

package com.example.library;

public class BookService {

    private BookRepository bookRepository;
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayRepositoryStatus() {
        if (bookRepository != null) {
            System.out.println("BookRepository has been injected successfully!");
        } else {
            System.out.println("BookRepository injection failed.");
        }
    }
}

## 3️. Test the Configuration


package com.example.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.displayRepositoryStatus();
    }
}

## Run this class — 
BookRepository has been injected successfully!

##  Key Takeaways

--Inversion of Control (IoC): Spring manages the lifecycle and configuration of your beans.
--Dependency Injection (DI): Spring wires beans together, reducing tight coupling.
--Setter Injection: A flexible way to inject optional dependencies.



