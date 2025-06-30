# cts 6412083
# PL/SQL Exercises: Control Structures and Stored Procedures

##  Overview

This repository contains PL/SQL blocks and stored procedures for basic banking operations as part of an exercise on control structures and stored procedures.



##  Exercise 1: Control Structures

### Scenario 1: Senior Citizen Loan Discount
- *Description:* Loops through all customers and applies a 1% discount to loan interest rates for customers above 60 years old.

### Scenario 2: Promote Customers to VIP
- *Description:* Iterates through all customers and sets IsVIP to TRUE for those with a balance over $10,000.

### Scenario 3: Loan Due Reminder
- *Description:* Fetches all loans due within the next 30 days and prints a reminder message for each customer.



##  Exercise 3: Stored Procedures

### Scenario 1: Process Monthly Interest
- *Procedure:* ProcessMonthlyInterest
- *Description:* Calculates and updates the balance of all savings accounts by applying a 1% interest rate.

### Scenario 2: Update Employee Bonus
- *Procedure:* UpdateEmployeeBonus
- *Description:* Updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.

### Scenario 3: Transfer Funds
- *Procedure:* TransferFunds
- *Description:* Transfers a specified amount from one account to another after checking that the source account has sufficient balance.


##  Files Included

- control_structures.sql – PL/SQL blocks for Exercise 1.
- stored_procedures.sql – Stored procedures for Exercise 3.
- README.md – This file.


##  Technologies Used

This project uses the following tools and technologies:

- *Oracle Database* — for storing and managing customer, loan, savings, and employee data.
- *PL/SQL* — to write blocks, loops, and stored procedures.
- *Oracle SQL Developer* —  [Oracle Live SQL](https://livesql.oracle.com) for online testing.
- *Git* and *GitHub* — for version control and collaboration.
- *Markdown* — for creating clear project documentation (README.md).
