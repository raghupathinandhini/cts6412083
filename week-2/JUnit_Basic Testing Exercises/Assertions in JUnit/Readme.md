# cts 6412083
# 1. JUnit_Basic Testing Exercises

# Exercise 3: Assertions in JUnit

##  Scenario

This exercise demonstrates how to use different **JUnit assertions** to validate your test results in a Java project.  
You will write tests using `assertEquals`, `assertTrue`, `assertFalse`, `assertNull`, and `assertNotNull`.


## Prerequisites

- **Java JDK** installed (Java 8+ recommended)
- **Eclipse IDE** installed with Maven support
- **JUnit** dependency added to your Maven `pom.xml`


##  Maven Dependency

Add this to your `pom.xml` if you haven’t already:

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

package com.example;
import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals(5, 2 + 3);

        // Assert true
        assertTrue(5 > 3);

        // Assert false
        assertFalse(5 < 3);

        // Assert null
        assertNull(null);

        // Assert not null
        assertNotNull(new Object());
    }
}
Save the file.

## How to Run in Eclipse

--Right-click on the AssertionsTest.java file in src/test/java.
--Select Run As → JUnit Test.

