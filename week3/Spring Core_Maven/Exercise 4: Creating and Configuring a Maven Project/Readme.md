## cts 6412083
## Exercise 4: Creating and Configuring a Maven Project
## Scenario
In this exercise, you will learn how to set up a new Maven project for the Library Management Application and configure it with essential Spring Framework dependencies and Maven plugins.

## Objectives
--Create a new Maven project named LibraryManagement.
--Add Spring Core dependencies (spring-context, spring-aop, spring-webmvc) in the pom.xml.
--Configure the Maven Compiler Plugin for Java 1.8.

## Project Structure

LibraryManagement/
├── src/main/java/
│   ├── com/example/library/
│   │   ├── [Your Java classes]
├── src/main/resources/
│   ├── applicationContext.xml
├── pom.xml

## Steps to Complete

1️. Create a New Maven Project
Eclipse:

File → New → Maven Project
Choose a workspace location and click Next
Select an archetype (e.g., maven-archetype-quickstart) and click Next
Enter Group Id,artifact Id
click finish.


2️. Add Spring Dependencies in pom.xml
--code:
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
                             
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>LibraryManagement</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <!-- Spring Context for core IoC container -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.3.30</version>
        </dependency>

        <!-- Spring AOP for aspect-oriented programming -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-aop</artifactId>
            <version>5.3.30</version>
        </dependency>

        <!-- Spring Web MVC for building web applications -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.30</version>
        </dependency>

        <!-- JUnit for unit testing (optional but recommended) -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Compiler Plugin to set Java version -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.10.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

3️. Verify Your Maven Project by creating Example Classes to Test

package com.example.library;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("✅ Maven Project is set up successfully with Spring dependencies!");
    }


## Run:
--mvn clean install
This will download dependencies and compile your project.

--If there are no errors, your Maven setup is complete!

## Key Takeaways

--Maven simplifies dependency management.
--Spring’s modular approach allows you to include only the parts you need.
--Always configure the maven-compiler-plugin to match your project’s Java version.



