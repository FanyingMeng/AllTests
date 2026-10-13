const questionBank = {
MVC_Q1:[
  {
  "type": "fib",
  "question": "The ASP.NET MVC framework is lightweight, flexible, highly testable, and integrates with many existing ASP.NET ______.",
  "answer": "features"
},
{
  "type": "fib",
  "question": "ASP.NET Core apps can serve browser-based clients or provide ______ for mobile and other clients.",
  "answer": "APIs"
},
{
  "type": "fib",
  "question": "The ASP.NET framework handles the raw requests and calls into ______and ______ .",
  "answer": "razor page web API controller "
},
{
  "type": "fib",
  "question": "ASP.NET provides a complete and flexible framework for creating web applications using different patterns, including the ______ .",
  "answer": "MVC architecture"
},
{
  "type": "fib",
  "question": "MVC ______ .",
  "answer": "Model View Controller"
},
{
    "type": "fib",
    "question": "MVC manages application complexity by dividing an application into the model, the view, and the ______.",
    "answer": "controller"
  },
  {
    "type": "fib",
    "question": "The MVC framework is ideal for developers who want full control over the ______ of the application.",
    "answer": "behaviour"
  },
  {
    "type": "fib",
    "question": "MVC uses a front controller pattern that processes web application requests through a single ______.",
    "answer": "controller"
  },
  {
    "type": "fib",
    "question": "The front controller pattern enables an application to support a rich and dynamic ______ infrastructure.",
    "answer": "routing"
  },
  {
    "type": "fib",
    "question": "The MVC framework provides better support for ______ .",
    "answer": "Test-Driven Development"
  },
  {
    "type": "fib",
    "question": "MVC web applications often run faster and render better ______ content.",
    "answer": "HTML"
  },
  
  {
    "type": "fib",
    "question": "Models 是什么",
    "answer": "Models are classes that represent the data of the application and use validation logic to enforce business rules."
  }, 
  {
    "type": "fib",
    "question": "Model objects implement the logic for the application's ______.",
    "answer": "data domain"
  },
  {
    "type": "fib",
    "question": "Model objects often retrieve and store model state in a ______.",
    "answer": "database"
  },
  {
    "type": "fib",
    "question": "Views are the components that display the application's user ______.",
    "answer": "interface"
  },
  {
    "type": "fib",
    "question": "The user interface is typically created from the ______ .",
    "answer": "model data"
  },
  {
    "type": "fib",
    "question": "Views 是什么",
    "answer": "Views are template files that an application uses to dynamically generate HTML responses. "
  },
  {
    "type": "fib",
    "question": "Views use template files to dynamically generate ______ responses.",
    "answer": "HTML"
  },
  {
    "type": "fib",
    "question": "Controllers are classes that handle incoming ______ to the application.",
    "answer": "requests"
  },
  {
    "type": "fib",
    "question": "Controllers 干什么",
    "answer": "Controllers retrieve model data and then specify view templates that return responses to the client"
  },
  {
    "type": "fib",
    "question": "In MVC, controllers handle user interaction, work with the model, and ultimately select a ______ to render the UI.",
    "answer": "view"
  },
  {
    "type": "fib",
    "question": "In an MVC application, the view only ______ information.",
    "answer": "displays"
  },
  {
    "type": "fib",
    "question": "In an MVC application, the ______ handles and responds to user input and interaction.",
    "answer": "controller"
  },
  {
    "type": "fib",
    "question": "The controller handles query string values and passes these values to the ______.",
    "answer": "model"
  },
  {
    "type": "fib",
    "question": "The model might use query string values to query the ______.",
    "answer": "database"
  },
  {
    "type": "fib",
    "question": "The MVC pattern separates ______ logic, ______ logic, and ______ logic.",
    "answer": "input business UI"
  },
  {
    "type": "fib",
    "question": "The MVC pattern provides a ______  between the different aspects of an application.",
    "answer": "loose coupling"
  },
  {
    "type": "fib",
    "question": "In MVC, UI logic belongs in the ______.",
    "answer": "view"
  },
  {
    "type": "fib",
    "question": "In MVC, input logic belongs in the ______.",
    "answer": "controller"
  },
  {
    "type": "fib",
    "question": "In MVC, business logic belongs in the ______.",
    "answer": "model"
  },
  {
    "type": "fib",
    "question": "Separating the different aspects of an application helps developers manage ______ when building an application.",
    "answer": "complexity"
  },
  {
    "type": "fib",
    "question": "MVC enables developers to focus on one ______ of the implementation at a time.",
    "answer": "aspect"
  },
  {
    "type": "fib",
    "question": "The loose coupling between the three main MVC components promotes ______ development.",
    "answer": "parallel"
  },
  {
    "type": "fib",
    "question": "In parallel MVC development, one developer can work on the view, another on the controller logic, and a third on the business logic in the ______.",
    "answer": "model"
  },
  {
    "type": "fib",
    "question": "All MVC controllers must end their names with ______.",
    "answer": "Controller"
  },
  {
    "type": "fib",
    "question": "A Controller Action is a ______ in a controller that handles a request.",
    "answer": "method"
  },
  {
    "type": "fib",
    "question": "In an MVC application, the controller action is responsible for handling a ______.",
    "answer": "request"
  },
  {
    "type": "fib",
    "question": "Starting with ASP.NET MVC 3, developers were able to use the new ______ view engine.",
    "answer": "Razor"
  },
  {
    "type": "fib",
    "question": "ASP.NET Core provides a newer implementation of ______ for creating view templates.",
    "answer": "Razor"
  },
  {
    "type": "fib",
    "question": "Razor view templates using C# have the ______ file extension.",
    "answer": ".cshtml"
  },
  {
    "type": "fib",
    "question": "Razor view templates using VB have the ______ file extension.",
    "answer": ".vbhtml"
  },
  {
    "type": "fib",
    "question": "Razor provides an elegant way to create ______ output using C# or VB.",
    "answer": "HTML"
  },
  {
    "type": "fib",
    "question": "Razor minimizes the number of characters and ______ required when writing a view template.",
    "answer": "keystrokes"
  },
  {
    "type": "fib",
    "question": "Razor enables a fast and ______ coding workflow.",
    "answer": "fluid"
  },
  {
    "type": "fib",
    "question": "Razor是什么",
    "answer": "Razor uses @ as a transition character to seamlessly switch from HTML markup to C# code and back again."
  },
  {
    "type": "fib",
    "question": "Layout templates allow you to specify the HTML ______ layout of your site in one place and apply it across multiple pages.",
    "answer": "container"
  },
  {
    "type": "fib",
    "question": "Common implementation that should be reused across the entire site is provided by a Project ______.",
    "answer": "Layout"
  },
  {
    "type": "fib",
    "question": "The common project layout is typically located at Views ▶ ______ ▶ Layout.cshtml.",
    "answer": "Shared"
  },
  {
    "type": "fib",
    "question": "The default project layout file is named ______.",
    "answer": "Layout.cshtml"
  },
  {
    "type": "fib",
    "question": "MVC applications use the ASP.NET routing system to manage ______.",
    "answer": "URL requests"
  },
  {
    "type": "fib",
    "question": "The ASP.NET routing system 干什么",
    "answer": "routing system manages how a URL request is mapped to specific Controllers and Actions"
  },
  {
    "type": "fib",
    "question": "When Visual Studio creates an MVC project, it adds some default ______ to get us started.",
    "answer": "routes"
  },
  {
    "type": "fib",
    "question": "The ASP.NET MVC convention is that a controller called ______ is the starting point for the application.",
    "answer": "HomeController"
  },
  {
    "type": "fib",
    "question": "The default routes provided by an MVC project follow the ______ convention.",
    "answer": "HomeController"
  },
  {
    "type": "fib",
    "question": "The existing MVC routing configuration can be reviewed in ______.",
    "answer": "Program.cs"
  },
  {
    "type": "fib",
    "question": "viewbag 是什么",
    "answer": "ViewBag lets you easily pass small bits of data from a controller to a view."
  },
  {
    "type": "fib",
    "question": "The ASP.NET MVC helper used to create a hyperlink is ______.",
    "answer": "@Html.ActionLink()"
  },
  {
    "type": "fib",
    "question": "The ASP.NET MVC helper used to create an HTML form is ______.",
    "answer": "@Html.BeginForm()"
  },
  {
    "type": "fib",
    "question": "The ASP.NET MVC helper used to create a text input based on a model property is ______.",
    "answer": "@Html.TextBoxFor()"
  },
  {
    "type": "fib",
    "question": "The ASP.NET MVC helper used to display validation errors is ______.",
    "answer": "@Html.ValidationSummary()"
  },
  {
    "type": "fib",
    "question": "Html.ActionLink() does not link directly to a view, Html.ActionLink() is used to create a link to a  ______.",
    "answer": "controller action"
  },
  {
    "type": "fib",
    "question": "The ActionLink() method is an ______ method because it has several signatures with different parameters.",
    "answer": "overloaded"
  },
  {
    "type": "fib",
    "question": "In Html.ActionLink(), the first parameter specifies the ______ to display in the link.",
    "answer": "text"
  },
  {
    "type": "fib",
    "question": "In Html.ActionLink(), the second parameter specifies the controller ______ to perform when the user clicks the link.",
    "answer": "action"
  },
  {
    "type": "fib",
    "question": "In Html.ActionLink(), the third parameter specifies the  ______ to perform when the user clicks the link.",
    "answer": "controller"
  }




],
Java_Q2:[
  // ===== ORM & JPA Basics =====
  {
    "type": "mcq",
    "question": "What is ORM (Object Relational Mapping)?",
    "options": [
      "A technique that maps object state to data in a relational database",
      "A language used to write stored procedures",
      "A tool that converts SQL into XML",
      "A protocol for sending objects over a network"
    ],
    "answer": "A technique that maps object state to data in a relational database"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT one of the mismatch issues between OO and relational models?",
    "options": [
      "Subtyping",
      "Granularity",
      "Concurrency",
      "Relationships"
    ],
    "answer": "Concurrency"
  },
  {
    "type": "mcq",
    "question": "Which concept is fundamental to OO but absent in an RDBMS?",
    "options": [
      "Primary keys",
      "Subtyping",
      "Transactions",
      "Indexes"
    ],
    "answer": "Subtyping"
  },
  {
    "type": "mcq",
    "question": "In a relational database, associations between tables are represented by:",
    "options": [
      "Object references",
      "Inheritance",
      "Foreign keys",
      "Annotations"
    ],
    "answer": "Foreign keys"
  },
  {
    "type": "mcq",
    "question": "JPA is an abstraction on top of which technology?",
    "options": [
      "Servlets",
      "JDBC",
      "JSP",
      "Maven"
    ],
    "answer": "JDBC"
  },
  {
    "type": "mcq",
    "question": "Which statement about JPA and Hibernate is correct?",
    "options": [
      "JPA is a specification and Hibernate is a persistence provider that implements it",
      "JPA is an implementation and Hibernate is its specification",
      "Hibernate is required to use JPA",
      "JPA and Hibernate are two names for the same product"
    ],
    "answer": "JPA is a specification and Hibernate is a persistence provider that implements it"
  },
  {
    "type": "mcq",
    "question": "What query language comes with JPA?",
    "options": [
      "HQL-SQL",
      "JPQL",
      "XQuery",
      "GraphQL"
    ],
    "answer": "JPQL"
  },

  // ===== Entities & Mapping Annotations =====
  {
    "type": "mcq",
    "question": "Which characteristic does NOT describe a JPA entity?",
    "options": [
      "Has an identity",
      "Transactional",
      "Fine-grained",
      "Automatically persisted the moment it is created"
    ],
    "answer": "Automatically persisted the moment it is created"
  },
  {
    "type": "mcq",
    "question": "What does a JPA entity's identifier correspond to in the database?",
    "options": [
      "A foreign key",
      "A primary key",
      "An index",
      "A view"
    ],
    "answer": "A primary key"
  },
  {
    "type": "mcq",
    "question": "Which annotation marks a class as a JPA entity?",
    "options": [
      "@Table",
      "@Persistent",
      "@Entity",
      "@Column"
    ],
    "answer": "@Entity"
  },
  {
    "type": "mcq",
    "question": "What does @Table(name = \"EMP\") do?",
    "options": [
      "Creates a new database",
      "Overrides the default table name that the entity maps to",
      "Marks a field as a primary key",
      "Defines a foreign key column"
    ],
    "answer": "Overrides the default table name that the entity maps to"
  },
  {
    "type": "mcq",
    "question": "What does @Column(name = \"EMP_NAME\") do?",
    "options": [
      "Overrides the default column name for a field",
      "Makes the field transient",
      "Declares the field as a primary key",
      "Declares a relationship to another entity"
    ],
    "answer": "Overrides the default column name for a field"
  },
  {
    "type": "mcq",
    "question": "An Employee entity has a field annotated with @Transient. What happens to that field?",
    "options": [
      "It is stored as the primary key",
      "It is stored in a separate table",
      "It is encrypted before being saved",
      "It is NOT persisted to the database"
    ],
    "answer": "It is NOT persisted to the database"
  },
  {
    "type": "mcq",
    "question": "If no @Table or @Column annotations are given, what names does JPA use by default?",
    "options": [
      "Random generated names",
      "The class name for the table and the field names for the columns",
      "Always upper-case names with a prefix",
      "The package name for the table"
    ],
    "answer": "The class name for the table and the field names for the columns"
  },

  // ===== Key Interfaces & Configuration =====
  {
    "type": "mcq",
    "question": "Which class is the starting point for creating an EntityManagerFactory?",
    "options": [
      "EntityManager",
      "Persistence",
      "EntityTransaction",
      "Query"
    ],
    "answer": "Persistence"
  },
  {
    "type": "mcq",
    "question": "What does an EntityManagerFactory create?",
    "options": [
      "Entity classes",
      "Database tables",
      "EntityManager instances",
      "persistence.xml files"
    ],
    "answer": "EntityManager instances"
  },
  {
    "type": "mcq",
    "question": "What is the EntityManager used for?",
    "options": [
      "Managing the lifecycle of entities and querying the database",
      "Compiling JPQL into bytecode",
      "Creating Maven projects",
      "Rendering JSP pages"
    ],
    "answer": "Managing the lifecycle of entities and querying the database"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of EntityTransaction?",
    "options": [
      "To cache query results",
      "To generate primary keys",
      "To group operations into a unit of work that completely succeeds or fails",
      "To map entities to XML"
    ],
    "answer": "To group operations into a unit of work that completely succeeds or fails"
  },
  {
    "type": "mcq",
    "question": "Where should persistence.xml be placed?",
    "options": [
      "WEB-INF/lib",
      "META-INF",
      "src/test",
      "The project root"
    ],
    "answer": "META-INF"
  },
  {
    "type": "mcq",
    "question": "Which of the following is configured inside a persistence unit?",
    "options": [
      "Servlet URL mappings",
      "JSP tag libraries",
      "Database connection details and the entity classes to be managed",
      "Maven dependencies"
    ],
    "answer": "Database connection details and the entity classes to be managed"
  },
  {
    "type": "mcq",
    "question": "In Persistence.createEntityManagerFactory(\"myUnit\"), what does \"myUnit\" refer to?",
    "options": [
      "The database name",
      "The entity class name",
      "The name of the persistence unit defined in persistence.xml",
      "The name of the table"
    ],
    "answer": "The name of the persistence unit defined in persistence.xml"
  },
  {
    "type": "mcq",
    "question": "What is the persistence context?",
    "options": [
      "The set of entity instances managed by an EntityManager",
      "The database server process",
      "The persistence.xml file",
      "A list of all tables in the database"
    ],
    "answer": "The set of entity instances managed by an EntityManager"
  },

  // ===== CRUD with EntityManager =====
  {
    "type": "mcq",
    "question": "Which EntityManager method adds a new entity to the persistence context so it will be inserted into the database?",
    "options": [
      "find()",
      "persist()",
      "remove()",
      "detach()"
    ],
    "answer": "persist()"
  },
  {
    "type": "mcq",
    "question": "What does em.find(Employee.class, 999) return if no Employee with ID 999 exists?",
    "options": [
      "An empty Employee object",
      "An EntityNotFoundException is always thrown",
      "null",
      "0"
    ],
    "answer": "null"
  },
  {
    "type": "mcq",
    "question": "Which operation does NOT require a transaction?",
    "options": [
      "persist()",
      "remove()",
      "merge()",
      "find()"
    ],
    "answer": "find()"
  },
  {
    "type": "mcq",
    "question": "What does em.merge(detachedEntity) return?",
    "options": [
      "The same detached object, now managed",
      "The managed version of the entity",
      "void",
      "A boolean indicating success"
    ],
    "answer": "The managed version of the entity"
  },
  {
    "type": "mcq",
    "question": "After calling Employee managed = em.merge(pojo), what state is the original 'pojo' object in?",
    "options": [
      "Managed",
      "Removed",
      "New",
      "Still detached"
    ],
    "answer": "Still detached"
  },
  {
    "type": "mcq",
    "question": "What happens if merge() is called with an entity that does not exist in the database?",
    "options": [
      "An exception is thrown",
      "It is persisted",
      "It is ignored",
      "It is removed"
    ],
    "answer": "It is persisted"
  },
  {
    "type": "mcq",
    "question": "When is the actual DELETE statement executed after em.remove(employee)?",
    "options": [
      "Immediately when remove() is called",
      "When the EntityManagerFactory is created",
      "When flush() occurs (e.g., at commit)",
      "Never, remove() only marks the object in memory"
    ],
    "answer": "When flush() occurs (e.g., at commit)"
  },
  {
    "type": "mcq",
    "question": "Which kind of entity can be passed to remove()?",
    "options": [
      "Only managed entities",
      "Only detached entities",
      "Only new (transient) entities",
      "Any POJO"
    ],
    "answer": "Only managed entities"
  },

  // ===== Entity Life Cycle =====
  {
    "type": "mcq",
    "question": "Which entity state describes a newly created object that is not associated with a persistence context and has no database row?",
    "options": [
      "Managed",
      "Detached",
      "Removed",
      "New (Transient)"
    ],
    "answer": "New (Transient)"
  },
  {
    "type": "mcq",
    "question": "Which call moves a New (Transient) entity into the Managed state?",
    "options": [
      "persist()",
      "flush()",
      "detach()",
      "clear()"
    ],
    "answer": "persist()"
  },
  {
    "type": "mcq",
    "question": "Which of the following moves a Managed entity to the Detached state?",
    "options": [
      "persist()",
      "find()",
      "close() or clear() on the EntityManager",
      "createQuery()"
    ],
    "answer": "close() or clear() on the EntityManager"
  },
  {
    "type": "mcq",
    "question": "An entity returned by em.find() is in which state?",
    "options": [
      "New",
      "Managed",
      "Detached",
      "Removed"
    ],
    "answer": "Managed"
  },
  {
    "type": "mcq",
    "question": "What does flush() do?",
    "options": [
      "Closes the EntityManager",
      "Creates a new persistence unit",
      "Deletes the entity from memory",
      "Synchronizes the persistence context's changes to the database"
    ],
    "answer": "Synchronizes the persistence context's changes to the database"
  },

  // ===== JPQL =====
  {
    "type": "mcq",
    "question": "In the JPQL query \"SELECT e FROM Employee e\", what does Employee refer to?",
    "options": [
      "The database table name",
      "The entity class name",
      "The persistence unit",
      "The primary key column"
    ],
    "answer": "The entity class name"
  },
  {
    "type": "mcq",
    "question": "Which prefix is used for a named parameter in JPQL?",
    "options": [
      "? (question mark)",
      "# (hash)",
      "$ (dollar)",
      ": (colon)"
    ],
    "answer": ": (colon)"
  },
  {
    "type": "mcq",
    "question": "Which is a positional parameter in JPQL?",
    "options": [
      "WHERE e.name LIKE :name",
      "WHERE e.name LIKE ?1",
      "WHERE e.name LIKE #name",
      "WHERE e.name LIKE @name"
    ],
    "answer": "WHERE e.name LIKE ?1"
  },
  {
    "type": "mcq",
    "question": "Which method is used to create a dynamic query defined directly in business logic?",
    "options": [
      "createNamedQuery()",
      "createQuery()",
      "createStoredProcedureQuery()",
      "createTable()"
    ],
    "answer": "createQuery()"
  },
  {
    "type": "mcq",
    "question": "Which annotation is used to define a static query that createNamedQuery() can run?",
    "options": [
      "@Query",
      "@StaticQuery",
      "@NamedQuery",
      "@JPQL"
    ],
    "answer": "@NamedQuery"
  },
  {
    "type": "mcq",
    "question": "Which method runs a plain SQL statement (using table and column names) instead of JPQL?",
    "options": [
      "createNativeQuery()",
      "createQuery()",
      "createNamedQuery()",
      "find()"
    ],
    "answer": "createNativeQuery()"
  },
  {
    "type": "mcq",
    "question": "What does TypedQuery<Employee>.getResultList() return?",
    "options": [
      "A single Employee",
      "A List<Employee>",
      "An int row count",
      "A Map<String, Employee>"
    ],
    "answer": "A List<Employee>"
  },

  // ===== Primary Key Generation =====
  {
    "type": "mcq",
    "question": "Which annotation is used to have JPA generate primary key values automatically?",
    "options": [
      "@GeneratedValue",
      "@AutoKey",
      "@Id only",
      "@KeyGenerator"
    ],
    "answer": "@GeneratedValue"
  },
  {
    "type": "mcq",
    "question": "Which GenerationType uses a database identity column (e.g., auto-increment)?",
    "options": [
      "SEQUENCE",
      "TABLE",
      "IDENTITY",
      "AUTO"
    ],
    "answer": "IDENTITY"
  },
  {
    "type": "mcq",
    "question": "Which GenerationType lets the persistence provider choose an appropriate strategy for the database?",
    "options": [
      "AUTO",
      "IDENTITY",
      "SEQUENCE",
      "TABLE"
    ],
    "answer": "AUTO"
  },
  {
    "type": "mcq",
    "question": "With Hibernate as the provider, which strategy does GenerationType.AUTO typically select for most popular databases?",
    "options": [
      "IDENTITY",
      "TABLE",
      "None, you must specify one",
      "SEQUENCE"
    ],
    "answer": "SEQUENCE"
  },
  {
    "type": "mcq",
    "question": "In @SequenceGenerator, which attribute is required?",
    "options": [
      "name (the generator name)",
      "sequenceName",
      "allocationSize",
      "initialValue"
    ],
    "answer": "name (the generator name)"
  },

  // ===== Entity Relationships =====
  {
    "type": "mcq",
    "question": "In an entity relationship, which side is the owning side?",
    "options": [
      "The side annotated with mappedBy",
      "The side that contains the foreign key",
      "The side that was created first",
      "The side with the primary key"
    ],
    "answer": "The side that contains the foreign key"
  },
  {
    "type": "mcq",
    "question": "In a many-to-one / one-to-many relationship, the owning side is usually on which side?",
    "options": [
      "The 'one' side",
      "Neither side",
      "The 'many' side",
      "Both sides equally"
    ],
    "answer": "The 'many' side"
  },
  {
    "type": "mcq",
    "question": "A unidirectional relationship has:",
    "options": [
      "Only an owning side",
      "Only an inverse side",
      "An owning side and an inverse side",
      "No foreign key"
    ],
    "answer": "Only an owning side"
  },
  {
    "type": "mcq",
    "question": "On which side of a bidirectional relationship is mappedBy placed?",
    "options": [
      "The owning side",
      "Both sides",
      "The inverse side",
      "The primary key field"
    ],
    "answer": "The inverse side"
  },
  {
    "type": "mcq",
    "question": "What value does mappedBy = \"xxxx\" hold?",
    "options": [
      "The table name of the owning entity",
      "The field name in the owning side entity that holds the association",
      "The foreign key column name",
      "The name of the persistence unit"
    ],
    "answer": "The field name in the owning side entity that holds the association"
  },
  {
    "type": "mcq",
    "question": "Which annotation is used on the owning side to specify the foreign key column name?",
    "options": [
      "@JoinColumn",
      "@JoinTable",
      "@Column",
      "@MappedBy"
    ],
    "answer": "@JoinColumn"
  },
  {
    "type": "mcq",
    "question": "A @ManyToMany relationship between Employee and Skill is stored using:",
    "options": [
      "A foreign key in the Employee table only",
      "A foreign key in the Skill table only",
      "A discriminator column",
      "A separate join table, defined with @JoinTable"
    ],
    "answer": "A separate join table, defined with @JoinTable"
  },
  {
    "type": "mcq",
    "question": "Which relationship annotation does NOT have a mappedBy on its inverse side because the 'many' side is always the owner?",
    "options": [
      "@OneToOne",
      "@ManyToOne",
      "@OneToMany",
      "@ManyToMany"
    ],
    "answer": "@ManyToOne"
  },
  {
    "type": "mcq",
    "question": "CascadeType.ALL is equivalent to which set of cascade operations?",
    "options": [
      "PERSIST and REMOVE only",
      "PERSIST, MERGE and REMOVE only",
      "DETACH, MERGE, PERSIST, REFRESH, REMOVE",
      "MERGE, REFRESH and FLUSH"
    ],
    "answer": "DETACH, MERGE, PERSIST, REFRESH, REMOVE"
  },
  {
    "type": "mcq",
    "question": "With @OneToOne(cascade = CascadeType.PERSIST) on Employee.payroll, what happens when an Employee is persisted?",
    "options": [
      "The related Payroll is also persisted",
      "The related Payroll is deleted",
      "Nothing happens to the Payroll",
      "The Employee is detached"
    ],
    "answer": "The related Payroll is also persisted"
  },

  // ===== Entity Inheritance =====
  {
    "type": "mcq",
    "question": "Which annotation is used for the Mapped Superclass strategy?",
    "options": [
      "@Entity",
      "@MappedSuperclass",
      "@Inheritance(strategy = InheritanceType.JOINED)",
      "@DiscriminatorColumn"
    ],
    "answer": "@MappedSuperclass"
  },
  {
    "type": "mcq",
    "question": "Which statement about a mapped superclass is TRUE?",
    "options": [
      "It has its own table",
      "It can be queried polymorphically",
      "It can participate in entity relationships",
      "It is not an entity and has no table of its own"
    ],
    "answer": "It is not an entity and has no table of its own"
  },
  {
    "type": "mcq",
    "question": "Which inheritance strategy maps the whole class hierarchy to ONE table with a discriminator column?",
    "options": [
      "TABLE_PER_CLASS",
      "JOINED",
      "SINGLE_TABLE",
      "MappedSuperclass"
    ],
    "answer": "SINGLE_TABLE"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of the discriminator column (e.g., ACC_TYPE) in the single-table strategy?",
    "options": [
      "To store the primary key",
      "To identify which subclass each row belongs to",
      "To link to a parent table",
      "To store the version number"
    ],
    "answer": "To identify which subclass each row belongs to"
  },
  {
    "type": "mcq",
    "question": "Which is an advantage of the single-table strategy?",
    "options": [
      "Best performance, since queries need no joins",
      "Supports NOT NULL constraints on subclass columns",
      "No NULL values in the table",
      "Smallest tables"
    ],
    "answer": "Best performance, since queries need no joins"
  },
  {
    "type": "mcq",
    "question": "What is a major disadvantage of the single-table strategy?",
    "options": [
      "Polymorphic queries are not possible",
      "Many NULL values, and NOT NULL constraints cannot be used on subclass columns",
      "Every query requires a JOIN",
      "The superclass cannot be an entity"
    ],
    "answer": "Many NULL values, and NOT NULL constraints cannot be used on subclass columns"
  },
  {
    "type": "mcq",
    "question": "Which strategy creates a separate table for each concrete class, including the inherited fields in each table?",
    "options": [
      "SINGLE_TABLE",
      "TABLE_PER_CLASS",
      "JOINED",
      "MappedSuperclass"
    ],
    "answer": "TABLE_PER_CLASS"
  },
  {
    "type": "mcq",
    "question": "What is the main drawback of the table-per-concrete-class strategy?",
    "options": [
      "The superclass cannot take part in relationships",
      "It cannot use polymorphic queries",
      "Poor performance for complex polymorphic queries",
      "It requires a discriminator column"
    ],
    "answer": "Poor performance for complex polymorphic queries"
  },
  {
    "type": "mcq",
    "question": "In the JOINED strategy, how does a subclass table relate to the superclass table?",
    "options": [
      "It has no relationship",
      "Its primary key is also a foreign key to the superclass table's primary key",
      "It stores a copy of all superclass columns",
      "It is linked through a discriminator column"
    ],
    "answer": "Its primary key is also a foreign key to the superclass table's primary key"
  },
  {
    "type": "mcq",
    "question": "Which inheritance strategy allows NOT NULL constraints and keeps tables small, but requires a JOIN to query a subclass?",
    "options": [
      "SINGLE_TABLE",
      "JOINED",
      "TABLE_PER_CLASS",
      "MappedSuperclass"
    ],
    "answer": "JOINED"
  },
  {
    "type": "mcq",
    "question": "Which inheritance approach does NOT support polymorphic queries on the superclass?",
    "options": [
      "SINGLE_TABLE",
      "TABLE_PER_CLASS",
      "JOINED",
      "Mapped Superclass"
    ],
    "answer": "Mapped Superclass"
  },

  // ===== Java Enumerations =====
  {
    "type": "mcq",
    "question": "In Java, an enum is best described as:",
    "options": [
      "A primitive integer type",
      "A special class that holds a fixed set of constants",
      "An interface with no methods",
      "A type alias for String"
    ],
    "answer": "A special class that holds a fixed set of constants"
  },
  {
    "type": "mcq",
    "question": "What naming convention should enum constants follow?",
    "options": [
      "camelCase",
      "lowercase",
      "PascalCase",
      "UPPER_CASE"
    ],
    "answer": "UPPER_CASE"
  },
  {
    "type": "mcq",
    "question": "Which is the correct way to assign an enum value to a variable?",
    "options": [
      "Term t = new Term(\"SPRING\");",
      "Term t = Term.SPRING;",
      "Term t = Term(SPRING);",
      "Term t = new Term.SPRING();"
    ],
    "answer": "Term t = Term.SPRING;"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of a constructor in a Java enum?",
    "options": [
      "To create new enum objects with the new keyword at runtime",
      "To associate values with each constant when the constants are defined",
      "To make the enum serializable",
      "To convert the enum to a String"
    ],
    "answer": "To associate values with each constant when the constants are defined"
  },
  {
    "type": "mcq",
    "question": "How does an enum constructor behave regarding access?",
    "options": [
      "It must be public",
      "It must be protected",
      "It behaves like private",
      "It must be static"
    ],
    "answer": "It behaves like private"
  },
  {
    "type": "mcq",
    "question": "What does the ordinal() method of an enum return?",
    "options": [
      "The name of the constant as a String",
      "A unique integer for each constant, starting at 0",
      "A unique integer for each constant, starting at 1",
      "The length of the constant's name"
    ],
    "answer": "A unique integer for each constant, starting at 0"
  },
  {
    "type": "mcq",
    "question": "What does the name() method of an enum return?",
    "options": [
      "The ordinal position",
      "The associated integer value",
      "The class name of the enum",
      "The String name of the enum constant"
    ],
    "answer": "The String name of the enum constant"
  },
  {
    "type": "mcq",
    "question": "In a switch statement on an enum variable 'term', which case label is correct?",
    "options": [
      "case Term.FALL:",
      "case \"FALL\":",
      "case FALL:",
      "case 1:"
    ],
    "answer": "case FALL:"
  },
  {
    "type": "mcq",
    "question": "Given: public enum Term { FALL(1), WINTER(2), SPRING(3); ... }. What does Term.WINTER.ordinal() return?",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answer": "1"
  }
]



};