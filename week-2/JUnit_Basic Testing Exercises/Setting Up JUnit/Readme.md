# cts 6412083
# 1. JUnit_Basic Testing Exercises

# Exercise 1: Setting Up JUnit 

## 📚 Scenario

You need to set up **JUnit** in your Java project to start writing unit tests.  
This guide explains how to do it step-by-step using **Eclipse IDE** and **Maven**.

---

## ✅ Prerequisites

- Eclipse IDE installed (with Maven support)
- Java JDK installed (Java 8+ recommended)

---

## 🚀 Steps

### 1️⃣ Create a New Maven Project

1. Open **Eclipse**.
2. Go to `File` → `New` → `Project...`
3. Select `Maven Project` → Click `Next`.
4. Choose the workspace location → Click `Next`.
5. Select an archetype (e.g., `maven-archetype-quickstart`) → Click `Next`.
6. Fill in the details:
   - **Group Id:** `com.example`
   - **Artifact Id:** `junit-setup-example`
7. Click `Finish`.

---

### 2️⃣ Add JUnit Dependency

1. Open the `pom.xml` file.
2. Add the following inside the `<dependencies>` section:

   ```xml
   <dependencies>
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.13.2</version>
           <scope>test</scope>
       </dependency>
   </dependencies>

## Create a Test Class
--Right-click on src/test/java.
--Select New → Package. For example, create com.example.
--Right-click the new package → New → JUnit Test Case.
--Name it MyFirstTest.
--Add a simple test method:

package com.example;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class MyFirstTest {

    @Test
    public void testAddition() {
        int sum = 2 + 3;
        assertEquals(5, sum);
    }
}
Save the file.

## Run the Test
--Right-click on MyFirstTest.java.
--Select Run As → JUnit Test.

