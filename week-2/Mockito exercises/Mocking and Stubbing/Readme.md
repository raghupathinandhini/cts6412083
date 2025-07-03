## cts 6412083
## Exercise 1: Mocking and Stubbing with Mockito
## Objective
This exercise shows how to write unit tests for a service that depends on an external API, without calling the real API.
Instead, we mock the API and stub its methods using Mockito.
This approach makes unit tests fast, reliable, and independent of external systems.

## Scenario
## Context:

You have a class called MyService that fetches data from an ExternalApi.
In production, the ExternalApi might call a remote server, a database, or a web service.

Problem:

You don’t want your unit tests to depend on the real API.

You want to test only the logic in MyService.

Solution:

--Use Mockito to create a fake version of ExternalApi.
--Tell the fake API to return a predefined value when its method is called.
--Use the fake API in your test.

## Project Structure

project-root/
 ├── src/
 │   ├── main/java/
 │   │   ├── ExternalApi.java
 │   │   └── MyService.java
 │   └── test/java/
 │       └── MyServiceTest.java
 ├── pom.xml
 └── README.md
 
 ## code:
package com.google.MavenProjects;
public interface ExternalApi {
	    String getData();
}

This is the dependency you want to mock.

## code:MyService 

package com.google.MavenProjects;
public class MyService {
	    private final ExternalApi externalApi;
	    public MyService(ExternalApi externalApi) {
	        this.externalApi = externalApi;
	    }
	    public String fetchData() {
	        return externalApi.getData();
	    }
}

The MyService class uses dependency injection:
It gets the ExternalApi through its constructor.
This makes it easy to replace the real API with a mock in tests.

## Test Class

package com.google.MavenProjects;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
public class MyServiceTest {

	    @Test
	    public void testExternalApi() {
	        //  1. Create a mock for ExternalApi
	        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

	        //  2. Stub the getData() method to return a fake value
	        when(mockApi.getData()).thenReturn("Mock Data");

	        //  3. Inject the mock into MyService
	        MyService service = new MyService(mockApi);

	        //  4. Call the method under test
	        String result = service.fetchData();

	        //  5. Verify the result
	        assertEquals("Mock Data", result);
	        System.out.println(result);
	    }
}


## How It Works:

1. Mock:
Mockito.mock(ExternalApi.class) creates a fake object that behaves like ExternalApi.

2. Stub:
when(mockApi.getData()).thenReturn("Mock Data") tells the fake object what to return.

3. Inject:
Pass the mock to the MyService constructor.

4. Test:
Call fetchData() and check if it returns the stubbed value.

5. Assert:
assertEquals("Mock Data", result) verifies that MyService uses the mock correctly.

## Dependencies (pom.xml)

<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>MockitoStubbingExample</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>MockitoStubbingExample</name>
  <url>http://maven.apache.org</url>

  <properties>
    <!--  Java version -->
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>

    <!--  JUnit 5 version property -->
    <junit.jupiter.version>5.10.0</junit.jupiter.version>
    <!--  Mockito version property -->
    <mockito.version>5.7.0</mockito.version>
  </properties>

  <dependencies>
    <!--  JUnit 5 (JUnit Jupiter) for writing tests -->
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>${junit.jupiter.version}</version>
      <scope>test</scope>
    </dependency>

    <!--  Mockito core library for mocking and stubbing -->
    <dependency>
      <groupId>org.mockito</groupId>
      <artifactId>mockito-core</artifactId>
      <version>${mockito.version}</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <!--  Maven Surefire Plugin to run JUnit 5 tests -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.1.2</version>
        <configuration>
          <includes>
            <include>/*Test.java</include>
          </includes>
        </configuration>
      </plugin>
    </plugins>
  </build>

</project>



## How to Run

--Clone the repository.
--Import the project into your Java IDE (IntelliJ IDEA, Eclipse, etc.).
--Build the project with Maven.
--Right-click MyServiceTest and run it as a JUnit test.

## Expected Result

** The test will pass if:**
    --The MyService calls the mocked ExternalApi.
    --The stubbed value "Mock Data" is returned.
    --The actual output matches the expected output.

## Key Concepts

--Mocking: Replace real dependencies with fake ones.
--Stubbing: Define what the fake object should return.
--Isolation: Tests run without relying on real APIs or databases.
--Dependency Injection: Makes testing and mocking easy.
