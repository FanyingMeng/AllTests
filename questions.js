const questionBank = {
  SQLquiz01: [
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
  ]
};