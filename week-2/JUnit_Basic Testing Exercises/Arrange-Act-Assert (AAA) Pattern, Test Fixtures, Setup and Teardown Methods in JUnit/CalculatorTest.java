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
