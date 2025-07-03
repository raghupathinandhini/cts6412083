## cts 6412083
## Exercise 2: Verifying Interactions with Mockito
## Objective
This exercise shows how to use Mockito to verify that a method is called with the expected arguments.
Verifying interactions is useful when you want to test behavior, not just the return values.

## Scenario
## Context:

--You have a MyService class that depends on an ExternalApi.
--You want to ensure that when MyService does its work, it calls ExternalApi.getData().


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

public interface ExternalApi {
    String getData();
}

 ## code:

public class MyService {
    private final ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public void fetchData() {
        externalApi.getData();
    }
}
MyService depends on ExternalApi.
The fetchData() method calls getData() on the ExternalApi.

## Test Class

package com.google.MavenProjects;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest1 {
        @Test
	    public void testVerifyInteraction() {
	        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
	        MyService service = new MyService(mockApi);
	        service.fetchData();
	        verify(mockApi).getData();
	    }

}


## How It Works

1️. Create a Mock
-Mockito.mock(ExternalApi.class) creates a fake version of the dependency.

2️. Inject the Mock
-new MyService(mockApi) passes the mock to the service.

3️. Call the Method
-service.fetchData() should call mockApi.getData().

4️. Verify the Interaction
-verify(mockApi).getData(); checks that getData() was actually called.

--If not, the test fails with an error.

##  Maven pom.xml

<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>MockitoVerifyExample</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>MockitoVerifyExample</name>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <junit.jupiter.version>5.10.0</junit.jupiter.version>
    <mockito.version>5.7.0</mockito.version>
  </properties>

  <dependencies>
    <!--  JUnit 5 -->
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>${junit.jupiter.version}</version>
      <scope>test</scope>
    </dependency>

    <!--  Mockito -->
    <dependency>
      <groupId>org.mockito</groupId>
      <artifactId>mockito-core</artifactId>
      <version>${mockito.version}</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <!--  Surefire plugin to run JUnit 5 tests -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.1.2</version>
      </plugin>
    </plugins>
  </build>

</project>

## How to Run

1️. Clone or download the project.
2️. Open it in your IDE (IntelliJ, Eclipse, VS Code).
3️. Make sure your pom.xml downloads dependencies (mvn clean install or mvn test).
4️. Run MyServiceTest as a JUnit test.

## Expected Result:

--The test passes if getData() is called.
--The test fails if getData() is not called.

## Why Interaction Verification Matters

--Sometimes methods don’t return a value — they perform an action.
  Example: sending an email, writing to a log, calling another API.
--In these cases, verifying behavior is more important than verifying return values.
--verify() checks that your code collaborates with its dependencies correctly.
