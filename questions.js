const questionBank = {
PHP_Q2:[

  // ===== Section 2: Exceptions =====
  { "type": "tf", "question": "An exception is an event that occurs during program execution and interrupts the normal flow of instructions.", "answer": true },
  { "type": "tf", "question": "The purpose of exceptions is to make the program terminate immediately whenever an error occurs.", "answer": false },
  { "type": "mcq", "question": "Which keyword is used to generate (raise) an exception when something goes wrong?", "options": ["try", "catch", "throw", "finally"], "answer": "throw" },
  { "type": "mcq", "question": "Which block contains code that might produce an exception?", "options": ["try", "catch", "finally", "throw"], "answer": "try" },
  { "type": "mcq", "question": "Inside catch (Exception $e), which call retrieves the exception message?", "options": ["$e->message()", "$e->getMessage()", "$e::getMessage()", "getMessage($e)"], "answer": "$e->getMessage()" },
  { "type": "tf", "question": "The finally block executes whether an exception occurs or not.", "answer": true },
  { "type": "mcq", "question": "What is the finally block mainly useful for?", "options": ["Throwing a new exception", "Cleanup operations such as closing a database connection", "Skipping the catch block", "Declaring variables used in try"], "answer": "Cleanup operations such as closing a database connection" },
  { "type": "mcq", "question": "What is the output?\n\ntry {\n  echo \"A\";\n  throw new Exception(\"B\");\n  echo \"C\";\n} catch (Exception $e) {\n  echo $e->getMessage();\n}\necho \"D\";", "options": ["ABCD", "ABD", "ACD", "AB"], "answer": "ABD" },
  { "type": "mcq", "question": "What is the output?\n\ntry {\n  echo \"1\";\n} catch (Exception $e) {\n  echo \"2\";\n} finally {\n  echo \"3\";\n}", "options": ["1", "13", "123", "3"], "answer": "13" },
  { "type": "mcq", "question": "Which built-in exception class is best when a function receives an invalid argument (e.g. MSRP <= 0 or dividing by 0)?", "options": ["InvalidArgumentException", "DivisionError", "ArgumentException", "TypeException"], "answer": "InvalidArgumentException" },
  { "type": "tf", "question": "A single try block can be followed by multiple catch blocks.", "answer": true },
  { "type": "mcq", "question": "When using multiple catch blocks, which order is correct?", "options": ["Catch Exception first, then InvalidArgumentException", "Catch InvalidArgumentException first, then the general Exception", "The order never matters", "Only one catch block is allowed"], "answer": "Catch InvalidArgumentException first, then the general Exception" },
  { "type": "tf", "question": "If file_get_contents() tries to read a file that does not exist, PHP generates a warning and the application may continue executing.", "answer": true },
  { "type": "tf", "question": "Best practice: exceptions should be used for ordinary program flow, like ending a normal loop.", "answer": false },
  { "type": "tf", "question": "It is good practice to show detailed technical error information (stack traces, SQL) to end users.", "answer": false },
  { "type": "mcq", "question": "Which of the following is NOT an exception-handling best practice from the slides?", "options": ["Provide meaningful exception messages", "Log unexpected errors for debugging", "Swallow exceptions with an empty catch block", "Catch exceptions where you can appropriately handle them"], "answer": "Swallow exceptions with an empty catch block" },

  // ===== Section 3: GET =====
  { "type": "tf", "question": "GET requests can be bookmarked, remain in browser history and can be cached.", "answer": true },
  { "type": "tf", "question": "GET requests are a good choice for sending sensitive data such as passwords.", "answer": false },
  { "type": "mcq", "question": "Which statement about HTTP GET is TRUE?", "options": ["It has no length restrictions", "It is never cached", "It has length restrictions and should only be used to get data", "Its data is sent in the request body"], "answer": "It has length restrictions and should only be used to get data" },
  { "type": "mcq", "question": "In a URL, which character separates the requested resource from the query string parameters?", "options": ["&", "?", "#", "="], "answer": "?" },
  { "type": "mcq", "question": "For the URL details.php?id=5, how do you read the value 5 in PHP?", "options": ["$_POST['id']", "$_GET['id']", "$_SERVER['id']", "$GET->id"], "answer": "$_GET['id']" },
  { "type": "tf", "question": "The $_GET superglobal is an associative array whose keys are the query string names.", "answer": true },
  { "type": "mcq", "question": "What does $id = $_GET['id'] ?? null; do?", "options": ["Always sets $id to null", "Sets $id to $_GET['id'] if it exists and is not null, otherwise null", "Throws an exception if id is missing", "Compares $_GET['id'] with null"], "answer": "Sets $id to $_GET['id'] if it exists and is not null, otherwise null" },
  { "type": "mcq", "question": "Which function is used to check whether a query string parameter is present?", "options": ["isset($_GET['id'])", "exists($_GET['id'])", "defined($_GET['id'])", "has($_GET['id'])"], "answer": "isset($_GET['id'])" },
  { "type": "mcq", "question": "In ex3 details.php, if the vehicle is not found the page runs header(\"Location: inventory.php\"); exit;. What does this do?", "options": ["Prints the text inventory.php", "Redirects the browser to inventory.php and stops the script", "Includes inventory.php inside details.php", "Throws an exception"], "answer": "Redirects the browser to inventory.php and stops the script" },

  // ===== Section 3.2: POST =====
  { "type": "tf", "question": "POST requests are never cached, are not stored in browser history and cannot be bookmarked.", "answer": true },
  { "type": "tf", "question": "POST requests can carry binary data such as images and files.", "answer": true },
  { "type": "tf", "question": "POST data is shipped in the URL query string.", "answer": false },
  { "type": "mcq", "question": "To make an HTML form send a POST request, which attribute must be set?", "options": ["action=\"post\"", "method=\"post\"", "type=\"post\"", "enctype=\"post\""], "answer": "method=\"post\"" },
  { "type": "mcq", "question": "If a form with method=\"post\" has NO action attribute, where is the request sent?", "options": ["To index.php", "Nowhere, the form will not submit", "To the same page the form is defined on", "To the previous page in history"], "answer": "To the same page the form is defined on" },
  { "type": "mcq", "question": "Which code correctly checks that the current request is a POST request?", "options": ["if ($_POST['method'] === 'POST')", "if ($_SERVER['REQUEST_METHOD'] === 'POST')", "if ($_GET['REQUEST_METHOD'] == 'POST')", "if (isPost())"], "answer": "if ($_SERVER['REQUEST_METHOD'] === 'POST')" },
  { "type": "mcq", "question": "Given <input type=\"text\" id=\"v1\" name=\"val1\">, how do you read its submitted value?", "options": ["$_POST['v1']", "$_POST['val1']", "$_POST['text']", "$_POST[0]"], "answer": "$_POST['val1']" },
  { "type": "mcq", "question": "What is the ?? operator called?", "options": ["Ternary operator", "Spaceship operator", "Null Coalescing Operator", "Elvis operator"], "answer": "Null Coalescing Operator" },
  { "type": "mcq", "question": "Which form attribute is required for a file upload to populate $_FILES?", "options": ["enctype=\"multipart/form-data\"", "enctype=\"text/plain\"", "method=\"get\"", "accept=\"file\""], "answer": "enctype=\"multipart/form-data\"" },
  { "type": "mcq", "question": "Which function moves an uploaded file from its temporary location to a folder on the server?", "options": ["copy_file()", "move_uploaded_file()", "upload_file()", "save_file()"], "answer": "move_uploaded_file()" },

  // ===== Section 4.1: OOP intro =====
  { "type": "tf", "question": "A class is a blueprint for creating objects.", "answer": true },
  { "type": "mcq", "question": "Which keyword creates an object from a class?", "options": ["create", "new", "make", "instance"], "answer": "new" },
  { "type": "mcq", "question": "Objects hold their state in ______ and expose behaviour through ______.", "options": ["methods, properties", "properties, methods", "constants, classes", "arrays, functions"], "answer": "properties, methods" },
  { "type": "mcq", "question": "What does $this refer to inside a class method?", "options": ["The class itself", "The parent class", "The current object (instance)", "The global scope"], "answer": "The current object (instance)" },
  { "type": "tf", "question": "In a PHP class file, the closing ?> tag is not needed.", "answer": true },
  { "type": "mcq", "question": "Which access modifier makes a member accessible ONLY from within the class itself?", "options": ["public", "private", "protected", "static"], "answer": "private" },
  { "type": "mcq", "question": "Which access modifier allows access from the class and its subclasses, but not from outside?", "options": ["public", "private", "protected", "readonly"], "answer": "protected" },
  { "type": "tf", "question": "A private property can be set directly from outside the class with $obj->name = \"x\";", "answer": false },
  { "type": "mcq", "question": "Why should a setter be used for a property like age, even if it could be public?", "options": ["Setters run faster than direct assignment", "So validation can be applied (e.g. age must be positive)", "Public properties cannot be read", "PHP requires setters for all properties"], "answer": "So validation can be applied (e.g. age must be positive)" },
  { "type": "mcq", "question": "What is the name of a constructor method in PHP?", "options": ["construct()", "__construct()", "_construct()", "ClassName()"], "answer": "__construct()" },
  { "type": "mcq", "question": "What does this code do (PHP 8.0+)?\n\nclass MyClass {\n  public function __construct(private $name, private $email) {}\n}", "options": ["Causes a syntax error because the body is empty", "Declares private properties $name and $email and assigns the arguments to them (constructor promotion)", "Creates local variables only", "Creates static properties"], "answer": "Declares private properties $name and $email and assigns the arguments to them (constructor promotion)" },
  { "type": "mcq", "question": "Constructor promotion was introduced in which PHP version?", "options": ["PHP 5", "PHP 7.4", "PHP 8.0", "PHP 8.1"], "answer": "PHP 8.0" },
  { "type": "tf", "question": "In a promoted constructor, a parameter WITHOUT an access modifier is not promoted and must be assigned in the constructor body.", "answer": true },
  { "type": "mcq", "question": "What happens?\n\nclass MyClass { public string $name; }\n$t = new MyClass();\nvar_dump($t->name);", "options": ["Outputs NULL", "Outputs an empty string", "Fatal error: typed property must not be accessed before initialization", "Outputs string(0)"], "answer": "Fatal error: typed property must not be accessed before initialization" },
  { "type": "mcq", "question": "Which two types can NOT be used as property type hints?", "options": ["int and string", "void and callable", "array and bool", "float and object"], "answer": "void and callable" },
  { "type": "tf", "question": "A readonly property can be initialized only once, from within the class.", "answer": true },
  { "type": "tf", "question": "A readonly property does not need a type declaration.", "answer": false },
  { "type": "mcq", "question": "What happens when you assign a new value to a readonly property that is already initialized?", "options": ["The value is silently ignored", "The value is updated", "Fatal error: Cannot modify readonly property", "A warning is shown and the value is updated"], "answer": "Fatal error: Cannot modify readonly property" },
  { "type": "tf", "question": "Every PHP class must define a __destruct() method.", "answer": false },
  { "type": "mcq", "question": "Which operator is used to access static methods and properties?", "options": ["->", "::", "=>", "."], "answer": "::" },
  { "type": "tf", "question": "Inside a static method you can use $this.", "answer": false },

  // ===== Section 4.2: Inheritance, self vs $this =====
  { "type": "mcq", "question": "Which keyword makes a class inherit from another class?", "options": ["implements", "inherits", "extends", "parent"], "answer": "extends" },
  { "type": "mcq", "question": "Which is another name for a child class?", "options": ["Base class", "Super class", "Derived class / subclass", "Parent class"], "answer": "Derived class / subclass" },
  { "type": "tf", "question": "A child class can directly use the private properties of its parent class.", "answer": false },
  { "type": "mcq", "question": "A SavingAccount has balance 100. setInterestRate(0.05) then addInterest() (interest = rate * balance, deposited). What does getBalance() return?", "options": ["100", "100.05", "105", "5"], "answer": "105" },
  { "type": "tf", "question": "If a child class has no constructor, PHP will call the parent class constructor when the child is instantiated.", "answer": true },
  { "type": "tf", "question": "If a child class defines its own constructor, PHP still automatically calls the parent constructor as well.", "answer": false },
  { "type": "mcq", "question": "BankAccount has __construct(private float $balance) with no default. SavingAccount extends it with no constructor. What does new SavingAccount(); do?", "options": ["Creates an account with balance 0", "ArgumentCountError: Too few arguments", "Creates an account with balance null", "Calls SavingAccount's default constructor"], "answer": "ArgumentCountError: Too few arguments" },
  { "type": "mcq", "question": "How does a child constructor call the parent constructor?", "options": ["$this->__construct($balance);", "parent::__construct($balance);", "self::__construct($balance);", "super($balance);"], "answer": "parent::__construct($balance);" },
  { "type": "mcq", "question": "Which keyword is used INSIDE a class to access its own static methods and properties?", "options": ["$this", "self", "static->", "this"], "answer": "self" },
  { "type": "mcq", "question": "Which statement about self vs $this is TRUE?", "options": ["self represents an object instance", "$this is followed by ::", "self is followed by :: and never begins with $", "$this represents the class"], "answer": "self is followed by :: and never begins with $" },
  { "type": "mcq", "question": "Which syntax is correct for accessing a static property?", "options": ["MyClass::staticProperty", "MyClass::$staticProperty", "MyClass->$staticProperty", "$this->$staticProperty"], "answer": "MyClass::$staticProperty" },
  { "type": "tf", "question": "With $this, the property name after -> does NOT have a $ sign, e.g. $this->property.", "answer": true },
  { "type": "tf", "question": "A public static method of MyClass can be called from another class with MyClass::doSomething();", "answer": true },

  // ===== Section 4.3: Enums =====
  { "type": "mcq", "question": "Enums were introduced in which PHP version?", "options": ["PHP 7.4", "PHP 8.0", "PHP 8.1", "PHP 5.6"], "answer": "PHP 8.1" },
  { "type": "tf", "question": "An enum defines a custom type with a fixed, closed set of possible values.", "answer": true },
  { "type": "mcq", "question": "Which keyword defines each possible value inside an enum?", "options": ["const", "value", "case", "option"], "answer": "case" },
  { "type": "mcq", "question": "Which method returns an array of all cases of the enum Suit?", "options": ["Suit::values()", "Suit::all()", "Suit::cases()", "Suit->cases()"], "answer": "Suit::cases()" },
  { "type": "mcq", "question": "For enum Suit: string { case Hearts = 'H'; }, what is Suit::Hearts->value?", "options": ["Hearts", "H", "0", "Suit"], "answer": "H" },
  { "type": "mcq", "question": "For the same enum, what is Suit::Hearts->name?", "options": ["Hearts", "H", "Suit::Hearts", "string"], "answer": "Hearts" },

  // ===== Section 5.1: MySQLi =====
  { "type": "tf", "question": "The original mysql extension used procedural functions like mysql_connect() and mysql_query(), while MySQLi takes an object-oriented approach.", "answer": true },
  { "type": "mcq", "question": "How do you create a MySQLi connection?", "options": ["$conn = mysqli_open($host, $user, $pass, $db);", "$conn = new mysqli($host, $user, $pass, $db);", "$conn = mysql::connect($host);", "$conn = new PDO_mysqli($db);"], "answer": "$conn = new mysqli($host, $user, $pass, $db);" },
  { "type": "mcq", "question": "Which property is checked to see whether the connection failed?", "options": ["$conn->error_connect", "$conn->connect_error", "$conn->failed", "$conn->status"], "answer": "$conn->connect_error" },
  { "type": "mcq", "question": "What does $conn->query(\"SELECT ...\") return on success?", "options": ["An associative array", "A mysqli_result object", "The number of rows", "true only"], "answer": "A mysqli_result object" },
  { "type": "mcq", "question": "How do you get the number of rows in a result set?", "options": ["$result->num_rows", "$result->num_rows()", "$result->count()", "count($result)"], "answer": "$result->num_rows" },
  { "type": "mcq", "question": "Which method returns a row as an enumerated (numerically indexed) array, accessed like $row[0]?", "options": ["fetch_assoc()", "fetch_row()", "fetch_object()", "fetch_array_num()"], "answer": "fetch_row()" },
  { "type": "mcq", "question": "Which method returns a row as an associative array, accessed like $row[\"first_name\"]?", "options": ["fetch_assoc()", "fetch_row()", "fetch_object()", "fetch()"], "answer": "fetch_assoc()" },
  { "type": "mcq", "question": "After $row = $result->fetch_object(), how do you read the first_name column?", "options": ["$row['first_name']", "$row[0]", "$row->first_name", "$row::first_name"], "answer": "$row->first_name" },
  { "type": "tf", "question": "$result->close() frees the memory associated with the query result, and $conn->close() closes the connection.", "answer": true },

  // ===== Section 5.2: Prepared statements =====
  { "type": "tf", "question": "A prepared statement is a parameterized query, and values from untrusted data are automatically escaped.", "answer": true },
  { "type": "tf", "question": "Prepared statements should be used even for a simple SELECT with no parameters, because they have no overhead.", "answer": false },
  { "type": "mcq", "question": "Prepared statements mainly protect against which attack?", "options": ["Cross-site scripting (XSS)", "SQL injection", "Brute-force login", "Denial of service"], "answer": "SQL injection" },
  { "type": "mcq", "question": "A login query is built by string concatenation. The user enters ' OR '1'='1 as the username. What happens?", "options": ["The query fails with a syntax error", "No rows are returned", "All rows in the users table are returned because 1=1 is always true", "Only the first user is returned safely"], "answer": "All rows in the users table are returned because 1=1 is always true" },
  { "type": "mcq", "question": "Which character is the placeholder in a MySQLi prepared statement?", "options": [":", "?", "%s", "$"], "answer": "?" },
  { "type": "mcq", "question": "In bind_param, what does the type character d stand for?", "options": ["Date", "Decimal / double", "Data blob", "Default"], "answer": "Decimal / double" },
  { "type": "mcq", "question": "In bind_param, which type character is used for a blob?", "options": ["b", "l", "o", "x"], "answer": "b" },
  { "type": "mcq", "question": "You bind $id (integer) then $firstName (string). Which call is correct?", "options": ["$stmt->bind_param(\"si\", $id, $firstName);", "$stmt->bind_param(\"is\", $id, $firstName);", "$stmt->bind_param(\"ii\", $id, $firstName);", "$stmt->bind_param($id, $firstName);"], "answer": "$stmt->bind_param(\"is\", $id, $firstName);" },
  { "type": "mcq", "question": "Values in order: integer, string, decimal, string, string. Which type string is correct?", "options": ["isdss", "sssid", "idsss", "isssd"], "answer": "isdss" },
  { "type": "mcq", "question": "What is the correct order of steps for a SELECT prepared statement using result variables?", "options": ["execute → prepare → bind_param → fetch → bind_result", "prepare → bind_param → execute → bind_result → fetch", "bind_param → prepare → execute → fetch → bind_result", "prepare → execute → bind_param → fetch → bind_result"], "answer": "prepare → bind_param → execute → bind_result → fetch" },
  { "type": "tf", "question": "If you use bind_result(), you must call fetch() to get the values into the bound variables.", "answer": true },
  { "type": "mcq", "question": "What does $stmt->fetch() return when there are no more rows?", "options": ["true", "false", "null", "0"], "answer": "null" },
  { "type": "mcq", "question": "What does $stmt->fetch() return when an error has occurred?", "options": ["true", "false", "null", "-1"], "answer": "false" },
  { "type": "mcq", "question": "After executing an INSERT prepared statement, which property gives the auto-generated id of the new row?", "options": ["$stmt->last_id", "$stmt->insert_id", "$stmt->new_id", "$conn->id"], "answer": "$stmt->insert_id" },
  { "type": "mcq", "question": "After an INSERT of one row, what does $stmt->affected_rows return?", "options": ["0", "1", "The new id", "true"], "answer": "1" },
  { "type": "tf", "question": "To insert several rows with the same prepared statement, you can call bind_param() once, then change the variables and call execute() again for each row.", "answer": true },
  { "type": "mcq", "question": "In ex5, after $stmt->execute(), which call returns a result set you can loop with fetch_assoc()?", "options": ["$stmt->get_result()", "$stmt->result()", "$stmt->fetch_all_rows()", "$conn->get_result()"], "answer": "$stmt->get_result()" },
  { "type": "mcq", "question": "In ex5's getCustomers(), why are $stmt->close() and $conn->close() placed in a finally block?", "options": ["So they only run when an error occurs", "So they run whether the query succeeds or throws an exception", "Because close() can only be called in finally", "So they run before the try block"], "answer": "So they run whether the query succeeds or throws an exception" }
],

Java_Q4:[

  // ===== Spring Boot Web =====
  {
    "type": "mcq",
    "question": "Which annotation is used on a Spring Boot class that returns Thymeleaf views (HTML pages) instead of JSON?",
    "options": [
      "@Entity",
      "@Controller",
      "@Repository",
      "@RestController"
    ],
    "answer": "@Controller"
  },
  {
    "type": "mcq",
    "question": "In the ProductController, what does return \"product/list\"; do?",
    "options": [
      "Returns the text product/list as JSON",
      "Renders the template product/list.html from src/main/resources/templates",
      "Redirects the browser to the URL /product/list",
      "Deletes the product list from the database"
    ],
    "answer": "Renders the template product/list.html from src/main/resources/templates"
  },
  {
    "type": "mcq",
    "question": "What does return \"redirect:/product\"; do?",
    "options": [
      "Renders a template named redirect",
      "Returns JSON containing the text /product",
      "Forwards the same POST request without a new browser request",
      "Tells the browser to send a new request to /product"
    ],
    "answer": "Tells the browser to send a new request to /product"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of the Model parameter in a web controller method?",
    "options": [
      "To pass data from the controller to the template (view)",
      "To store data permanently in the database",
      "To validate the submitted form",
      "To define the URL of the method"
    ],
    "answer": "To pass data from the controller to the template (view)"
  },
  {
    "type": "mcq",
    "question": "What does @RequestMapping(\"/product\") on the ProductController class do?",
    "options": [
      "Maps the class to a database table named product",
      "Makes the class a JPA entity",
      "Turns on validation for the class",
      "Adds /product as a prefix to the URLs of all methods in the controller"
    ],
    "answer": "Adds /product as a prefix to the URLs of all methods in the controller"
  },
  {
    "type": "mcq",
    "question": "In ProductRepository extends JpaRepository<Product, Integer>, what do the two type parameters mean?",
    "options": [
      "The table name and the column name",
      "The input type and the output type of save()",
      "The entity type and the type of its primary key",
      "The controller type and the view type"
    ],
    "answer": "The entity type and the type of its primary key"
  },
  {
    "type": "mcq",
    "question": "What does productRepo.findById(id) return?",
    "options": [
      "A Product, or null if it is not found",
      "A boolean",
      "An Optional<Product>",
      "A List<Product>"
    ],
    "answer": "An Optional<Product>"
  },
  {
    "type": "mcq",
    "question": "Which repository method can both insert a new entity and update an existing one?",
    "options": [
      "updateById()",
      "save()",
      "insert()",
      "persistOnly()"
    ],
    "answer": "save()"
  },
  {
    "type": "mcq",
    "question": "Which Spring Data JPA repository method removes a record by its primary key?",
    "options": [
      "deleteById()",
      "dropById()",
      "clearById()",
      "removeAll()"
    ],
    "answer": "deleteById()"
  },
  {
    "type": "mcq",
    "question": "Who provides the implementation of a repository interface such as ProductRepository?",
    "options": [
      "The Thymeleaf engine",
      "The programmer must write an implementation class",
      "Spring Data JPA generates it automatically",
      "The MySQL driver"
    ],
    "answer": "Spring Data JPA generates it automatically"
  },
  {
    "type": "mcq",
    "question": "Why does the web controller redirect after a successful POST (for example after save())?",
    "options": [
      "Because POST cannot return a view",
      "So that refreshing the page does not submit the form again",
      "To commit the database transaction",
      "Because @Valid requires a redirect"
    ],
    "answer": "So that refreshing the page does not submit the form again"
  },
  {
    "type": "mcq",
    "question": "When validation fails in the create POST method, what does the demo controller do?",
    "options": [
      "Throws an exception",
      "Saves the product anyway",
      "Returns the view again (no redirect) so the form shows the entered values and the errors",
      "Redirects to /product and discards the errors"
    ],
    "answer": "Returns the view again (no redirect) so the form shows the entered values and the errors"
  },
  {
    "type": "mcq",
    "question": "Why must the controller add the categories list to the model again when validation fails?",
    "options": [
      "Because Hibernate deletes them after a failed save",
      "Because categories are validated a second time",
      "Because the dropdown list cannot be rendered when the view is shown again without it",
      "Because the model is cleared by a redirect"
    ],
    "answer": "Because the dropdown list cannot be rendered when the view is shown again without it"
  },
  {
    "type": "mcq",
    "question": "A controller has only a @PostMapping(\"delete/{id}\"). A user clicks a link to /product/delete/7. What is the result?",
    "options": [
      "The template product/delete is shown",
      "201 CREATED",
      "The product is deleted",
      "405 Method Not Allowed, because a link sends a GET request"
    ],
    "answer": "405 Method Not Allowed, because a link sends a GET request"
  },
  {
    "type": "mcq",
    "question": "In the demo, how is the delete operation split between the two methods mapped to delete/{id}?",
    "options": [
      "GET shows a confirmation page; POST performs the deletion",
      "Both methods delete the product",
      "Both methods only display the page",
      "GET deletes and POST shows the page"
    ],
    "answer": "GET shows a confirmation page; POST performs the deletion"
  },
  {
    "type": "mcq",
    "question": "Why does the edit form include <input type=\"hidden\" th:field=\"*{id}\">?",
    "options": [
      "So the id is submitted back with the form and the existing record is updated",
      "To hide the whole form from the user",
      "To display the id to the user",
      "To validate the id"
    ],
    "answer": "So the id is submitted back with the form and the existing record is updated"
  },
  {
    "type": "mcq",
    "question": "In the edit POST method, why compare the id in the URL with product.getId()?",
    "options": [
      "To check that the price is positive",
      "To choose the template name",
      "To make sure the id in the URL matches the object being edited",
      "To generate a new primary key"
    ],
    "answer": "To make sure the id in the URL matches the object being edited"
  },
  {
    "type": "mcq",
    "question": "In the GET edit/{id} method, what happens when no product is found for the id?",
    "options": [
      "It returns a 404 JSON response",
      "It throws a NullPointerException",
      "It redirects back to /product",
      "It creates a new product"
    ],
    "answer": "It redirects back to /product"
  },
  {
    "type": "mcq",
    "question": "What is an @ExceptionHandler method in a controller used for?",
    "options": [
      "Mapping URLs to views",
      "Creating Spring Beans",
      "Defining database relationships",
      "Handling exceptions thrown by that controller's methods and returning an error page or response"
    ],
    "answer": "Handling exceptions thrown by that controller's methods and returning an error page or response"
  },
  {
    "type": "mcq",
    "question": "In the demo's exception handler, what is done with the exception details?",
    "options": [
      "They are written to the log, and the user only sees a friendly message",
      "They are displayed to the user on the page",
      "They are saved in the Product table",
      "They are ignored completely"
    ],
    "answer": "They are written to the log, and the user only sees a friendly message"
  },
  {
    "type": "mcq",
    "question": "What is LoggerFactory.getLogger(this.getClass()) used for?",
    "options": [
      "Validating the entity",
      "Creating a logger so the controller can write log messages",
      "Creating a Thymeleaf template",
      "Connecting to the database"
    ],
    "answer": "Creating a logger so the controller can write log messages"
  },
  {
    "type": "mcq",
    "question": "What does @PathVariable Integer id read in @GetMapping(\"edit/{id}\")?",
    "options": [
      "A column from the database",
      "A session attribute named id",
      "A form field named id",
      "The {id} segment of the URL"
    ],
    "answer": "The {id} segment of the URL"
  },
  {
    "type": "mcq",
    "question": "How do ProductController's repositories get their values?",
    "options": [
      "They are static fields",
      "Spring injects them through the controller's constructor (constructor injection)",
      "The controller creates them with new",
      "They are read from application.properties"
    ],
    "answer": "Spring injects them through the controller's constructor (constructor injection)"
  },
  {
    "type": "mcq",
    "question": "Why can the same project contain both ProductController and ProductAPIController?",
    "options": [
      "One returns Thymeleaf views for browsers (@Controller); the other returns JSON for other applications (@RestController)",
      "Spring Boot forbids two controllers for one entity",
      "They must be identical copies of each other",
      "Only one of them can be active at a time"
    ],
    "answer": "One returns Thymeleaf views for browsers (@Controller); the other returns JSON for other applications (@RestController)"
  },
  {
    "type": "mcq",
    "question": "What does spring.jpa.hibernate.ddl-auto=update do?",
    "options": [
      "Only validates the schema without changing it",
      "Updates the database schema to match the entities",
      "Disables JPA",
      "Deletes all data on every restart"
    ],
    "answer": "Updates the database schema to match the entities"
  },
  {
    "type": "mcq",
    "question": "What does createDatabaseIfNotExist=true in the datasource URL do?",
    "options": [
      "Creates all tables from SQL scripts",
      "Creates a new database user",
      "Deletes the database when the app stops",
      "Creates the database automatically if it does not already exist"
    ],
    "answer": "Creates the database automatically if it does not already exist"
  },
  {
    "type": "mcq",
    "question": "Which property sets the port of the embedded web server?",
    "options": [
      "spring.port",
      "server.port",
      "spring.datasource.port",
      "web.server.port"
    ],
    "answer": "server.port"
  },
  {
    "type": "mcq",
    "question": "Which property sets the log file location in application.properties?",
    "options": [
      "spring.log.file",
      "log.output",
      "logging.path.root",
      "logging.file.name"
    ],
    "answer": "logging.file.name"
  },
  {
    "type": "mcq",
    "question": "Which dependency in the demo provides the Swagger page for testing the REST API?",
    "options": [
      "spring-boot-starter-tomcat",
      "springdoc-openapi-starter-webmvc-ui",
      "mysql-connector-j",
      "spring-boot-starter-validation"
    ],
    "answer": "springdoc-openapi-starter-webmvc-ui"
  },

  // ===== Thymeleaf =====
  {
    "type": "mcq",
    "question": "What is Thymeleaf?",
    "options": [
      "A database access library",
      "A build tool like Maven",
      "A JavaScript framework that runs in the browser",
      "A server-side template engine for generating dynamic HTML"
    ],
    "answer": "A server-side template engine for generating dynamic HTML"
  },
  {
    "type": "mcq",
    "question": "Why is Thymeleaf good for prototyping?",
    "options": [
      "HTML files created with it can also be viewed as static web pages",
      "It does not need any Java",
      "It never needs a web server",
      "It generates the database tables"
    ],
    "answer": "HTML files created with it can also be viewed as static web pages"
  },
  {
    "type": "mcq",
    "question": "Which statement about Thymeleaf and Spring is correct?",
    "options": [
      "Thymeleaf only works with XML configuration",
      "Thymeleaf replaces Spring MVC",
      "Thymeleaf cannot be used with Spring",
      "Thymeleaf is integrated with Spring and supports Spring Expression Language out of the box"
    ],
    "answer": "Thymeleaf is integrated with Spring and supports Spring Expression Language out of the box"
  },
  {
    "type": "mcq",
    "question": "Which dependency artifact adds Thymeleaf to a Spring Boot application?",
    "options": [
      "thymeleaf-core-starter",
      "spring-boot-starter-jsp",
      "spring-boot-starter-thymeleaf",
      "spring-boot-starter-views"
    ],
    "answer": "spring-boot-starter-thymeleaf"
  },
  {
    "type": "mcq",
    "question": "Which declaration sets the Thymeleaf namespace in an HTML file?",
    "options": [
      "<!DOCTYPE thymeleaf>",
      "<th:html lang=\"en\">",
      "<html xmlns:thyme=\"http://www.spring.org\">",
      "<html xmlns:th=\"http://www.thymeleaf.org\">"
    ],
    "answer": "<html xmlns:th=\"http://www.thymeleaf.org\">"
  },
  {
    "type": "mcq",
    "question": "In xmlns:th=\"http://www.thymeleaf.org\", what does \"th\" specify?",
    "options": [
      "The template handler class",
      "The prefix used for Thymeleaf attributes",
      "The theme of the page",
      "The type of HTML document"
    ],
    "answer": "The prefix used for Thymeleaf attributes"
  },
  {
    "type": "mcq",
    "question": "Where must Thymeleaf HTML templates be located in a Spring Boot project?",
    "options": [
      "src/test/resources",
      "src/main/resources/templates",
      "src/main/webapp/WEB-INF",
      "src/main/java/templates"
    ],
    "answer": "src/main/resources/templates"
  },
  {
    "type": "mcq",
    "question": "Given model.addAttribute(\"username\", \"myUsername\"), which markup displays the value?",
    "options": [
      "<span th:text=\"*{username}\"></span>",
      "<span th:text=\"${username}\"></span>",
      "<span th:value=\"username\"></span>",
      "<span th:text=\"@{username}\"></span>"
    ],
    "answer": "<span th:text=\"${username}\"></span>"
  },
  {
    "type": "mcq",
    "question": "How do you display a session attribute named username in Thymeleaf?",
    "options": [
      "th:text=\"${username.session}\"",
      "th:text=\"@{session.username}\"",
      "th:text=\"${session.username}\"",
      "th:text=\"*{session.username}\""
    ],
    "answer": "th:text=\"${session.username}\""
  },
  {
    "type": "mcq",
    "question": "What does a selection expression such as *{firstName} require?",
    "options": [
      "A surrounding th:object that selects the object",
      "A th:each loop",
      "A link expression",
      "A session attribute"
    ],
    "answer": "A surrounding th:object that selects the object"
  },
  {
    "type": "mcq",
    "question": "What does <div th:object=\"${user}\"> do?",
    "options": [
      "Creates a new user in the database",
      "Selects the user model attribute so that *{...} expressions refer to its fields",
      "Displays the user's name",
      "Loops over all users"
    ],
    "answer": "Selects the user model attribute so that *{...} expressions refer to its fields"
  },
  {
    "type": "mcq",
    "question": "Which Thymeleaf expression type is used to create URLs?",
    "options": [
      "Selection expression *{...}",
      "Variable expression ${...}",
      "Link expression @{...}",
      "Message expression #{...}"
    ],
    "answer": "Link expression @{...}"
  },
  {
    "type": "mcq",
    "question": "What does @{/home} produce if the web app is deployed with the context root myWebApp?",
    "options": [
      "/home/myWebApp",
      "myWebApp.home",
      "A context-relative URL that becomes /myWebApp/home",
      "/home only"
    ],
    "answer": "A context-relative URL that becomes /myWebApp/home"
  },
  {
    "type": "mcq",
    "question": "Which attribute is used with @{...} on a form tag?",
    "options": [
      "th:href",
      "th:src",
      "th:link",
      "th:action"
    ],
    "answer": "th:action"
  },
  {
    "type": "mcq",
    "question": "Which attribute is used with @{...} on a non-form tag such as <a>?",
    "options": [
      "th:path",
      "th:href",
      "th:url",
      "th:action"
    ],
    "answer": "th:href"
  },
  {
    "type": "mcq",
    "question": "What URL does <a th:href=\"@{/home(username=myUsername)}\"> generate?",
    "options": [
      "/home/username/myUsername",
      "/home?username=myUsername",
      "/home.username=myUsername",
      "/home(username=myUsername)"
    ],
    "answer": "/home?username=myUsername"
  },
  {
    "type": "mcq",
    "question": "In th:href=\"@{/product/edit/{id}(id=${product.id})}\", what does {id} do?",
    "options": [
      "It is a query string key",
      "It is a CSS class",
      "It is a path variable that is replaced by the product's id",
      "It is a Thymeleaf fragment"
    ],
    "answer": "It is a path variable that is replaced by the product's id"
  },
  {
    "type": "mcq",
    "question": "Which markup iterates over a collection named products?",
    "options": [
      "<tr th:iterate=\"${products}\">",
      "<tr th:each=\"product : ${products}\">",
      "<tr th:for=\"${products}\">",
      "<tr th:loop=\"product in products\">"
    ],
    "answer": "<tr th:each=\"product : ${products}\">"
  },
  {
    "type": "mcq",
    "question": "What is the difference between th:if and th:unless?",
    "options": [
      "th:if renders when false; th:unless renders when true",
      "They are identical aliases",
      "th:if renders the tag when the condition is true; th:unless renders it when the condition is false",
      "th:unless can only be used inside th:each"
    ],
    "answer": "th:if renders the tag when the condition is true; th:unless renders it when the condition is false"
  },
  {
    "type": "mcq",
    "question": "Why does the product list use th:unless=\"${product.category}\" on a <td>?",
    "options": [
      "To show \"No Category Found\" when the product has no category",
      "To loop over the categories",
      "To hide the product name",
      "To validate the category"
    ],
    "answer": "To show \"No Category Found\" when the product has no category"
  },
  {
    "type": "mcq",
    "question": "Which attribute marks the default branch of a th:switch?",
    "options": [
      "th:else",
      "th:default",
      "th:otherwise",
      "th:case=\"*\""
    ],
    "answer": "th:case=\"*\""
  },
  {
    "type": "mcq",
    "question": "What is a limitation of using several th:if tags instead of th:switch?",
    "options": [
      "It cannot access model attributes",
      "It cannot compare strings",
      "There is no default case",
      "It only works on forms"
    ],
    "answer": "There is no default case"
  },
  {
    "type": "mcq",
    "question": "Which operator is used for equality in <div th:if=\"${user.username} eq userOne\">?",
    "options": [
      "equals",
      "eq",
      "same",
      "is"
    ],
    "answer": "eq"
  },
  {
    "type": "mcq",
    "question": "Which pair of attributes binds a form to a model object and an input to one of its fields?",
    "options": [
      "th:each and th:if",
      "th:action and th:href",
      "th:text and th:value",
      "th:object and th:field"
    ],
    "answer": "th:object and th:field"
  },
  {
    "type": "mcq",
    "question": "For an input element, which attribute should be used: th:text or th:field?",
    "options": [
      "th:text",
      "th:replace",
      "th:field",
      "th:each"
    ],
    "answer": "th:field"
  },
  {
    "type": "mcq",
    "question": "What does th:field do for an input beyond displaying text?",
    "options": [
      "Binds it to the property, includes its value, and submits it with the correct name",
      "Hides it from the page",
      "Encrypts the value",
      "Makes it read-only"
    ],
    "answer": "Binds it to the property, includes its value, and submits it with the correct name"
  },
  {
    "type": "mcq",
    "question": "Which attribute defines a reusable HTML fragment such as a navigation bar?",
    "options": [
      "th:template",
      "th:fragment",
      "th:part",
      "th:include"
    ],
    "answer": "th:fragment"
  },
  {
    "type": "mcq",
    "question": "What is the difference between th:insert and th:replace?",
    "options": [
      "th:insert deletes the fragment; th:replace copies it",
      "th:insert puts the fragment inside the host tag; th:replace replaces the host tag with the fragment",
      "There is no difference",
      "th:replace only works on forms"
    ],
    "answer": "th:insert puts the fragment inside the host tag; th:replace replaces the host tag with the fragment"
  },
  {
    "type": "mcq",
    "question": "What does th:replace=\"~{fragments/nav :: navbar}\" refer to?",
    "options": [
      "A CSS class named navbar",
      "The fragment named navbar in the template fragments/nav",
      "A Java method named navbar",
      "A URL /fragments/nav"
    ],
    "answer": "The fragment named navbar in the template fragments/nav"
  },
  {
    "type": "mcq",
    "question": "In <option th:each=\"category : ${categories}\" th:value=\"${category.id}\" th:text=\"${category.name}\">, what is submitted when an option is selected?",
    "options": [
      "The whole Category object as text",
      "The category id",
      "The category name",
      "Nothing"
    ],
    "answer": "The category id"
  },
  {
    "type": "mcq",
    "question": "What does the first option <option value=\"\"> --Select One-- </option> represent?",
    "options": [
      "The first category",
      "A default category id of 1",
      "No category selected",
      "An error message"
    ],
    "answer": "No category selected"
  },

  // ===== Validation =====
  {
    "type": "mcq",
    "question": "Which artifact adds validation to a Spring Boot project?",
    "options": [
      "spring-boot-starter-validation",
      "spring-validation-api",
      "spring-boot-starter-check",
      "jakarta-validate-core"
    ],
    "answer": "spring-boot-starter-validation"
  },
  {
    "type": "mcq",
    "question": "If you add the validation dependency to pom.xml by hand, what must you do?",
    "options": [
      "Nothing; it is picked up automatically",
      "Re-sync (reload) the Maven project",
      "Restart the database",
      "Delete the target folder only"
    ],
    "answer": "Re-sync (reload) the Maven project"
  },
  {
    "type": "mcq",
    "question": "Where are the validation rules usually placed in the demo?",
    "options": [
      "On the entity class fields",
      "In web.xml",
      "In application.properties",
      "In the HTML template"
    ],
    "answer": "On the entity class fields"
  },
  {
    "type": "mcq",
    "question": "Why does it make sense to put validation annotations on the entities?",
    "options": [
      "Controllers cannot validate any other objects",
      "Entities cannot be posted without them",
      "We post entities to the controllers and also want validation that matches the database",
      "Thymeleaf requires it"
    ],
    "answer": "We post entities to the controllers and also want validation that matches the database"
  },
  {
    "type": "mcq",
    "question": "Which package contains the validation annotations used in the demo?",
    "options": [
      "java.util.validation",
      "spring.validation.core",
      "jakarta.validation.constraints",
      "org.hibernate.validate"
    ],
    "answer": "jakarta.validation.constraints"
  },
  {
    "type": "mcq",
    "question": "What does @Valid on a controller parameter do?",
    "options": [
      "Converts the parameter to JSON",
      "Makes the framework run validation on that object and load the results into a BindingResult",
      "Saves the parameter to the database",
      "Marks the parameter as optional"
    ],
    "answer": "Makes the framework run validation on that object and load the results into a BindingResult"
  },
  {
    "type": "mcq",
    "question": "Where must the BindingResult parameter be declared in the method parameters?",
    "options": [
      "Immediately after the object being validated",
      "Anywhere; the order never matters",
      "Always as the last parameter",
      "Always as the first parameter"
    ],
    "answer": "Immediately after the object being validated"
  },
  {
    "type": "mcq",
    "question": "Which BindingResult method tells whether validation found errors?",
    "options": [
      "hasErrors()",
      "isInvalid()",
      "failed()",
      "getErrors().exists()"
    ],
    "answer": "hasErrors()"
  },
  {
    "type": "mcq",
    "question": "What is the most common reason validation does not work, according to the teacher?",
    "options": [
      "Using the wrong database",
      "Using too many entities",
      "Forgetting to add @Valid",
      "Missing th:each"
    ],
    "answer": "Forgetting to add @Valid"
  },
  {
    "type": "mcq",
    "question": "Which annotation rejects a string that is empty or contains only whitespace?",
    "options": [
      "@Digits",
      "@Past",
      "@NotBlank",
      "@NotNull"
    ],
    "answer": "@NotBlank"
  },
  {
    "type": "mcq",
    "question": "Which annotation only checks that a value is not null?",
    "options": [
      "@Pattern",
      "@NotBlank",
      "@NotNull",
      "@Size"
    ],
    "answer": "@NotNull"
  },
  {
    "type": "mcq",
    "question": "Which annotation validates the length of a string or collection?",
    "options": [
      "@Min(2)",
      "@Digits(integer=2)",
      "@Size(min=2, max=50)",
      "@Email"
    ],
    "answer": "@Size(min=2, max=50)"
  },
  {
    "type": "mcq",
    "question": "Which annotation allows 0 but rejects negative numbers?",
    "options": [
      "@Negative",
      "@NegativeOrZero",
      "@PositiveOrZero",
      "@Positive"
    ],
    "answer": "@PositiveOrZero"
  },
  {
    "type": "mcq",
    "question": "Which annotation checks that a number is greater than 0 (0 is not allowed)?",
    "options": [
      "@Positive",
      "@PositiveOrZero",
      "@NegativeOrZero",
      "@DecimalMax"
    ],
    "answer": "@Positive"
  },
  {
    "type": "mcq",
    "question": "Which annotation validates a value against a regular expression?",
    "options": [
      "@Email",
      "@Size",
      "@URL",
      "@Pattern(regexp=...)"
    ],
    "answer": "@Pattern(regexp=...)"
  },
  {
    "type": "mcq",
    "question": "Which annotation validates that a date is in the past?",
    "options": [
      "@NotNull",
      "@FutureOrPresent",
      "@Future",
      "@Past"
    ],
    "answer": "@Past"
  },
  {
    "type": "mcq",
    "question": "Which annotation validates an email format?",
    "options": [
      "@URL",
      "@Mail",
      "@Email",
      "@Pattern(\"email\")"
    ],
    "answer": "@Email"
  },
  {
    "type": "mcq",
    "question": "What does @Digits(integer=3, fraction=2) validate?",
    "options": [
      "The length of a string",
      "Whether the number is positive",
      "The minimum value of a number",
      "The number of digits in the integer and fraction parts"
    ],
    "answer": "The number of digits in the integer and fraction parts"
  },
  {
    "type": "mcq",
    "question": "Which annotation validates the minimum value of a BigDecimal such as price?",
    "options": [
      "@Digits",
      "@DecimalMin",
      "@Min",
      "@Size"
    ],
    "answer": "@DecimalMin"
  },
  {
    "type": "mcq",
    "question": "What does the message attribute, as in @NotBlank(message = \"Name is required\"), define?",
    "options": [
      "The HTTP status code",
      "The column name in the database",
      "The URL of the error page",
      "The error text shown when validation fails"
    ],
    "answer": "The error text shown when validation fails"
  },
  {
    "type": "mcq",
    "question": "Which Thymeleaf attribute displays the validation errors of a field?",
    "options": [
      "th:messages",
      "th:validate",
      "th:errors",
      "th:error-text"
    ],
    "answer": "th:errors"
  },
  {
    "type": "mcq",
    "question": "When is a tag with th:errors=\"*{name}\" rendered?",
    "options": [
      "Only on GET requests",
      "Always",
      "Only when the name field has errors",
      "Only when the field is valid"
    ],
    "answer": "Only when the name field has errors"
  },
  {
    "type": "mcq",
    "question": "What does th:errorclass=\"is-invalid\" do?",
    "options": [
      "Adds an error message to the page",
      "Disables the input",
      "Adds the CSS class to the input when the field has an error",
      "Removes the input from the form"
    ],
    "answer": "Adds the CSS class to the input when the field has an error"
  },
  {
    "type": "mcq",
    "question": "Why can the template display the validation messages?",
    "options": [
      "Because @Valid writes the HTML",
      "Because the browser validates them",
      "Because Thymeleaf queries the database",
      "Because the BindingResult errors are also loaded into the model"
    ],
    "answer": "Because the BindingResult errors are also loaded into the model"
  },
  {
    "type": "mcq",
    "question": "Which is NOT one of the steps for simple validation in Spring Boot?",
    "options": [
      "Create a servlet-mapping entry in web.xml",
      "Annotate the entity with constraints",
      "Add the validation dependency",
      "Use @Valid and BindingResult in the controller"
    ],
    "answer": "Create a servlet-mapping entry in web.xml"
  },
  {
    "type": "mcq",
    "question": "When is custom validation needed instead of the built-in annotations?",
    "options": [
      "When checking that a field is not null",
      "When checking that a number is positive",
      "When checking a string length",
      "When comparing multiple properties or querying the database"
    ],
    "answer": "When comparing multiple properties or querying the database"
  },
  {
    "type": "mcq",
    "question": "In a REST controller, which annotations validate the JSON body of a request?",
    "options": [
      "@RequestBody @Valid",
      "@ModelAttribute @Valid only",
      "@PathVariable @Valid",
      "@Controller @Valid"
    ],
    "answer": "@RequestBody @Valid"
  },
  {
    "type": "mcq",
    "question": "Which exception is thrown when @Valid fails on a @RequestBody object in the demo's REST controllers?",
    "options": [
      "NullPointerException",
      "ArithmeticException",
      "IllegalStateException",
      "MethodArgumentNotValidException"
    ],
    "answer": "MethodArgumentNotValidException"
  },
  {
    "type": "mcq",
    "question": "Which HTTP status does the demo's REST validation handler return for invalid data?",
    "options": [
      "404 NOT_FOUND",
      "204 NO_CONTENT",
      "400 BAD_REQUEST",
      "201 CREATED"
    ],
    "answer": "400 BAD_REQUEST"
  },

  // ===== JPA Simple Relationships =====
  {
    "type": "mcq",
    "question": "In an entity relationship, which side is the owning side?",
    "options": [
      "The side that contains the foreign key",
      "The side that was created first",
      "The side with the longest class name",
      "The side annotated with mappedBy"
    ],
    "answer": "The side that contains the foreign key"
  },
  {
    "type": "mcq",
    "question": "In a many-to-one / one-to-many relationship, which side is usually the owning side?",
    "options": [
      "Both sides",
      "The 'many' side",
      "The 'one' side",
      "Neither side"
    ],
    "answer": "The 'many' side"
  },
  {
    "type": "mcq",
    "question": "What is a unidirectional relationship?",
    "options": [
      "Only an inverse side exists",
      "There is no foreign key",
      "Only an owning side exists, so navigation is possible in one direction only",
      "Both entities can navigate to each other"
    ],
    "answer": "Only an owning side exists, so navigation is possible in one direction only"
  },
  {
    "type": "mcq",
    "question": "What is a bidirectional relationship?",
    "options": [
      "Only the owning side exists",
      "It can only be used for one-to-one",
      "The relationship uses two foreign keys in one table",
      "There is an owning side and an inverse side, so navigation works in both directions"
    ],
    "answer": "There is an owning side and an inverse side, so navigation works in both directions"
  },
  {
    "type": "mcq",
    "question": "What does a HAS-A relationship describe?",
    "options": [
      "One entity contains or refers to another, such as Employee has a Payroll",
      "One class extends another class",
      "One method calls another method",
      "One table is deleted when another is created"
    ],
    "answer": "One entity contains or refers to another, such as Employee has a Payroll"
  },
  {
    "type": "mcq",
    "question": "On which side is mappedBy placed?",
    "options": [
      "The owning side",
      "On the primary key field",
      "Both sides",
      "The inverse side"
    ],
    "answer": "The inverse side"
  },
  {
    "type": "mcq",
    "question": "What value does mappedBy = \"xxxx\" hold?",
    "options": [
      "The field name in the owning side entity that holds the association",
      "The foreign key column name",
      "The table name of the owning entity",
      "The name of the persistence unit"
    ],
    "answer": "The field name in the owning side entity that holds the association"
  },
  {
    "type": "mcq",
    "question": "Which annotation specifies the foreign key column name on the owning side?",
    "options": [
      "@MappedBy",
      "@Column",
      "@JoinColumn",
      "@JoinTable"
    ],
    "answer": "@JoinColumn"
  },
  {
    "type": "mcq",
    "question": "Which annotation specifies the join table of a many-to-many relationship?",
    "options": [
      "@Entity",
      "@JoinColumn",
      "@Table",
      "@JoinTable"
    ],
    "answer": "@JoinTable"
  },
  {
    "type": "mcq",
    "question": "In One-to-One Unidirectional Employee -> Payroll, where is FK_PAYROLL_NO stored?",
    "options": [
      "In the EMPLOYEE table",
      "In the PAYROLL table",
      "In a join table",
      "In neither table"
    ],
    "answer": "In the EMPLOYEE table"
  },
  {
    "type": "mcq",
    "question": "Which annotation goes on Payroll.employee in a bidirectional one-to-one where Employee owns the relationship through its payroll field?",
    "options": [
      "@OneToOne(mappedBy = \"payroll\")",
      "@OneToOne(cascade = CascadeType.ALL)",
      "@ManyToOne",
      "@JoinColumn(name = \"payroll\")"
    ],
    "answer": "@OneToOne(mappedBy = \"payroll\")"
  },
  {
    "type": "mcq",
    "question": "In @OneToMany(mappedBy = \"dept\") on Department.employees, what is \"dept\"?",
    "options": [
      "The foreign key column name",
      "The table name of Department",
      "The field in Employee that holds the Department",
      "The class name of Department"
    ],
    "answer": "The field in Employee that holds the Department"
  },
  {
    "type": "mcq",
    "question": "Many employees belong to one department. Which annotations describe the relationship (Employee side / Department side)?",
    "options": [
      "@ManyToOne / @OneToMany",
      "@OneToMany / @ManyToOne",
      "@ManyToMany / @ManyToMany",
      "@OneToOne / @OneToOne"
    ],
    "answer": "@ManyToOne / @OneToMany"
  },
  {
    "type": "mcq",
    "question": "How is a many-to-many relationship such as Employee and Skill stored in the database?",
    "options": [
      "As one foreign key in the Skill table",
      "In a separate join table with two foreign key columns",
      "In a comma-separated column",
      "As one foreign key in the Employee table"
    ],
    "answer": "In a separate join table with two foreign key columns"
  },
  {
    "type": "mcq",
    "question": "In @JoinTable, what does joinColumns refer to?",
    "options": [
      "The name of the join table",
      "The foreign key column that points to the owning entity",
      "The primary key of the join table",
      "The foreign key column that points to the other entity"
    ],
    "answer": "The foreign key column that points to the owning entity"
  },
  {
    "type": "mcq",
    "question": "In @JoinTable, what does inverseJoinColumns refer to?",
    "options": [
      "The cascade operations",
      "The foreign key column that points to the other (inverse) entity",
      "The foreign key column that points to the owning entity",
      "The name of the join table"
    ],
    "answer": "The foreign key column that points to the other (inverse) entity"
  },
  {
    "type": "mcq",
    "question": "In a many-to-many relationship, how is the inverse side declared (e.g., Skill.employees)?",
    "options": [
      "@ManyToMany with another @JoinTable",
      "@ManyToMany(mappedBy = \"skills\")",
      "@JoinColumn(name = \"skills\")",
      "@OneToMany(mappedBy = \"skills\")"
    ],
    "answer": "@ManyToMany(mappedBy = \"skills\")"
  },
  {
    "type": "mcq",
    "question": "In the demo, which relationship exists between Product and Category?",
    "options": [
      "Many-to-many",
      "No relationship",
      "One-to-one",
      "Many-to-one (many products belong to one category)"
    ],
    "answer": "Many-to-one (many products belong to one category)"
  },
  {
    "type": "mcq",
    "question": "In the demo, which entity is the owning side of the Product-Category relationship and why?",
    "options": [
      "Product, because the foreign key category_id is in the Product table",
      "Category, because it has the id",
      "Neither; it uses a join table",
      "Category, because it is created first"
    ],
    "answer": "Product, because the foreign key category_id is in the Product table"
  },
  {
    "type": "mcq",
    "question": "In the demo, can you navigate from a Category to its Products?",
    "options": [
      "Only inside the REST controllers",
      "Yes, through category.getProducts()",
      "No, the relationship is unidirectional from Product to Category",
      "Yes, because of mappedBy"
    ],
    "answer": "No, the relationship is unidirectional from Product to Category"
  },
  {
    "type": "mcq",
    "question": "What does @JoinColumn(name = \"category_id\", foreignKey = @ForeignKey(name = \"FK_PRODUCT_CATEGORY\")) do?",
    "options": [
      "Creates a new Category table",
      "Defines a cascade operation",
      "Declares a primary key",
      "Names the foreign key column and the foreign key constraint in the Product table"
    ],
    "answer": "Names the foreign key column and the foreign key constraint in the Product table"
  },
  {
    "type": "mcq",
    "question": "Which CascadeType is equivalent to {DETACH, MERGE, PERSIST, REFRESH, REMOVE}?",
    "options": [
      "REMOVE",
      "MERGE",
      "PERSIST",
      "ALL"
    ],
    "answer": "ALL"
  },
  {
    "type": "mcq",
    "question": "With cascade = CascadeType.PERSIST on Employee.payroll, what happens when an Employee is persisted?",
    "options": [
      "Nothing happens to the Payroll",
      "The Employee is detached",
      "The related Payroll is also persisted",
      "The related Payroll is deleted"
    ],
    "answer": "The related Payroll is also persisted"
  },
  {
    "type": "mcq",
    "question": "With cascade = CascadeType.REMOVE on Employee.payroll, what happens when an Employee is removed?",
    "options": [
      "The related Payroll is persisted",
      "The Payroll is refreshed",
      "Nothing happens",
      "The related Payroll is also removed"
    ],
    "answer": "The related Payroll is also removed"
  },
  {
    "type": "mcq",
    "question": "What does CascadeType.REFRESH do?",
    "options": [
      "It deletes the related entity",
      "When the parent entity is refreshed, the related entity is also refreshed",
      "It saves the related entity",
      "It detaches the related entity"
    ],
    "answer": "When the parent entity is refreshed, the related entity is also refreshed"
  },
  {
    "type": "mcq",
    "question": "Can you navigate from Payroll to Employee in a unidirectional relationship that is owned by Employee?",
    "options": [
      "No, the query can only be navigated in one direction",
      "Yes, always",
      "Only with cascade",
      "Yes, with mappedBy"
    ],
    "answer": "No, the query can only be navigated in one direction"
  },

  // ===== Review =====
  {
    "type": "mcq",
    "question": "In the demo's REST PUT method, what is returned when the id in the URL does not match the id in the body?",
    "options": [
      "201 CREATED",
      "400 BAD_REQUEST",
      "204 NO_CONTENT",
      "404 NOT_FOUND"
    ],
    "answer": "400 BAD_REQUEST"
  },
  {
    "type": "mcq",
    "question": "Which HTTP status does the demo's REST POST method return after saving?",
    "options": [
      "404 NOT_FOUND",
      "201 CREATED",
      "200 OK",
      "204 NO_CONTENT"
    ],
    "answer": "201 CREATED"
  },
  {
    "type": "mcq",
    "question": "Which HTTP status does the demo's REST DELETE method return?",
    "options": [
      "204 NO_CONTENT",
      "201 CREATED",
      "400 BAD_REQUEST",
      "404 NOT_FOUND"
    ],
    "answer": "204 NO_CONTENT"
  },
  {
    "type": "mcq",
    "question": "Which status does the demo's REST GET by id return when the entity does not exist?",
    "options": [
      "404 NOT_FOUND",
      "200 OK",
      "204 NO_CONTENT",
      "400 BAD_REQUEST"
    ],
    "answer": "404 NOT_FOUND"
  },
  {
    "type": "mcq",
    "question": "What is the difference between PUT and PATCH?",
    "options": [
      "PUT replaces the entire resource; PATCH updates only specific fields",
      "There is no difference",
      "PUT deletes the resource; PATCH creates it",
      "PUT reads data; PATCH deletes data"
    ],
    "answer": "PUT replaces the entire resource; PATCH updates only specific fields"
  },
  {
    "type": "mcq",
    "question": "What does @RequestBody do in a REST controller method?",
    "options": [
      "Reads a value from the URL path",
      "Converts the JSON in the request body into a Java object",
      "Reads a value from the session",
      "Returns the object as JSON"
    ],
    "answer": "Converts the JSON in the request body into a Java object"
  },
  {
    "type": "mcq",
    "question": "Which annotation makes a class return JSON objects instead of view names?",
    "options": [
      "@Configuration",
      "@Controller",
      "@RestController",
      "@Repository"
    ],
    "answer": "@RestController"
  },
  {
    "type": "mcq",
    "question": "What does the HTTP status 405 mean?",
    "options": [
      "The URL was found, but not with that HTTP method",
      "The request was successful with no content",
      "The resource was created",
      "The server crashed"
    ],
    "answer": "The URL was found, but not with that HTTP method"
  },
  {
    "type": "mcq",
    "question": "What is constructor injection?",
    "options": [
      "The programmer calls new inside every method",
      "Values are copied from the database into fields",
      "Dependencies are set in the HTML template",
      "Spring passes the required Beans into a class through its constructor when it creates the Bean"
    ],
    "answer": "Spring passes the required Beans into a class through its constructor when it creates the Bean"
  },
  {
    "type": "mcq",
    "question": "Which annotation is on the bootstrap class of a Spring Boot application?",
    "options": [
      "@SpringBootApplication",
      "@WebServlet",
      "@EnableWeb",
      "@ApplicationMain"
    ],
    "answer": "@SpringBootApplication"
  },
  {
    "type": "mcq",
    "question": "Where is application.properties located in a Spring Boot project?",
    "options": [
      "The project root next to pom.xml",
      "src/main/webapp",
      "src/main/resources",
      "META-INF"
    ],
    "answer": "src/main/resources"
  },
  {
    "type": "mcq",
    "question": "When does Spring Boot auto-configuration run, and what does it check?",
    "options": [
      "Only when a request arrives, checking the URL",
      "At compile time, checking the database schema",
      "At startup, checking what is on the classpath",
      "At shutdown, checking memory usage"
    ],
    "answer": "At startup, checking what is on the classpath"
  },
  {
    "type": "mcq",
    "question": "Which HTTP method does a Thymeleaf form with method=\"post\" send?",
    "options": [
      "GET",
      "PUT",
      "PATCH",
      "POST"
    ],
    "answer": "POST"
  }
]
};
