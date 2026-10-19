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
  },
  
  // ===== Servlets =====
  {
    "type": "mcq",
    "question": "A servlet is a Java class that extends which class?",
    "options": [
      "HttpServlet",
      "HttpServletRequest",
      "PrintWriter",
      "ServletContext"
    ],
    "answer": "HttpServlet"
  },
  {
    "type": "mcq",
    "question": "Where does a servlet run?",
    "options": [
      "In the user's browser",
      "On the server within a server container",
      "Inside the database",
      "On the client's JVM"
    ],
    "answer": "On the server within a server container"
  },
  {
    "type": "mcq",
    "question": "Which statement about servlet initialization is correct?",
    "options": [
      "A servlet has an init() method and no constructors",
      "A servlet must define a public constructor with parameters",
      "A servlet is initialized by calling main()",
      "A servlet has neither a constructor nor an init() method"
    ],
    "answer": "A servlet has an init() method and no constructors"
  },
  {
    "type": "mcq",
    "question": "When is a servlet compiled compared to a JSP?",
    "options": [
      "Both are compiled at the first request",
      "A servlet is compiled before deployment; a JSP is compiled into a servlet at its first call",
      "A servlet is compiled at the first request; a JSP is compiled before deployment",
      "Neither is ever compiled"
    ],
    "answer": "A servlet is compiled before deployment; a JSP is compiled into a servlet at its first call"
  },
  {
    "type": "mcq",
    "question": "Where is most of the business logic typically placed?",
    "options": [
      "In JSP scriptlets",
      "In servlets",
      "In web.xml",
      "In CSS files"
    ],
    "answer": "In servlets"
  },
  {
    "type": "mcq",
    "question": "Which servlet method processes HTTP requests that use the GET method?",
    "options": [
      "doPost()",
      "doGet()",
      "service()",
      "init()"
    ],
    "answer": "doGet()"
  },
  {
    "type": "mcq",
    "question": "Which servlet method processes form submissions sent with method=\"post\"?",
    "options": [
      "doGet()",
      "doPost()",
      "doForm()",
      "destroy()"
    ],
    "answer": "doPost()"
  },
  {
    "type": "mcq",
    "question": "Which two objects does the web server pass into doGet() and doPost()?",
    "options": [
      "HttpServletRequest and HttpServletResponse",
      "HttpSession and ServletContext",
      "PrintWriter and OutputStream",
      "Request and Connection"
    ],
    "answer": "HttpServletRequest and HttpServletResponse"
  },
  {
    "type": "mcq",
    "question": "Which packages must a servlet import in the Jakarta version used in class?",
    "options": [
      "javax.swing and java.sql",
      "java.net and java.nio",
      "java.io, jakarta.servlet and jakarta.servlet.http",
      "org.hibernate and jakarta.persistence"
    ],
    "answer": "java.io, jakarta.servlet and jakarta.servlet.http"
  },
  {
    "type": "mcq",
    "question": "What must be done BEFORE calling response.getWriter()?",
    "options": [
      "Call request.getParameter()",
      "Call setContentType() on the response",
      "Close the PrintWriter",
      "Forward the request to a JSP"
    ],
    "answer": "Call setContentType() on the response"
  },
  {
    "type": "mcq",
    "question": "Which object is used to send HTML text back to the browser from a servlet?",
    "options": [
      "HttpServletRequest",
      "PrintWriter returned by response.getWriter()",
      "EntityManager",
      "Scanner"
    ],
    "answer": "PrintWriter returned by response.getWriter()"
  },
  {
    "type": "mcq",
    "question": "Which content type should a servlet set to return JSON?",
    "options": [
      "text/html",
      "text/json-data",
      "application/json",
      "application/xml"
    ],
    "answer": "application/json"
  },
  {
    "type": "mcq",
    "question": "In the sample servlet, what does doGet() do?",
    "options": [
      "Calls doPost(request, response) so both request types share the same logic",
      "Throws an exception",
      "Redirects to web.xml",
      "Closes the response"
    ],
    "answer": "Calls doPost(request, response) so both request types share the same logic"
  },
  {
    "type": "mcq",
    "question": "What does request.getParameter(\"mypostparameter\") return if the parameter was not sent?",
    "options": [
      "An empty string",
      "null",
      "0",
      "It throws an exception"
    ],
    "answer": "null"
  },
  {
    "type": "mcq",
    "question": "Which file is used to map a servlet to a URL in the course examples?",
    "options": [
      "pom.xml",
      "persistence.xml",
      "web.xml",
      "index.jsp"
    ],
    "answer": "web.xml"
  },
  {
    "type": "mcq",
    "question": "In web.xml, the servlet mapping statements are written inside which element?",
    "options": [
      "web-app",
      "persistence-unit",
      "dependencies",
      "taglib"
    ],
    "answer": "web-app"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT part of a servlet mapping in web.xml?",
    "options": [
      "Servlet name",
      "Servlet class",
      "Servlet URL",
      "Database password"
    ],
    "answer": "Database password"
  },
  {
    "type": "mcq",
    "question": "Besides servlet mappings, what else can be configured in web.xml?",
    "options": [
      "Session timeouts and welcome file lists",
      "JPA entity relationships",
      "Maven dependency versions",
      "SQL queries"
    ],
    "answer": "Session timeouts and welcome file lists"
  },
  {
    "type": "mcq",
    "question": "An HTML form has action=\"MyServlet\" method=\"post\". Which servlet method handles the submission?",
    "options": [
      "doGet()",
      "doPost()",
      "init()",
      "doDelete()"
    ],
    "answer": "doPost()"
  },

  // ===== Passing data: Servlet -> JSP =====
  {
    "type": "mcq",
    "question": "How does a servlet make data available to a JSP it forwards to?",
    "options": [
      "request.setAttribute(\"name\", value) before forwarding",
      "By writing the data into web.xml",
      "By calling response.getWriter().print() only",
      "By declaring a static variable in the JSP"
    ],
    "answer": "request.setAttribute(\"name\", value) before forwarding"
  },
  {
    "type": "mcq",
    "question": "Which call forwards the request to a JSP?",
    "options": [
      "request.getRequestDispatcher(\"/person.jsp\").forward(request, response)",
      "response.getWriter().forward(\"/person.jsp\")",
      "request.forward(\"person.jsp\")",
      "new Servlet(\"/person.jsp\")"
    ],
    "answer": "request.getRequestDispatcher(\"/person.jsp\").forward(request, response)"
  },
  {
    "type": "mcq",
    "question": "Why can a JSP read data that a servlet stored with request.setAttribute()?",
    "options": [
      "Because the JSP also has access to the same request object",
      "Because attributes are saved in the database",
      "Because attributes are saved in the browser cookie",
      "Because the JSP is compiled together with the servlet's constructor"
    ],
    "answer": "Because the JSP also has access to the same request object"
  },

  // ===== JSTL =====
  {
    "type": "mcq",
    "question": "What does JSTL stand for?",
    "options": [
      "Java Servlet Template Language",
      "JavaServer Pages Standard Tag Library",
      "Java Standard Text Loader",
      "JSON Server Tag Library"
    ],
    "answer": "JavaServer Pages Standard Tag Library"
  },
  {
    "type": "mcq",
    "question": "What is the main reason to use JSTL + EL in JSPs?",
    "options": [
      "To replace scriptlets and make JSPs cleaner",
      "To replace servlets entirely",
      "To connect to the database",
      "To compile JSPs faster"
    ],
    "answer": "To replace scriptlets and make JSPs cleaner"
  },
  {
    "type": "mcq",
    "question": "Which directive must appear in a JSP to use the core JSTL tags with the prefix \"c\"?",
    "options": [
      "<%@ page import=\"c\" %>",
      "<%@ taglib prefix=\"c\" uri=\"http://java.sun.com/jsp/jstl/core\" %>",
      "<%@ include file=\"c\" %>",
      "<jsp:useBean id=\"c\" />"
    ],
    "answer": "<%@ taglib prefix=\"c\" uri=\"http://java.sun.com/jsp/jstl/core\" %>"
  },
  {
    "type": "mcq",
    "question": "Besides the taglib directive in the JSP, what else is needed to use JSTL in a Maven project?",
    "options": [
      "The JSTL dependencies added to pom.xml",
      "A new entry in persistence.xml",
      "A separate servlet named JSTLServlet",
      "Nothing else is needed"
    ],
    "answer": "The JSTL dependencies added to pom.xml"
  },
  {
    "type": "mcq",
    "question": "Why can the JSTL dependency version differ between projects?",
    "options": [
      "The version depends on the version of Jakarta being used",
      "The version depends on the database vendor",
      "The version depends on the browser",
      "It never differs"
    ],
    "answer": "The version depends on the version of Jakarta being used"
  },
  {
    "type": "mcq",
    "question": "Which JSTL tag outputs a value and escapes HTML to help prevent XSS?",
    "options": [
      "c:out",
      "c:if",
      "c:forEach",
      "c:url"
    ],
    "answer": "c:out"
  },
  {
    "type": "mcq",
    "question": "What does XSS stand for?",
    "options": [
      "Extended Server Syntax",
      "XML Style Sheet",
      "Cross Site Scripting",
      "Cross Server Session"
    ],
    "answer": "Cross Site Scripting"
  },
  {
    "type": "mcq",
    "question": "How do you give c:out a fallback value when the expression is null?",
    "options": [
      "Use the default attribute",
      "Use the else attribute",
      "Use the fallback tag",
      "Use the null attribute"
    ],
    "answer": "Use the default attribute"
  },
  {
    "type": "mcq",
    "question": "Which tag renders its body only when a condition is true?",
    "options": [
      "c:if",
      "c:out",
      "c:param",
      "c:url"
    ],
    "answer": "c:if"
  },
  {
    "type": "mcq",
    "question": "Which attribute of c:if holds the condition?",
    "options": [
      "test",
      "value",
      "items",
      "var"
    ],
    "answer": "test"
  },
  {
    "type": "mcq",
    "question": "Which set of tags provides multi-branch logic similar to if / else if / else?",
    "options": [
      "c:forEach / c:out / c:url",
      "c:choose / c:when / c:otherwise",
      "c:if / c:then / c:else",
      "c:param / c:set / c:remove"
    ],
    "answer": "c:choose / c:when / c:otherwise"
  },
  {
    "type": "mcq",
    "question": "Which tag in c:choose is the default branch when no c:when matches?",
    "options": [
      "c:default",
      "c:else",
      "c:otherwise",
      "c:fallback"
    ],
    "answer": "c:otherwise"
  },
  {
    "type": "mcq",
    "question": "Which tag is used to loop over a collection in a JSP?",
    "options": [
      "c:loop",
      "c:forEach",
      "c:while",
      "c:iterate"
    ],
    "answer": "c:forEach"
  },
  {
    "type": "mcq",
    "question": "In <c:forEach items=\"${people}\" var=\"p\">, what does var=\"p\" represent?",
    "options": [
      "The current item in the loop",
      "The whole list",
      "The loop counter",
      "The page variable"
    ],
    "answer": "The current item in the loop"
  },
  {
    "type": "mcq",
    "question": "In c:forEach, what does varStatus=\"status\" with ${status.index} give you?",
    "options": [
      "The current position (index) in the loop",
      "The HTTP status code",
      "The size of the list",
      "The loop's error message"
    ],
    "answer": "The current position (index) in the loop"
  },
  {
    "type": "mcq",
    "question": "Which tags are used together to build a URL with query parameters?",
    "options": [
      "c:url and c:param",
      "c:out and c:if",
      "c:forEach and c:when",
      "c:choose and c:otherwise"
    ],
    "answer": "c:url and c:param"
  },
  {
    "type": "mcq",
    "question": "Why use c:url instead of writing a URL by hand?",
    "options": [
      "It produces cleaner query strings and handles the URL building for you",
      "It sends the request automatically",
      "It encrypts the URL",
      "It compiles the JSP"
    ],
    "answer": "It produces cleaner query strings and handles the URL building for you"
  },

  // ===== EL =====
  {
    "type": "mcq",
    "question": "What does EL stand for?",
    "options": [
      "Enterprise Library",
      "Expression Language",
      "Entity Loader",
      "Event Listener"
    ],
    "answer": "Expression Language"
  },
  {
    "type": "mcq",
    "question": "Which is the correct EL syntax to display a request attribute named answer?",
    "options": [
      "<%= answer %>",
      "${answer}",
      "#{answer.print}",
      "{{answer}}"
    ],
    "answer": "${answer}"
  },
  {
    "type": "mcq",
    "question": "EL is used instead of which older syntax to display data in a JSP?",
    "options": [
      "The <%= %> expression scriptlet",
      "The @Entity annotation",
      "The doGet() method",
      "The taglib directive"
    ],
    "answer": "The <%= %> expression scriptlet"
  },
  {
    "type": "mcq",
    "question": "What happens with ${person.firstName} when person is null?",
    "options": [
      "A NullPointerException is thrown and the page fails",
      "Nothing is output; EL handles null safely",
      "The text \"null\" is printed",
      "The server restarts"
    ],
    "answer": "Nothing is output; EL handles null safely"
  },
  {
    "type": "mcq",
    "question": "Which EL expression accesses the first element of a list named list?",
    "options": [
      "${list.first}",
      "${list(1)}",
      "${list[0]}",
      "${list->0}"
    ],
    "answer": "${list[0]}"
  },
  {
    "type": "mcq",
    "question": "Which EL expression reads the value stored under the key \"key\" in a map named map?",
    "options": [
      "${map['key']}",
      "${map(key)}",
      "${map.get[key]}",
      "${map->key}"
    ],
    "answer": "${map['key']}"
  },
  {
    "type": "mcq",
    "question": "Which EL expression explicitly reads the attribute \"user\" from the session scope?",
    "options": [
      "${sessionScope.user}",
      "${session->user}",
      "${user.session}",
      "${getSession.user}"
    ],
    "answer": "${sessionScope.user}"
  },
  {
    "type": "mcq",
    "question": "Which EL expression tests that a variable named message is NOT null or empty?",
    "options": [
      "${message != empty}",
      "${not empty message}",
      "${isNull(message)}",
      "${message.empty()}"
    ],
    "answer": "${not empty message}"
  },
  {
    "type": "mcq",
    "question": "What does ${person.age > 0 ? person.age : \"\"} do?",
    "options": [
      "Shows the age if it is greater than 0, otherwise shows an empty string",
      "Always shows the age",
      "Throws an error because EL has no ternary operator",
      "Sets the age to 0"
    ],
    "answer": "Shows the age if it is greater than 0, otherwise shows an empty string"
  },
  {
    "type": "mcq",
    "question": "Why is writing ${person.firstName} directly (without c:out) 'not recommended' for user-supplied data?",
    "options": [
      "It is not escaped, which can allow XSS",
      "It is much slower",
      "It does not work in Jakarta",
      "It only works inside a servlet"
    ],
    "answer": "It is not escaped, which can allow XSS"
  },
  {
    "type": "mcq",
    "question": "Which is the best way to pre-fill a text input from a bean property safely?",
    "options": [
      "value=\"<%= person.getFirstName() %>\"",
      "value=\"<c:out value='${person.firstName}' />\"",
      "value=\"person.firstName\"",
      "value=\"${person.firstName}\" with scriptlets"
    ],
    "answer": "value=\"<c:out value='${person.firstName}' />\""
  },
  {
    "type": "mcq",
    "question": "Which tag would you use to mark a radio button as checked when person.metric == true?",
    "options": [
      "<c:if test=\"${person.metric == true}\">checked</c:if>",
      "<c:forEach items=\"${person.metric}\">checked</c:forEach>",
      "<c:url value=\"checked\" />",
      "<c:param name=\"checked\" />"
    ],
    "answer": "<c:if test=\"${person.metric == true}\">checked</c:if>"
  }

],
MVC_Q2:[
  
  {
    "type": "mcq",
    "question": "Which NuGet package provides the Add-Migration and Update-Database commands in the Package Manager Console?",
    "options": [
      "Microsoft.EntityFrameworkCore",
      "Microsoft.EntityFrameworkCore.SqlServer",
      "Microsoft.EntityFrameworkCore.Tools",
      "Microsoft.EntityFrameworkCore.Proxies"
    ],
    "answer": "Microsoft.EntityFrameworkCore.Tools"
  },
  {
    "type": "mcq",
    "question": "Which NuGet package is the SQL Server database provider for EF Core?",
    "options": [
      "Microsoft.EntityFrameworkCore.SqlServer",
      "Microsoft.EntityFrameworkCore.Tools",
      "Microsoft.EntityFrameworkCore",
      "Microsoft.EntityFrameworkCore.Design"
    ],
    "answer": "Microsoft.EntityFrameworkCore.SqlServer"
  },
  {
    "type": "mcq",
    "question": "When installing EF Core NuGet packages, which version should you choose?",
    "options": [
      "Always the oldest stable version",
      "Any version, since they are backward compatible",
      "A version with the same MAJOR version as your .NET version",
      "Always version 3.1.10"
    ],
    "answer": "A version with the same MAJOR version as your .NET version"
  },
  {
    "type": "mcq",
    "question": "Which version of the Entity Framework should be used with ASP.NET Core projects?",
    "options": [
      "Entity Framework 6",
      "Entity Framework Core",
      "Either one, they are interchangeable",
      "Neither, ASP.NET Core uses only ADO.NET"
    ],
    "answer": "Entity Framework Core"
  },
  {
    "type": "mcq",
    "question": "Which approach has you write C# model classes first and then have EF generate or map the database?",
    "options": [
      "Database-First",
      "Schema-First",
      "Code-First",
      "Table-First"
    ],
    "answer": "Code-First"
  },
  {
    "type": "mcq",
    "question": "Which approach generates model classes from an existing physical database and its schema?",
    "options": [
      "Code-First",
      "Database-First",
      "Migration-First",
      "Convention-First"
    ],
    "answer": "Database-First"
  },
  {
    "type": "mcq",
    "question": "What does LINQ stand for?",
    "options": [
      "Linked Index Query",
      "Language INtegrated Query",
      "Logical Integrated Query",
      "Language Indexed Queue"
    ],
    "answer": "Language INtegrated Query"
  },
  {
    "type": "mcq",
    "question": "What does the DbContext class represent in EF Core?",
    "options": [
      "A single table in the database",
      "A session with the database that allows querying and saving data",
      "A migration file",
      "A connection string"
    ],
    "answer": "A session with the database that allows querying and saving data"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of a DbSet<T> property in a derived context class?",
    "options": [
      "To store the connection string",
      "To represent an entity set used for create, read, update and delete operations",
      "To define the routing of the application",
      "To apply migrations automatically"
    ],
    "answer": "To represent an entity set used for create, read, update and delete operations"
  },
  {
    "type": "mcq",
    "question": "Where is the database connection string stored in an ASP.NET Core project?",
    "options": [
      "In Program.cs only",
      "In the ConnectionStrings section of appsettings.json",
      "In the Migrations folder",
      "In the model class"
    ],
    "answer": "In the ConnectionStrings section of appsettings.json"
  },
  {
    "type": "mcq",
    "question": "What format is appsettings.json written in, and what must separate configuration items?",
    "options": [
      "XML, with closing tags",
      "JSON, with commas",
      "YAML, with indentation",
      "INI, with semicolons"
    ],
    "answer": "JSON, with commas"
  },
  {
    "type": "mcq",
    "question": "What is Program.cs responsible for in the project?",
    "options": [
      "Defining database tables",
      "Storing migration history",
      "Configuring project-wide settings and services such as MVC and the DbContext",
      "Validating uploaded images"
    ],
    "answer": "Configuring project-wide settings and services such as MVC and the DbContext"
  },
  {
    "type": "mcq",
    "question": "Which scaffolding option generates a controller and views directly from a model class using EF?",
    "options": [
      "Empty MVC Controller",
      "API Controller with actions",
      "MVC Controller with views, using Entity Framework",
      "Razor Page Empty"
    ],
    "answer": "MVC Controller with views, using Entity Framework"
  },
  {
    "type": "mcq",
    "question": "When should a controller action's return type be left as IActionResult?",
    "options": [
      "Only when it returns a ViewResult",
      "When multiple ActionResult subtypes may be returned or you are not sure yet which one",
      "Only when it returns JSON",
      "Never, a concrete type must always be used"
    ],
    "answer": "When multiple ActionResult subtypes may be returned or you are not sure yet which one"
  },
  {
    "type": "mcq",
    "question": "Which ActionResult subtype serializes an object to JSON format?",
    "options": [
      "ContentResult",
      "JsonResult",
      "ViewResult",
      "EmptyResult"
    ],
    "answer": "JsonResult"
  },
  {
    "type": "mcq",
    "question": "Which ActionResult subtype writes content to the response stream without requiring a view?",
    "options": [
      "ViewResult",
      "PartialViewResult",
      "ContentResult",
      "RedirectResult"
    ],
    "answer": "ContentResult"
  },
  {
    "type": "mcq",
    "question": "Which ActionResult subtype performs an HTTP redirection to a URL determined by the routing engine from route data?",
    "options": [
      "RedirectResult",
      "RedirectToRouteResult",
      "LocalRedirectResult",
      "EmptyResult"
    ],
    "answer": "RedirectToRouteResult"
  },
  {
    "type": "mcq",
    "question": "What is a ViewModel?",
    "options": [
      "A model that maps directly to a database table",
      "A model used with a strongly typed view for passing and validating data, not working directly with the database",
      "A migration class",
      "A DbContext subclass"
    ],
    "answer": "A model used with a strongly typed view for passing and validating data, not working directly with the database"
  },
  {
    "type": "mcq",
    "question": "By convention, which integer property will EF Core use as the primary key of a Book model?",
    "options": [
      "Key or BookKey",
      "PrimaryId",
      "Id or BookId",
      "Number"
    ],
    "answer": "Id or BookId"
  },
  {
    "type": "mcq",
    "question": "By convention, how is an integer primary key property generated?",
    "options": [
      "As a user-provided value",
      "As an auto-incrementing integer",
      "As a random GUID",
      "As a string"
    ],
    "answer": "As an auto-incrementing integer"
  },
  {
    "type": "mcq",
    "question": "Which annotation marks a property with a non-conventional name (such as UserName) as the primary key?",
    "options": [
      "[Required]",
      "[PrimaryKey]",
      "[Key]",
      "[Column]"
    ],
    "answer": "[Key]"
  },
  {
    "type": "mcq",
    "question": "Which attribute lets you supply the primary key value yourself instead of having the database generate it?",
    "options": [
      "[Key(Manual)]",
      "[DatabaseGenerated(DatabaseGeneratedOption.None)]",
      "[DatabaseGenerated(DatabaseGeneratedOption.Identity)]",
      "[NotMapped]"
    ],
    "answer": "[DatabaseGenerated(DatabaseGeneratedOption.None)]"
  },
  {
    "type": "mcq",
    "question": "Which using statement is needed for the DatabaseGenerated attribute?",
    "options": [
      "using System.ComponentModel.DataAnnotations.Schema;",
      "using Microsoft.AspNetCore.Authorization;",
      "using System.IO;",
      "using Microsoft.EntityFrameworkCore.Migrations;"
    ],
    "answer": "using System.ComponentModel.DataAnnotations.Schema;"
  },
  {
    "type": "mcq",
    "question": "By default, what determines the name of the database table generated for an entity?",
    "options": [
      "The name of the model file",
      "The name of the DbSet property in the context class",
      "The name of the migration",
      "The name of the connection string"
    ],
    "answer": "The name of the DbSet property in the context class"
  },
  {
    "type": "mcq",
    "question": "What can you use when Data Annotations cannot achieve the configuration you need?",
    "options": [
      "Lazy loading",
      "The Fluent API",
      "Explicit loading",
      "A ViewModel"
    ],
    "answer": "The Fluent API"
  },
  {
    "type": "mcq",
    "question": "After changing a model class (for example adding a [Key] annotation), what must you do for the change to reach the database?",
    "options": [
      "Nothing, it updates automatically",
      "Restart the web server",
      "Create a new migration and apply it with Update-Database",
      "Delete the Migrations folder"
    ],
    "answer": "Create a new migration and apply it with Update-Database"
  },
  {
    "type": "mcq",
    "question": "Where does Add-Migration generate its new migration file?",
    "options": [
      "In the /Migrations/ folder",
      "In the /Models/ folder",
      "In the wwwroot folder",
      "In the /Views/ folder"
    ],
    "answer": "In the /Migrations/ folder"
  },
  {
    "type": "mcq",
    "question": "Why does EF Core add a timestamp to the name of each migration?",
    "options": [
      "To encrypt the migration",
      "To track the order in which multiple migrations are applied",
      "To make the name unique so duplicate names are allowed",
      "To record who created it"
    ],
    "answer": "To track the order in which multiple migrations are applied"
  },
  {
    "type": "mcq",
    "question": "In a migration class, what does the Up() method do?",
    "options": [
      "Reverts the database to the previous model version",
      "Applies the new changes to the database",
      "Deletes the migration",
      "Drops the database"
    ],
    "answer": "Applies the new changes to the database"
  },
  {
    "type": "mcq",
    "question": "In a migration class, what does the Down() method do?",
    "options": [
      "Applies the new changes",
      "Creates the connection string",
      "Undoes the change and reverts to the previous version of the model",
      "Generates a new migration"
    ],
    "answer": "Undoes the change and reverts to the previous version of the model"
  },
  {
    "type": "mcq",
    "question": "Which system table records which migrations have been applied to a database?",
    "options": [
      "__MigrationLog",
      "__EFMigrationsHistory",
      "sysmigrations",
      "__EFContext"
    ],
    "answer": "__EFMigrationsHistory"
  },
  {
    "type": "mcq",
    "question": "What does Update-Database do when several earlier migrations have not yet been deployed?",
    "options": [
      "Applies only the newest migration",
      "Throws an error",
      "Applies all pending migrations in the order they were generated",
      "Deletes the older migrations"
    ],
    "answer": "Applies all pending migrations in the order they were generated"
  },
  {
    "type": "mcq",
    "question": "What is required of each migration name passed to Add-Migration?",
    "options": [
      "It must be unique, regardless of the prepended timestamp",
      "It must be identical to the previous migration",
      "It must contain the date",
      "It must match the model name"
    ],
    "answer": "It must be unique, regardless of the prepended timestamp"
  },
  {
    "type": "mcq",
    "question": "Which command deletes a migration that has NOT yet been applied to the database?",
    "options": [
      "Drop-Migration",
      "Delete-Migration",
      "Remove-Migration",
      "Undo-Migration"
    ],
    "answer": "Remove-Migration"
  },
  {
    "type": "mcq",
    "question": "You generated a migration with mistakes and it has already been deployed to the database. Which statement is TRUE?",
    "options": [
      "Remove-Migration will still delete it safely",
      "You cannot remove it with Remove-Migration; you must revert it, create a new migration to undo it, or drop the database",
      "You must reinstall the NuGet packages",
      "Nothing can be done"
    ],
    "answer": "You cannot remove it with Remove-Migration; you must revert it, create a new migration to undo it, or drop the database"
  },
  {
    "type": "mcq",
    "question": "What does Update-Database -Migration <MigrationName> do?",
    "options": [
      "Applies only that single migration and ignores the rest",
      "Updates the database to that migration, running Down() for migrations that come after it",
      "Deletes that migration",
      "Renames the migration"
    ],
    "answer": "Updates the database to that migration, running Down() for migrations that come after it"
  },
  {
    "type": "mcq",
    "question": "Which command rolls the database all the way back to an empty database (no migrations applied)?",
    "options": [
      "Update-Database -Migration 0",
      "Remove-Migration -All",
      "Drop-Migration 0",
      "Update-Database -Reset"
    ],
    "answer": "Update-Database -Migration 0"
  },
  {
    "type": "mcq",
    "question": "After generating a migration, what should you do before running Update-Database?",
    "options": [
      "Review its contents to make sure it captures the expected changes and nothing else",
      "Delete the previous migrations",
      "Restart Visual Studio",
      "Change the connection string"
    ],
    "answer": "Review its contents to make sure it captures the expected changes and nothing else"
  },
  {
    "type": "mcq",
    "question": "Which loading pattern loads related data automatically the first time a navigation property is accessed?",
    "options": [
      "Eager loading",
      "Lazy loading",
      "Explicit loading",
      "Immediate loading"
    ],
    "answer": "Lazy loading"
  },
  {
    "type": "mcq",
    "question": "Which loading pattern loads related data as part of the initial query using Include(...)?",
    "options": [
      "Lazy loading",
      "Explicit loading",
      "Eager loading",
      "Deferred loading"
    ],
    "answer": "Eager loading"
  },
  {
    "type": "mcq",
    "question": "Which loading pattern loads related data at a later time by explicitly calling Load(...)?",
    "options": [
      "Explicit loading",
      "Eager loading",
      "Lazy loading",
      "Proxy loading"
    ],
    "answer": "Explicit loading"
  },
  {
    "type": "mcq",
    "question": "Which method is used with Entry(...) to explicitly load a single navigation property?",
    "options": [
      "Collection(...)",
      "Include(...)",
      "Reference(...)",
      "Single(...)"
    ],
    "answer": "Reference(...)"
  },
  {
    "type": "mcq",
    "question": "Which method is used with Entry(...) to explicitly load a collection navigation property?",
    "options": [
      "Reference(...)",
      "Collection(...)",
      "ThenInclude(...)",
      "Attach(...)"
    ],
    "answer": "Collection(...)"
  },
  {
    "type": "mcq",
    "question": "What is required to enable lazy loading in EF Core, beyond marking navigation properties virtual?",
    "options": [
      "Nothing more, it works the same as EF 6",
      "Installing the lazy loading NuGet package and configuring the DbContext to use Lazy Loading Proxies",
      "Calling Include() on every query",
      "Disabling the ChangeTracker"
    ],
    "answer": "Installing the lazy loading NuGet package and configuring the DbContext to use Lazy Loading Proxies"
  },
  {
    "type": "mcq",
    "question": "Why is simply removing the virtual keyword from navigation properties NOT a valid way to turn off lazy loading?",
    "options": [
      "It has no effect at all",
      "It causes an error when lazy loading proxies are enabled",
      "It deletes the related data",
      "It switches to eager loading automatically"
    ],
    "answer": "It causes an error when lazy loading proxies are enabled"
  },
  {
    "type": "mcq",
    "question": "Why do lazy loading and serialization (such as JSON) not mix well?",
    "options": [
      "Serialization cannot read navigation properties",
      "Serializing may trigger lazy loading of related data and end up querying the entire database",
      "JSON does not support collections",
      "Lazy loading deletes entities during serialization"
    ],
    "answer": "Serializing may trigger lazy loading of related data and end up querying the entire database"
  },
  {
    "type": "mcq",
    "question": "In which situation is explicit loading specifically needed?",
    "options": [
      "When creating a new migration",
      "When re-attaching entities and navigation properties in an [HttpPost] action",
      "When installing NuGet packages",
      "When defining a primary key"
    ],
    "answer": "When re-attaching entities and navigation properties in an [HttpPost] action"
  },
  {
    "type": "mcq",
    "question": "What HTML form encoding is required when posting file content along with form content?",
    "options": [
      "application/json",
      "text/plain",
      "multipart/form-data",
      "application/x-www-form-urlencoded"
    ],
    "answer": "multipart/form-data"
  },
  {
    "type": "mcq",
    "question": "Which IFormFile property is used to validate the SIZE of an uploaded image?",
    "options": [
      "ContentType",
      "FileName",
      "Length",
      "Headers"
    ],
    "answer": "Length"
  },
  {
    "type": "mcq",
    "question": "Which authentication option stores accounts locally and can integrate with external logins such as Google or Facebook?",
    "options": [
      "None",
      "Windows",
      "Individual Accounts",
      "Anonymous"
    ],
    "answer": "Individual Accounts"
  },
  {
    "type": "mcq",
    "question": "What does the [Authorize] attribute do on a controller?",
    "options": [
      "Disables anonymous access to all actions in that controller",
      "Allows everyone to access every action",
      "Encrypts the controller's responses",
      "Logs users out automatically"
    ],
    "answer": "Disables anonymous access to all actions in that controller"
  },
  {
    "type": "mcq",
    "question": "How do you allow anonymous access to one specific action when [Authorize] is applied to the entire controller?",
    "options": [
      "[Authorize(Roles=\"None\")]",
      "[AllowAnonymous]",
      "[Public]",
      "[NoAuth]"
    ],
    "answer": "[AllowAnonymous]"
  },
  {
    "type": "mcq",
    "question": "Which code checks inside an action whether the current user belongs to the Admin role?",
    "options": [
      "User.IsInRole(\"Admin\")",
      "User.Identity.IsAuthenticated",
      "User.HasClaim(\"Admin\")",
      "Context.IsAdmin()"
    ],
    "answer": "User.IsInRole(\"Admin\")"
  },
  
  {
    "type": "fib",
    "question": "什么是 migration？",
    "answer": "A migration is version control for your database that keeps its schema in sync with your code. It has two methods, one is up to apply changes. one is down to reverse changes"
  },
  {
    "type": "fib",
    "question": "撤销所有已应用的 Migration的指令",
    "answer": "update-database migration 0 "
  },
  {
    "type": "fib",
    "question": "修改数据库表名字的三种方法",
    "answer": "1.rename DbSet<> table name in ApplicationDbContext, \n2.override OnModelCreating \n3.[Table] Data Annotations in model"
  },
  {
    "type": "fib",
    "question": "EF core 围绕的三个核心",
    "answer": "Entity to map table,\n DbContext to manage database, \nchange tracking to translate state mutation into SQL"
  },
  {
    "type": "fib",
    "question": "EF core 怎么使用",
    "answer": "1. dependency injection in program.cs to register DbContext \v2.inject into controller to query and persist"
  },
  {
    "type": "fib",
    "question": "EF core 两大开发模式",
    "answer": "Code-First  Database-First"
  },
  {
    "type": "fib",
    "question": "EF core需要安装三个nuget package",
    "answer": "Microsoft.EntityFrameworkCore，\nMicrosoft.EntityFrameworkCore.SqlServer\nMicrosoft.EntityFrameworkCore.Tools"
  },
  {
    "type": "fib",
    "question": "DbContext干什么的",
    "answer": "manages the overall database session and transaction"
  },
  {
    "type": "fib",
    "question": "DbSet干什么的",
    "answer": "represents and queries a specific table"
  },
  {
    "type": "fib",
    "question": "New Scaffolded Item，MVC Controller with views, using Entity Framework是干什么的",
    "answer": "Automatically generates an MVC controller with full EF Core CRUD actions alongside its five Razor view templates (Index, Create, Edit, Details, and Delete)."
  },
  {
    "type": "fib",
    "question": "IActionResult是什么",
    "answer": "An interface that defines the contract for action results, encapsulating HTTP responses"
  },
  {
    "type": "fib",
    "question": "[HttpGet]和[HttpPost]",
    "answer": "[HttpGet]retrieves data via URL parameters,[HttpPost] submits data to create or process resources"
  },
  {
    "type": "fib",
    "question": "Data Annotations 是什么",
    "answer": "C# attribute tags above model properties to define database schema rules and enforce form validation"
  },
  {
    "type": "fib",
    "question": "[Key]是干嘛的",
    "answer": "EF Core defaults Id properties as auto-increment primary keys; use [Key] for non-standard property names，apply [DatabaseGenerated(DatabaseGeneratedOption.None)] to disable database value generation"
  }



]



};