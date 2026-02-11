const questionBank = {
  SQL_quiz01: [
    {
    "type": "mcq",
    "question": "What do summary queries in SQL contain?",
    "options": [
      "One or more aggregate functions",
      "Only scalar functions",
      "Only SELECT statements",
      "JOIN clauses only"
    ],
    "answer": "One or more aggregate functions"
  },
  {
    "type": "mcq",
    "question": "Which of the following returns a single value based on a series of values in a column?",
    "options": [
      "Scalar functions",
      "Aggregate functions",
      "JOIN functions",
      "WHERE clause"
    ],
    "answer": "Aggregate functions"
  },
  {
    "type": "mcq",
    "question": "Which function counts all rows that match a specified criteria?",
    "options": [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MIN()"
    ],
    "answer": "COUNT()"
  },
  {
    "type": "mcq",
    "question": "What does the AVG() function return?",
    "options": [
      "The total sum of a numeric column",
      "The smallest value of a column",
      "The average value of a numeric column",
      "The largest value of a column"
    ],
    "answer": "The average value of a numeric column"
  },
  {
    "type": "mcq",
    "question": "How can COUNT() be used to count only unique non-null values?",
    "options": [
      "COUNT(DISTINCT column_name)",
      "COUNT(*)",
      "COUNT(column_name)",
      "COUNT(ALL column_name)"
    ],
    "answer": "COUNT(DISTINCT column_name)"
  },
  {
    "type": "mcq",
    "question": "What is the difference between COUNT(*) and COUNT(column_name)?",
    "options": [
      "COUNT(column_name) counts all rows including NULLs, COUNT(*) ignores NULLs",
      "COUNT(*) only counts distinct values",
      "COUNT(column_name) counts all rows including duplicates",
      "COUNT(*) counts all rows including NULLs, COUNT(column_name) ignores NULLs"
    ],
    "answer": "COUNT(*) counts all rows including NULLs, COUNT(column_name) ignores NULLs"
  },
  {
    "type": "mcq",
    "question": "Which function returns the smallest value of a column?",
    "options": [
      "MIN()",
      "MAX()",
      "SUM()",
      "AVG()"
    ],
    "answer": "MIN()"
  },
  {
    "type": "mcq",
    "question": "Which function returns the largest value of a column?",
    "options": [
      "MIN()",
      "SUM()",
      "MAX()",
      "AVG()"
    ],
    "answer": "MAX()"
  },
  {
    "type": "mcq",
    "question": "What is the correct order of SQL statement evaluation?",
    "options": [
      "SELECT, FROM, WHERE, GROUP BY, ORDER BY, HAVING",
      "FROM-JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY",
      "FROM, SELECT, WHERE, ORDER BY, GROUP BY, HAVING",
      "WHERE, SELECT, FROM, GROUP BY, HAVING, ORDER BY"
    ],
    "answer": "FROM-JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY"
  },
  {
    "type": "mcq",
    "question": "Why can't table aliases be used in the WHERE clause?",
    "options": [
      "Because aliases are not allowed in SQL",
      "Because WHERE only works with JOINs",
      "Because aliases can only be used in ORDER BY",
      "Because WHERE is evaluated before SELECT"
    ],
    "answer": "Because WHERE is evaluated before SELECT"
  },
  {
    "type": "mcq",
    "question": "What does the GROUP BY clause do?",
    "options": [
      "Filters individual records before aggregation",
      "Calculates the average of a column",
      "Groups rows with the same values to produce summary reports",
      "Orders the result set"
    ],
    "answer": "Groups rows with the same values to produce summary reports"
  },
  {
    "type": "mcq",
    "question": "Which clause is used to filter grouped results after aggregation?",
    "options": [
      "HAVING",
      "WHERE",
      "ORDER BY",
      "SELECT"
    ],
    "answer": "HAVING"
  },
  {
    "type": "mcq",
    "question": "Which of the following can be included in a SELECT clause when using GROUP BY?",
    "options": [
      "Aggregate functions, grouping columns, and constant expressions",
      "Only aggregate functions",
      "Only columns used for grouping",
      "Only expressions"
    ],
    "answer": "Aggregate functions, grouping columns, and constant expressions"
  },
  {
    "type": "mcq",
    "question": "What is the position of the GROUP BY clause in a SELECT statement?",
    "options": [
      "After WHERE and before ORDER BY",
      "After ORDER BY",
      "Before WHERE",
      "After SELECT only"
    ],
    "answer": "After WHERE and before ORDER BY"
  },
  {
    "type": "mcq",
    "question": "Why was the HAVING clause added to SQL?",
    "options": [
      "Because WHERE cannot be used with aggregate functions",
      "Because GROUP BY was not supported",
      "To sort the results",
      "To join multiple tables"
    ],
    "answer": "Because WHERE cannot be used with aggregate functions"
  },
  {
    "type": "mcq",
    "question": "Can WHERE and HAVING be used in the same query?",
    "options": [
      "Yes, WHERE filters individual records and HAVING filters grouped results",
      "No, only one can be used",
      "Yes, but HAVING must come before WHERE",
      "No, HAVING replaces WHERE"
    ],
    "answer": "Yes, WHERE filters individual records and HAVING filters grouped results"
  },
  {
    "type": "mcq",
    "question": "Which SQL clause limits the number of records returned?",
    "options": [
      "SELECT TOP or LIMIT or ROWNUM",
      "GROUP BY",
      "HAVING",
      "ORDER BY"
    ],
    "answer": "SELECT TOP or LIMIT or ROWNUM"
  },
  {
    "type": "mcq",
    "question": "Which database system uses LIMIT to restrict rows returned?",
    "options": [
      "MySQL",
      "Oracle",
      "SQL Server",
      "PostgreSQL"
    ],
    "answer": "MySQL"
  },
  {
    "type": "mcq",
    "question": "Which database system uses ROWNUM to limit the number of rows returned?",
    "options": [
      "Oracle",
      "MySQL",
      "SQL Server",
      "SQLite"
    ],
    "answer": "Oracle"
  },
  {
    "type": "mcq",
    "question": "What is another name for aggregate functions in SQL?",
    "options": [
      "Column functions",
      "Scalar functions",
      "Row functions",
      "Table functions"
    ],
    "answer": "Column functions"
  },
  {
    "type": "mcq",
    "question": "Which SQL function returns the total sum of a numeric column?",
    "options": [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MIN()"
    ],
    "answer": "SUM()"
  },
  {
    "type": "mcq",
    "question": "Scalar functions return what kind of value?",
    "options": [
      "A single value",
      "Multiple rows",
      "A summary of a column",
      "A grouped result"
    ],
    "answer": "A single value"
  },
  {
    "type": "mcq",
    "question": "Which of the following is an example of a scalar function?",
    "options": [
      "SUM(UnitPrice)",
      "COUNT(*)",
      "GETDATE()",
      "MAX(Salary)"
    ],
    "answer": "GETDATE()"
  },
  {
    "type": "mcq",
    "question": "What type of queries return a single row for every grouped item?",
    "options": [
      "Simple SELECT queries",
      "Grouped queries using GROUP BY",
      "Subqueries",
      "JOIN queries"
    ],
    "answer": "Grouped queries using GROUP BY"
  },
  {
    "type": "mcq",
    "question": "Which clause performs record-based filtering before aggregation?",
    "options": [
      "HAVING",
      "GROUP BY",
      "ORDER BY",
      "WHERE"
    ],
    "answer": "WHERE"
  },
  {
    "type": "mcq",
    "question": "Which SQL clause orders the result set?",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "HAVING",
      "WHERE"
    ],
    "answer": "ORDER BY"
  },
  {
    "type": "mcq",
    "question": "Which clause can follow GROUP BY to filter summarized results?",
    "options": [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "SELECT"
    ],
    "answer": "HAVING"
  },
  {
    "type": "mcq",
    "question": "What is returned when you use COUNT(*) on a table?",
    "options": [
      "Total number of unique values in a column",
      "Average value of a column",
      "Total number of rows, including rows with NULL values",
      "Maximum value of a column"
    ],
    "answer": "Total number of rows, including rows with NULL values"
  },
  {
    "type": "mcq",
    "question": "Which SQL function would you use to get the maximum salary from the Employees table?",
    "options": [
      "MIN(Salary)",
      "MAX(Salary)",
      "SUM(Salary)",
      "AVG(Salary)"
    ],
    "answer": "MAX(Salary)"
  },
  {
    "type": "mcq",
    "question": "Which SQL clause is used to group results before applying aggregate functions?",
    "options": [
      "GROUP BY",
      "WHERE",
      "HAVING",
      "ORDER BY"
    ],
    "answer": "GROUP BY"
  },
  {
    "type": "mcq",
    "question": "What will the following query return?\n\nSELECT COUNT(*) FROM Products WHERE UnitPrice IS NOT NULL;",
    "options": [
      "The number of rows where UnitPrice is not NULL",
      "The total number of rows including NULLs",
      "The average UnitPrice",
      "The sum of UnitPrice"
    ],
    "answer": "The number of rows where UnitPrice is not NULL"
  },
  {
    "type": "mcq",
    "question": "What is the result of this query?\n\nSELECT SUM(UnitPrice) FROM Products WHERE CategoryID = 1;",
    "options": [
      "Average UnitPrice for CategoryID = 1",
      "Count of rows for CategoryID = 1",
      "Total UnitPrice for CategoryID = 1",
      "Maximum UnitPrice for CategoryID = 1"
    ],
    "answer": "Total UnitPrice for CategoryID = 1"
  },
  {
    "type": "mcq",
    "question": "Which of the following queries correctly counts distinct UnitPrice values?\n\nA: SELECT COUNT(UnitPrice) FROM Products;\nB: SELECT COUNT(DISTINCT UnitPrice) FROM Products;",
    "options": [
      "A only",
      "B only",
      "Both A and B",
      "Neither A nor B"
    ],
    "answer": "B only"
  },
  {
    "type": "mcq",
    "question": "Given the query:\nSELECT CategoryID, AVG(UnitPrice) FROM Products GROUP BY CategoryID;\nWhich of the following is true?",
    "options": [
      "Returns a single average for all rows",
      "Counts rows for each CategoryID",
      "Returns the average UnitPrice for each CategoryID",
      "Filters rows with AVG(UnitPrice) > 50"
    ],
    "answer": "Returns the average UnitPrice for each CategoryID"
  },
  {
    "type": "mcq",
    "question": "What will this query return?\n\nSELECT MAX(UnitPrice) FROM Products WHERE CategoryID = 2;",
    "options": [
      "Highest UnitPrice in CategoryID = 2",
      "Lowest UnitPrice in CategoryID = 2",
      "Count of rows in CategoryID = 2",
      "Sum of UnitPrice in CategoryID = 2"
    ],
    "answer": "Highest UnitPrice in CategoryID = 2"
  },
  {
    "type": "mcq",
    "question": "Why would the following query fail?\n\nSELECT AliasName FROM Products WHERE AliasName = 'ABC';\n-- AliasName is defined in SELECT as UnitPrice * 1.2 AS AliasName",
    "options": [
      "Because the column does not exist",
      "Because aliases cannot be numeric",
      "Because WHERE is evaluated before SELECT aliases",
      "Because SELECT must follow GROUP BY"
    ],
    "answer": "Because WHERE is evaluated before SELECT aliases"
  },
  {
    "type": "mcq",
    "question": "Which query correctly filters grouped results with HAVING?\n\nA: SELECT CategoryID, SUM(UnitPrice) FROM Products HAVING SUM(UnitPrice) > 1000 GROUP BY CategoryID;\nB: SELECT CategoryID, SUM(UnitPrice) FROM Products GROUP BY CategoryID HAVING SUM(UnitPrice) > 1000;",
    "options": [
      "B only",
      "A only",
      "Both A and B",
      "Neither A nor B"
    ],
    "answer": "B only"
  },
  {
    "type": "mcq",
    "question": "What is the difference between WHERE and HAVING in SQL?",
    "options": [
      "WHERE filters after aggregation, HAVING filters before aggregation",
      "Both filter rows before aggregation",
      "Both filter after aggregation",
      "WHERE filters rows before aggregation, HAVING filters after aggregation"
    ],
    "answer": "WHERE filters rows before aggregation, HAVING filters after aggregation"
  },
  {
    "type": "mcq",
    "question": "Which columns can appear in a SELECT clause with GROUP BY?\n\nSELECT CategoryID, COUNT(*) FROM Products GROUP BY CategoryID;",
    "options": [
      "Any columns",
      "Only aggregate functions",
      "Only columns not in GROUP BY",
      "Columns in GROUP BY and aggregate functions",
    ],
    "answer": "Columns in GROUP BY and aggregate functions"
  },
  {
    "type": "mcq",
    "question": "What will the query return?\n\nSELECT TOP 3 * FROM Products ORDER BY UnitPrice DESC;",
    "options": [
      "The 3 products with the highest UnitPrice",
      "The 3 products with the lowest UnitPrice",
      "All products",
      "The total sum of UnitPrice"
    ],
    "answer": "The 3 products with the highest UnitPrice"
  },
  {
    "type": "mcq",
    "question": "How does COUNT(column_name) behave with NULL values?",
    "options": [
      "It counts all rows including NULLs",
      "It ignores rows where column_name is NULL",
      "It returns NULL if any row is NULL",
      "It counts only distinct values"
    ],
    "answer": "It ignores rows where column_name is NULL"
  },
  {
    "type": "mcq",
    "question": "Which SQL function calculates the average value of a column?",
    "options": [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MIN()"
    ],
    "answer": "AVG()"
  },
  {
    "type": "mcq",
    "question": "What does the query return?\n\nSELECT CategoryID, MIN(UnitPrice) FROM Products GROUP BY CategoryID;",
    "options": [
      "Maximum UnitPrice per CategoryID",
      "Average UnitPrice per CategoryID",
      "Minimum UnitPrice per CategoryID",
      "Sum of UnitPrice per CategoryID"
    ],
    "answer": "Minimum UnitPrice per CategoryID"
  },
  {
    "type": "mcq",
    "question": "Which clause is evaluated first in a SELECT statement?",
    "options": [
      "WHERE",
      "GROUP BY",
      "FROM",
      "SELECT"
    ],
    "answer": "FROM"
  },
  {
    "type": "mcq",
    "question": "Which of the following queries is valid to get total sales per category but only for categories with total > 1000?\n\nA: SELECT CategoryID, SUM(UnitPrice) FROM Products GROUP BY CategoryID HAVING SUM(UnitPrice) > 1000;\nB: SELECT CategoryID, SUM(UnitPrice) FROM Products HAVING SUM(UnitPrice) > 1000 GROUP BY CategoryID;",
    "options": [
      "A only",
      "B only",
      "Both A and B",
      "Neither"
    ],
    "answer": "A only"
  },
  {
    "type": "mcq",
    "question": "If you want to count all rows in the Products table including NULLs, which query should you use?",
    "options": [
      "SELECT COUNT(UnitPrice) FROM Products;",
      "SELECT COUNT(DISTINCT UnitPrice) FROM Products;",
      "SELECT SUM(UnitPrice) FROM Products;",
      "SELECT COUNT(*) FROM Products;"
    ],
    "answer": "SELECT COUNT(*) FROM Products;"
  },
  {
    "type": "mcq",
    "question": "Which SQL statement limits rows in Oracle?",
    "options": [
      "TOP",
      "LIMIT",
      "ROWNUM",
      "FETCH FIRST"
    ],
    "answer": "ROWNUM"
  },
  {
    "type": "mcq",
    "question": "Which SQL statement limits rows in MySQL?",
    "options": [
      "LIMIT",
      "TOP",
      "ROWNUM",
      "FETCH FIRST"
    ],
    "answer": "LIMIT"
  },
  {
    "type": "mcq",
    "question": "Given the query:\nSELECT CategoryID, SUM(UnitPrice) AS Total FROM Products GROUP BY CategoryID ORDER BY Total DESC;\nWhat does ORDER BY Total DESC do?",
    "options": [
      "Sorts by CategoryID ascending",
      "Sorts the result from highest to lowest total per CategoryID",
      "Filters rows with Total > 1000",
      "Groups rows by Total"
    ],
    "answer": "Sorts the result from highest to lowest total per CategoryID"
  },
  {
    "type": "mcq",
    "question": "What type of function is ROUND() considered in SQL?",
    "options": [
      "Aggregate function",
      "Column function",
      "Scalar function",
      "Grouping function"
    ],
    "answer": "Scalar function"
  },
  {
    "type": "mcq",
    "question": "Which SQL function returns the number of rows that match a condition, ignoring NULLs in a specific column?",
    "options": [
      "COUNT(column_name)",
      "COUNT(*)",
      "SUM(column_name)",
      "AVG(column_name)"
    ],
    "answer": "COUNT(column_name)"
  },
  {
    "type": "mcq",
    "question": "Which query correctly returns the number of distinct UnitPrice values?",
    "options": [
      "SELECT COUNT(UnitPrice) FROM Products;",
      "SELECT SUM(UnitPrice) FROM Products;",
      "SELECT AVG(UnitPrice) FROM Products;",
      "SELECT COUNT(DISTINCT UnitPrice) FROM Products;"
    ],
    "answer": "SELECT COUNT(DISTINCT UnitPrice) FROM Products;"
  },
  {
    "type": "mcq",
    "question": "If you want to filter rows where SUM(UnitPrice) > 5000 after grouping by CategoryID, which clause should you use?",
    "options": [
      "WHERE",
      "ORDER BY",
      "HAVING",
      "GROUP BY"
    ],
    "answer": "HAVING"
  },
  {
    "type": "mcq",
    "question": "Which function returns the smallest numeric value from a column?",
    "options": [
      "MIN()",
      "MAX()",
      "AVG()",
      "SUM()"
    ],
    "answer": "MIN()"
  },
  {
    "type": "mcq",
    "question": "Which function returns the largest numeric value from a column?",
    "options": [
      "MAX()",
      "MIN()",
      "COUNT()",
      "SUM()"
    ],
    "answer": "MAX()"
  },
  {
    "type": "mcq",
    "question": "What happens if you use WHERE with an aggregate function without GROUP BY?",
    "options": [
      "It will correctly filter aggregated results",
      "It will count rows",
      "It will sum the values automatically",
      "It will fail or give incorrect results"
    ],
    "answer": "It will fail or give incorrect results"
  },
  {
    "type": "mcq",
    "question": "Which of the following are considered aggregate functions in SQL?",
    "options": [
      "COUNT, SUM, AVG, MIN, MAX",
      "ROUND, GETDATE, LEN",
      "JOIN, UNION, INTERSECT",
      "WHERE, HAVING, ORDER BY"
    ],
    "answer": "COUNT, SUM, AVG, MIN, MAX"
  },
  {
    "type": "mcq",
    "question": "Which SQL statements are part of Data Definition Language (DDL)?",
    "options": [
      "CREATE, ALTER, DROP",
      "SELECT, INSERT, UPDATE",
      "COMMIT, ROLLBACK",
      "GRANT, REVOKE"
    ],
    "answer": "CREATE, ALTER, DROP"
  },
  {
    "type": "mcq",
    "question": "What files are created when you run CREATE DATABASE MyDatabase?",
    "options": [
      "MyDatabase.txt and MyDatabase_log.txt",
      "MyDatabase.csv and MyDatabase_log.csv",
      "MyDatabase.mdf and MyDatabase_log.ldf",
      "Only MyDatabase.mdf"
    ],
    "answer": "MyDatabase.mdf and MyDatabase_log.ldf"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a valid first character for a SQL identifier?",
    "options": [
      "A number",
      "A letter",
      "@ sign",
      "$ sign"
    ],
    "answer": "A letter"
  },
  {
    "type": "mcq",
    "question": "Which of the following characters are allowed in SQL identifiers after the first character?",
    "options": [
      "Only letters",
      "Letters and spaces",
      "Letters and punctuation",
      "Letters, numbers, @, $, #, _"
    ],
    "answer": "Letters, numbers, @, $, #, _"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT allowed in a SQL identifier?",
    "options": [
      "Spaces",
      "Underscore",
      "#",
      "$"
    ],
    "answer": "Spaces"
  },
  {
    "type": "mcq",
    "question": "Which column attribute automatically generates incremental numbers?",
    "options": [
      "DEFAULT",
      "PRIMARY KEY",
      "IDENTITY",
      "UNIQUE"
    ],
    "answer": "IDENTITY"
  },
  {
    "type": "mcq",
    "question": "Which column attribute prevents NULL values?",
    "options": [
      "UNIQUE",
      "DEFAULT",
      "NOT NULL",
      "CHECK"
    ],
    "answer": "NOT NULL"
  },
  {
    "type": "mcq",
    "question": "What does the DEFAULT column attribute do?",
    "options": [
      "Enforces uniqueness",
      "Prevents NULL values",
      "Creates a primary key",
      "Specifies a value automatically assigned when no value is provided"
    ],
    "answer": "Specifies a value automatically assigned when no value is provided"
  },
  {
    "type": "mcq",
    "question": "Which column-level constraint ensures values in the column are unique?",
    "options": [
      "UNIQUE",
      "PRIMARY KEY",
      "CHECK",
      "FOREIGN KEY"
    ],
    "answer": "UNIQUE"
  },
  {
    "type": "mcq",
    "question": "Which column-level constraint enforces referential integrity?",
    "options": [
      "FOREIGN KEY REFERENCES",
      "PRIMARY KEY",
      "UNIQUE",
      "CHECK"
    ],
    "answer": "FOREIGN KEY REFERENCES"
  },
  {
    "type": "mcq",
    "question": "Which table-level constraint can enforce uniqueness across multiple columns?",
    "options": [
      "NOT NULL",
      "CHECK",
      "UNIQUE",
      "DEFAULT"
    ],
    "answer": "UNIQUE"
  },
  {
    "type": "mcq",
    "question": "Which table-level constraint can enforce that values meet specific conditions across multiple columns?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "CHECK",
      "UNIQUE"
    ],
    "answer": "CHECK"
  },
  {
    "type": "mcq",
    "question": "What is a foreign key used for?",
    "options": [
      "Enforcing a link between two tables",
      "Automatically generating row numbers",
      "Preventing NULL values in a column",
      "Specifying default values"
    ],
    "answer": "Enforcing a link between two tables"
  },
  {
    "type": "mcq",
    "question": "Which of the following must a foreign key reference?",
    "options": [
      "Any column in another table",
      "A unique constraint in the same table",
      "A column with DEFAULT value",
      "An existing primary key in the parent table",
    ],
    "answer": "An existing primary key in the parent table"
  },
  {
    "type": "mcq",
    "question": "Which concept ensures table relationships are consistent in a relational database?",
    "options": [
      "Referential integrity",
      "Normalization",
      "Data redundancy",
      "Transaction isolation"
    ],
    "answer": "Referential integrity"
  },
  {
    "type": "mcq",
    "question": "How do you add a new column to an existing table?",
    "options": [
      "CREATE TABLE table_name ADD column_name datatype;",
      "ALTER TABLE table_name ADD column_name datatype;",
      "UPDATE TABLE table_name ADD column_name datatype;",
      "INSERT INTO table_name ADD column_name datatype;"
    ],
    "answer": "ALTER TABLE table_name ADD column_name datatype;"
  },
  {
    "type": "mcq",
    "question": "How do you remove a column from a table?",
    "options": [
      "DROP TABLE table_name column_name;",
      "DELETE COLUMN column_name FROM table_name;",
      "ALTER TABLE table_name DROP COLUMN column_name;",
      "REMOVE COLUMN column_name FROM table_name;"
    ],
    "answer": "ALTER TABLE table_name DROP COLUMN column_name;"
  },
  {
    "type": "mcq",
    "question": "Which statement adds a NOT NULL constraint on a new column named Price?",
    "options": [
      "ALTER TABLE Products ADD Price MONEY NOT NULL;",
      "ALTER TABLE Products ADD Price MONEY;",
      "ALTER TABLE Products MODIFY Price MONEY NOT NULL;",
      "CREATE COLUMN Price MONEY NOT NULL;"
    ],
    "answer": "ALTER TABLE Products ADD Price MONEY NOT NULL;"
  },
  {
    "type": "mcq",
    "question": "Which constraint ensures each row in a table has a unique value for a column?",
    "options": [
      "FOREIGN KEY",
      "CHECK",
      "PRIMARY KEY",
      "DEFAULT"
    ],
    "answer": "PRIMARY KEY"
  },
  {
    "type": "mcq",
    "question": "Which constraint allows a column to accept only certain values?",
    "options": [
      "CHECK",
      "NOT NULL",
      "UNIQUE",
      "FOREIGN KEY"
    ],
    "answer": "CHECK"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about PRIMARY KEY constraints?",
    "options": [
      "It allows duplicate values",
      "Each row must be unique and not NULL",
      "It allows NULL values",
      "It is only used for foreign keys"
    ],
    "answer": "Each row must be unique and not NULL"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about UNIQUE constraints?",
    "options": [
      "Automatically creates an index and primary key",
      "Prevents NULL values always",
      "Ensures values in the column or columns are unique",
      "Enforces referential integrity"
    ],
    "answer": "Ensures values in the column or columns are unique"
  },
  {
    "type": "mcq",
    "question": "Which of the following is an example of a valid table-level FOREIGN KEY constraint?",
    "options": [
      "PRIMARY KEY (CustomerID)",
      "CHECK (CustomerID > 0)",
      "UNIQUE (CustomerID)",
      "FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)"
    ],
    "answer": "FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)"
  },
  {
    "type": "mcq",
    "question": "Which statement would modify an existing column in a table?",
    "options": [
      "ALTER TABLE table_name ALTER COLUMN column_name datatype;",
      "ALTER TABLE table_name ADD COLUMN column_name datatype;",
      "UPDATE TABLE table_name MODIFY column_name datatype;",
      "CREATE TABLE table_name MODIFY COLUMN column_name datatype;"
    ],
    "answer": "ALTER TABLE table_name ALTER COLUMN column_name datatype;"
  },
  {
    "type": "mcq",
    "question": "What is the effect of a FOREIGN KEY constraint?",
    "options": [
      "Prevents insertion of invalid references to a parent table",
      "Automatically fills NULL values",
      "Calculates sums and averages",
      "Prevents duplicate primary keys"
    ],
    "answer": "Prevents insertion of invalid references to a parent table"
  },
  {
    "type": "mcq",
    "question": "Which constraint is used to prevent NULL values in a column?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "NOT NULL",
      "CHECK"
    ],
    "answer": "NOT NULL"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about the ALTER TABLE statement?",
    "options": [
      "It can only add columns",
      "It can only drop tables",
      "It can only rename tables",
      "It can add, drop, or modify columns or constraints"
    ],
    "answer": "It can add, drop, or modify columns or constraints"
  },
  {
    "type": "mcq",
    "question": "Which constraint type is necessary to enforce relationships between two tables?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    "answer": "FOREIGN KEY"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a column-level constraint?",
    "options": [
      "DROP COLUMN",
      "NOT NULL",
      "UNIQUE",
      "CHECK"
    ],
    "answer": "DROP COLUMN"
  },
  {
    "type": "mcq",
    "question": "Which of the following constraints can be applied both at the column and table level?",
    "options": [
      "NOT NULL only",
      "DEFAULT only",
      "PRIMARY KEY, UNIQUE, CHECK, FOREIGN KEY",
      "IDENTITY only"
    ],
    "answer": "PRIMARY KEY, UNIQUE, CHECK, FOREIGN KEY"
  },
  {
    "type": "tf",
    "question": "The COUNT(column_name) function in SQL counts all rows, including those with NULL values in the specified column.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "The HAVING clause is used to filter results after aggregation in a GROUP BY query.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "A PRIMARY KEY constraint allows NULL values in the column.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "The ALTER TABLE statement can be used to add or drop columns or constraints in an existing table.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "In SQL, a FOREIGN KEY constraint ensures that every value in the child table exists in the parent table’s primary key.",
    "answer": true
  },
  {
    "type": "fib",
    "question": "Fill in the missing SQL keyword to group rows by a column:\nSELECT CategoryID, SUM(UnitPrice) FROM Products ___ CategoryID;",
    "answer": "GROUP BY"
  },
  {
    "type": "fib",
    "question": "Fill in the correct SQL function to calculate the average value of a numeric column:\nSELECT ___(UnitPrice) FROM Products;",
    "answer": "AVG"
  },
  {
    "type": "fib",
    "question": "Fill in the missing column-level constraint to prevent NULL values:\nALTER TABLE Products ADD Price MONEY ___;",
    "answer": "NOT NULL"
  },
  {
    "type": "fib",
    "question": "Fill in the SQL clause used to filter aggregated results after GROUP BY:\nSELECT CategoryID, SUM(UnitPrice) FROM Products GROUP BY CategoryID ___ SUM(UnitPrice) > 1000;",
    "answer": "HAVING"
  },
  {
    "type": "fib",
    "question": "Fill in the SQL statement to remove a column named Price from the Products table:\nALTER TABLE Products ___ COLUMN Price;",
    "answer": "DROP"
  },  
   
  {
    "type": "short",
    "question": "Name one purpose of aggregate functions in SQL.",
    "answer": [
      "summarize data",
      "calculate totals",
      "compute averages",
      "find minimum or maximum values",
      "produce summary values"
    ]
  },
  {
    "type": "short",
    "question": "List one reason for using the GROUP BY clause.",
    "answer": [
      "group similar rows together",
      "create summary reports",
      "aggregate data by column",
      "organize data for calculations",
      "arrange identical values into groups"
    ]
  },
  {
    "type": "short",
    "question": "Give one difference between WHERE and HAVING clauses.",
    "answer": [
      "WHERE filters individual rows",
      "HAVING filters grouped results",
      "WHERE applies before aggregation",
      "HAVING applies after aggregation",
      "WHERE cannot be used with aggregate functions"
    ]
  },
  {
    "type": "short",
    "question": "Name one benefit of using primary key constraints.",
    "answer": [
      "ensure uniqueness",
      "prevent NULL values",
      "identify rows uniquely",
      "maintain data integrity",
      "enforce table-level uniqueness"
    ]
  },
  {
    "type": "short",
    "question": "Give one purpose of foreign key constraints.",
    "answer": [
      "enforce referential integrity",
      "link two tables",
      "ensure valid references",
      "maintain consistent relationships",
      "prevent invalid data in child table"
    ]
  },
  {
    "type": "short",
    "question": "List one type of column-level constraint.",
    "answer": [
      "NOT NULL",
      "UNIQUE",
      "PRIMARY KEY",
      "CHECK",
      "FOREIGN KEY"
    ]
  },
  {
    "type": "short",
    "question": "Name one type of table-level constraint.",
    "answer": [
      "PRIMARY KEY",
      "UNIQUE",
      "CHECK",
      "FOREIGN KEY",
      "composite key constraint"
    ]
  },
  {
    "type": "short",
    "question": "Give one rule for naming identifiers in SQL.",
    "answer": [
      "first character must be a letter",
      "cannot use spaces",
      "cannot use reserved words",
      "subsequent characters can include letters, numbers, @, $, #, _",
      "must start with a valid character"
    ]
  },
  {
    "type": "short",
    "question": "Name one operation that can be done with the ALTER TABLE statement.",
    "answer": [
      "add a column",
      "drop a column",
      "modify a column",
      "add a constraint",
      "drop a constraint"
    ]
  },
  {
    "type": "short",
    "question": "List one benefit of using the DISTINCT keyword in SQL.",
    "answer": [
      "return unique values",
      "eliminate duplicates",
      "avoid counting repeated data",
      "summarize distinct entries",
      "filter non-redundant data"
    ]
  },
  {
    "type": "short",
    "question": "Name one way to create a new database in SQL.",
    "answer": [
      "CREATE DATABASE [DB name]",
      "CREATE DATABASE 'DB name'",
      "CREATE DATABASE \"DB name\"",
      "CREATE DATABASE NewDatabase"
    ]
  },
  {
    "type": "short",
    "question": "Which database should you use before dropping a database?",
    "answer": [
      "master",
      "system",
      "current database",
      "target database"
    ]
  },
  {
    "type": "short",
    "question": "What SQL statement is used to remove a database?",
    "answer": [
      "DROP DATABASE",
      "DELETE DATABASE",
      "REMOVE DATABASE",
      "ALTER DATABASE"
    ]
  },
  {
    "type": "short",
    "question": "Which SQL statement allows duplicating a table into a new table?",
    "answer": [
      "SELECT INTO",
      "INSERT INTO",
      "CREATE TABLE AS",
      "COPY TABLE"
    ]
  },
  {
    "type": "short",
    "question": "What is the purpose of the USE statement in SQL?",
    "answer": [
      "Specify the database to execute commands in",
      "Create a new database",
      "Delete a database",
      "Change server instance"
    ]
  },
  {
    "type": "short",
    "question": "What does SELECT * return from a table?",
    "answer": [
      "All columns and all rows",
      "Only column names",
      "Only distinct values",
      "Row count"
    ]
  },
  {
    "type": "short",
    "question": "How does SELECT DISTINCT differ from SELECT *?",
    "answer": [
      "Returns only unique values",
      "Returns all rows",
      "Returns row counts",
      "Filters NULL values"
    ]
  },
  {
    "type": "short",
    "question": "Name one use of the CONCAT function in SQL.",
    "answer": [
      "Combine two or more string columns",
      "Calculate numeric sums",
      "Count distinct values",
      "Sort data"
    ]
  },
  {
    "type": "short",
    "question": "Which clause is used to sort results in ascending or descending order?",
    "answer": [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "HAVING"
    ]
  },
  {
    "type": "short",
    "question": "What happens when you use WHERE 1 = 0?",
    "answer": [
      "No rows are returned",
      "All rows are returned",
      "Only NULL rows are returned",
      "Error occurs"
    ]
  },
  {
    "type": "short",
    "question": "What happens when you use WHERE 1 > 0?",
    "answer": [
      "All rows are returned",
      "No rows are returned",
      "Only rows with NULLs are returned",
      "Error occurs"
    ]
  },
  {
    "type": "short",
    "question": "Which operator can be used to filter rows not equal to a value?",
    "answer": [
      "<>",
      "!=",
      "=",
      "NOT"
    ]
  },
  {
    "type": "short",
    "question": "Which SQL operator allows filtering rows between two values?",
    "answer": [
      "BETWEEN",
      "IN",
      "LIKE",
      "MATCH"
    ]
  },
  {
    "type": "short",
    "question": "If you write SELECT COUNT(*) FROM table, what does it return?",
    "answer": [
      "Total number of rows",
      "Number of distinct values",
      "Sum of numeric column",
      "Maximum value"
    ]
  },
  {
    "type": "short",
    "question": "If you write SELECT COUNT(column_name) FROM table, which rows are counted?",
    "answer": [
      "Rows where column_name is not NULL",
      "All rows",
      "Only duplicate rows",
      "Only NULL rows"
    ]
  },
  {
    "type": "short",
    "question": "Which SQL statement counts distinct values in a column?",
    "answer": [
      "COUNT(DISTINCT column_name)",
      "COUNT(column_name)",
      "COUNT(*)",
      "SUM(column_name)"
    ]
  },
  {
    "type": "short",
    "question": "What is the effect of using ORDER BY column ASC, column DESC?",
    "answer": [
      "Sorts first column ascending, second column descending",
      "Sorts both columns ascending",
      "Sorts both columns descending",
      "Random order"
    ]
  },
  {
    "type": "short",
    "question": "What is one reason to use SELECT INTO with another database?",
    "answer": [
      "Copy a table to a different database",
      "Delete a table",
      "Filter rows",
      "Sort columns"
    ]
  },
  {
    "type": "short",
    "question": "Which keyword specifies the target database when copying a table?",
    "answer": [
      "database_name.dbo.table_name",
      "USE database_name",
      "CREATE DATABASE",
      "DROP DATABASE"
    ]
  },
  {
    "type": "short",
    "question": "What does the WHERE clause do in a SELECT statement?",
    "answer": [
      "Filters rows based on a condition",
      "Sorts the rows",
      "Counts rows",
      "Groups rows"
    ]
  }
  ],
  OOP_quiz01:[
    {
    "type": "mcq",
    "question": "Which of the following best describes Object-Oriented Programming?",
    "options": [
      "A programming style that focuses on objects and their interactions",
      "A style of programming that only uses functions",
      "A method for writing assembly code",
      "A declarative programming paradigm"
    ],
    "answer": "A programming style that focuses on objects and their interactions"
  },
  {
    "type": "mcq",
    "question": "In OOP, what combines state and behavior inside an entity?",
    "options": [
      "Class",
      "Object",
      "Procedure",
      "Variable"
    ],
    "answer": "Object"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a main principle of OOP?",
    "options": [
      "Encapsulation",
      "Polymorphism",
      "Recursion",
      "Inheritance"
    ],
    "answer": "Recursion"
  },
  {
    "type": "mcq",
    "question": "Encapsulation in OOP refers to:",
    "options": [
      "Binding data and methods together and restricting access to implementation details",
      "Using only global variables",
      "Creating multiple programs simultaneously",
      "Writing code without functions"
    ],
    "answer": "Binding data and methods together and restricting access to implementation details"
  },
  {
    "type": "mcq",
    "question": "Which programming paradigm directly controls execution flow and state changes?",
    "options": [
      "Declarative",
      "Imperative",
      "Functional",
      "Markup"
    ],
    "answer": "Imperative"
  },
  {
    "type": "mcq",
    "question": "Class-based inheritance is found in which of the following languages?",
    "options": [
      "JavaScript",
      "Java",
      "Lua",
      "Prolog"
    ],
    "answer": "Java"
  },
  {
    "type": "mcq",
    "question": "Prototype-based programming avoids:",
    "options": [
      "Using functions",
      "Using classes",
      "Mutable state",
      "Recursion"
    ],
    "answer": "Using classes"
  },
  {
    "type": "mcq",
    "question": "Functional programming emphasizes:",
    "options": [
      "Updating state step by step",
      "Evaluating mathematical functions and avoiding mutable state",
      "Defining objects with private fields",
      "Writing assembly instructions"
    ],
    "answer": "Evaluating mathematical functions and avoiding mutable state"
  },
  {
    "type": "mcq",
    "question": "Which of these is a declarative language?",
    "options": [
      "Haskell",
      "C++",
      "C#",
      "Java"
    ],
    "answer": "Haskell"
  },
  {
    "type": "mcq",
    "question": "Which statement is true about OOP objects?",
    "options": [
      "They only contain data",
      "They encapsulate both data and behavior",
      "They cannot interact with other objects",
      "They are always global variables"
    ],
    "answer": "They encapsulate both data and behavior"
  },
  {
    "type": "mcq",
    "question": "One advantage of using OOP is:",
    "options": [
      "Code is harder to maintain",
      "Classes can be reused across programs",
      "Programs become purely functional",
      "State and behavior must always be global"
    ],
    "answer": "Classes can be reused across programs"
  },
  {
    "type": "mcq",
    "question": "Object-Oriented Analysis and Design helps developers by:",
    "options": [
      "Ignoring problem-domain modeling",
      "Mapping problem-domain objects to programming objects",
      "Eliminating the need for classes",
      "Making code purely declarative"
    ],
    "answer": "Mapping problem-domain objects to programming objects"
  },
  {
    "type": "mcq",
    "question": "Which OOP principle allows objects to take many forms depending on context?",
    "options": [
      "Encapsulation",
      "Polymorphism",
      "Abstraction",
      "Procedural Programming"
    ],
    "answer": "Polymorphism"
  },
  {
    "type": "mcq",
    "question": "Abstraction in OOP refers to:",
    "options": [
      "Exposing only relevant details and hiding implementation",
      "Writing all code in one function",
      "Avoiding the use of classes",
      "Using only global variables"
    ],
    "answer": "Exposing only relevant details and hiding implementation"
  },
  {
    "type": "mcq",
    "question": "Procedural programming organizes code into:",
    "options": [
      "Objects",
      "Procedures that call each other",
      "Mathematical expressions",
      "Global variables only"
    ],
    "answer": "Procedures that call each other"
  },
  {
    "type": "mcq",
    "question": "Which language uses prototype-based inheritance?",
    "options": [
      "C++",
      "JavaScript",
      "Java",
      "C#"
    ],
    "answer": "JavaScript"
  },
  {
    "type": "mcq",
    "question": "SQL is considered a:",
    "options": [
      "Imperative language",
      "Declarative language",
      "Object-Oriented language",
      "Procedural language"
    ],
    "answer": "Declarative language"
  },
  {
    "type": "mcq",
    "question": "One benefit of encapsulation is:",
    "options": [
      "Internal implementation details are hidden",
      "Objects cannot have behavior",
      "All data must be public",
      "Code cannot be reused"
    ],
    "answer": "Internal implementation details are hidden"
  },
  {
    "type": "mcq",
    "question": "Object-oriented programming helps maintain code because:",
    "options": [
      "Developers only need to focus on public interfaces",
      "All variables are global",
      "It eliminates the need for design",
      "It prevents code from being modular"
    ],
    "answer": "Developers only need to focus on public interfaces"
  },
  {
    "type": "mcq",
    "question": "Which of the following statements is true about declarative programming?",
    "options": [
      "It explicitly controls state changes",
      "It is the same as procedural programming",
      "It avoids using any functions",
      "It specifies what result is desired, not how to compute it"
    ],
    "answer": "It specifies what result is desired, not how to compute it"
  },
  {
    "type": "mcq",
    "question": "Which of the following best describes the purpose of encapsulation in OOP?",
    "options": [
      "To allow multiple inheritance in all languages",
      "To separate code into functions only",
      "To combine state and behavior and hide internal implementation",
      "To make all data globally accessible"
    ],
    "answer": "To combine state and behavior and hide internal implementation"
  },
  {
    "type": "mcq",
    "question": "In class-based OOP, inheritance is achieved by:",
    "options": [
      "Cloning objects directly",
      "Writing only functions",
      "Defining classes that inherit from other classes",
      "Using global variables for all objects"
    ],
    "answer": "Defining classes that inherit from other classes"
  },
  {
    "type": "mcq",
    "question": "Which statement about polymorphism is correct?",
    "options": [
      "All classes must be abstract",
      "Objects can be treated as instances of their parent class",
      "State cannot be encapsulated in objects",
      "It is only used in functional programming"
    ],
    "answer": "Objects can be treated as instances of their parent class"
  },
  {
    "type": "mcq",
    "question": "Functional programming primarily avoids:",
    "options": [
      "Mutable state",
      "Functions",
      "Objects",
      "Encapsulation"
    ],
    "answer": "Mutable state"
  },
  {
    "type": "mcq",
    "question": "Which language uses prototype-based inheritance instead of classes?",
    "options": [
      "Lua",
      "Java",
      "C#",
      "C++"
    ],
    "answer": "Lua"
  },
  {
    "type": "mcq",
    "question": "In OOP, an object is best described as:",
    "options": [
      "A global variable",
      "A function only",
      "A declarative expression",
      "An entity combining state and behavior",
    ],
    "answer": "An entity combining state and behavior"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a declarative programming language?",
    "options": [
      "Prolog",
      "C++",
      "Java",
      "C#"
    ],
    "answer": "Prolog"
  },
  {
    "type": "mcq",
    "question": "Object-Oriented Analysis and Design helps developers by:",
    "options": [
      "Eliminating classes",
      "Forcing procedural code",
      "Mapping problem-domain objects to programming objects",
      "Removing encapsulation"
    ],
    "answer": "Mapping problem-domain objects to programming objects"
  },
  {
    "type": "mcq",
    "question": "Which of the following best explains abstraction in OOP?",
    "options": [
      "Hiding implementation details and showing only relevant information",
      "Making all variables public",
      "Writing code only as procedures",
      "Using prototype cloning"
    ],
    "answer": "Hiding implementation details and showing only relevant information"
  },
  {
    "type": "mcq",
    "question": "Why does OOP make code easier to maintain?",
    "options": [
      "It removes all functions",
      "All data must be mutable",
      "Developers focus on public interfaces rather than internal details",
      "It forces global state management"
    ],
    "answer": "Developers focus on public interfaces rather than internal details"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a typical OOP principle?",
    "options": [
      "Recursion",
      "Encapsulation",
      "Polymorphism",
      "Inheritance"
    ],
    "answer": "Recursion"
  },
  {
    "type": "mcq",
    "question": "Procedural programming organizes code into:",
    "options": [
      "Objects with encapsulated behavior",
      "Immutable functions",
      "Procedures that call each other",
      "Declarative expressions only"
    ],
    "answer": "Procedures that call each other"
  },
  {
    "type": "mcq",
    "question": "Which of these is true about class-based OOP languages?",
    "options": [
      "Inheritance is defined between classes, not individual objects",
      "All objects are cloned for inheritance",
      "There is no encapsulation",
      "They are purely declarative"
    ],
    "answer": "Inheritance is defined between classes, not individual objects"
  },
  {
    "type": "mcq",
    "question": "Which is a key feature of prototype-based OOP?",
    "options": [
      "All code must be functional",
      "State cannot be encapsulated",
      "Procedures are avoided",
      "Inheritance is achieved by cloning instances"
    ],
    "answer": "Inheritance is achieved by cloning instances"
  },
  {
    "type": "mcq",
    "question": "Which statement is correct about imperative programming?",
    "options": [
      "It explicitly controls execution flow and state changes",
      "It describes only the desired result without specifying how",
      "It is purely declarative",
      "It avoids mutable state entirely"
    ],
    "answer": "It explicitly controls execution flow and state changes"
  },
  {
    "type": "mcq",
    "question": "Why is OOP helpful for reusability?",
    "options": [
      "All data must be global",
      "Procedures cannot call each other",
      "Classes can be used across different programs",
      "Objects cannot interact"
    ],
    "answer": "Classes can be used across different programs"
  },
  {
    "type": "mcq",
    "question": "Which of the following languages supports functional programming?",
    "options": [
      "Haskell",
      "C++",
      "Java",
      "C#"
    ],
    "answer": "Haskell"
  },
  {
    "type": "mcq",
    "question": "Encapsulation allows programmers to:",
    "options": [
      "Make all methods static",
      "Use global variables instead of objects",
      "Hide implementation details and expose only a public interface",
      "Write only declarative code"
    ],
    "answer": "Hide implementation details and expose only a public interface"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a major benefit of using OOP?",
    "options": [
      "Code is easier to maintain and understand",
      "All variables must be immutable",
      "Code cannot be reused",
      "Objects cannot interact"
    ],
    "answer": "Code is easier to maintain and understand"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a C# reference type?",
    "options": [
      "struct",
      "class",
      "enum",
      "record struct"
    ],
    "answer": "class"
  },
  {
    "type": "mcq",
    "question": "Which C# type is a value type?",
    "options": [
      "interface",
      "struct",
      "record",
      "class"
    ],
    "answer": "struct"
  },
  {
    "type": "mcq",
    "question": "A C# enum is considered a:",
    "options": [
      "value type",
      "reference type",
      "record type",
      "interface type"
    ],
    "answer": "value type"
  },
  {
    "type": "mcq",
    "question": "Which C# type is a reference type designed for immutable data by default?",
    "options": [
      "record struct",
      "record",
      "struct",
      "enum"
    ],
    "answer": "record"
  },
  {
    "type": "mcq",
    "question": "A C# record struct is classified as:",
    "options": [
      "value type",
      "reference type",
      "interface type",
      "enum type"
    ],
    "answer": "value type"
  },
  {
    "type": "mcq",
    "question": "In C#, a class defines both:",
    "options": [
      "Only methods",
      "Data members and methods",
      "Only data members",
      "Interfaces only"
    ],
    "answer": "Data members and methods"
  },
  {
    "type": "mcq",
    "question": "UML class diagrams do NOT show:",
    "options": [
      "Class name",
      "Member variables and their types",
      "Method signatures",
      "Implementation details of methods"
    ],
    "answer": "Implementation details of methods"
  },
  {
    "type": "mcq",
    "question": "Abstraction in OOP is used to:",
    "options": [
      "Expose all internal variables",
      "Hide unnecessary details and focus on relevant attributes",
      "Force multiple inheritance",
      "Directly manipulate state in other objects"
    ],
    "answer": "Hide unnecessary details and focus on relevant attributes"
  },
  {
    "type": "mcq",
    "question": "Polymorphism allows objects to:",
    "options": [
      "Store only state, no behavior",
      "Behave differently based on the object calling it",
      "Prevent method overriding",
      "Force single inheritance only"
    ],
    "answer": "Behave differently based on the object calling it"
  },
  {
    "type": "mcq",
    "question": "Inheritance in C# allows:",
    "options": [
      "Structs to inherit from classes",
      "Code reuse through subtyping",
      "Interfaces to contain state",
      "Multiple class inheritance"
    ],
    "answer": "Code reuse through subtyping"
  },
  {
    "type": "mcq",
    "question": "Which C# type cannot inherit from a class?",
    "options": [
      "struct",
      "class",
      "record",
      "interface"
    ],
    "answer": "struct"
  },
  {
    "type": "mcq",
    "question": "Encapsulation in OOP:",
    "options": [
      "Keeps implementation private and exposes a public API",
      "Requires all methods to be static",
      "Forces global access to data",
      "Eliminates the need for interfaces"
    ],
    "answer": "Keeps implementation private and exposes a public API"
  },
  {
    "type": "mcq",
    "question": "Cohesion in software design refers to:",
    "options": [
      "How closely elements within a single object belong together",
      "How many objects interact with each other",
      "How many classes inherit from one base class",
      "Program execution speed"
    ],
    "answer": "How closely elements within a single object belong together"
  },
  {
    "type": "mcq",
    "question": "Coupling in software design refers to:",
    "options": [
      "The degree of interdependence between software objects",
      "How many methods a class has",
      "How fast the program executes",
      "How many variables in a class"
    ],
    "answer": "The degree of interdependence between software objects"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about C# interfaces?",
    "options": [
      "They define public operations but cannot contain instance state",
      "They store instance variables",
      "They are value types",
      "They can inherit from multiple classes"
    ],
    "answer": "They define public operations but cannot contain instance state"
  },
  {
    "type": "mcq",
    "question": "Interfaces in C# may contain:",
    "options": [
      "Constructors with state",
      "Static fields and default implementations of methods",
      "Instance fields",
      "Struct members"
    ],
    "answer": "Static fields and default implementations of methods"
  },
  {
    "type": "mcq",
    "question": "A derived class in C# is also called:",
    "options": [
      "Sub-class or child class",
      "Parent class or super-class",
      "Record struct",
      "Interface"
    ],
    "answer": "Sub-class or child class"
  },
  {
    "type": "mcq",
    "question": "A base class in C# is also called:",
    "options": [
      "Child class or sub-class",
      "Super-class or parent class",
      "Interface",
      "Struct"
    ],
    "answer": "Super-class or parent class"
  },
  {
    "type": "mcq",
    "question": "Structs in C# can:",
    "options": [
      "Implement multiple interfaces",
      "Inherit from classes",
      "Contain virtual methods",
      "Contain instance fields with inheritance"
    ],
    "answer": "Implement multiple interfaces"
  },
  {
    "type": "mcq",
    "question": "Which of the following is an example of increasing cohesion?",
    "options": [
      "Spreading similar functionality across multiple classes",
      "Grouping related methods and data in the same class",
      "Using global variables for related data",
      "Allowing tight coupling between classes"
    ],
    "answer": "Grouping related methods and data in the same class"
  },
  {
    "type": "mcq",
    "question": "Which is an example of reducing coupling?",
    "options": [
      "Limiting interdependence between classes",
      "Exposing all class internals",
      "Sharing mutable global state",
      "Having one class depend on many other classes"
    ],
    "answer": "Limiting interdependence between classes"
  },
  {
    "type": "mcq",
    "question": "Which statement about interface inheritance is correct?",
    "options": [
      "A class can implement multiple interfaces to achieve multiple inheritance",
      "A class can inherit from multiple classes directly",
      "Structs cannot implement interfaces",
      "Interfaces can have instance fields"
    ],
    "answer": "A class can implement multiple interfaces to achieve multiple inheritance"
  },
  {
    "type": "mcq",
    "question": "Polymorphism allows a single method to:",
    "options": [
      "Behave differently based on the object calling it",
      "Store only static data",
      "Force all objects to be structs",
      "Prevent code reuse"
    ],
    "answer": "Behave differently based on the object calling it"
  },
  {
    "type": "mcq",
    "question": "Abstraction focuses on:",
    "options": [
      "Relevant properties and hiding implementation details",
      "Exposing all member variables",
      "Preventing inheritance",
      "Eliminating methods"
    ],
    "answer": "Relevant properties and hiding implementation details"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about record types?",
    "options": [
      "They provide immutability and value-based equality by default",
      "They are always value types",
      "They cannot have methods",
      "They cannot implement interfaces"
    ],
    "answer": "They provide immutability and value-based equality by default"
  },
  {
    "type": "mcq",
    "question": "C# classes are:",
    "options": [
      "Reference types that encapsulate state and behavior",
      "Value types that cannot contain methods",
      "Interfaces that define instance state",
      "Structs that inherit from other structs"
    ],
    "answer": "Reference types that encapsulate state and behavior"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT one of the four pillars of OOP?",
    "options": [
      "Recursion",
      "Encapsulation",
      "Polymorphism",
      "Abstraction"
    ],
    "answer": "Recursion"
  },
  {
    "type": "mcq",
    "question": "UML class diagrams are used to:",
    "options": [
      "Describe class names, members, types, and method signatures",
      "Implement program logic",
      "Automatically enforce cohesion",
      "Show only interfaces"
    ],
    "answer": "Describe class names, members, types, and method signatures"
  },
  {
    "type": "mcq",
    "question": "Which access modifier allows members to be accessible only within the same class?",
    "options": [
      "private",
      "public",
      "protected",
      "internal"
    ],
    "answer": "private"
  },
  {
    "type": "mcq",
    "question": "Which access modifier allows members to be accessible from any class?",
    "options": [
      "public",
      "private",
      "protected",
      "internal"
    ],
    "answer": "public"
  },
  {
    "type": "mcq",
    "question": "Which access modifier allows members to be accessible only in derived classes?",
    "options": [
      "protected",
      "private",
      "public",
      "internal"
    ],
    "answer": "protected"
  },
  {
    "type": "mcq",
    "question": "Internal members are accessible:",
    "options": [
      "Within the same assembly",
      "From any assembly",
      "Only in derived classes",
      "Only within the class itself"
    ],
    "answer": "Within the same assembly"
  },
  {
    "type": "mcq",
    "question": "Encapsulation helps to:",
    "options": [
      "Hide internal implementation and expose a public interface",
      "Make all fields public",
      "Avoid inheritance",
      "Force methods to be static"
    ],
    "answer": "Hide internal implementation and expose a public interface"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about inheritance in C#?",
    "options": [
      "A class can inherit only one base class but can implement multiple interfaces",
      "A class can inherit multiple base classes",
      "Structs can inherit from classes",
      "Interfaces cannot be inherited"
    ],
    "answer": "A class can inherit only one base class but can implement multiple interfaces"
  },
  {
    "type": "mcq",
    "question": "Method overriding allows:",
    "options": [
      "A derived class to provide a new implementation for a base class method",
      "A class to call private members of another class",
      "A method to change its access modifier",
      "Multiple inheritance of methods"
    ],
    "answer": "A derived class to provide a new implementation for a base class method"
  },
  {
    "type": "mcq",
    "question": "Which keyword is used in C# to override a base class method?",
    "options": [
      "override",
      "virtual",
      "new",
      "abstract"
    ],
    "answer": "override"
  },
  {
    "type": "mcq",
    "question": "Which keyword is used in C# to declare a base class method that can be overridden?",
    "options": [
      "virtual",
      "override",
      "abstract",
      "sealed"
    ],
    "answer": "virtual"
  },
  {
    "type": "mcq",
    "question": "If a method is marked as sealed, it means:",
    "options": [
      "It cannot be overridden in derived classes",
      "It can be accessed by any class",
      "It is private",
      "It must be abstract"
    ],
    "answer": "It cannot be overridden in derived classes"
  },
  {
    "type": "mcq",
    "question": "Encapsulation increases:",
    "options": [
      "Maintainability and security",
      "Coupling between classes",
      "Number of global variables",
      "Code complexity without benefits"
    ],
    "answer": "Maintainability and security"
  },
  {
    "type": "mcq",
    "question": "Which of the following statements is true?",
    "options": [
      "Derived classes inherit public and protected members from the base class",
      "Derived classes cannot access protected members",
      "Derived classes can access private members of the base class directly",
      "Inheritance only copies methods, not fields"
    ],
    "answer": "Derived classes inherit public and protected members from the base class"
  },
  {
    "type": "mcq",
    "question": "A private method in a base class:",
    "options": [
      "Cannot be overridden by derived classes",
      "Can always be overridden",
      "Is always accessible from derived classes",
      "Is treated as public in derived classes"
    ],
    "answer": "Cannot be overridden by derived classes"
  },
  {
    "type": "mcq",
    "question": "Which statement best describes polymorphism?",
    "options": [
      "Objects can take multiple forms, such as overriding base methods",
      "Methods cannot be overridden",
      "Fields are always public",
      "Inheritance is disallowed"
    ],
    "answer": "Objects can take multiple forms, such as overriding base methods"
  },
  {
    "type": "mcq",
    "question": "Access modifiers are mainly used to:",
    "options": [
      "Control visibility of classes and members",
      "Make all methods virtual",
      "Force multiple inheritance",
      "Prevent method overloading"
    ],
    "answer": "Control visibility of classes and members"
  },
  {
    "type": "mcq",
    "question": "Which access modifier allows members to be accessed anywhere in the same assembly but not outside?",
    "options": [
      "internal",
      "public",
      "protected",
      "private"
    ],
    "answer": "internal"
  },
  {
    "type": "mcq",
    "question": "Encapsulation is implemented in C# by:",
    "options": [
      "Using access modifiers like private, protected, and public",
      "Marking all fields as public",
      "Forbidding inheritance",
      "Avoiding methods entirely"
    ],
    "answer": "Using access modifiers like private, protected, and public"
  },
  {
    "type": "mcq",
    "question": "In overriding, the base class method must be declared as:",
    "options": [
      "virtual or abstract",
      "private",
      "sealed",
      "static"
    ],
    "answer": "virtual or abstract"
  },
  {
    "type": "mcq",
    "question": "Which access modifier restricts access to the same class and derived classes within the same assembly?",
    "options": [
      "protected internal",
      "public",
      "private",
      "internal"
    ],
    "answer": "protected internal"
  },
  {
    "type": "mcq",
    "question": "Given the class:\n```csharp\nclass A { private int x; }\n```\nWhich of the following is true?",
    "options": [
      "x is accessible only within class A",
      "x is accessible from derived classes",
      "x is accessible from any class in the assembly",
      "x is accessible from anywhere"
    ],
    "answer": "x is accessible only within class A"
  },
  {
    "type": "mcq",
    "question": "Given:\n```csharp\nclass Base { public virtual void Show() {} }\nclass Derived : Base { public override void Show() {} }\n```\nWhich statement is correct?",
    "options": [
      "Derived.Show overrides Base.Show",
      "Base.Show cannot be overridden",
      "Derived.Show is private",
      "Base.Show is sealed"
    ],
    "answer": "Derived.Show overrides Base.Show"
  },
  {
    "type": "mcq",
    "question": "Which of the following will compile?\n```csharp\nclass A { protected int x; }\nclass B : A { void Test() { x = 5; } }\n```",
    "options": [
      "Yes, because B can access protected members",
      "No, because x is private",
      "No, because x is internal",
      "No, because protected members cannot be inherited"
    ],
    "answer": "Yes, because B can access protected members"
  },
  {
    "type": "mcq",
    "question": "What happens if you try to override a non-virtual method in C#?",
    "options": [
      "Compilation error",
      "It works normally",
      "It becomes private automatically",
      "Method is sealed"
    ],
    "answer": "Compilation error"
  },
  {
    "type": "mcq",
    "question": "Given:\n```csharp\nclass A { public int x; }\nclass B : A { }\n```\nWhich of the following is true?",
    "options": [
      "B inherits x as public",
      "B cannot access x",
      "x becomes protected in B",
      "x is private in B"
    ],
    "answer": "B inherits x as public"
  },
  {
    "type": "mcq",
    "question": "Given:\n```csharp\nclass A { private void Do() {} }\nclass B : A { }\n```\nCan B override Do()?",
    "options": [
      "No, because Do is private",
      "Yes, it can override",
      "Yes, automatically",
      "Yes, if sealed is removed"
    ],
    "answer": "No, because Do is private"
  },
  {
    "type": "mcq",
    "question": "Which keyword prevents further overriding of a virtual method?",
    "options": [
      "sealed",
      "abstract",
      "override",
      "virtual"
    ],
    "answer": "sealed"
  },
  {
    "type": "mcq",
    "question": "What is true about the following?\n```csharp\nclass A { internal int x; }\n```",
    "options": [
      "x is accessible anywhere in the assembly",
      "x is accessible only in derived classes",
      "x is accessible anywhere",
      "x is private"
    ],
    "answer": "x is accessible anywhere in the assembly"
  },
  {
    "type": "mcq",
    "question": "Which is a correct way to encapsulate a field?",
    "options": [
      "private int x; public int X { get; set; }",
      "public int x;",
      "protected int x;",
      "internal int x;"
    ],
    "answer": "private int x; public int X { get; set; }"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true?\n```csharp\nclass A { protected internal int x; }```",
    "options": [
      "x is accessible in derived classes or same assembly",
      "x is private",
      "x is only accessible in same class",
      "x is only accessible from outside assembly"
    ],
    "answer": "x is accessible in derived classes or same assembly"
  },
  {
    "type": "mcq",
    "question": "Given:\n```csharp\nclass Base { public virtual void Test() {} }\nclass Derived : Base { }\n``` \nWhich is correct?",
    "options": [
      "Derived can override Test if declared",
      "Derived automatically overrides Test",
      "Derived cannot access Test",
      "Test becomes private in Derived"
    ],
    "answer": "Derived can override Test if declared"
  },
  {
    "type": "mcq",
    "question": "What happens if a derived class declares a method with the same name but base method is not virtual?",
    "options": [
      "It hides the base method using 'new' keyword",
      "It overrides automatically",
      "It produces an error",
      "It seals the method"
    ],
    "answer": "It hides the base method using 'new' keyword"
  },
  {
    "type": "mcq",
    "question": "Which of the following demonstrates proper encapsulation?",
    "options": [
      "private int x; public int X { get { return x; } set { x = value; } }",
      "public int x;",
      "internal int x;",
      "protected int x;"
    ],
    "answer": "private int x; public int X { get { return x; } set { x = value; } }"
  },
  {
    "type": "mcq",
    "question": "Given:\n```csharp\nclass A { public void Foo() {} }\nclass B : A { }\n``` \nCan B access Foo()?",
    "options": [
      "Yes, Foo is public",
      "No, Foo is private",
      "No, Foo is protected",
      "No, Foo is internal"
    ],
    "answer": "Yes, Foo is public"
  },
  {
    "type": "mcq",
    "question": "In C#, which modifier combination allows a member accessible to derived classes in any assembly?",
    "options": [
      "protected",
      "private",
      "internal",
      "public"
    ],
    "answer": "protected"
  },
  {
    "type": "mcq",
    "question": "Which of these is true about overriding a method marked 'virtual'?",
    "options": [
      "It requires 'override' in derived class",
      "It can be overridden without any keyword",
      "It becomes private automatically",
      "It cannot be overridden"
    ],
    "answer": "It requires 'override' in derived class"
  },
  {
    "type": "mcq",
    "question": "Which access modifier makes a member visible anywhere?",
    "options": [
      "public",
      "private",
      "protected",
      "internal"
    ],
    "answer": "public"
  },
  {
    "type": "mcq",
    "question": "Which is true about 'protected internal'?",
    "options": [
      "Accessible in derived classes or same assembly",
      "Accessible only in derived classes",
      "Accessible only in same class",
      "Accessible from any assembly"
    ],
    "answer": "Accessible in derived classes or same assembly"
  },
  {
    "type": "mcq",
    "question": "Which statement about method hiding is correct?",
    "options": [
      "Use 'new' keyword to hide base method",
      "Use 'override' to hide base method",
      "Cannot hide base method",
      "Hiding is automatic"
    ],
    "answer": "Use 'new' keyword to hide base method"
  },
  {
    "type": "mcq",
    "question": "Encapsulation ensures:",
    "options": [
      "Internal data is protected and accessible only through public methods",
      "All fields are public",
      "Private methods are accessible in other classes",
      "Static methods cannot access instance data"
    ],
    "answer": "Internal data is protected and accessible only through public methods"
  },
  {
    "type": "mcq",
    "question": "Given:\n```csharp\nclass T {\n    public int X;\n    public bool Equals(T other) => X == other.X;\n}\n```\nWhich method signature should be used to override Object.Equals correctly?",
    "options": [
      "public override bool Equals(Object? obj)",
      "public bool Equals(Object obj)",
      "public bool Equals(T obj)",
      "public virtual bool Equals()"
    ],
    "answer": "public override bool Equals(Object? obj)"
  },
  {
    "type": "mcq",
    "question": "In the Equals pattern, what is the purpose of `ReferenceEquals(this, other)`?",
    "options": [
      "Check if both references point to the same object",
      "Check if objects are value-equal",
      "Check if object is null",
      "Call base.Equals automatically"
    ],
    "answer": "Check if both references point to the same object"
  },
  {
    "type": "mcq",
    "question": "Why do we use `obj is T other` in the overridden Equals method?",
    "options": [
      "To check the type matches and cast safely",
      "To call GetHashCode automatically",
      "To assign null to other",
      "To avoid overriding Equals"
    ],
    "answer": "To check the type matches and cast safely"
  },
  {
    "type": "mcq",
    "question": "What should GetHashCode() include when overriding Equals?",
    "options": [
      "All fields that are used in Equals comparison",
      "Only public fields",
      "Only private fields",
      "No fields, return constant"
    ],
    "answer": "All fields that are used in Equals comparison"
  },
  {
    "type": "mcq",
    "question": "Why do we implement a type-specific Equals(T other)?",
    "options": [
      "To perform equality checks safely without casting",
      "To override GetHashCode",
      "To prevent inheritance",
      "To implement IComparable"
    ],
    "answer": "To perform equality checks safely without casting"
  },
  {
    "type": "mcq",
    "question": "Given:\n```csharp\npublic override bool Equals(Object? obj) => obj is T other && Equals(other);\n```\nWhat does `Equals(other)` do?",
    "options": [
      "Calls the type-specific Equals(T other)",
      "Calls base.Equals automatically",
      "Calls GetHashCode",
      "Compares object references only"
    ],
    "answer": "Calls the type-specific Equals(T other)"
  },
  {
    "type": "mcq",
    "question": "What is the correct pattern to override Equals in C#?",
    "options": [
      "Implement type-specific Equals, then override Object.Equals to call it",
      "Override Object.Equals only",
      "Implement type-specific Equals only",
      "Call ReferenceEquals in every method"
    ],
    "answer": "Implement type-specific Equals, then override Object.Equals to call it"
  },
  {
    "type": "mcq",
    "question": "Why do we check `if (other is null) return false;` in type-specific Equals?",
    "options": [
      "To handle null safely before accessing fields",
      "To override GetHashCode",
      "To call ReferenceEquals",
      "To make the object immutable"
    ],
    "answer": "To handle null safely before accessing fields"
  },
  {
    "type": "mcq",
    "question": "Which keyword is required to override Object.Equals in C#?",
    "options": [
      "override",
      "virtual",
      "new",
      "abstract"
    ],
    "answer": "override"
  },
  {
    "type": "mcq",
    "question": "In the pattern shown, what does `HashCode.Combine(/* all fields */)` do?",
    "options": [
      "Computes a hash code using all fields used in Equals",
      "Overrides Object.Equals automatically",
      "Checks reference equality",
      "Prevents null reference exceptions"
    ],
    "answer": "Computes a hash code using all fields used in Equals"
  }

  ],
  OOP_quiz01补充:[
  {
    "type": "mcq",
    "question": "What is virtual memory?",
    "options": [
      "Memory physically installed on the motherboard",
      "Memory allocated by the operating system to each process",
      "Memory used only by the CPU cache",
      "Memory shared directly between all processes"
    ],
    "answer": "Memory allocated by the operating system to each process"
  },
  {
    "type": "mcq",
    "question": "Which statement about virtual memory is correct?",
    "options": [
      "All processes share the same virtual memory",
      "Each process has its own separate virtual memory space",
      "Virtual memory is the same as physical RAM",
      "Virtual memory is managed by the application"
    ],
    "answer": "Each process has its own separate virtual memory space"
  },
  {
    "type": "mcq",
    "question": "How much data is stored at each virtual memory address?",
    "options": [
      "1 bit",
      "1 byte",
      "4 bytes",
      "8 bytes"
    ],
    "answer": "1 byte"
  },
  {
    "type": "mcq",
    "question": "On a 64-bit architecture, the virtual address space typically ranges from:",
    "options": [
      "0 to 2^32",
      "0 to 2^16",
      "0 to 2^64",
      "0 to 2^128"
    ],
    "answer": "0 to 2^64"
  },
  {
    "type": "mcq",
    "question": "Which component is responsible for managing real memory resources?",
    "options": [
      "The compiler",
      "The application",
      "The operating system",
      "The CPU registers"
    ],
    "answer": "The operating system"
  },
  {
    "type": "mcq",
    "question": "What illusion does virtual memory give to running applications?",
    "options": [
      "They can directly access hardware",
      "They are the only application running",
      "They run without an operating system",
      "They share memory safely without isolation"
    ],
    "answer": "They are the only application running"
  },
  {
    "type": "mcq",
    "question": "Which OS feature allows multiple programs to run seemingly at the same time?",
    "options": [
      "Manual scheduling",
      "Virtual compilation",
      "Pre-emptive multitasking",
      "Static linking"
    ],
    "answer": "Pre-emptive multitasking"
  },
  {
    "type": "mcq",
    "question": "What does a program directly interact with?",
    "options": [
      "Physical memory",
      "Virtual memory",
      "CPU cache",
      "Disk storage"
    ],
    "answer": "Virtual memory"
  },
  {
    "type": "mcq",
    "question": "Which region of memory stores local variables?",
    "options": [
      "Heap",
      "Text segment",
      "Stack",
      "BSS"
    ],
    "answer": "Stack"
  },
  {
    "type": "mcq",
    "question": "Which memory region is used for dynamic memory allocation?",
    "options": [
      "Stack",
      "Heap",
      "Text",
      "BSS"
    ],
    "answer": "Heap"
  },
  {
    "type": "mcq",
    "question": "Which memory region contains machine instructions?",
    "options": [
      "Heap",
      "Stack",
      "Text & BSS",
      "CPU registers"
    ],
    "answer": "Text & BSS"
  },
  {
    "type": "mcq",
    "question": "Which type of variables are stored in the Text & BSS region?",
    "options": [
      "Local variables",
      "Dynamic variables",
      "Static and constant variables",
      "Temporary variables"
    ],
    "answer": "Static and constant variables"
  },
  {
    "type": "mcq",
    "question": "When are variables in the Text & BSS region determined?",
    "options": [
      "At runtime",
      "At compile time",
      "At program load time",
      "At method return time"
    ],
    "answer": "At program load time"
  },
  {
    "type": "mcq",
    "question": "What information does the stack store for function calls?",
    "options": [
      "Garbage collection metadata",
      "Return addresses",
      "Object headers",
      "Machine instructions"
    ],
    "answer": "Return addresses"
  },
  {
    "type": "mcq",
    "question": "Which of the following is stored on the stack?",
    "options": [
      "Objects created with new",
      "Global variables",
      "Local variables and parameters",
      "Static class fields"
    ],
    "answer": "Local variables and parameters"
  },
  {
    "type": "mcq",
    "question": "What is a major advantage of stack memory?",
    "options": [
      "It supports unlimited memory allocation",
      "It is automatically cleaned up",
      "It requires garbage collection",
      "It can grow dynamically at runtime"
    ],
    "answer": "It is automatically cleaned up"
  },
  {
    "type": "mcq",
    "question": "Why is stack memory considered fast?",
    "options": [
      "It uses disk storage",
      "It uses complex allocation algorithms",
      "It follows a simple LIFO structure",
      "It requires garbage collection"
    ],
    "answer": "It follows a simple LIFO structure"
  },
  {
    "type": "mcq",
    "question": "Which data structure best describes the stack?",
    "options": [
      "Queue (FIFO)",
      "Tree",
      "Graph",
      "Stack (LIFO)"
    ],
    "answer": "Stack (LIFO)"
  },
  {
    "type": "mcq",
    "question": "Which analogy is commonly used to describe stack behavior?",
    "options": [
      "A line of people waiting",
      "A neat pile of plates",
      "A random box of items",
      "A filing cabinet"
    ],
    "answer": "A neat pile of plates"
  },
  {
    "type": "mcq",
    "question": "What is a limitation of stack memory?",
    "options": [
      "It is slow to access",
      "It requires garbage collection",
      "Its size must be known at compile time",
      "It cannot store primitive data"
    ],
    "answer": "Its size must be known at compile time"
  },
  {
    "type": "mcq",
    "question": "Which memory region typically requires garbage collection?",
    "options": [
      "Stack",
      "Text",
      "Heap",
      "CPU registers"
    ],
    "answer": "Heap"
  },
  {
    "type": "mcq",
    "question": "What happens to stack memory when a method returns?",
    "options": [
      "It must be manually freed",
      "It is garbage collected later",
      "It is automatically released",
      "It moves to the heap"
    ],
    "answer": "It is automatically released"
  },
  {
    "type": "mcq",
    "question": "Which memory region grows and shrinks with function calls?",
    "options": [
      "Heap",
      "Stack",
      "Text",
      "BSS"
    ],
    "answer": "Stack"
  },
  {
    "type": "mcq",
    "question": "Which memory region is shared between different function calls?",
    "options": [
      "Stack",
      "Heap",
      "CPU cache",
      "Registers"
    ],
    "answer": "Heap"
  },
  {
    "type": "mcq",
    "question": "Which statement best describes the heap?",
    "options": [
      "It stores return addresses",
      "It stores local variables only",
      "It stores dynamically allocated memory",
      "It stores machine instructions"
    ],
    "answer": "It stores dynamically allocated memory"
  },
  {
    "type": "mcq",
    "question": "Which memory region does NOT require knowing object size at compile time?",
    "options": [
      "Stack",
      "Text",
      "Heap",
      "BSS"
    ],
    "answer": "Heap"
  },
  {
    "type": "mcq",
    "question": "Who is responsible for scheduling threads of execution?",
    "options": [
      "The compiler",
      "The runtime library",
      "The operating system",
      "The application code"
    ],
    "answer": "The operating system"
  },
  {
    "type": "mcq",
    "question": "Why can applications safely run without interfering with each other’s memory?",
    "options": [
      "They use the same heap",
      "They use virtual memory isolation",
      "They use shared stacks",
      "They run on different CPUs"
    ],
    "answer": "They use virtual memory isolation"
  },
  {
    "type": "mcq",
    "question": "Which concept allows each process to believe it owns all available memory?",
    "options": [
      "Static linking",
      "Manual memory management",
      "Virtual memory",
      "Multithreading"
    ],
    "answer": "Virtual memory"
  },
  {
    "type": "mcq",
    "question": "Where is the actual object of a reference type constructed?",
    "options": [
      "On the stack",
      "On the heap",
      "In CPU registers",
      "In the text segment"
    ],
    "answer": "On the heap"
  },
  {
    "type": "mcq",
    "question": "What does a reference type variable store?",
    "options": [
      "The full object data",
      "A copy of the object",
      "A pointer to the object on the heap",
      "The object’s methods only"
    ],
    "answer": "A pointer to the object on the heap"
  },
  {
    "type": "mcq",
    "question": "Why are all reference type variables the same size?",
    "options": [
      "They store the entire object",
      "They are optimized by the compiler",
      "They store a memory address",
      "They are stored in CPU registers"
    ],
    "answer": "They store a memory address"
  },
  {
    "type": "mcq",
    "question": "On most modern 64-bit systems, how large is a reference type variable?",
    "options": [
      "4 bytes",
      "8 bytes",
      "16 bytes",
      "Depends on the object size"
    ],
    "answer": "8 bytes"
  },
  {
    "type": "mcq",
    "question": "Where does a value type variable live?",
    "options": [
      "On the heap",
      "On the stack",
      "In the text segment",
      "In shared memory"
    ],
    "answer": "On the stack"
  },
  {
    "type": "mcq",
    "question": "How is a value type variable stored?",
    "options": [
      "As a pointer to heap memory",
      "As a reference to another variable",
      "Directly containing the object data",
      "As an indirect memory handle"
    ],
    "answer": "Directly containing the object data"
  },
  {
    "type": "mcq",
    "question": "What determines the size of a value type variable?",
    "options": [
      "The size of a memory address",
      "The size of the object it stores",
      "The operating system",
      "The garbage collector"
    ],
    "answer": "The size of the object it stores"
  },
  {
    "type": "mcq",
    "question": "Which statement correctly compares reference types and value types?",
    "options": [
      "Both store the object directly on the stack",
      "Reference types store objects directly, value types store pointers",
      "Reference types store pointers, value types store the object itself",
      "Both always store objects on the heap"
    ],
    "answer": "Reference types store pointers, value types store the object itself"
  },
  {
    "type": "mcq",
    "question": "Which feature is unique to reference types?",
    "options": [
      "Variable size depends on object",
      "Object is stored directly in the variable",
      "Variable holds a pointer to heap memory",
      "Variable cannot be copied"
    ],
    "answer": "Variable holds a pointer to heap memory"
  },
  {
    "type": "mcq",
    "question": "Why is a program's memory divided into different regions?",
    "options": [
      "To reduce compilation time",
      "To organize memory with different characteristics and purposes",
      "To make programs portable across CPUs",
      "To allow direct hardware access"
    ],
    "answer": "To organize memory with different characteristics and purposes"
  },
  {
    "type": "mcq",
    "question": "Which memory region is most heavily used during program execution?",
    "options": [
      "Heap",
      "Text",
      "BSS",
      "Stack"
    ],
    "answer": "Stack"
  },
  {
    "type": "mcq",
    "question": "What happens at the beginning of every function call?",
    "options": [
      "Heap memory is allocated",
      "A stack frame is allocated",
      "Static variables are initialized",
      "Text memory is reloaded"
    ],
    "answer": "A stack frame is allocated"
  },
  {
    "type": "mcq",
    "question": "What is a stack frame?",
    "options": [
      "A CPU register used for function calls",
      "A block of heap memory for objects",
      "A chunk of contiguous memory on the stack for a function call",
      "A section of memory for static variables"
    ],
    "answer": "A chunk of contiguous memory on the stack for a function call"
  },
  {
    "type": "mcq",
    "question": "Which information is stored inside a function's stack frame?",
    "options": [
      "Machine instructions",
      "Return address and local variables",
      "Global variables",
      "Heap allocation metadata"
    ],
    "answer": "Return address and local variables"
  },
  {
    "type": "mcq",
    "question": "Where do variables declared inside a function live?",
    "options": [
      "On the heap",
      "In the text section",
      "In the BSS section",
      "On the stack"
    ],
    "answer": "On the stack"
  },
  {
    "type": "mcq",
    "question": "What best describes the heap?",
    "options": [
      "A small, fixed-size memory region for function calls",
      "A region used only for static variables",
      "A large area of unallocated memory for dynamic allocation",
      "A read-only memory region"
    ],
    "answer": "A large area of unallocated memory for dynamic allocation"
  },
  {
    "type": "mcq",
    "question": "Where are dynamically allocated objects created?",
    "options": [
      "On the stack",
      "On the heap",
      "In the text section",
      "In CPU registers"
    ],
    "answer": "On the heap"
  },
  {
    "type": "mcq",
    "question": "For reference types, what do stack variables contain?",
    "options": [
      "The full object data",
      "A copy of the object",
      "A pointer to the object on the heap",
      "The object’s methods"
    ],
    "answer": "A pointer to the object on the heap"
  },
  {
    "type": "mcq",
    "question": "What is stored in the Text and BSS memory regions?",
    "options": [
      "Local variables and parameters",
      "Dynamically allocated objects",
      "Program instructions and static or global variables",
      "Return addresses and stack frames"
    ],
    "answer": "Program instructions and static or global variables"
  },
  {
    "type": "mcq",
    "question": "What best defines an object in Object-Oriented Programming?",
    "options": [
      "A function that performs calculations",
      "A self-contained unit with state and behaviour",
      "A block of memory with no structure",
      "A collection of static methods"
    ],
    "answer": "A self-contained unit with state and behaviour"
  },
  {
    "type": "mcq",
    "question": "What represents the state of an object?",
    "options": [
      "Its instance methods",
      "Its member variables",
      "Its constructors",
      "Its return values"
    ],
    "answer": "Its member variables"
  },
  {
    "type": "mcq",
    "question": "How is the behaviour of an object expressed?",
    "options": [
      "Through member variables",
      "Through static fields",
      "Through member functions (instance methods)",
      "Through constructors only"
    ],
    "answer": "Through member functions (instance methods)"
  },
  {
    "type": "mcq",
    "question": "What is a class?",
    "options": [
      "An actual object in memory",
      "A description of how to construct objects",
      "A variable that stores an object",
      "A runtime instance of an object"
    ],
    "answer": "A description of how to construct objects"
  },
  {
    "type": "mcq",
    "question": "What do we call an object created from a class?",
    "options": [
      "A variable",
      "A method",
      "An instance",
      "A member"
    ],
    "answer": "An instance"
  },
  {
    "type": "mcq",
    "question": "What is instantiation?",
    "options": [
      "Defining a new class",
      "Copying a variable",
      "Creating an object from a class",
      "Assigning one object to another"
    ],
    "answer": "Creating an object from a class"
  },
  {
    "type": "mcq",
    "question": "Which statement about types in C# is correct?",
    "options": [
      "Only classes are based on object",
      "Only reference types are based on object",
      "All types in C# are based on a basic object type",
      "Only value types are based on object"
    ],
    "answer": "All types in C# are based on a basic object type"
  },
  {
    "type": "mcq",
    "question": "In C#, what is a variable?",
    "options": [
      "A function that returns data",
      "A named memory location that stores an object or a pointer to an object",
      "A class definition",
      "A runtime process"
    ],
    "answer": "A named memory location that stores an object or a pointer to an object"
  },
  {
    "type": "mcq",
    "question": "When a variable stores an object directly, what kind of type is it?",
    "options": [
      "Reference type",
      "Dynamic type",
      "Static type",
      "Value type"
    ],
    "answer": "Value type"
  },
  {
    "type": "mcq",
    "question": "What does it mean that C# is a strongly typed language?",
    "options": [
      "Variables can store any type of object",
      "Types are determined only at runtime",
      "Variables can only hold objects of their declared type",
      "Only classes have types"
    ],
    "answer": "Variables can only hold objects of their declared type"
  },
  {
    "type": "mcq",
    "question": "What is the core difference between value types and reference types in C#?",
    "options": [
      "Value types are slower than reference types",
      "Value types hold the actual data, reference types hold a reference to the data",
      "Reference types are stored on the stack",
      "Value types must be manually destroyed"
    ],
    "answer": "Value types hold the actual data, reference types hold a reference to the data"
  },
  {
    "type": "mcq",
    "question": "What does a value type variable store?",
    "options": [
      "A pointer to an object on the heap",
      "A reference to another variable",
      "The actual data itself",
      "Only metadata about the object"
    ],
    "answer": "The actual data itself"
  },
  {
    "type": "mcq",
    "question": "What does a reference type variable store?",
    "options": [
      "The full object data",
      "A copy of the object",
      "The object’s methods",
      "A reference to where the object is stored"
    ],
    "answer": "A reference to where the object is stored"
  },
  {
    "type": "mcq",
    "question": "What happens when a value type is copied?",
    "options": [
      "Only the reference is copied",
      "A new independent copy of the data is created",
      "Both variables point to the same data",
      "The original value is deleted"
    ],
    "answer": "A new independent copy of the data is created"
  },
  {
    "type": "mcq",
    "question": "What happens when a reference type is copied?",
    "options": [
      "The object itself is duplicated",
      "A new object is created on the stack",
      "Only the reference is copied",
      "The original reference becomes invalid"
    ],
    "answer": "Only the reference is copied"
  },
  {
    "type": "mcq",
    "question": "Where are reference type objects allocated?",
    "options": [
      "On the stack",
      "In CPU registers",
      "On the heap",
      "In the text section"
    ],
    "answer": "On the heap"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a reference type in C#?",
    "options": [
      "struct",
      "enum",
      "class",
      "record struct"
    ],
    "answer": "class"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a reference type?",
    "options": [
      "class",
      "interface",
      "delegate",
      "struct"
    ],
    "answer": "struct"
  },
  {
    "type": "mcq",
    "question": "Where are value types most often stored?",
    "options": [
      "On the heap",
      "On the stack",
      "In shared memory",
      "In the text section"
    ],
    "answer": "On the stack"
  },
  {
    "type": "mcq",
    "question": "Which of the following constructs a value type?",
    "options": [
      "class",
      "record",
      "delegate",
      "enum"
    ],
    "answer": "enum"
  },
  {
    "type": "mcq",
    "question": "Which statement about inheritance in C# is correct?",
    "options": [
      "Only reference types inherit from Object",
      "Only classes inherit from Object",
      "All types, both value and reference types, inherit from Object",
      "Only user-defined types inherit from Object"
    ],
    "answer": "All types, both value and reference types, inherit from Object"
  },
  {
    "type": "mcq",
    "question": "What does it mean when we say a class extends Object?",
    "options": [
      "The class replaces Object",
      "The class copies Object’s code",
      "The class builds on Object through inheritance",
      "The class can no longer use Object methods"
    ],
    "answer": "The class builds on Object through inheritance"
  },
  {
    "type": "mcq",
    "question": "If an object is typed as MyClass and MyClass defines its own ToString() method, which method is called?",
    "options": [
      "The Object version of ToString()",
      "The MyClass version of ToString()",
      "Both versions are called",
      "The call results in a compile-time error"
    ],
    "answer": "The MyClass version of ToString()"
  },
  {
    "type": "mcq",
    "question": "If an object is typed as object but is actually an instance of MyClass, when is the MyClass ToString() method called?",
    "options": [
      "Always, regardless of how it is declared",
      "Only if ToString() is declared as override in MyClass",
      "Only if the object is cast back to MyClass",
      "Never, Object.ToString() is always called"
    ],
    "answer": "Only if ToString() is declared as override in MyClass"
  },
  {
    "type": "mcq",
    "question": "Which concept determines which version of a method is called at runtime?",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Compilation",
      "Polymorphism"
    ],
    "answer": "Polymorphism"
  },
  {
    "type": "mcq",
    "question": "What is garbage collection (GC) in C#?",
    "options": [
      "A manual process where programmers delete objects",
      "An automatic process that frees memory no longer in use",
      "A compiler optimization technique",
      "A way to store objects on disk"
    ],
    "answer": "An automatic process that frees memory no longer in use"
  },
  {
    "type": "mcq",
    "question": "Which runtime component is responsible for garbage collection?",
    "options": [
      "The compiler",
      "The operating system",
      "The .NET runtime",
      "The CPU"
    ],
    "answer": "The .NET runtime"
  },
  {
    "type": "mcq",
    "question": "Which types of objects are managed by the garbage collector?",
    "options": [
      "Value-type objects on the stack",
      "Reference-type objects on the heap",
      "CPU registers",
      "Static code in the text section"
    ],
    "answer": "Reference-type objects on the heap"
  },
  {
    "type": "mcq",
    "question": "Do you need to explicitly delete heap objects in C#?",
    "options": [
      "Yes, using delete",
      "Yes, using free",
      "No, the GC handles it automatically",
      "Only for large objects"
    ],
    "answer": "No, the GC handles it automatically"
  },
  {
    "type": "mcq",
    "question": "When does the garbage collector reclaim memory?",
    "options": [
      "When objects are no longer reachable",
      "When a method returns",
      "At the end of every program",
      "Immediately after allocation"
    ],
    "answer": "When objects are no longer reachable"
  },
  {
    "type": "mcq",
    "question": "Which references keep an object alive and prevent GC?",
    "options": [
      "Unreachable local variables",
      "CPU registers",
      "Program variables or static fields",
      "Method parameters only"
    ],
    "answer": "Program variables or static fields"
  },
  {
    "type": "mcq",
    "question": "Is the exact timing of garbage collection deterministic?",
    "options": [
      "Yes, it runs after every allocation",
      "Yes, it runs at fixed time intervals",
      "No, the timing is non-deterministic",
      "Only in debug mode"
    ],
    "answer": "No, the timing is non-deterministic"
  },
  {
    "type": "mcq",
    "question": "What happens to your program when the GC runs?",
    "options": [
      "It continues running normally",
      "It speeds up execution",
      "It is temporarily paused",
      "It terminates"
    ],
    "answer": "It is temporarily paused"
  },
  {
    "type": "mcq",
    "question": "Why are garbage-collected languages often avoided for real-time systems?",
    "options": [
      "They cannot allocate memory",
      "GC pauses are unpredictable",
      "They do not support multithreading",
      "They cannot access hardware"
    ],
    "answer": "GC pauses are unpredictable"
  },
  {
    "type": "mcq",
    "question": "When is the garbage collector typically triggered?",
    "options": [
      "At every function call",
      "When memory thresholds are reached or resources are low",
      "Only when manually invoked",
      "At compile time"
    ],
    "answer": "When memory thresholds are reached or resources are low"
  },
  {
    "type": "mcq",
    "question": "Can a programmer manually trigger garbage collection?",
    "options": [
      "No, it is impossible",
      "Yes, and it is recommended",
      "Yes, but it is not recommended",
      "Only in unmanaged code"
    ],
    "answer": "Yes, but it is not recommended"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of the class keyword in C#?",
    "options": [
      "To allocate memory on the heap",
      "To define a user-defined type",
      "To call garbage collection",
      "To declare variables"
    ],
    "answer": "To define a user-defined type"
  },
  {
    "type": "mcq",
    "question": "What role does a class play in object creation?",
    "options": [
      "It stores objects directly",
      "It acts as a blueprint for creating objects",
      "It manages memory deallocation",
      "It executes program logic"
    ],
    "answer": "It acts as a blueprint for creating objects"
  },
  {
    "type": "mcq",
    "question": "What is the default access level of class members in C#?",
    "options": [
      "Public",
      "Protected",
      "Internal",
      "Private"
    ],
    "answer": "Private"
  },
  {
    "type": "mcq",
    "question": "How must a member be declared to allow access from outside the class?",
    "options": [
      "protected",
      "internal",
      "public",
      "private"
    ],
    "answer": "public"
  },
  {
    "type": "mcq",
    "question": "What do access modifiers control?",
    "options": [
      "Memory allocation strategy",
      "Object lifetime",
      "Who can access classes and members",
      "Garbage collection behavior"
    ],
    "answer": "Who can access classes and members"
  },
  {
    "type": "mcq",
    "question": "Which access modifier restricts access to within the same class only?",
    "options": [
      "public",
      "protected",
      "private",
      "internal"
    ],
    "answer": "private"
  },
  {
    "type": "mcq",
    "question": "Which access modifier allows access from derived classes?",
    "options": [
      "private",
      "public",
      "protected",
      "static"
    ],
    "answer": "protected"
  },
  {
    "type": "mcq",
    "question": "If a base class member is private, can it be accessed in a derived class?",
    "options": [
      "Yes, always",
      "Yes, if inherited",
      "No, it is not accessible",
      "Only through casting"
    ],
    "answer": "No, it is not accessible"
  },
  {
    "type": "mcq",
    "question": "Which statement about protected members is correct?",
    "options": [
      "They are accessible only inside the same class",
      "They are accessible like public members everywhere",
      "They are accessible inside derived classes",
      "They are accessible only in the same file"
    ],
    "answer": "They are accessible inside derived classes"
  }
  ],
  BASH_quiz01:[
  
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to represent your home directory: ___",
    "answer": "~"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command option to show option switches: ___",
    "answer": "-"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to reference a file path: ___",
    "answer": "/"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the manual page of a command: ___",
    "answer": "man"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to quickly count lines, words, and bytes of a file: ___",
    "answer": "wc"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to determine the type of a file (file.txt): ___ ",
    "answer": "file file.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to list the contents of a directory: ___",
    "answer": "ls"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux option to display files in long format with more details: ___",
    "answer": "ls -l"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to list all files ending with .txt in long format: ___",
    "answer": "ls -l *.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to list all files containing a dot in their names: ___ ",
    "answer": "ls -l *.*"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to include hidden files in the listing: ___ ",
    "answer": "ls -a"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to list only hidden files in long format: ___ ",
    "answer": "ls -l .*"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux option to reverse the order of the listing: ___",
    "answer": "ls -r"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux option to recursively list all files in current and subdirectories: ___",
    "answer": "ls -R"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux option to show the inode number of files: ___",
    "answer": "ls -i"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to change the current directory: ___",
    "answer": "cd"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to switch to the root directory: ___ ",
    "answer": "cd /"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to move to the current directory: ___ ",
    "answer": "cd ."
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to enter a folder in the current directory: ___ ",
    "answer": "cd ./folder"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to move to the parent directory of the current directory.: ___..",
    "answer": "cd .."
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to move to home directory using its absolute path: ___ ",
    "answer": "cd /home"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the current working directory: ___",
    "answer": "pwd"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to copy a file, optionally giving the copy a new name: ___",
    "answer": "cp"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to copy a file (f1.txt) to a destination directory (d2), keeping its original name: ___ ",
    "answer": "cp f1.txt d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to copy a file (f1.txt) and explicitly specify the destination path (d2) and filename (f1.txt): ___ ",
    "answer": "cp f1.txt d2/f1.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to copy a file (f1.txt) to a destination directory(d2) and rename it (f2.txt): ___",
    "answer": "cp f1.txt d2/f2.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to create a backup copy (f2.txt) of a file (f1.txt) in the current folder: ___ ",
    "answer": "cp f1.txt f2.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to create a new file (f1.txt): ___",
    "answer": "touch f1.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command option to modify only the access time of a file (f1.txt): ___ ",
    "answer": "touch -a f1.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command option to modify only the modification time of a file (f1.txt): ___ ",
    "answer": "touch -m f1.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command option to update the access time and modification time of a file (f1.txt), not creating a new file if it doesn't exist: ___",
    "answer": "touch -c f1.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to move a file or rename it: ___",
    "answer": "mv"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to move sample.txt to the directory (demo): ___ ",
    "answer": "mv sample.txt demo"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to move sample.txt to the directory (demo) and rename it f1.txt: ___ ",
    "answer": "mv sample.txt demo/f1.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to rename sample.txt to demo.txt in the current directory: ___ ",
    "answer": "mv sample.txt demo.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to remove an empty directory (d2): ___",
    "answer": "rmdir d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to remove an empty directory named 'd2': ___ ",
    "answer": "rm -d d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to remove a directory (d2) and its contents recursively: ___ ",
    "answer": "rm -r d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to create a new directory or folder: ___",
    "answer": "mkdir"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to create a directory named demo in the current directory: ___ ",
    "answer": "mkdir demo"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to create a subdirectory named d2 inside demo: ___ ",
    "answer": "mkdir demo/d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to create a directory named demo in the parent directory: ___ ",
    "answer": "mkdir ../demo"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the full contents of a text file(f1.txt): ___",
    "answer": "cat f1.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the first 10 lines of a file: ___ filename.txt",
    "answer": "head"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the last 10 lines of a file: ___ filename.txt",
    "answer": "tail"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the contents of a file one page at a time: ___ filename.txt",
    "answer": "more"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display current user identity information: ___",
    "answer": "id"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the groups the current user belongs to: ___",
    "answer": "groups"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the groups a specific user (user1) belongs to: ___",
    "answer": "groups user1"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to show who is currently logged in: ___",
    "answer": "who"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display the username of the current user: ___",
    "answer": "whoami"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display system information: ___",
    "answer": "uname"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display current date and time: ___",
    "answer": "date"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to write content to a file, creating it if it doesn't exist: ___ \"content\" > filename",
    "answer": "echo"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to display content directly in the terminal: ___ \"content\"",
    "answer": "echo"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to change permissions for others to read only: ___ o=r filename",
    "answer": "chmod"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to change permissions of file.txt for user to read, write, execute with verbose feedback: ___ ",
    "answer": "chmod -v u=wrx file.txt"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to remove read permission of directory (d2) for others with verbose feedback: ___ ",
    "answer": "chmod -v o-r d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to set read permission of directory (d2) for user, group, others: ___ ",
    "answer": "chmod ugo=r d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to remove all permissions of directory (d2) for others: ___ ",
    "answer": "chmod o= d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to add read permission of directory (d2) for others and remove execute permission from user and group: ___ ",
    "answer": "chmod o+r,ug-x d2"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to change the group (g2) ownership of a file (f1.txt): ___ ",
    "answer": "chgrp g2 f1.txt"
  },
  {
    "type": "fib",
    "question": "judsonmurray@NBCC-PF50B5S7: /home$ chmod -verbose o= judsonmurray\nmode of 'judsonmurray' changed from 0755 (rwxr-r-x) to 0750 (rwxr-x---)\n0755 represent____",
    "answer": "Octal representation of Linux file permissions"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to add a new system user: ___",
    "answer": "adduser"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to create a new user with admin privileges: ___ username",
    "answer": "sudo adduser"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to switch to another user: ___ username",
    "answer": "su"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to change your own password (requires current password): ___",
    "answer": "passwd"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to set a new password for a specific user without needing the old one: ___ username",
    "answer": "sudo passwd"
  },
  {
    "type": "fib",
    "question": "Fill in the missing Linux command to edit a text file using vi or vim: ___ txtfile",
    "answer": "vi/vim"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which key should you press to return to command mode from insert mode? ___",
    "answer": "Esc"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which command saves the file and exits the editor? ___",
    "answer": ":wq"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which keys move the cursor up and down? ___ and ___",
    "answer": "K, J"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which keys move the cursor left and right? ___ and ___",
    "answer": "H, L"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which key enters insert mode for editing text? ___",
    "answer": "i"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which command exits without saving changes? ___",
    "answer": ":q!"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which command saves the current file without exiting? ___",
    "answer": ":w"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which command saves the file as a new file with a different name? ___ filename",
    "answer": ":w"
  },
  {
    "type": "fib",
    "question": "In vi/vim, which command deletes a character under the cursor? ___",
    "answer": "x"
  }
  ],
  SQL_quiz02:[
  {
    "type": "fib",
    "question": "the order of clause :1.____ 2.____3.____4.____5.____6.____ 用空格隔开",
    "answer": "FROM WHERE GROUP BY HAVING SELECT ORDER BY "
  },
  {
    "type": "fib",
    "question": "FROM 什么作用？",
    "answer": "specify the table source"
  },
  {
    "type": "fib",
    "question": "WHERE 什么作用？",
    "answer": "record-based filtering"
  },
  {
    "type": "fib",
    "question": "GROUP BY 什么作用？",
    "answer": "user-defined grouping criteria (for AGGREGATES)"
  },
  {
    "type": "fib",
    "question": "HAVING 什么作用？",
    "answer": "group-based filtering"
  },
  {
    "type": "fib",
    "question": "SELECT 什么作用？",
    "answer": "specify columns"
  },
  {
    "type": "fib",
    "question": "ORDER BY 什么作用？",
    "answer": "user-provided sorting criteria"
  },
  {
    "type": "fib",
    "question": "6 aggregate functions: 空格隔开",
    "answer": "COUNT(*) COUNT(ALL | DISTINCT col) SUM(col) MIN(col) MAX(col) AVG(col)"
  },
  {
    "type": "fib",
    "question": "5 supported JOINs types",
    "answer": "CROSS JOIN INNER JOIN LEFT JOIN RIGHT JOIN FULL OUTER JOIN"
  },
  {
    "type": "fib",
    "question": "what was specified in the ON clause.",
    "answer": "matching columns"
  },
  {
    "type": "fib",
    "question": "The ways that sub-query can return information",
    "answer": "a single value a single column one or more columns"
  },
  {
    "type": "fib",
    "question": "Subqueries can be used in these clauses：",
    "answer": "WHERE HAVING FROM SELECT"
  },
  {
    "type": "fib",
    "question": "SOME, ANY, and ALL are logical operators used to:",
    "answer": "compare a single value against a set of values returned by a subquery"
  },
  {
    "type": "fib",
    "question": "what is Non-correlated Subqueries",
    "answer": "The subquery is completely independent. It does not rely on any data from the outer query to execute. Runs once for the entire query"
  },
  {
    "type": "fib",
    "question": "what is correlated Subqueries",
    "answer": "The subquery references one or more columns from the outer query. "
  },
  ],
  Javascript_quiz01:[

  {
    "type": "mcq",
    "question": "What type of language is JavaScript?",
    "options": [
      "Compiled language",
      "Interpreted (scripting) language",
      "Assembly language",
      "Machine language"
    ],
    "answer": "Interpreted (scripting) language"
  },
  {
    "type": "mcq",
    "question": "Who created JavaScript?",
    "options": [
      "James Gosling",
      "Brendan Eich",
      "Guido van Rossum",
      "Dennis Ritchie"
    ],
    "answer": "Brendan Eich"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about JavaScript variables?",
    "options": [
      "JavaScript is strongly typed, so variable types must be declared",
      "Variable names can start with a number",
      "Variable names are case sensitive",
      "Variable names can include spaces"
    ],
    "answer": "Variable names are case sensitive"
  },
  {
    "type": "mcq",
    "question": "Which naming convention is commonly used for JavaScript classes?",
    "options": [
      "camelCase",
      "snake_case",
      "PascalCase",
      "kebab-case"
    ],
    "answer": "PascalCase"
  },
  {
    "type": "mcq",
    "question": "What is a scripting host in the context of JavaScript?",
    "options": [
      "A web server that stores databases",
      "A browser containing a scripting engine",
      "A compiled language runtime",
      "An operating system service for scripts"
    ],
    "answer": "A browser containing a scripting engine"
  },
  {
    "type": "mcq",
    "question": "JavaScript is described as loosely typed. What does this mean?",
    "options": [
      "Variables must always have a data type declared",
      "Data types are automatically determined and do not need to be declared",
      "Variables cannot store different types of values",
      "Variables can only store numbers"
    ],
    "answer": "Data types are automatically determined and do not need to be declared"
  },
  {
    "type": "mcq",
    "question": "Which of the following characters are allowed at the start of a JavaScript variable name?",
    "options": [
      "Numbers only",
      "Letters, underscore (_), or dollar sign ($)",
      "Hyphen (-) or space",
      "Any symbol"
    ],
    "answer": "Letters, underscore (_), or dollar sign ($)"
  },
  {
    "type": "mcq",
    "question": "In a website, which component is responsible for storing and persisting data between requests?",
    "options": [
      "Web browser",
      "Web server",
      "Database server",
      "Client machine"
    ],
    "answer": "Database server"
  },
  {
    "type": "mcq",
    "question": "Which of the following is true about a website's client?",
    "options": [
      "It stores data permanently for all users",
      "It executes JavaScript received from the server",
      "It generates dynamic HTML for the server",
      "It hosts static HTML and CSS files"
    ],
    "answer": "It executes JavaScript received from the server"
  },
  {
    "type": "mcq",
    "question": "Which of these naming conventions is recommended for JavaScript variables and methods?",
    "options": [
      "PascalCase",
      "camelCase",
      "snake_case",
      "kebab-case"
    ],
    "answer": "camelCase"
  },
  {
    "type": "mcq",
    "question": "Which operator can be used to concatenate strings in JavaScript?",
    "options": [
      "+",
      "-",
      "*",
      "&"
    ],
    "answer": "+"
  },
  {
    "type": "mcq",
    "question": "What will be the output of the following code?\nlet number = 4;\nlet hockeyJerseyNumber = 'My hockey jersey number is ' + number;",
    "options": [
      "My hockey jersey number is number",
      "My hockey jersey number is 4",
      "My hockey jersey number is ${number}",
      "Error"
    ],
    "answer": "My hockey jersey number is 4"
  },
  {
    "type": "mcq",
    "question": "Which operator is used to append to an existing string in JavaScript?",
    "options": [
      "+=",
      "-=",
      "*=",
      "/="
    ],
    "answer": "+="
  },
  {
    "type": "mcq",
    "question": "What is the correct way to include a variable inside a string using template literals?",
    "options": [
      "My number is $number",
      "My number is ${number}",
      "My number is +number+",
      "My number is #number#"
    ],
    "answer": "My number is ${number}"
  },
  {
    "type": "mcq",
    "question": "Which escape character allows you to include double quotes inside a double-quoted string?",
    "options": [
      "\\\"",
      "\\'",
      "\\n",
      "\\t"
    ],
    "answer": "\\\""
  },
  {
    "type": "mcq",
    "question": "What will be the output of the following code?\nlet e = \"It's right over there.\";\nconsole.log(e);",
    "options": [
      "It\\'s right over there.",
      "It's right over there.",
      "It\\\"s right over there.",
      "Syntax Error"
    ],
    "answer": "It's right over there."
  },
  {
    "type": "mcq",
    "question": "Which property gives the length of a string in JavaScript?",
    "options": [
      ".length",
      ".size",
      ".count",
      ".total"
    ],
    "answer": ".length"
  },
  {
    "type": "mcq",
    "question": "What does the substring() method do?",
    "options": [
      "Replaces part of a string",
      "Returns a portion of the string from start index to end index",
      "Converts the string to uppercase",
      "Removes spaces from the string"
    ],
    "answer": "Returns a portion of the string from start index to end index"
  },
  {
    "type": "mcq",
    "question": "The substr() method is considered deprecated. What does it do?",
    "options": [
      "Returns a substring using start index and length",
      "Returns a substring using start and end index",
      "Converts a string to lowercase",
      "Removes trailing spaces"
    ],
    "answer": "Returns a substring using start index and length"
  },
  {
    "type": "mcq",
    "question": "What will 'Hello'.indexOf('l') return?",
    "options": [
      "1",
      "2",
      "3",
      "-1"
    ],
    "answer": "2"
  },
  {
    "type": "mcq",
    "question": "What will 'Hello'.indexOf('l', 2) return?",
    "options": [
      "1",
      "2",
      "3",
      "-1"
    ],
    "answer": "2"
  },
  {
    "type": "mcq",
    "question": "Which method converts a string to uppercase in JavaScript?",
    "options": [
      ".toUpper()",
      ".toUpperCase()",
      ".uppercase()",
      ".upperCase()"
    ],
    "answer": ".toUpperCase()"
  },
  {
    "type": "mcq",
    "question": "Which method converts a string to lowercase in JavaScript?",
    "options": [
      ".toLowerCase()",
      ".lowerCase()",
      ".toLower()",
      ".lowercase()"
    ],
    "answer": ".toLowerCase()"
  },
  {
    "type": "mcq",
    "question": "Which method removes spaces from both ends of a string?",
    "options": [
      ".trim()",
      ".strip()",
      ".cut()",
      ".slice()"
    ],
    "answer": ".trim()"
  },
  {
    "type": "mcq",
    "question": "Which of the following is the correct way to combine substrings from a string?\nlet d = 'aaaabcdefff';\nlet e = d.substring(0,1) + d.substring(4,9);",
    "options": [
      "abcdef",
      "aaaabcde",
      "abcdefff",
      "Error"
    ],
    "answer": "abcdef"
  },
  {
    "type": "mcq",
    "question": "How do you create a new Date object with the current date and time?",
    "options": [
      "new Date()",
      "Date.now()",
      "Date.create()",
      "new DateTime()"
    ],
    "answer": "new Date()"
  },
  {
    "type": "mcq",
    "question": "Which method returns the year of a Date object as a four-digit number?",
    "options": [
      ".getYear()",
      ".getFullYear()",
      ".getUTCYear()",
      ".year()"
    ],
    "answer": ".getFullYear()"
  },
  {
    "type": "mcq",
    "question": "In JavaScript, what is the range of values returned by getMonth()?",
    "options": [
      "1-12",
      "0-11",
      "0-12",
      "1-11"
    ],
    "answer": "0-11"
  },
  {
    "type": "mcq",
    "question": "Which method returns the day of the month (1-31)?",
    "options": [
      ".getDate()",
      ".getDay()",
      ".getMonth()",
      ".getTime()"
    ],
    "answer": ".getDate()"
  },
  {
    "type": "mcq",
    "question": "What does getDay() return for Sunday?",
    "options": [
      "0",
      "1",
      "6",
      "7"
    ],
    "answer": "0"
  },
  {
    "type": "mcq",
    "question": "Which method returns the number of milliseconds since January 1, 1970?",
    "options": [
      ".getMilliseconds()",
      ".getTime()",
      ".valueOf()",
      ".getUTCMilliseconds()"
    ],
    "answer": ".getTime()"
  },
  {
    "type": "mcq",
    "question": "Which method returns a human-readable date string without time?",
    "options": [
      ".toDateString()",
      ".toTimeString()",
      ".toISOString()",
      ".toString()"
    ],
    "answer": ".toDateString()"
  },
  {
    "type": "mcq",
    "question": "Which method returns a human-readable time string including local timezone?",
    "options": [
      ".toTimeString()",
      ".toDateString()",
      ".toISOString()",
      ".toString()"
    ],
    "answer": ".toTimeString()"
  },
  {
    "type": "mcq",
    "question": "What does date.toISOString() return?",
    "options": [
      "Local time string",
      "UTC time string in ISO 8601 format",
      "Date only without time",
      "Milliseconds since 1970"
    ],
    "answer": "UTC time string in ISO 8601 format"
  },
  {
    "type": "mcq",
    "question": "Which of the following constructors creates a Date object for June 19, 2019 at 15:00:00?",
    "options": [
      "new Date('June 19, 2019 15:00:00')",
      "new Date(2019, 5, 19, 15, 0, 0)",
      "new Date(1560975600000)",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "type": "mcq",
    "question": "What is a correct way to compare two Date objects to see which is earlier?",
    "options": [
      "Using > or < operators",
      "Using == operator",
      "Using === operator",
      "Using .equals() method"
    ],
    "answer": "Using > or < operators"
  },
  {
    "type": "mcq",
    "question": "Why does date1 == date2 return false even if the two dates are identical?",
    "options": [
      "Because Date objects cannot be compared",
      "Because == compares object references, not values",
      "Because == only works for numbers",
      "Because dates must use .compare()"
    ],
    "answer": "Because == compares object references, not values"
  },
  {
    "type": "mcq",
    "question": "Which method is used to set or modify the day of a Date object?",
    "options": [
      ".setDay()",
      ".setDate()",
      ".setMonth()",
      ".setTime()"
    ],
    "answer": ".setDate()"
  },
  {
    "type": "mcq",
    "question": "What happens if you set the date beyond the number of days in a month using setDate()?",
    "options": [
      "It causes an error",
      "It automatically adjusts to the next month",
      "It ignores the extra days",
      "It resets to the first day of the month"
    ],
    "answer": "It automatically adjusts to the next month"
  },
  {
    "type": "mcq",
    "question": "If you create a Date object with new Date(), where does the time come from?",
    "options": [
      "Server time",
      "Client machine time",
      "UTC time by default",
      "Always set to midnight"
    ],
    "answer": "Client machine time"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a correct way to embed JavaScript directly in an HTML page?",
    "options": [
      "<script> let x = 10; </script>",
      "<js> let x = 10; </js>",
      "<javascript> let x = 10; </javascript>",
      "<style> let x = 10; </style>"
    ],
    "answer": "<script> let x = 10; </script>"
  },
  {
    "type": "mcq",
    "question": "How do you include an external JavaScript file in HTML?",
    "options": [
      "<script src='app.js'></script>",
      "<script href='app.js'></script>",
      "<js src='app.js'></js>",
      "<script file='app.js'></script>"
    ],
    "answer": "<script src='app.js'></script>"
  },
  {
    "type": "mcq",
    "question": "Which method displays a dialog box asking the user to input data?",
    "options": [
      "alert()",
      "confirm()",
      "prompt()",
      "window()"
    ],
    "answer": "prompt()"
  },
  {
    "type": "mcq",
    "question": "What does the alert() method do?",
    "options": [
      "Displays a message and waits for user input",
      "Displays a message with an OK button",
      "Redirects the user to another page",
      "Writes content to the console"
    ],
    "answer": "Displays a message with an OK button"
  },
  {
    "type": "mcq",
    "question": "Which property can be used to redirect a user to another webpage?",
    "options": [
      "window.navigate",
      "window.redirect",
      "window.location",
      "document.redirect"
    ],
    "answer": "window.location"
  },
  {
    "type": "mcq",
    "question": "Which function converts a string to an integer in JavaScript?",
    "options": [
      "parseInt()",
      "parseFloat()",
      "Number()",
      "toInteger()"
    ],
    "answer": "parseInt()"
  },
  {
    "type": "mcq",
    "question": "Which function converts a string to a floating-point number?",
    "options": [
      "parseInt()",
      "parseFloat()",
      "Number.parse()",
      "toFloat()"
    ],
    "answer": "parseFloat()"
  },
  {
    "type": "mcq",
    "question": "What does isNaN('123') return?",
    "options": [
      "true",
      "false",
      "NaN",
      "undefined"
    ],
    "answer": "false"
  },
  {
    "type": "mcq",
    "question": "What does isNaN('abc') return?",
    "options": [
      "true",
      "false",
      "NaN",
      "undefined"
    ],
    "answer": "true"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of a try...catch block in JavaScript?",
    "options": [
      "To loop through arrays",
      "To handle errors and exceptions",
      "To declare variables",
      "To redirect users"
    ],
    "answer": "To handle errors and exceptions"
  },
  {
    "type": "mcq",
    "question": "In the try...catch example, what happens when throw new Error() is executed?",
    "options": [
      "The code continues executing after throw",
      "The code immediately jumps to the catch block",
      "Nothing happens",
      "The program stops completely"
    ],
    "answer": "The code immediately jumps to the catch block"
  },
  {
    "type": "mcq",
    "question": "Which object represents the entire HTML document in the DOM?",
    "options": [
      "window",
      "document",
      "body",
      "html"
    ],
    "answer": "document"
  },
  {
    "type": "mcq",
    "question": "Which method writes HTML or text directly into the document at the script’s location?",
    "options": [
      "document.append()",
      "document.write()",
      "document.output()",
      "document.show()"
    ],
    "answer": "document.write()"
  },
  {
    "type": "mcq",
    "question": "Can JavaScript code in an external .js file use the <script> tag inside the file?",
    "options": [
      "Yes, always",
      "No, it should not use <script> tags",
      "Only if placed in the head",
      "Only if placed in the body"
    ],
    "answer": "No, it should not use <script> tags"
  },
  {
    "type": "mcq",
    "question": "When using prompt(), what type is the returned user input?",
    "options": [
      "String",
      "Number",
      "Boolean",
      "Object"
    ],
    "answer": "String"
  }
  ],
  BASH_quiz02:[
  {
    "type": "fib",
    "question": "编辑文件 _____ file.txt",
    "answer": "vim"
  },
  {
    "type": "fib",
    "question": "保存文件并退出_____",
    "answer": ":wq"
  },
  {
    "type": "fib",
    "question": "退出编辑文件 _____ ",
    "answer": ":q"
  },
  {
    "type": "fib",
    "question": "退出编辑文件不保存 _____ ",
    "answer": ":q!"
  },
  {
    "type": "fib",
    "question": "保存新文件/另存为新文件 _____ file.txt ",
    "answer": ":w"
  },
  {
    "type": "fib",
    "question": "插入file.txt里面的内容 _____ file.txt",
    "answer": ":r"
  },
  {
    "type": "fib",
    "question": "编辑文件 _____ file.txt ",
    "answer": ":e"
  },
  {
    "type": "fib",
    "question":" 剪切当前行 _____ ",
    "answer": "dd"
  },
  {
    "type": "fib",
    "question":" 粘贴 _____ ",
    "answer": "P"
  },
  {
    "type": "fib",
    "question":" 回到文件的第一个字符 _____ ",
    "answer": "gg"
  },
  {
    "type": "fib",
    "question":" 撤回 _____ ",
    "answer": "u"
  },
  {
    "type": "fib",
    "question":" 删除 _____ ",
    "answer": "x"
  },
  {
    "type": "fib",
    "question":" comment_____ ",
    "answer": "#"
  },
  {
    "type": "fib",
    "question":" 显示行数 _____ ",
    "answer": ":set number"
  },
  {
    "type": "fib",
    "question":" 显示正在编辑的文件 _____ ",
    "answer": "control G"
  },
  {
    "type": "fib",
    "question":" 写script的第一行，这告诉系统：请使用解释器来运行这个文件 _____ ",
    "answer": "#!/bin/bash"
  },
  {
    "type": "fib",
    "question":" 程序暂时切出去（不是退出）临时退出 Vim 去查看某个目录，又不想关闭文件时非常有用 _____ ",
    "answer": "control Z"
  },
  {
    "type": "fib",
    "question":" 在终端切换回第3个脚本_____ ",
    "answer": "fg 3"
  },
  {
    "type": "fib",
    "question":" 查看后台任务，看看后台到底有多少个程序在排队____ ",
    "answer": "jobs"
  },
  {
    "type": "fib",
    "question":" 判断字符串长度是否为 0  if [ __ “$1” ]\nthen\necho “Your argument is not empty”\nfi\n记住方括号要有空格 ",
    "answer": "-z"
  },
  {
    "type": "fib",
    "question":" if [ __ “$1” ]\nthen\necho “This file exists”\nfi\n记住方括号要有空格 ",
    "answer": "-e"
  },
  {
    "type": "fib",
    "question":" if [ __ “$1” ]\nthen\necho “This is a file object”\nfi\n记住方括号要有空格 ",
    "answer": "-f"
  },
   {
    "type": "fib",
    "question":" if [ __ “$1” ]\nthen\necho “This is a directory object”\nfi\n记住方括号要有空格 ",
    "answer": "-d"
  },
  {
    "type": "fib",
    "question":"判断当前用户对该文件是否有读权限___",
    "answer": "-r"
  },
  {
    "type": "fib",
    "question":"判断当前用户对该文件是否有写权限___",
    "answer": "-w"
  },
  {
    "type": "fib",
    "question":"判断当前用户对该文件是否有执行权限___",
    "answer": "-x"
  },
  {
    "type": "fib",
    "question":"判断该文件是否是符号链接___",
    "answer": "-h -L"
  },
  {
    "type": "fib",
    "question":"判断文件是否存在且长度大于 0 (Size > 0)，即文件不是空的___",
    "answer": "-s"
  },
  {
    "type": "fib",
    "question":"字符串是否不为空___",
    "answer": "-n"
  },
  { 
    "type": "fib",
    "question":"numeric test中的等于___",
    "answer": "-eq"
  },
  {
    "type": "fib",
    "question":"numeric test中的不等于___",
    "answer": "-ne"
  },
  {
    "type": "fib",
    "question":"numeric test中的大于___",
    "answer": "-gt"
  },
  {
    "type": "fib",
    "question":"numeric test中的小于___",
    "answer": "-lt"
  },
  {
    "type": "fib",
    "question":"numeric test中的大于等于___",
    "answer": "-ge"
  },
  {
    "type": "fib",
    "question":"numeric test中的小于等于___",
    "answer": "-le"
  },
  {
    "type": "fib",
    "question":"在 [ ] 内部使用时,AND 逻辑，所有条件都必须满足___",
    "answer": "-a"
  },
  {
    "type": "fib",
    "question":"连接两个 [ ] 括号，AND 逻辑，所有条件都必须满足___",
    "answer": "&&"
  },
  {
    "type": "fib",
    "question":"在 [ ] 内部使用时,OR 逻辑，满足任意一个即可___",
    "answer": "-o"
  },
  {
    "type": "fib",
    "question":"连接两个 [ ] 括号，OR 逻辑，满足任意一个即可___",
    "answer": "||"
  },
  {
    "type": "fib",
    "question":"参数的个数___",
    "answer": "$#"
  },
  {
    "type": "fib",
    "question":"显示所有参数___",
    "answer": "$* / $@"
  },
  {
    "type": "fib",
    "question":"上一条命令的退出状态码。成功返回 0，失败返回非零值____",
    "answer": "$?"
  },
  {
    "type": "fib",
    "question":"当前 Shell 的 Process ID (PID)____",
    "answer": "$$"
  },
  {
    "type": "fib",
    "question":"最近运行的后台进程的 PID____",
    "answer": "$!"
  },
  {
    "type": "fib",
    "question":" _____存储了一系列目录的路径，这些目录之间用冒号（:）隔开。当你输入一个命令（如 ls 或 who）时，系统会按照 $PATH 中列出的顺序，去这些文件夹里寻找对应的可执行文件 ",
    "answer": "$PATH"
  },
  {
    "type": "fib",
    "question":" 运行文件file.txt的三个方式（用,隔开）_____ ",
    "answer": "bash file.txt, file.txt, . file.txt"
  },
  {
    "type": "fib",
    "question":" xtrace 模式，核心作用是：在执行每一条命令之前，先将其打印到终端。_____ ",
    "answer": "bash -x file.txt"
  },
  {
    "type": "fib",
    "question":"哪条命令输出结果通常包含：Login: 用户名,Name: 用户的全名（在 /etc/passwd 中定义的）。Tty: 终端设备名称。Idle: 空闲时间（该用户多久没动键盘了）。Login Time: 登录日期和时间。Office: 办公地点或电话（如果有记录）_____ ",
    "answer": "finger"
  },
  {
    "type": "fib",
    "question":"_____ 显示当前登录账户的详细信息",
    "answer": "finger $USER"
  },
  {
    "type": "fib",
    "question":"_____ 在一堆文字中，找到匹配你要求的行，并把它显示出来（Globally search for a Regular Expression and Print）",
    "answer": "grep"
  },
  {
    "type": "fib",
    "question":"当你执行______，你会看到一串由冒号（:）隔开的路径。例如：/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin \n这代表了搜索的先后顺序：\n先看 /usr/local/bin\n没找到？再看 /usr/bin\n还没找到？看 /bin……以此类推。",
    "answer": "echo $PATH"
  },
  {
    "type": "fib",
    "question":"Bash 中的三种主要测试类型,（小写逗号隔开）",
    "answer": "file test, string test, numeric test"
  },
  ],
  SQL_quiz03:[
  {
    "type": "fib",
    "question": "What is a VIEW?",
    "answer": "A virtual table based on the result set of a SELECT query."
  },
  {
    "type": "fib",
    "question": "What is a base table?",
    "answer": "A table that physically stores data."
  },
  {
    "type": "fib",
    "question": "Who can use view?",
    "answer": "Any user with the appropriate permissions."
  },
  {
    "type": "fib",
    "question": "What is WITH ENCRYPTION?",
    "answer": "A clause that specifies the view should be encrypted so that its definition is not visible."
  },
  {
    "type": "fib",
    "question": "What is WITH SCHEMABINDING?",
    "answer": "A clause that prevents the underlying table from being modified while the view is in use."
  },
  {
    "type": "fib",
    "question": "What is WITH CHECK OPTION?",
    "answer": "A clause that ensures all data modifications through the view adhere to the view's WHERE clause."
  },
  {
    "type": "fib",
    "question": "What clause can not be used with views?",
    "answer": "SELECT ... INTO and The ORDER BY clause."
  },
  {
    "type": "fib",
    "question": "What are the requirements for creating a view?",
    "answer": "The SELECT clause cannot include a DISTINCT or TOP clause, aggregate function, calculated value, GROUP BY or HAVING clause, UNION operator. It must satisfy the requirements of the Columns(s) for the underlying Table(s)"
  },
  {
    "type": "fib",
    "question": "What is an updated view?",
    "answer": "A view that that can be used in an INSERT, UPDATE, or DELETE statement to modify the contents of a base table that the view refers to."
  },
  {
    "type": "fib",
    "question": "If you delete a table, what you should do with the views?",
    "answer": "You should drop the views that depend on the deleted table."
  },
  {
    "type": "fib",
    "question": "What is a script?",
    "answer": "A script is a .SQL file containing a series of SQL statements that are executed in sequence to perform a task."
  },
  {
    "type": "fib",
    "question": "What does the GO command signal?",
    "answer": "The end of a batch of T-SQL statements."
  },
  {
    "type": "fib",
    "question": "5 statements that must be in their own batch?",
    "answer": "1. CREATE VIEW 2. CREATE TRIGGER 3. CREATE PROCEDURE 4. CREATE FUNCTION 5. CREATE SCHEMA"
  },
  {
    "type": "fib",
    "question": "What does IF...ELSE do?",
    "answer": "It controls the flow of execution based on a condition."
  },
  {
    "type": "fib",
    "question": "What does BEGIN...END do?",
    "answer": "It defines a statement block."
  },
  {
    "type": "fib",
    "question": "What does TRY...CATCH do?",
    "answer": "It controls the flow of execution when an error occurs."
  },
  {
    "type": "fib",
    "question": "What does WHILE do?",
    "answer": "It creates a loop that executes as long as a condition is true."
  },
  {
    "type": "fib",
    "question": "What does BREAK do?",
    "answer": "It exits innermost while loop."
  },
  {
    "type": "fib",
    "question": "What does CONTINUE do?",
    "answer": "It returns to the beginning of the while loop."
  },
  {
    "type": "fib",
    "question": "What does RETURN do?",
    "answer": "It exits a function and optionally returns a value."
  },
  {
    "type": "fib",
    "question": "What does PRINT do?",
    "answer": "It displays a message to the client."
  },
  {
    "type": "fib",
    "question": "What does SET do?",
    "answer": "It assigns a value to a variable."
  },
  {
    "type": "fib",
    "question": "What does DECLARE do?",
    "answer": "It defines a local variable."
  },
  {
    "type": "fib",
    "question": "What does EXECUTE do?",
    "answer": "It executes a stored procedure or a string of T-SQL code."
  },
  {
    "type": "fib",
    "question": "What is a scalar variable?",
    "answer": "It holds a single value."
  },
  {
    "type": "fib",
    "question": "What is a table variable?",
    "answer": "It holds a set of results."
  },
  {
    "type": "fib",
    "question": "What is a temporary table?",
    "answer": "It stores a result set temporarily and is automatically dropped when closing the session."
  },
  {
    "type": "fib",
    "question": "Where does temporary table data reside?",
    "answer": "It resides in the tempdb system database."
  },
  {
    "type": "fib",
    "question": "What is local temporary table?",
    "answer": "It is a temporary table that is visible only to the current session."
  },
  {
    "type": "fib",
    "question": "What is global temporary table?",
    "answer": "It is a temporary table that is visible to all sessions."
  },
  {
    "type": "fib",
    "question": "What are 5 types of T-SQL table objects?",
    "answer": "1. Standard Tables 2. Views 3. Table Variables 4. Temporary Tables 5. Derived Tables"
  },
  {
    "type": "fib",
    "question": "What does @@IDENTITY do?",
    "answer": "It returns the last identity value generated for any table in the current session and the current scope."
  },
  {
    "type": "fib",
    "question": "What does BEGIN TRY...END TRY contain?",
    "answer": "It contains the code that may throw an error."
  },
  {
    "type": "fib",
    "question": "What does BEGIN CATCH...END CATCH contain?",
    "answer": "It contains the code that handles an error."
  },
  {
    "type": "fib",
    "question": "What does ERROR_NUMBER() do?",
    "answer": "It returns the error number for the last Transact-SQL statement executed."
  },
  {
    "type": "fib",
    "question": "What does ERROR_MESSAGE() do?",
    "answer": "It returns the error message for the last Transact-SQL statement executed."
  },
  {
    "type": "fib",
    "question": "What does ERROR_SEVERITY() do?",
    "answer": "It returns the error severity for the last Transact-SQL statement executed."
  },
  {
    "type": "fib",
    "question": "What does ERROR_STATE() do?",
    "answer": "It returns the state number for the last Transact-SQL statement executed."
  },
  {
    "type": "fib",
    "question": "What does @@ERROR do?",
    "answer": "It returns the error number for the last Transact-SQL statement executed."
  },
  {
    "type": "fib",
    "question": "What does @@IDENTITY do?",
    "answer": "It returns the last identity value generated for any table in the current session and the current scope."
  },
  {
    "type": "fib",
    "question": "What does @@ROWCOUNT do?",
    "answer": "It returns the number of rows affected by the last statement."
  },
  {
    "type": "fib",
    "question": "What does IDENT_CURRENT(<table_name>) do?",
    "answer": "It returns the last identity value generated for a specific table in any session and any scope."
  },
  {
    "type": "fib",
    "question": "What does @@SERVERNAME do?",
    "answer": "It returns the name of the SQL Server instance."
  },
  {
    "type": "fib",
    "question": "What does HOST_NAME() do?",
    "answer": "It returns the name of the workstation running the current instance of SQL Server."
  },
  {
    "type": "fib",
    "question": "What does SYSTEM_USER do?",
    "answer": "It returns the name of the user connected to the SQL Server instance."
  }
  ]
};