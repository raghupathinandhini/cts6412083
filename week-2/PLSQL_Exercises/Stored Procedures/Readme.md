# cts 6412083
#  PL/SQL Stored Procedures — Bank Operations

##  Overview

This repository contains **PL/SQL stored procedures** that perform key banking operations as part of a database exercise.

It demonstrates:
- How to use **procedures** in PL/SQL.
- How to process data with logic and conditions.
- How to work with real banking scenarios.


## Stored Procedures

###  **ProcessMonthlyInterest**

- **Purpose:**  
  Calculates and updates the balance of all savings accounts by applying a **1% monthly interest**.
- **Table Used:**  
  `SAVINGS_ACCOUNTS`

###  **UpdateEmployeeBonus**

- **Purpose:**  
  Updates the salary of employees in a given department by adding a **bonus percentage** (passed as a parameter).
- **Table Used:**  
  `EMPLOYEES`

###  **TransferFunds**

- **Purpose:**  
  Transfers a specified amount from one account to another.  
  Checks that the **source account** has enough balance before making the transfer.
- **Table Used:**  
  `ACCOUNTS`

 ###  Set up your database
  
  --Use Oracle SQL Developer or Oracle Live SQL to run scripts.

###  Create Tables & Insert Data

Run sample_tables.sql (if provided) to create:

--SAVINGS_ACCOUNTS
--EMPLOYEES
--ACCOUNTS
Add sample rows for testing.

### 4️⃣ Create Procedures

Run stored_procedures.sql to compile all 3 procedures.

###  Check Results

Use SELECT statements:
--SELECT * FROM SAVINGS_ACCOUNTS;
--SELECT * FROM EMPLOYEES;
--SELECT * FROM ACCOUNTS;

### Technologies Used
--PL/SQL
--Oracle SQL Developer or Oracle Live SQL
--Git & GitHub






