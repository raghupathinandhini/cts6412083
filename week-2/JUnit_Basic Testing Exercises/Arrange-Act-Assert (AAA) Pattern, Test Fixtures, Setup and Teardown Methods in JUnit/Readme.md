# cts 6412083

# 1. JUnit_Basic Testing Exercises

# Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown Methods in JUnit (Eclipse)

## Scenario

In this exercise, you’ll learn how to:
- Organize your tests using the **Arrange-Act-Assert (AAA) pattern**
- Use **setup** and **teardown** methods to prepare and clean up test fixtures
- Apply `@Before` and `@After` annotations in JUnit 4


##  Prerequisites

- Java JDK installed (Java 8+ recommended)
- Eclipse IDE with Maven support
- JUnit 4 dependency added in `pom.xml`


##  Maven Dependency

Add this to your `pom.xml` if not already present:

```xml
<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>

## Example Test Code

--Below is a simple example that demonstrates:
--Using Arrange-Act-Assert
--Using @Before and @After for setup and teardown

Code1:
package com.google.MavenProjects;
import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange: create a new Calculator instance before each test
        calculator = new Calculator();
        System.out.println("Setting up Calculator instance...");
    }

    @After
    public void tearDown() {
        // Cleanup: teardown actions after each test
        calculator = null;
        System.out.println("Tearing down Calculator instance...");
    }

    @Test
    public void testAddition() {
        // Arrange is already done in setUp()

        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(5, 2);
        assertEquals(3, result);
    }
}
--Code 2:
package com.google.MavenProjects;

public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }
}
Save the file.

## How to Run in Eclipse

--Right-click CalculatorTest.java
--Select Run As → JUnit Test



