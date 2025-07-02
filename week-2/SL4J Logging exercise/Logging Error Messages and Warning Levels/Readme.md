# cts 6412083
# SLF4J logging framework

# Exercise 1: Logging Error Messages and Warning Levels using SLF4J (Eclipse)

## Overview

This project demonstrates how to log **error** and **warning** messages in Java using the **SLF4J** logging facade with **Logback** as the implementation backend.  
You will learn how to set up dependencies in a Maven project and run the program using Eclipse.


## Prerequisites

- **Java JDK** installed (Java 8+ recommended)
- **Eclipse IDE** installed with Maven support (most Eclipse versions have this built-in)


## Steps to Run in Eclipse

###  Create a New Maven Project

1. Open Eclipse.
2. Go to `File` → `New` → `Project...`
3. Select `Maven Project` → Click `Next`.
4. Select a workspace location and click `Next`.
5. Select an archetype (you can use `maven-archetype-quickstart`) → Click `Next`.
6. Fill in `Group Id`, `Artifact Id`, etc. Example:
   - **Group Id:** `com.example`
   - **Artifact Id:** `logging-example`
7. Click `Finish`.


###  Add Dependencies to `pom.xml`

Open the `pom.xml` file and add the following inside the `<dependencies>` section:

```xml
<dependencies>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-api</artifactId>
        <version>1.7.30</version>
    </dependency>
    <dependency>
        <groupId>ch.qos.logback</groupId>
        <artifactId>logback-classic</artifactId>
        <version>1.2.3</version>
    </dependency>
</dependencies>


## create a java class

--Right-click on src/main/java.
--Select New → Package. Create a package, e.g., com.example.logging.
--Right-click the new package → New → Class.
--Name the class LoggingExample.
** code:
package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.error("This is an error message");
        logger.warn("This is a warning message");
    }
}
Save the file.

## Run the Program

--Right-click LoggingExample.java.
--Select Run As → Java Application.
