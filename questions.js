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



],
AdvJavascript:[
  {
    "type": "mcq",
    "question": "What is the main purpose of a template engine in client-side JavaScript?",
    "options": [
      "To validate HTTP headers sent to the server",
      "To create dynamic HTML from a pre-defined HTML structure by injecting data, with minimal code",
      "To store user data permanently in the browser",
      "To compile JavaScript into machine code before it runs in the browser"
    ],
    "answer": "To create dynamic HTML from a pre-defined HTML structure by injecting data, with minimal code"
  },
  {
    "type": "mcq",
    "question": "Which is a benefit of using a template engine instead of manual DOM manipulation?",
    "options": [
      "It makes the page load without any HTTP requests",
      "It automatically encrypts all page content",
      "It removes the need for HTML entirely",
      "It saves DOM manipulation code and speeds up and simplifies development"
    ],
    "answer": "It saves DOM manipulation code and speeds up and simplifies development"
  },
  {
    "type": "mcq",
    "question": "How does a template engine help UI/UX developers who only know HTML?",
    "options": [
      "They no longer need to coordinate with any other developer",
      "They can create HTML templates without knowing JavaScript, working in parallel with JavaScript developers",
      "They can write server-side Express routes using only HTML",
      "They can replace the database layer with HTML files"
    ],
    "answer": "They can create HTML templates without knowing JavaScript, working in parallel with JavaScript developers"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a template engine for Node.js / Express?",
    "options": [
      "Mongoose",
      "Handlebars",
      "EJS (Embedded JavaScript template engine)",
      "Pug"
    ],
    "answer": "Mongoose"
  },
  {
    "type": "mcq",
    "question": "Which command installs the hbs template engine?",
    "options": [
      "express add hbs",
      "node install hbs",
      "npm install hbs",
      "npm start hbs"
    ],
    "answer": "npm install hbs"
  },
  {
    "type": "mcq",
    "question": "What file extension do hbs template files use?",
    "options": [
      ".hbs",
      ".tpl.js",
      ".hb",
      ".html5"
    ],
    "answer": ".hbs"
  },
  {
    "type": "mcq",
    "question": "In an ES Module Express app, how is __dirname typically obtained?",
    "options": [
      "By calling express.dirname()",
      "By reading process.env.DIRNAME",
      "It is a built-in global in every ES Module",
      "By using fileURLToPath(import.meta.url) and path.dirname()"
    ],
    "answer": "By using fileURLToPath(import.meta.url) and path.dirname()"
  },
  {
    "type": "mcq",
    "question": "Which line sets hbs as the template engine in Express?",
    "options": [
      "app.use('hbs');",
      "app.set('view engine', 'hbs');",
      "app.engine = 'views';",
      "app.render('hbs');"
    ],
    "answer": "app.set('view engine', 'hbs');"
  },
  {
    "type": "mcq",
    "question": "What does app.set('views', viewsPath) do?",
    "options": [
      "Registers a new route called views",
      "Sets the directory for static CSS and images",
      "Sets the directory where the template (view) files are located",
      "Sets the port the server listens on"
    ],
    "answer": "Sets the directory where the template (view) files are located"
  },
  {
    "type": "mcq",
    "question": "How do you serve static resources (html, css, client-side JavaScript, images) in Express?",
    "options": [
      "app.render(<path to public directory>)",
      "app.get('/public', express.render)",
      "app.set('static', <path>)",
      "app.use(express.static(<path to public directory>))"
    ],
    "answer": "app.use(express.static(<path to public directory>))"
  },
  {
    "type": "mcq",
    "question": "Which of these is part of the Express + hbs set-up checklist?",
    "options": [
      "Rename every HTML file to .js",
      "Install a database driver before creating the app",
      "Set the path to the template files with app.set('views', <path to views>)",
      "Disable the static public folder"
    ],
    "answer": "Set the path to the template files with app.set('views', <path to views>)"
  },
  {
    "type": "mcq",
    "question": "In app.get('/about', (req, res) => {...}), what does '/about' represent?",
    "options": [
      "The HTTP status code returned",
      "The name of the response object",
      "The name of the template engine",
      "The route (URL path) the handler responds to"
    ],
    "answer": "The route (URL path) the handler responds to"
  },
  {
    "type": "mcq",
    "question": "What two arguments does the callback of Express's get function require?",
    "options": [
      "The request (req) and the response (res)",
      "The route and the port",
      "The view and the model",
      "The template and the middleware"
    ],
    "answer": "The request (req) and the response (res)"
  },
  {
    "type": "mcq",
    "question": "Which statement about res.render('about', { title: 'About', author: 'Chris' }) is correct?",
    "options": [
      "It sends the object as raw JSON without using a template",
      "It saves the object to a file named about",
      "It renders the 'about' view and fills placeholders using the properties of the object literal",
      "It redirects the browser to a new site called 'about'"
    ],
    "answer": "It renders the 'about' view and fills placeholders using the properties of the object literal"
  },
  {
    "type": "mcq",
    "question": "In an hbs template, what does {{title}} do?",
    "options": [
      "It loads a CSS class named title",
      "It comments out the title line",
      "It is a placeholder replaced by the matching property value passed to res.render",
      "It declares a new JavaScript variable named title"
    ],
    "answer": "It is a placeholder replaced by the matching property value passed to res.render"
  },
  {
    "type": "mcq",
    "question": "Which Handlebars syntax performs conditional logic?",
    "options": [
      "<% if (expression) %> ... <% end %>",
      "{{#if <expression>}} ... {{/if}}",
      "{{#when <expression>}} ... {{/when}}",
      "{{if <expression>}} ... {{endif}}"
    ],
    "answer": "{{#if <expression>}} ... {{/if}}"
  },
  {
    "type": "mcq",
    "question": "Which Handlebars syntax loops over a collection?",
    "options": [
      "{{#each <collection>}} ... {{/each}}",
      "{{#loop <collection>}} ... {{/loop}}",
      "{{#for <collection>}} ... {{/for}}",
      "{{foreach <collection>}} ... {{end}}"
    ],
    "answer": "{{#each <collection>}} ... {{/each}}"
  },
  {
    "type": "mcq",
    "question": "Inside a {{#each links}} block, how do you access the 'link' property of the current item?",
    "options": [
      "{{it.link}}",
      "{{links.link}}",
      "{{#link}}",
      "{{this.link}}"
    ],
    "answer": "{{this.link}}"
  },
  {
    "type": "mcq",
    "question": "What is the role of {{else}} in the Handlebars example with {{#if links}}?",
    "options": [
      "It provides the alternative content shown when the condition is false (e.g. 'No social links yet')",
      "It ends the {{#each}} loop",
      "It throws an error when links is empty",
      "It re-renders the template from the start"
    ],
    "answer": "It provides the alternative content shown when the condition is false (e.g. 'No social links yet')"
  },
  {
    "type": "mcq",
    "question": "In the Express MVC diagram, what is the Controller?",
    "options": [
      "The HTTP request handler, e.g. app.get('/mypage', (req, res) => {...})",
      "The HTML template file",
      "The browser used by the user",
      "The data model object"
    ],
    "answer": "The HTTP request handler, e.g. app.get('/mypage', (req, res) => {...})"
  },
  {
    "type": "mcq",
    "question": "In Express MVC, what plays the role of the View?",
    "options": [
      "The data object { title: 'My App' }",
      "The HTML template file (e.g. <h1>{{ title }}</h1>)",
      "The route handler function",
      "The express.static middleware"
    ],
    "answer": "The HTML template file (e.g. <h1>{{ title }}</h1>)"
  },
  {
    "type": "mcq",
    "question": "In Express MVC, what plays the role of the Model?",
    "options": [
      "The browser's address bar",
      "The app.listen() call",
      "The data object supplied to the template (e.g. { title: 'My App' })",
      "The .hbs file"
    ],
    "answer": "The data object supplied to the template (e.g. { title: 'My App' })"
  },
  {
    "type": "mcq",
    "question": "What does HTTP(S) stand for?",
    "options": [
      "Hyperlink Transfer Process (Safe)",
      "High Transmission Text Protocol (Standard)",
      "Hypertext Transport Protocol (Secure)",
      "Hypertext Translation Procedure (Server)"
    ],
    "answer": "Hypertext Transport Protocol (Secure)"
  },
  {
    "type": "mcq",
    "question": "In the lecture's breakdown, what does 'Protocol' mean?",
    "options": [
      "Text displayed on a computer display",
      "Holding something to avoid damage",
      "A set of rules or official procedure",
      "Movement from point A to point B"
    ],
    "answer": "A set of rules or official procedure"
  },
  {
    "type": "mcq",
    "question": "What is an HTTP method (verb)?",
    "options": [
      "The encryption algorithm used by the server",
      "How we are requesting data",
      "The size of the data being returned",
      "The name of the web server software"
    ],
    "answer": "How we are requesting data"
  },
  {
    "type": "mcq",
    "question": "How many HTTP verbs are listed in the lecture?",
    "options": [
      "6",
      "9",
      "4",
      "12"
    ],
    "answer": "9"
  },
  {
    "type": "mcq",
    "question": "Which list contains only valid HTTP verbs from the lecture?",
    "options": [
      "READ, WRITE, PUT, DELETE, COPY, MOVE",
      "GET, POST, SEND, REMOVE, UPDATE, FETCH",
      "GET, SET, PUT, DROP, PATCH, OPEN",
      "GET, POST, PUT, DELETE, PATCH, HEAD, TRACE, OPTIONS, CONNECT"
    ],
    "answer": "GET, POST, PUT, DELETE, PATCH, HEAD, TRACE, OPTIONS, CONNECT"
  },
  {
    "type": "mcq",
    "question": "Which HTTP verb is used for requesting data, such as visiting a URL?",
    "options": [
      "PUT",
      "POST",
      "DELETE",
      "GET"
    ],
    "answer": "GET"
  },
  {
    "type": "mcq",
    "question": "What is the key difference between POST and PUT described in the lecture?",
    "options": [
      "PUT is used to delete data and POST to update it",
      "POST never sends any data to the server",
      "PUT can only be used from a browser address bar",
      "Repeated POST requests duplicate a resource, whereas PUT does not"
    ],
    "answer": "Repeated POST requests duplicate a resource, whereas PUT does not"
  },
  {
    "type": "mcq",
    "question": "Which is a characteristic of HTTP GET requests?",
    "options": [
      "They can be bookmarked, remain in browser history and can be cached",
      "They are never stored in the browser history",
      "They have no restrictions on length",
      "They are the best choice for sending passwords"
    ],
    "answer": "They can be bookmarked, remain in browser history and can be cached"
  },
  {
    "type": "mcq",
    "question": "Why should GET not be used for sensitive data?",
    "options": [
      "GET requests are always rejected over HTTPS",
      "GET bodies are always compressed",
      "GET cannot carry any parameters",
      "Parameters appear in the URL, which can be bookmarked, cached and stored in history"
    ],
    "answer": "Parameters appear in the URL, which can be bookmarked, cached and stored in history"
  },
  {
    "type": "mcq",
    "question": "In https://nbcc.ca/programs-courses/program-details?baseCurriculumId=a3dc..., what is baseCurriculumId=a3dc... ?",
    "options": [
      "A cookie value",
      "A query string parameter (key-value pair), separated from the resource by ?",
      "A path parameter separated by /",
      "A request header"
    ],
    "answer": "A query string parameter (key-value pair), separated from the resource by ?"
  },
  {
    "type": "mcq",
    "question": "Which separator divides the requested resource from the query string parameters?",
    "options": [
      "#",
      "&",
      "/",
      "?"
    ],
    "answer": "?"
  },
  {
    "type": "mcq",
    "question": "In https://github.com/microsoft/vscode, 'microsoft' and 'vscode' are examples of what?",
    "options": [
      "Session variables",
      "Query string parameters",
      "Path parameters separated by /",
      "POST body fields"
    ],
    "answer": "Path parameters separated by /"
  },
  {
    "type": "mcq",
    "question": "In app.get('/course/:id', ...), what is :id?",
    "options": [
      "A named route (path) parameter",
      "A query string key",
      "A required HTTP header",
      "A middleware function"
    ],
    "answer": "A named route (path) parameter"
  },
  {
    "type": "mcq",
    "question": "How do you read the :id route parameter inside an Express handler?",
    "options": [
      "req.params.id",
      "req.body.id",
      "req.query.id",
      "res.params.id"
    ],
    "answer": "req.params.id"
  },
  {
    "type": "mcq",
    "question": "Which route correctly defines two path parameters named id and instructor?",
    "options": [
      "app.get('/course/:id/:instructor', ...)",
      "app.get('/course/{id,instructor}', ...)",
      "app.get('/course?id&instructor', ...)",
      "app.get('/course/id/instructor', ...)"
    ],
    "answer": "app.get('/course/:id/:instructor', ...)"
  },
  {
    "type": "mcq",
    "question": "What does app.listen(3000, ...) do?",
    "options": [
      "Starts the Express server listening for requests on port 3000",
      "Sets the maximum body size to 3000 bytes",
      "Defines a route called 3000",
      "Creates 3000 sessions"
    ],
    "answer": "Starts the Express server listening for requests on port 3000"
  },
  {
    "type": "mcq",
    "question": "Which statement about HTTP POST requests is correct?",
    "options": [
      "They can be bookmarked like GET",
      "They are limited to a short URL length",
      "Their data is always visible in the URL",
      "They are never cached, not stored in browser history, and have no length restriction"
    ],
    "answer": "They are never cached, not stored in browser history, and have no length restriction"
  },
  {
    "type": "mcq",
    "question": "Where is the data of a POST request sent?",
    "options": [
      "In the POST body, not visible in the URL, and encrypted over HTTPS",
      "In the path parameters",
      "Only in a cookie",
      "In the query string after ?"
    ],
    "answer": "In the POST body, not visible in the URL, and encrypted over HTTPS"
  },
  {
    "type": "mcq",
    "question": "What kinds of data can be shipped in a POST request?",
    "options": [
      "Both textual and binary data (images, files)",
      "Only plain text",
      "Only numbers",
      "Only JSON strings under 255 characters"
    ],
    "answer": "Both textual and binary data (images, files)"
  },
  {
    "type": "mcq",
    "question": "In an HTML form that posts to Express, what must be set to make it a POST request?",
    "options": [
      "method=\"GET\" with an action of post",
      "type=\"POST\" on the submit button",
      "method=\"POST\" on the <form> element, with action set to the target route",
      "Only a name attribute on the form"
    ],
    "answer": "method=\"POST\" on the <form> element, with action set to the target route"
  },
  {
    "type": "mcq",
    "question": "Why must a form <input> have a name attribute?",
    "options": [
      "The name is the key used to access the value in the POST parameters (req.body)",
      "It is required for CSS styling to work",
      "It makes the input visible to Handlebars only",
      "It controls how many characters can be typed"
    ],
    "answer": "The name is the key used to access the value in the POST parameters (req.body)"
  },
  {
    "type": "mcq",
    "question": "Which middleware lets Express read form data submitted by POST?",
    "options": [
      "app.use(express.static())",
      "app.use(express.urlencoded({ extended: true }))",
      "app.use(hbs.render())",
      "app.use(session())"
    ],
    "answer": "app.use(express.urlencoded({ extended: true }))"
  },
  {
    "type": "mcq",
    "question": "From which Express version are express.json and express.urlencoded built in?",
    "options": [
      "Express 3.5 and above",
      "Only Express 5 and above",
      "Express 2.0 and above",
      "Express 4.16.0 and above"
    ],
    "answer": "Express 4.16.0 and above"
  },
  {
    "type": "mcq",
    "question": "After the urlencoded middleware is set up, how do you read a posted field named courseNameToPost?",
    "options": [
      "req.params.courseNameToPost",
      "req.body.courseNameToPost",
      "req.session.courseNameToPost",
      "req.query.courseNameToPost"
    ],
    "answer": "req.body.courseNameToPost"
  },
  {
    "type": "mcq",
    "question": "Which Express function handles an HTTP POST request on a route?",
    "options": [
      "app.submit('/course', ...)",
      "app.send('/course', ...)",
      "app.listen('/course', ...)",
      "app.post('/course', (req, res) => {...})"
    ],
    "answer": "app.post('/course', (req, res) => {...})"
  },
  {
    "type": "mcq",
    "question": "What does res.send(...) do in an Express handler?",
    "options": [
      "Registers a new route",
      "Starts a new session",
      "Sends a response back to the client",
      "Reads data from the request body"
    ],
    "answer": "Sends a response back to the client"
  },
  {
    "type": "mcq",
    "question": "What does it mean that HTTP is a stateless protocol?",
    "options": [
      "HTTP can only transmit text, not binary data",
      "HTTP requests can only be made once per site",
      "The server keeps a permanent connection to each browser",
      "After a response the connection is dropped and the server cannot associate later requests with earlier ones"
    ],
    "answer": "After a response the connection is dropped and the server cannot associate later requests with earlier ones"
  },
  {
    "type": "mcq",
    "question": "Why do web applications need session tracking?",
    "options": [
      "To speed up DNS lookups",
      "To compress HTML responses",
      "To maintain state across multiple HTTP requests from the same browser",
      "To replace the need for HTTPS"
    ],
    "answer": "To maintain state across multiple HTTP requests from the same browser"
  },
  {
    "type": "mcq",
    "question": "How does Express Session identify a returning browser?",
    "options": [
      "A cookie storing the session ID is sent by the browser with each request",
      "The session ID is placed in the POST body by the user",
      "The server stores the user's IP address in the URL",
      "The browser sends its full history each time"
    ],
    "answer": "A cookie storing the session ID is sent by the browser with each request"
  },
  {
    "type": "mcq",
    "question": "Where does the server keep the data for each session in the Express code?",
    "options": [
      "In the req.session property of the request object",
      "In app.locals.session",
      "In req.body",
      "In res.cookie only"
    ],
    "answer": "In the req.session property of the request object"
  },
  {
    "type": "mcq",
    "question": "What happens when a browser makes its first request in Express Session?",
    "options": [
      "The middleware creates a session object and sends a cookie containing the session ID in the response",
      "The server deletes all previous cookies",
      "The server rejects the request until the user logs in",
      "The browser creates the session without contacting the server"
    ],
    "answer": "The middleware creates a session object and sends a cookie containing the session ID in the response"
  },
  {
    "type": "mcq",
    "question": "When does a session end?",
    "options": [
      "Only when the server restarts",
      "Immediately after every response",
      "When a specified time elapses without another request, or when the user exits the browser",
      "Only when the user clicks a Logout link"
    ],
    "answer": "When a specified time elapses without another request, or when the user exits the browser"
  },
  {
    "type": "mcq",
    "question": "What is required in the browser for sessions to work?",
    "options": [
      "Cookies must be enabled",
      "HTTP/3 must be used",
      "A browser extension must be installed",
      "JavaScript must be disabled"
    ],
    "answer": "Cookies must be enabled"
  },
  {
    "type": "mcq",
    "question": "What is the default name of the session cookie in express-session?",
    "options": [
      "express.sid",
      "sessionId",
      "connect.sid",
      "session.cookie"
    ],
    "answer": "connect.sid"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of the `secret` option?",
    "options": [
      "It sets the name of the session store",
      "It encrypts the entire session data stored on the server",
      "It is the password users type to log in",
      "It is used to sign the session ID cookie; it should be kept private, e.g. in an environment variable"
    ],
    "answer": "It is used to sign the session ID cookie; it should be kept private, e.g. in an environment variable"
  },
  {
    "type": "mcq",
    "question": "What does `resave: false` mean?",
    "options": [
      "Sessions are saved on every request regardless of changes",
      "The session is not saved back to the store if it wasn't modified",
      "The cookie is deleted after each response",
      "Sessions are never saved at all"
    ],
    "answer": "The session is not saved back to the store if it wasn't modified"
  },
  {
    "type": "mcq",
    "question": "What does `saveUninitialized: false` mean?",
    "options": [
      "New sessions that haven't been modified are not saved",
      "Existing sessions are reset",
      "All new sessions are saved immediately",
      "Sessions can only be created over HTTPS"
    ],
    "answer": "New sessions that haven't been modified are not saved"
  },
  {
    "type": "mcq",
    "question": "What does `rolling: true` do?",
    "options": [
      "Resets the cookie expiration on every response",
      "Stores sessions in a rolling log file",
      "Rotates the secret every hour",
      "Deletes the oldest session first"
    ],
    "answer": "Resets the cookie expiration on every response"
  },
  {
    "type": "mcq",
    "question": "Where does express-session store session data by default?",
    "options": [
      "In the browser's localStorage",
      "In a MongoDB collection",
      "In memory (in-memory storage)",
      "In a file on the public folder"
    ],
    "answer": "In memory (in-memory storage)"
  },
  {
    "type": "mcq",
    "question": "In `cookie: { maxAge: 1000 * 60 * 30 }`, how long does the cookie remain valid?",
    "options": [
      "30 days",
      "30 minutes",
      "30 seconds",
      "30 hours"
    ],
    "answer": "30 minutes"
  },
  {
    "type": "mcq",
    "question": "In what unit is cookie.maxAge specified?",
    "options": [
      "Seconds",
      "Days",
      "Milliseconds",
      "Minutes"
    ],
    "answer": "Milliseconds"
  },
  {
    "type": "mcq",
    "question": "What does `cookie.httpOnly: true` do?",
    "options": [
      "Allows cross-site requests",
      "Limits the cookie to one URL path",
      "Prevents client-side JavaScript from accessing the cookie",
      "Forces the cookie to be sent only over HTTPS"
    ],
    "answer": "Prevents client-side JavaScript from accessing the cookie"
  },
  {
    "type": "mcq",
    "question": "What does `cookie.secure: true` do?",
    "options": [
      "Only sends the cookie over HTTPS",
      "Blocks the cookie for cross-site requests",
      "Encrypts the cookie with the secret",
      "Hides the cookie from the browser developer tools only"
    ],
    "answer": "Only sends the cookie over HTTPS"
  },
  {
    "type": "mcq",
    "question": "Why is `secure: process.env.NODE_ENV === 'production'` commonly used?",
    "options": [
      "To make the secret change in production",
      "To disable sessions in development",
      "To increase cookie maxAge in production",
      "To require HTTPS cookies in production while still allowing plain HTTP in local development"
    ],
    "answer": "To require HTTPS cookies in production while still allowing plain HTTP in local development"
  },
  {
    "type": "mcq",
    "question": "What does the `cookie.sameSite` option control, and what attack does it help protect against?",
    "options": [
      "Which domain stores the cookie; it protects against XSS only",
      "How long a cookie lasts; it protects against SQL injection",
      "Whether sessions are stored in memory; it protects against DDoS",
      "Whether cookies are sent with cross-site requests; it helps protect against many CSRF attacks"
    ],
    "answer": "Whether cookies are sent with cross-site requests; it helps protect against many CSRF attacks"
  },
  {
    "type": "mcq",
    "question": "With `sameSite: 'strict'`, what happens?",
    "options": [
      "Cookies are not sent with cross-site requests",
      "Cookies are sent only over HTTP",
      "Cookies are sent only to subdomains",
      "Cookies are always sent with cross-site requests"
    ],
    "answer": "Cookies are not sent with cross-site requests"
  },
  {
    "type": "mcq",
    "question": "With `sameSite: 'lax'`, what happens?",
    "options": [
      "Cookies are never sent anywhere",
      "Cookies are sent only to the same path",
      "Cookies are sent with every cross-site request, including embedded ones",
      "Cookies are sent with certain top-level cross-site navigations"
    ],
    "answer": "Cookies are sent with certain top-level cross-site navigations"
  },
  {
    "type": "mcq",
    "question": "With `sameSite: 'none'`, what happens?",
    "options": [
      "Cookies are deleted when the tab closes",
      "Cookies are only sent on page refresh",
      "Cookies can be sent with cross-site requests",
      "Cookies are disabled completely"
    ],
    "answer": "Cookies can be sent with cross-site requests"
  },
  {
    "type": "mcq",
    "question": "What does `cookie.path` determine?",
    "options": [
      "Which domain can receive the cookie",
      "Which file stores the session",
      "When the cookie expires",
      "Which URL paths receive the cookie"
    ],
    "answer": "Which URL paths receive the cookie"
  },
  {
    "type": "mcq",
    "question": "What does `cookie.domain` specify?",
    "options": [
      "Which HTTP verb is allowed",
      "The session store location",
      "Which URL path receives the cookie",
      "Which domain can receive the cookie"
    ],
    "answer": "Which domain can receive the cookie"
  },
  {
    "type": "mcq",
    "question": "What does `cookie.expires` set?",
    "options": [
      "The number of requests before expiry",
      "A duration in milliseconds for the cookie",
      "A specific expiration date for the cookie",
      "The name of the cookie"
    ],
    "answer": "A specific expiration date for the cookie"
  },
  {
    "type": "mcq",
    "question": "How do you read a session variable named counter?",
    "options": [
      "let counter = res.session('counter');",
      "let counter = req.session.counter;",
      "let counter = req.cookies.session.counter();",
      "let counter = session.get(req.counter);"
    ],
    "answer": "let counter = req.session.counter;"
  },
  {
    "type": "mcq",
    "question": "How do you set a session variable counter to 5?",
    "options": [
      "req.setSession(counter, 5);",
      "req.session.counter = 5;",
      "app.session.counter == 5;",
      "res.session.set('counter', 5);"
    ],
    "answer": "req.session.counter = 5;"
  },
  {
    "type": "mcq",
    "question": "In the counter example, what does `req.session.counter ?? 0` do?",
    "options": [
      "Uses 0 as the default when req.session.counter is null or undefined",
      "Always returns 0",
      "Throws an error if counter is missing",
      "Converts counter to a boolean"
    ],
    "answer": "Uses 0 as the default when req.session.counter is null or undefined"
  },
  {
    "type": "mcq",
    "question": "In the counter example (maxAge: 30 * 24 * 60 * 60 * 1000), how long is the session cookie valid?",
    "options": [
      "30 seconds",
      "30 days",
      "30 minutes",
      "30 hours"
    ],
    "answer": "30 days"
  },
  {
    "type": "mcq",
    "question": "What is the sequence of events for session tracking in Express Session?",
    "options": [
      "Browser creates the session ID → server rejects it → browser retries with HTTPS",
      "Browser requests a resource → middleware creates session and sends session ID cookie → later requests send the ID so the server finds the right session",
      "Server sends all session data to the browser → browser stores it → server forgets the user",
      "Server logs the IP → closes the connection → recreates the session on every request"
    ],
    "answer": "Browser requests a resource → middleware creates session and sends session ID cookie → later requests send the ID so the server finds the right session"
  }
],
PHP_Q1:[
  {
    "type": "mcq",
    "question": "What does PHP stand for in its current official name?",
    "options": [
      "Personal Home Page",
      "Hypertext Preprocessor",
      "Programmed Hypertext Pages",
      "Public Hosting Platform"
    ],
    "answer": "Hypertext Preprocessor",
    "explanation": "PHP 现名 Hypertext Preprocessor；Personal Home Page 是 1995 年最初的名字。"
  },
  {
    "type": "mcq",
    "question": "Who originally conceived PHP, and in which year?",
    "options": [
      "Guido van Rossum, 1991",
      "Brendan Eich, 1995",
      "James Gosling, 1996",
      "Rasmus Lerdorf, 1995"
    ],
    "answer": "Rasmus Lerdorf, 1995",
    "explanation": "PHP 由 Rasmus Lerdorf 于 1995 年构思，用来方便地处理 Web 页面数据。"
  },
  {
    "type": "mcq",
    "question": "What did PHP originally stand for, and when was it renamed?",
    "options": [
      "\"Programmed Hypertext Processor\"; renamed in 2000",
      "\"Personal Hypertext Page\"; renamed in 1995",
      "\"Personal Home Page\"; renamed in 1997",
      "\"Public Home Page\"; renamed in 2004"
    ],
    "answer": "\"Personal Home Page\"; renamed in 1997",
    "explanation": "最初是 Personal Home Page，1997 年改名为 PHP: Hypertext Processor。"
  },
  {
    "type": "mcq",
    "question": "PHP is primarily used as which kind of language?",
    "options": [
      "A server-side scripting language for dynamic web sites",
      "A client-side markup language for styling pages",
      "A compiled language for desktop applications",
      "A database query language"
    ],
    "answer": "A server-side scripting language for dynamic web sites",
    "explanation": "PHP 主要是 server-side scripting language，用于创建 dynamic web sites。"
  },
  {
    "type": "mcq",
    "question": "Which of the following well-known sites is listed in the slides as powered by PHP?",
    "options": [
      "Netflix",
      "Twitter (X)",
      "WordPress",
      "Amazon Web Services"
    ],
    "answer": "WordPress",
    "explanation": "课件列出 Facebook、WordPress、Wikipedia。"
  },
  {
    "type": "mcq",
    "question": "Which of these is NOT given as a reason to learn PHP?",
    "options": [
      "It is a compiled language that runs only inside the browser",
      "Huge community and support",
      "Beginner-friendly syntax",
      "Runs on most web servers and platforms"
    ],
    "answer": "It is a compiled language that runs only inside the browser",
    "explanation": "PHP 在 server 上运行，不是在浏览器中运行的编译语言。"
  },
  {
    "type": "mcq",
    "question": "When a PHP page is requested, where does the code run and what is sent to the browser?",
    "options": [
      "It runs in the browser and the PHP source is shown to the visitor",
      "It runs in the browser and sends HTML to the server",
      "It runs on the server and the resulting HTML output is sent to the browser",
      "It runs on the server and the raw PHP source is sent to the browser"
    ],
    "answer": "It runs on the server and the resulting HTML output is sent to the browser",
    "explanation": "Code is run on the server；Output: HTML sent to the browser。"
  },
  {
    "type": "mcq",
    "question": "Why can't you simply double-click a .php file and view it correctly in a browser?",
    "options": [
      "Browsers do not support the .php extension in any way",
      "PHP can only run inside Docker",
      "PHP files are encrypted until uploaded",
      "PHP files must be preprocessed by a web server first"
    ],
    "answer": "PHP files must be preprocessed by a web server first",
    "explanation": "PHP 文件需要 web server 先处理后再把结果发送给浏览器。"
  },
  {
    "type": "mcq",
    "question": "Which file extension must a file containing embedded PHP use?",
    "options": [
      ".phtm",
      ".php",
      ".html",
      ".script"
    ],
    "answer": ".php",
    "explanation": "课件强调文件必须有 .php 扩展名，如 index.php。"
  },
  {
    "type": "mcq",
    "question": "Which tags enclose embedded PHP code in an HTML page?",
    "options": [
      "<% ... %>",
      "<!-- php ... -->",
      "<?php ... ?>",
      "<script php> ... </script>"
    ],
    "answer": "<?php ... ?>",
    "explanation": "PHP 代码写在 <?php 与 ?> 之间。"
  },
  {
    "type": "mcq",
    "question": "Which database systems is PHP often used with, according to the overview?",
    "options": [
      "Only SQLite",
      "MySQL or MariaDB",
      "Only MongoDB",
      "Only Oracle"
    ],
    "answer": "MySQL or MariaDB",
    "explanation": "PHP 常与 MySQL / MariaDB 搭配使用。"
  },
  {
    "type": "mcq",
    "question": "Which statement connects PHP to MySQL in the overview example?",
    "options": [
      "$conn = mysql::new(\"user\", \"pass\");",
      "$conn = new mysqli(\"localhost\", \"user\", \"pass\", \"db\");",
      "$conn = connect.mysql(\"localhost\");",
      "$conn = php_mysql_open(\"db\");"
    ],
    "answer": "$conn = new mysqli(\"localhost\", \"user\", \"pass\", \"db\");",
    "explanation": "示例使用 new mysqli(host, user, password, database)。"
  },
  {
    "type": "mcq",
    "question": "Which of the following are examples of PHP-based applications listed in the slides?",
    "options": [
      "Django (blogs), Shopify (e-commerce), Discourse (forums)",
      "Ghost (blogs), React (e-commerce), Slack (forums)",
      "WordPress (blogs), Magento/WooCommerce (e-commerce), phpBB (forums)",
      "Jekyll (blogs), Magento (forums), phpBB (e-commerce)"
    ],
    "answer": "WordPress (blogs), Magento/WooCommerce (e-commerce), phpBB (forums)",
    "explanation": "WordPress=博客，Magento/WooCommerce=电商，phpBB=论坛。"
  },
  {
    "type": "mcq",
    "question": "Which tools does the course list as 'Tools you will need'?",
    "options": [
      "Only Notepad",
      "Docker and a code editor such as VS Code",
      "Photoshop and Figma",
      "Visual Basic and Excel"
    ],
    "answer": "Docker and a code editor such as VS Code",
    "explanation": "课程需要 Docker 和 VS Code 之类的代码编辑器。"
  },
  {
    "type": "mcq",
    "question": "Which practice prevents SQL injection according to the Best Practices slide?",
    "options": [
      "Keep all queries in a single line",
      "Use single quotes for all strings",
      "Use echo instead of print",
      "Use prepared statements"
    ],
    "answer": "Use prepared statements",
    "explanation": "Best practice：使用 prepared statements 防止 SQL injection。"
  },
  {
    "type": "mcq",
    "question": "Which best practice is recommended in addition to keeping PHP up to date?",
    "options": [
      "Avoid using functions",
      "Disable all error reporting",
      "Mix PHP and HTML in one large file",
      "Separate logic from presentation"
    ],
    "answer": "Separate logic from presentation",
    "explanation": "Separate logic from presentation。"
  },
  {
    "type": "mcq",
    "question": "Which frameworks are mentioned as something to use as you advance, but are not covered in the course?",
    "options": [
      "Laravel and Symfony",
      "Django and Flask",
      "Express and Angular",
      "Spring and Hibernate"
    ],
    "answer": "Laravel and Symfony",
    "explanation": "Laravel、Symfony 是 PHP frameworks，本课程不涉及。"
  },
  {
    "type": "mcq",
    "question": "Which of the following is the official PHP documentation site?",
    "options": [
      "php.net",
      "phpdocs.org",
      "w3.php.com",
      "php.gov"
    ],
    "answer": "php.net",
    "explanation": "官方文档：php.net/manual/en/。"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a typical PHP use case listed in the overview?",
    "options": [
      "Form handling (GET/POST), session management and file uploads",
      "Rendering 3D graphics on the GPU",
      "Compiling kernel modules",
      "Training neural networks in the browser"
    ],
    "answer": "Form handling (GET/POST), session management and file uploads",
    "explanation": "Common Use Cases：表单处理、数据库连接、session 管理、文件上传、CMS 开发。"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a valid PHP variable name?",
    "options": [
      "$123",
      "firstName",
      "$7days",
      "$firstName"
    ],
    "answer": "$firstName",
    "explanation": "变量必须以 $ 开头，随后必须是字母或下划线；$123、$7days 非法。"
  },
  {
    "type": "mcq",
    "question": "How are the variables $name, $Name and $NAME related in PHP?",
    "options": [
      "Only $name is valid; the others cause a syntax error",
      "They all refer to the same variable",
      "$Name and $NAME are constants",
      "They are three different variables because names are case sensitive"
    ],
    "answer": "They are three different variables because names are case sensitive",
    "explanation": "PHP 变量名 case sensitive。"
  },
  {
    "type": "mcq",
    "question": "What does it mean that PHP is 'dynamically typed'?",
    "options": [
      "Types are checked only at compile time",
      "The variable type is determined automatically by the context in which it is used",
      "Variables can never change their value",
      "Every variable must be declared with a type first"
    ],
    "answer": "The variable type is determined automatically by the context in which it is used",
    "explanation": "Dynamically typed：根据使用上下文自动确定变量类型。"
  },
  {
    "type": "mcq",
    "question": "Do PHP variables need to be declared before use?",
    "options": [
      "No, variables do not have to be declared before use",
      "Yes, with the let keyword",
      "Yes, with a type name such as int",
      "Yes, with the var keyword"
    ],
    "answer": "No, variables do not have to be declared before use",
    "explanation": "PHP 变量无需事先声明。"
  },
  {
    "type": "mcq",
    "question": "Which operator is used for string concatenation in PHP?",
    "options": [
      ". (dot)",
      "+ (plus)",
      "& (ampersand)",
      ", (comma) in assignments"
    ],
    "answer": ". (dot)",
    "explanation": "PHP 的 concatenation operator 是点号 .。"
  },
  {
    "type": "mcq",
    "question": "Given $name = 'Jimmy Jones'; what does echo 'The name is $name'; output?",
    "options": [
      "A parse error",
      "The name is ''",
      "The name is Jimmy Jones",
      "The name is $name"
    ],
    "answer": "The name is $name",
    "explanation": "Single-quote 字符串不处理变量，原样输出 $name。"
  },
  {
    "type": "mcq",
    "question": "Given $name = 'Jimmy Jones'; what does echo \"The name is $name\"; output?",
    "options": [
      "A parse error",
      "The name is name",
      "The name is Jimmy Jones",
      "The name is $name"
    ],
    "answer": "The name is Jimmy Jones",
    "explanation": "Double-quote 字符串会处理变量插值。"
  },
  {
    "type": "mcq",
    "question": "How do you print a literal dollar sign before a variable name inside a double-quoted string?",
    "options": [
      "Use the percent sign: %$",
      "Wrap it in single brackets: [$]",
      "Double it: $$",
      "Escape it with a backslash: \\$"
    ],
    "answer": "Escape it with a backslash: \\$",
    "explanation": "\\$ 是 dollar sign 的 escape character。"
  },
  {
    "type": "mcq",
    "question": "Which escape sequence represents a newline in a double-quoted PHP string?",
    "options": [
      "\\t",
      "\\f",
      "\\e",
      "\\n"
    ],
    "answer": "\\n",
    "explanation": "\\n newline；\\t tab；\\f form feed；\\e escape。"
  },
  {
    "type": "mcq",
    "question": "Which escape sequence represents a horizontal tab in a double-quoted PHP string?",
    "options": [
      "\\t",
      "\\n",
      "\\v",
      "\\r"
    ],
    "answer": "\\t",
    "explanation": "\\t 是 horizontal tab；\\v 是 vertical tab。"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a valid PHP comment style?",
    "options": [
      "// comment",
      "<!-- comment -->",
      "/* comment */",
      "# comment"
    ],
    "answer": "<!-- comment -->",
    "explanation": "PHP 注释：//、#、/* */；<!-- --> 是 HTML 注释。"
  },
  {
    "type": "mcq",
    "question": "In a file that contains only PHP code, what is true about the closing ?> tag?",
    "options": [
      "It must be followed by a blank line",
      "It must be replaced by </php>",
      "It is mandatory or a fatal error occurs",
      "It is optional, and omitting it can avoid unexplained white space"
    ],
    "answer": "It is optional, and omitting it can avoid unexplained white space",
    "explanation": "纯 PHP 文件结束标签可选；去掉可避免多余空白。"
  },
  {
    "type": "mcq",
    "question": "How must every PHP statement be terminated?",
    "options": [
      "With a colon :",
      "With a period .",
      "With a newline only",
      "With a semicolon ;"
    ],
    "answer": "With a semicolon ;",
    "explanation": "每条语句以分号结尾。"
  },
  {
    "type": "mcq",
    "question": "Which statement about echo is TRUE?",
    "options": [
      "It is a language construct, needs no parentheses and has no return value",
      "It is a function that returns 1",
      "It can only output a single string",
      "It requires parentheses"
    ],
    "answer": "It is a language construct, needs no parentheses and has no return value",
    "explanation": "echo 是 language construct，无返回值，可用逗号输出多个参数。"
  },
  {
    "type": "mcq",
    "question": "How can echo output several strings in one statement?",
    "options": [
      "Separate the arguments with commas",
      "It cannot output several strings",
      "Pass them as an array only",
      "Separate them with semicolons"
    ],
    "answer": "Separate the arguments with commas",
    "explanation": "echo \"a\", \"b\"; 用逗号分隔参数。"
  },
  {
    "type": "mcq",
    "question": "Which statement about print is TRUE?",
    "options": [
      "It returns nothing and accepts many arguments",
      "It can only be used with parentheses",
      "It returns the length of the string printed",
      "It always returns the integer 1 and accepts only one argument"
    ],
    "answer": "It always returns the integer 1 and accepts only one argument",
    "explanation": "print 总是返回 1，一次只能一个参数。"
  },
  {
    "type": "mcq",
    "question": "What happens with print(\"hello\", \"world\");?",
    "options": [
      "It prints hello world with a space",
      "It prints helloworld",
      "A parse error occurs because print allows only one argument",
      "It prints only world"
    ],
    "answer": "A parse error occurs because print allows only one argument",
    "explanation": "print 不允许多个参数，会出现 Parse error。"
  },
  {
    "type": "mcq",
    "question": "Why is print considered slightly slower than echo?",
    "options": [
      "Because print needs parentheses",
      "Because print returns a value (1)",
      "Because print compiles the string first",
      "Because print writes to disk"
    ],
    "answer": "Because print returns a value (1)",
    "explanation": "print 需要返回一个整数 1，因此稍慢。"
  },
  {
    "type": "mcq",
    "question": "What is the main purpose of printf()?",
    "options": [
      "Converting strings to integers",
      "Printing to a file only",
      "Reading formatted input from the user",
      "Fine-grained control over the format of the output"
    ],
    "answer": "Fine-grained control over the format of the output",
    "explanation": "printf = printed format，可定义输出格式，对数字尤其有用。"
  },
  {
    "type": "mcq",
    "question": "In printf, which specifier outputs the argument as a signed decimal integer?",
    "options": [
      "%f",
      "%s",
      "%x",
      "%d"
    ],
    "answer": "%d",
    "explanation": "%s 字符串；%d 整数；%f 浮点数。"
  },
  {
    "type": "mcq",
    "question": "What does printf(\"The total cost is %.2f\", 6.10); output?",
    "options": [
      "The total cost is .2f",
      "The total cost is 6",
      "The total cost is 6.10",
      "The total cost is 6.1"
    ],
    "answer": "The total cost is 6.10",
    "explanation": "%.2f 固定输出 2 位小数。"
  },
  {
    "type": "mcq",
    "question": "What does printf(\"The total cost is %.2f\", \"a string\"); output?",
    "options": [
      "The total cost is a string",
      "The total cost is 1.00",
      "The total cost is 0.00",
      "A fatal error"
    ],
    "answer": "The total cost is 0.00",
    "explanation": "非数字字符串被当作 0，输出 0.00。"
  },
  {
    "type": "mcq",
    "question": "What does printf(\"PHP is %s!\", \"Awesome\"); output?",
    "options": [
      "PHP is Awesome",
      "PHP is %s!",
      "PHP is Awesome!",
      "PHP is s!"
    ],
    "answer": "PHP is Awesome!",
    "explanation": "%s 被字符串参数替换。"
  },
  {
    "type": "mcq",
    "question": "What is the difference between printf and sprintf?",
    "options": [
      "sprintf only works with integers",
      "They differ only in speed",
      "printf outputs directly to the browser, while sprintf returns the formatted string",
      "sprintf outputs directly while printf returns a string"
    ],
    "answer": "printf outputs directly to the browser, while sprintf returns the formatted string",
    "explanation": "sprintf 返回字符串而不是直接输出。"
  },
  {
    "type": "mcq",
    "question": "What does the % operator do in PHP?",
    "options": [
      "Returns the remainder of a division (modulus)",
      "Raises to a power",
      "Returns the percentage of a number",
      "Divides and rounds up"
    ],
    "answer": "Returns the remainder of a division (modulus)",
    "explanation": "% 是 modulus，4 % 3 = 1。"
  },
  {
    "type": "mcq",
    "question": "Which operator raises the left operand to the power of the right operand, and when was it introduced?",
    "options": [
      "** (exponentiation), PHP 5.6",
      "** (exponentiation), PHP 7.0",
      "^^ (power), PHP 8.0",
      "^ (caret), PHP 4.0"
    ],
    "answer": "** (exponentiation), PHP 5.6",
    "explanation": "** 于 PHP 5.6 引入，4 ** 2 = 16。"
  },
  {
    "type": "mcq",
    "question": "After $x = 5; $x *= 5; what is the value of $x?",
    "options": [
      "3125",
      "10",
      "5",
      "25"
    ],
    "answer": "25",
    "explanation": "$x *= 5 等同 $x = $x * 5 = 25。"
  },
  {
    "type": "mcq",
    "question": "After $x = 5; $x **= 5; what is the value of $x?",
    "options": [
      "3125",
      "25",
      "10",
      "625"
    ],
    "answer": "3125",
    "explanation": "5 的 5 次方 = 3125。"
  },
  {
    "type": "mcq",
    "question": "After $x = 5; $x %= 5; what is the value of $x?",
    "options": [
      "25",
      "5",
      "1",
      "0"
    ],
    "answer": "0",
    "explanation": "5 % 5 = 0。"
  },
  {
    "type": "mcq",
    "question": "Given $x = 5; $y = $x++; what are $x and $y?",
    "options": [
      "$x = 5, $y = 5",
      "$x = 6, $y = 5",
      "$x = 6, $y = 6",
      "$x = 5, $y = 6"
    ],
    "answer": "$x = 6, $y = 5",
    "explanation": "Post-increment 先返回原值再自增。"
  },
  {
    "type": "mcq",
    "question": "Given $x = 5; $y = ++$x; what are $x and $y?",
    "options": [
      "$x = 6, $y = 5",
      "$x = 5, $y = 6",
      "$x = 6, $y = 6",
      "$x = 4, $y = 4"
    ],
    "answer": "$x = 6, $y = 6",
    "explanation": "Pre-increment 先自增再返回新值。"
  },
  {
    "type": "mcq",
    "question": "Given $x = 5; $y = $x--; what are $x and $y?",
    "options": [
      "$x = 4, $y = 5",
      "$x = 4, $y = 4",
      "$x = 6, $y = 5",
      "$x = 5, $y = 4"
    ],
    "answer": "$x = 4, $y = 5",
    "explanation": "Post-decrement：y 得到原值 5，x 变为 4。"
  },
  {
    "type": "mcq",
    "question": "What is the key difference between pre- and post-increment operators?",
    "options": [
      "Pre can only be used in loops",
      "There is no difference in any situation",
      "Post changes the variable by 2",
      "Post returns the original value before changing the variable; pre changes it first and then returns the value"
    ],
    "answer": "Post returns the original value before changing the variable; pre changes it first and then returns the value",
    "explanation": "单独使用结果相同，区别在于表达式返回值。"
  },
  {
    "type": "mcq",
    "question": "What is the result of (1 == \"1\") and (1 === \"1\") respectively?",
    "options": [
      "false and true",
      "true and false",
      "false and false",
      "true and true"
    ],
    "answer": "true and false",
    "explanation": "== 会做 type conversion，=== 同时比较类型和值。"
  },
  {
    "type": "mcq",
    "question": "What does echo(1 + \"1\"); output?",
    "options": [
      "2",
      "A type error",
      "11",
      "\"11\""
    ],
    "answer": "2",
    "explanation": "字符串 \"1\" 被自动转换为整数。"
  },
  {
    "type": "mcq",
    "question": "Which operator means 'identical' (same type and value)?",
    "options": [
      "==",
      "<>",
      "<=>",
      "==="
    ],
    "answer": "===",
    "explanation": "=== 为 identical；!== 为 not identical。"
  },
  {
    "type": "mcq",
    "question": "Which of these is an alternative form of 'not equal to'?",
    "options": [
      "=!",
      "=<",
      "><=",
      "<>"
    ],
    "answer": "<>",
    "explanation": "!= 与 <> 都是不等于。"
  },
  {
    "type": "mcq",
    "question": "What is the result of (2 !== 3)?",
    "options": [
      "null",
      "false",
      "0",
      "true"
    ],
    "answer": "true",
    "explanation": "2 与 3 值不同，所以 not identical 为 true。"
  },
  {
    "type": "mcq",
    "question": "Which best practice is recommended for comparisons?",
    "options": [
      "Use strict comparison (=== / !==) when type conversion is not needed",
      "Never compare strings",
      "Always cast to float first",
      "Always use == to be flexible"
    ],
    "answer": "Use strict comparison (=== / !==) when type conversion is not needed",
    "explanation": "不需要类型转换时用 strict comparison。"
  },
  {
    "type": "mcq",
    "question": "What does the spaceship operator <=> return for 1 <=> 2, and in which PHP version was it added?",
    "options": [
      "1, PHP 5.6",
      "-1, PHP 7",
      "-1, PHP 8",
      "0, PHP 7"
    ],
    "answer": "-1, PHP 7",
    "explanation": "<=> 于 PHP 7 引入：相等 0；左大 1；右大 -1。"
  },
  {
    "type": "mcq",
    "question": "What does 3 <=> 2 return?",
    "options": [
      "-1",
      "0",
      "true",
      "1"
    ],
    "answer": "1",
    "explanation": "左边大返回 1。"
  },
  {
    "type": "mcq",
    "question": "When does isset($var) return true?",
    "options": [
      "When the variable equals 0",
      "When the variable is numeric",
      "When the variable has been set and is not NULL",
      "When the variable is not an empty string"
    ],
    "answer": "When the variable has been set and is not NULL",
    "explanation": "isset：已设置且不是 NULL。"
  },
  {
    "type": "mcq",
    "question": "When does empty($var) return true?",
    "options": [
      "Only when the variable is false",
      "When the variable is not set, is NULL, or is an empty string",
      "Only when the variable is unset",
      "Only when the variable equals 0"
    ],
    "answer": "When the variable is not set, is NULL, or is an empty string",
    "explanation": "empty：未设置、NULL 或空字符串。"
  },
  {
    "type": "mcq",
    "question": "Which value does is_numeric() return true for?",
    "options": [
      "The value null",
      "The string \"abc\"",
      "An empty array",
      "The string \"21\""
    ],
    "answer": "The string \"21\"",
    "explanation": "is_numeric 对数字和可转换为数字的字符串返回 true。"
  },
  {
    "type": "mcq",
    "question": "What does short-circuit evaluation of && and || mean?",
    "options": [
      "The left side is skipped when it is true",
      "Evaluation runs right to left",
      "The right side is not evaluated if the left side already determines the result",
      "Both sides are always evaluated"
    ],
    "answer": "The right side is not evaluated if the left side already determines the result",
    "explanation": "&& 左假、|| 左真时，右侧不再计算。"
  },
  {
    "type": "mcq",
    "question": "What does var_dump(!true); output?",
    "options": [
      "int(0)",
      "bool(false)",
      "false",
      "bool(true)"
    ],
    "answer": "bool(false)",
    "explanation": "!true = false，var_dump 会同时显示类型：bool(false)。"
  },
  {
    "type": "mcq",
    "question": "With $ageAsString = '21' and $score = 65, what does ($ageAsString > 17 && $score < 70) evaluate to?",
    "options": [
      "null",
      "A type error",
      "false",
      "true"
    ],
    "answer": "true",
    "explanation": "'21' > 17 为 true，65 < 70 为 true，AND 为 true。"
  },
  {
    "type": "mcq",
    "question": "With $rate = 12.50, what does (!is_numeric($rate) || $rate < 0) evaluate to?",
    "options": [
      "false",
      "true",
      "null",
      "12.50"
    ],
    "answer": "false",
    "explanation": "!is_numeric 为 false，12.5 < 0 为 false，OR 为 false。"
  },
  {
    "type": "mcq",
    "question": "Which function is used to print a variable's value together with its type?",
    "options": [
      "show()",
      "type_of()",
      "print_r_type()",
      "var_dump()"
    ],
    "answer": "var_dump()",
    "explanation": "var_dump() 输出值和类型，如 bool(false)。"
  },
  {
    "type": "mcq",
    "question": "What does number_format(12345.675, 2) return?",
    "options": [
      "12,345.67",
      "12,345.68",
      "12345.68",
      "12,345.675"
    ],
    "answer": "12,345.68",
    "explanation": "加千位逗号并四舍五入到 2 位小数。"
  },
  {
    "type": "mcq",
    "question": "What does number_format(12345) return?",
    "options": [
      "12345",
      "12,345",
      "12.345",
      "12,345.00"
    ],
    "answer": "12,345",
    "explanation": "只给一个参数时只加千位逗号，不保留小数。"
  },
  {
    "type": "mcq",
    "question": "What does date('Y-m-d') return, assuming the date is 4 January 2022?",
    "options": [
      "22-1-4",
      "2022-01-04",
      "2022-1-4",
      "01-04-2022"
    ],
    "answer": "2022-01-04",
    "explanation": "Y=4 位年；m=带前导零的月；d=带前导零的日。"
  },
  {
    "type": "mcq",
    "question": "In date() format strings, what is the difference between Y and y?",
    "options": [
      "Y is the year; y is the day",
      "Y is uppercase text; y is lowercase text",
      "Y is the month; y is the year",
      "Y is a 4-digit year; y is a 2-digit year"
    ],
    "answer": "Y is a 4-digit year; y is a 2-digit year",
    "explanation": "Y=2022；y=22。"
  },
  {
    "type": "mcq",
    "question": "Which expression formats a stored timestamp string for display?",
    "options": [
      "strtotime(\"F j, Y\", date($theDate))",
      "date(\"F j, Y - g:i a\", strtotime($theDate))",
      "format_date($theDate)",
      "date_format_string($theDate, \"F\")"
    ],
    "answer": "date(\"F j, Y - g:i a\", strtotime($theDate))",
    "explanation": "先用 strtotime 转成 timestamp，再用 date 格式化。"
  },
  {
    "type": "mcq",
    "question": "Which construct chain is correct for multiple conditions in PHP?",
    "options": [
      "if / elif / else",
      "if / else if / else",
      "switch only; if cannot be chained",
      "if / elsif / end"
    ],
    "answer": "if / else if / else",
    "explanation": "课件使用 if ... else if ... else；if 可嵌套。"
  },
  {
    "type": "mcq",
    "question": "What does this code echo? $m='|'; for($c=1;$c<=5;$c++){ $m = $m.$c.'|'; } echo $m;",
    "options": [
      "|0|1|2|3|4|5|",
      "|1|2|3|4|5|",
      "|1|2|3|4|",
      "1|2|3|4|5"
    ],
    "answer": "|1|2|3|4|5|",
    "explanation": "循环 1 到 5，每次拼接。"
  },
  {
    "type": "mcq",
    "question": "What does this do? $count = 20; do { ... $count++; } while ($count <= 5);",
    "options": [
      "The body never runs",
      "The body runs an infinite number of times",
      "The body runs exactly once (output |20|)",
      "A parse error occurs"
    ],
    "answer": "The body runs exactly once (output |20|)",
    "explanation": "do-while 先执行再判断，至少执行一次。"
  },
  {
    "type": "mcq",
    "question": "What is the main difference between a while loop and a do-while loop?",
    "options": [
      "A while loop is guaranteed to run at least once",
      "do-while checks the condition before each run",
      "A do-while loop is guaranteed to run at least once",
      "do-while cannot use a counter"
    ],
    "answer": "A do-while loop is guaranteed to run at least once",
    "explanation": "do-while 先执行后检查条件。"
  },
  {
    "type": "mcq",
    "question": "What must every try block be accompanied by?",
    "options": [
      "A throw statement inside the same block",
      "Exactly one catch and one finally block",
      "A return statement",
      "At least one corresponding catch or finally block"
    ],
    "answer": "At least one corresponding catch or finally block",
    "explanation": "每个 try 至少要有一个 catch 或 finally。"
  },
  {
    "type": "mcq",
    "question": "What happens to an exception thrown in a function that has no matching catch block?",
    "options": [
      "It is converted into a warning",
      "It is silently ignored",
      "The script restarts from the beginning",
      "It bubbles up the call stack to the calling function until a matching catch is found"
    ],
    "answer": "It bubbles up the call stack to the calling function until a matching catch is found",
    "explanation": "异常沿 call stack 向上冒泡，途中的 finally 块都会被执行。"
  },
  {
    "type": "mcq",
    "question": "If the call stack unwinds to the global scope with no matching catch and no global exception handler, what happens?",
    "options": [
      "Only a notice is shown and execution continues",
      "The exception is retried",
      "The program terminates with a fatal error",
      "The script jumps to the finally block of the first function"
    ],
    "answer": "The program terminates with a fatal error",
    "explanation": "未被捕获的异常会导致 fatal error（除非设置了 global exception handler）。"
  },
  {
    "type": "mcq",
    "question": "What must a thrown object be an instance of?",
    "options": [
      "The Exception class or a subclass of Exception",
      "Any string",
      "Any object",
      "The Error class only"
    ],
    "answer": "The Exception class or a subclass of Exception",
    "explanation": "抛出其他类型会导致 PHP Fatal Error。"
  },
  {
    "type": "mcq",
    "question": "Which method returns the error message of a caught exception $ex?",
    "options": [
      "$ex.getError()",
      "$ex->getMessage()",
      "$ex->message()",
      "getMessage($ex)"
    ],
    "answer": "$ex->getMessage()",
    "explanation": "示例使用 $ex->getMessage()。"
  },
  {
    "type": "mcq",
    "question": "In the inverse() example, what is printed for inverse(0) inside try/catch and what happens afterwards?",
    "options": [
      "Nothing is printed and the script stops",
      "\"Caught exception: Division by zero\" and the code continues to run",
      "0 and the code continues to run",
      "A fatal error and the script stops"
    ],
    "answer": "\"Caught exception: Division by zero\" and the code continues to run",
    "explanation": "inverse(0) 抛出异常被 catch 捕获，之后代码继续运行。"
  },
  {
    "type": "mcq",
    "question": "When does a finally block execute?",
    "options": [
      "Whether or not an exception was thrown",
      "Only when no exception is thrown",
      "Only when the exception is uncaught",
      "Only when an exception is thrown"
    ],
    "answer": "Whether or not an exception was thrown",
    "explanation": "finally 总会执行。"
  },
  {
    "type": "mcq",
    "question": "What changed about the throw keyword as of PHP 8.0.0?",
    "options": [
      "throw can only be used inside class methods",
      "throw was removed from the language",
      "throw became a function that returns a value",
      "throw became an expression and can be used in any expression context"
    ],
    "answer": "throw became an expression and can be used in any expression context",
    "explanation": "PHP 8.0 起 throw 是 expression，此前是必须独占一行的 statement。"
  },
  {
    "type": "mcq",
    "question": "Since PHP 8, how can you catch an exception without storing it in a variable?",
    "options": [
      "catch (SpecificException as null) { ... }",
      "catch (SpecificException) { ... }",
      "catch SpecificException; { ... }",
      "catch () { ... }"
    ],
    "answer": "catch (SpecificException) { ... }",
    "explanation": "PHP 8 允许 catch 不写变量。"
  },
  {
    "type": "mcq",
    "question": "What happens when include($path) fails?",
    "options": [
      "A warning is produced and the script continues",
      "The script restarts",
      "A fatal error stops execution",
      "Nothing; the failure is silent"
    ],
    "answer": "A warning is produced and the script continues",
    "explanation": "include 失败仅 warning；require 失败是 fatal error。"
  },
  {
    "type": "mcq",
    "question": "What happens when require($path) fails?",
    "options": [
      "The script continues silently",
      "The file is created automatically",
      "A fatal error is raised and execution stops",
      "Only a warning is shown"
    ],
    "answer": "A fatal error is raised and execution stops",
    "explanation": "require 失败导致 fatal error。"
  },
  {
    "type": "mcq",
    "question": "What is the purpose of include_once and require_once?",
    "options": [
      "To make sure the file is included/required only once",
      "To include a file asynchronously",
      "To include a file only on the first line",
      "To include a file without executing it"
    ],
    "answer": "To make sure the file is included/required only once",
    "explanation": "_once 版本保证文件只被引入一次。"
  },
  {
    "type": "mcq",
    "question": "What is the difference between exit() and die([$status])?",
    "options": [
      "They are the same, except die sends $status to the browser before exiting if supplied",
      "die() restarts the script",
      "die() continues running after the message",
      "exit() is only for loops"
    ],
    "answer": "They are the same, except die sends $status to the browser before exiting if supplied",
    "explanation": "die 等同 exit，但可先输出 $status。"
  },
  {
    "type": "mcq",
    "question": "Which statement redirects the browser to another page in PHP?",
    "options": [
      "goto('index.php');",
      "redirect('index.php');",
      "header('Location:index.php');",
      "include_header('index.php');"
    ],
    "answer": "header('Location:index.php');",
    "explanation": "使用 header('Location:...') 重定向。"
  },
  {
    "type": "mcq",
    "question": "Which function checks whether a value is a string, integer, float or Boolean?",
    "options": [
      "is_resource()",
      "is_countable()",
      "is_scalar()",
      "is_iterable()"
    ],
    "answer": "is_scalar()",
    "explanation": "is_scalar 判断是否为 scalar 类型。"
  },
  {
    "type": "mcq",
    "question": "Which function checks whether a floating-point value is 'not a number'?",
    "options": [
      "is_finite()",
      "is_nan()",
      "is_null()",
      "is_infinite()"
    ],
    "answer": "is_nan()",
    "explanation": "is_nan() 检查 NaN。"
  },
  {
    "type": "mcq",
    "question": "Which function checks whether a value can be called as a function?",
    "options": [
      "is_callable()",
      "is_object()",
      "is_array()",
      "is_iterable()"
    ],
    "answer": "is_callable()",
    "explanation": "is_callable() 检查值是否可作为函数调用。"
  },
  {
    "type": "mcq",
    "question": "Which function checks whether a value can be iterated over?",
    "options": [
      "is_iterable()",
      "is_countable()",
      "is_scalar()",
      "is_callable()"
    ],
    "answer": "is_iterable()",
    "explanation": "is_iterable() 检查是否可迭代。"
  },
  {
    "type": "mcq",
    "question": "How many scope types does PHP define in the slides, and which are they?",
    "options": [
      "5: local, global, static, class, block",
      "2: local and global",
      "4: local, function parameters, global, static",
      "3: local, global, class"
    ],
    "answer": "4: local, function parameters, global, static",
    "explanation": "课件列出 Local、Function parameters、Global、Static。"
  },
  {
    "type": "mcq",
    "question": "What happens if you echo a variable defined inside a function from outside that function?",
    "options": [
      "It prints NULL silently with no notice",
      "It prints the value normally",
      "A notice: Undefined variable",
      "The script is terminated"
    ],
    "answer": "A notice: Undefined variable",
    "explanation": "Local 变量在函数外不可访问，出现 Notice: Undefined variable。"
  },
  {
    "type": "mcq",
    "question": "When is a local variable and its value destroyed?",
    "options": [
      "When the browser closes",
      "When the script starts",
      "Never; it stays until the server restarts",
      "When the function exits"
    ],
    "answer": "When the function exits",
    "explanation": "函数执行完毕后 local 变量被销毁。"
  },
  {
    "type": "mcq",
    "question": "Where must function parameters be declared?",
    "options": [
      "In the function header",
      "Inside the function body with the global keyword",
      "In a separate config file",
      "At the top of the file"
    ],
    "answer": "In the function header",
    "explanation": "参数在函数头声明，函数结束后不可访问（除非按引用传递）。"
  },
  {
    "type": "mcq",
    "question": "How do you pass a variable by reference in PHP?",
    "options": [
      "Add an asterisk (*) before the parameter name",
      "Use the ref keyword",
      "Add an ampersand (&) before the parameter name",
      "Wrap the argument in brackets"
    ],
    "answer": "Add an ampersand (&) before the parameter name",
    "explanation": "function demo(&$arg){...}"
  },
  {
    "type": "mcq",
    "question": "What is the effect of passing by reference?",
    "options": [
      "The function receives an independent copy",
      "The variable is deleted after the call",
      "The variable becomes a constant",
      "Changing the variable inside the function also changes the original variable, and vice versa"
    ],
    "answer": "Changing the variable inside the function also changes the original variable, and vice versa",
    "explanation": "两个变量引用同一个值，互相同步。"
  },
  {
    "type": "mcq",
    "question": "What happens if you call printString(\"this is my string\") where printString(&$string) takes a reference?",
    "options": [
      "Fatal error: only variables can be passed by reference",
      "A notice is shown and the call is skipped",
      "It works and prints the string",
      "It prints NULL"
    ],
    "answer": "Fatal error: only variables can be passed by reference",
    "explanation": "不能把字面量传给按引用参数。"
  },
  {
    "type": "mcq",
    "question": "Which are the two ways to access a global variable inside a function?",
    "options": [
      "The & operator and the const keyword",
      "The static keyword and the define() function",
      "The global keyword and the $GLOBALS array",
      "The $_SESSION and $_COOKIE arrays"
    ],
    "answer": "The global keyword and the $GLOBALS array",
    "explanation": "global $x; 或 $GLOBALS['x']。"
  },
  {
    "type": "mcq",
    "question": "What does $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y']; do inside a function?",
    "options": [
      "Directly operates on the global variables, creating/updating global $z",
      "Creates a local variable $z only",
      "Throws a fatal error",
      "Declares constants"
    ],
    "answer": "Directly operates on the global variables, creating/updating global $z",
    "explanation": "$GLOBALS 可直接操作全局变量。"
  },
  {
    "type": "mcq",
    "question": "What does the static keyword do for a variable declared inside a function?",
    "options": [
      "The variable keeps its value after the function exits",
      "The variable is destroyed immediately",
      "The variable becomes a constant",
      "The variable becomes global automatically"
    ],
    "answer": "The variable keeps its value after the function exits",
    "explanation": "static 变量在多次调用间保留其值。"
  },
  {
    "type": "mcq",
    "question": "Given keepTrack() with 'static $num1 = 10; $num2 = 20;' then $num1++; $num2++; what are the values on the SECOND call?",
    "options": [
      "num1 = 12, num2 = 22",
      "num1 = 11, num2 = 21",
      "num1 = 11, num2 = 22",
      "num1 = 12, num2 = 21"
    ],
    "answer": "num1 = 12, num2 = 21",
    "explanation": "$num1 为 static 会累加；$num2 每次重置为 20 再 ++ 得 21。"
  },
  {
    "type": "mcq",
    "question": "How many primitive types does PHP support, according to the slides?",
    "options": [
      "10",
      "8",
      "4",
      "12"
    ],
    "answer": "10",
    "explanation": "4 scalar + 4 compound + 2 special = 10。"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a complete list of PHP's scalar types?",
    "options": [
      "boolean, integer, float, string",
      "resource, NULL",
      "integer, string, array, object",
      "array, object, callable, iterable"
    ],
    "answer": "boolean, integer, float, string",
    "explanation": "Scalar 一次只存一个值。"
  },
  {
    "type": "mcq",
    "question": "Which are the compound types in PHP?",
    "options": [
      "array, object, callable, iterable",
      "string, array, float, object",
      "resource, NULL",
      "boolean, integer, float, string"
    ],
    "answer": "array, object, callable, iterable",
    "explanation": "Compound：array、object、callable、iterable。"
  },
  {
    "type": "mcq",
    "question": "Which are the two special types in PHP?",
    "options": [
      "boolean and NULL",
      "callable and iterable",
      "resource and NULL",
      "object and resource"
    ],
    "answer": "resource and NULL",
    "explanation": "Special：resource 与 NULL。"
  },
  {
    "type": "mcq",
    "question": "Which function is used to define a constant?",
    "options": [
      "const_set()",
      "constant_define()",
      "define()",
      "var_const()"
    ],
    "answer": "define()",
    "explanation": "define(\"PI\", 3.141592);"
  },
  {
    "type": "mcq",
    "question": "What happens if you try to define a constant a second time (e.g. define(\"PI\", 123.45) after defining PI)?",
    "options": [
      "PI becomes NULL",
      "The script restarts",
      "A notice/warning that the constant is already defined; the value is unchanged",
      "PI silently takes the new value"
    ],
    "answer": "A notice/warning that the constant is already defined; the value is unchanged",
    "explanation": "常量不能被修改，重复定义会出现警告/Notice。"
  },
  {
    "type": "mcq",
    "question": "What is the naming convention for constants?",
    "options": [
      "Leading underscore only",
      "camelCase",
      "All capital letters",
      "All lowercase with a $ prefix"
    ],
    "answer": "All capital letters",
    "explanation": "如 PI。"
  },
  {
    "type": "mcq",
    "question": "What is special about superglobal variables?",
    "options": [
      "They are available only inside functions",
      "They must be declared with global first",
      "They only exist in HTML files",
      "They are predefined and available in all scopes throughout a script"
    ],
    "answer": "They are predefined and available in all scopes throughout a script",
    "explanation": "Superglobals 无需 global 关键字，在所有 scope 都可用。"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a PHP superglobal?",
    "options": [
      "$_LOCAL",
      "$_REQUEST",
      "$_SERVER",
      "$_COOKIE"
    ],
    "answer": "$_LOCAL",
    "explanation": "九个 superglobals：$GLOBALS、$_SERVER、$_GET、$_POST、$_FILES、$_COOKIE、$_SESSION、$_REQUEST、$_ENV。"
  },
  {
    "type": "mcq",
    "question": "What does $GLOBALS contain?",
    "options": [
      "Only environment variables",
      "An associative array of references to all variables in the global scope, keyed by variable name",
      "Only constants defined with define()",
      "Only variables sent from forms"
    ],
    "answer": "An associative array of references to all variables in the global scope, keyed by variable name",
    "explanation": "变量名就是数组的 key。"
  },
  {
    "type": "mcq",
    "question": "In globalsExample(), with global $myString = 'Global content' and local $myString = 'Local variable', what does $GLOBALS['myString'] return inside the function?",
    "options": [
      "NULL",
      "Global content",
      "Local variable",
      "An undefined variable notice"
    ],
    "answer": "Global content",
    "explanation": "$GLOBALS['myString'] 指向全局变量。"
  },
  {
    "type": "mcq",
    "question": "What does $_SERVER provide?",
    "options": [
      "Only the data posted by a form",
      "Server and execution environment information such as headers, path and script location",
      "Only the cookies stored in the browser",
      "Only uploaded files"
    ],
    "answer": "Server and execution environment information such as headers, path and script location",
    "explanation": "$_SERVER 由 web server 创建，不同 server 的变量不同。"
  },
  {
    "type": "mcq",
    "question": "Who creates the entries in $_SERVER, and are they the same on all servers?",
    "options": [
      "The database creates them",
      "The web server creates them, and not all servers provide the same variables",
      "PHP creates them, and they are always the same",
      "The browser creates them, and they are always the same"
    ],
    "answer": "The web server creates them, and not all servers provide the same variables",
    "explanation": "Created by the webserver；Not all servers the same variables。"
  },
  {
    "type": "mcq",
    "question": "Which superglobal retrieves values from URL parameters (query strings)?",
    "options": [
      "$_POST",
      "$_ENV",
      "$_FILES",
      "$_GET"
    ],
    "answer": "$_GET",
    "explanation": "$_GET 用于 URL 参数。"
  },
  {
    "type": "mcq",
    "question": "Which function should be used to sanitize $_GET input to help prevent XSS attacks?",
    "options": [
      "number_format()",
      "strtotime()",
      "strtolower()",
      "htmlspecialchars()"
    ],
    "answer": "htmlspecialchars()",
    "explanation": "htmlspecialchars() 转义 HTML 特殊字符。"
  },
  {
    "type": "mcq",
    "question": "For the URL ...superglobals.php?firstName=Jimmy&lastName=Jones, what is $_GET['firstName']?",
    "options": [
      "NULL",
      "Jimmy",
      "Jimmy&lastName=Jones",
      "firstName"
    ],
    "answer": "Jimmy",
    "explanation": "querystring 中的键值对被放进 $_GET。"
  },
  {
    "type": "mcq",
    "question": "Which HTTP Content-Types make data available in $_POST?",
    "options": [
      "text/plain or text/css",
      "application/x-www-form-urlencoded or multipart/form-data",
      "image/png or image/jpeg",
      "application/pdf only"
    ],
    "answer": "application/x-www-form-urlencoded or multipart/form-data",
    "explanation": "$_POST 用于通过 HTTP POST 提交的数据。"
  },
  {
    "type": "mcq",
    "question": "Which superglobal holds items uploaded to the script via HTTP POST?",
    "options": [
      "$_SERVER",
      "$_FILES",
      "$_UPLOAD",
      "$_POST only"
    ],
    "answer": "$_FILES",
    "explanation": "$_FILES 为 HTTP File Upload variables。"
  },
  {
    "type": "mcq",
    "question": "Which function stores a cookie, and how do you read it back later?",
    "options": [
      "cookie_set(); read with getcookie()",
      "setcookie(); read with $_GET['cookiename']",
      "makecookie(); read with $_SESSION['cookiename']",
      "setcookie(); read with $_COOKIE['cookiename']"
    ],
    "answer": "setcookie(); read with $_COOKIE['cookiename']",
    "explanation": "setcookie() 保存，$_COOKIE['name'] 读取。"
  },
  {
    "type": "mcq",
    "question": "What does setcookie(\"TestCookie\", $value, time()+3600); do?",
    "options": [
      "Stores the cookie and makes it expire in 1 hour",
      "Deletes the cookie after 3600 days",
      "Stores the cookie and makes it expire in 1 minute",
      "Stores the cookie permanently"
    ],
    "answer": "Stores the cookie and makes it expire in 1 hour",
    "explanation": "time()+3600 秒 = 1 小时。"
  },
  {
    "type": "mcq",
    "question": "How do $_SESSION variables compare to cookies according to the slides?",
    "options": [
      "They are stored forever in the browser",
      "They are the same as $_GET",
      "They work in the same way as cookies but don't last as long",
      "They can only store integers"
    ],
    "answer": "They work in the same way as cookies but don't last as long",
    "explanation": "Work in the same way as cookies but don't last as long。"
  },
  {
    "type": "mcq",
    "question": "By default, which superglobals' contents does $_REQUEST include?",
    "options": [
      "$_SESSION and $_GLOBALS",
      "$_SERVER, $_ENV and $_FILES",
      "$_GET, $_POST and $_COOKIE",
      "Only $_GET"
    ],
    "answer": "$_GET, $_POST and $_COOKIE",
    "explanation": "$_REQUEST 默认包含 $_GET、$_POST、$_COOKIE。"
  },
  {
    "type": "mcq",
    "question": "What does $_ENV contain?",
    "options": [
      "HTTP cookies",
      "Variables defined in the global scope",
      "Uploaded files",
      "Environment variables passed to the current script"
    ],
    "answer": "Environment variables passed to the current script",
    "explanation": "$_ENV 为 Environment variables。"
  }
]



};