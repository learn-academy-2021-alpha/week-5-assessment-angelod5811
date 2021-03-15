# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC is model view controller which has CRUD actions.

  Researched answer:It basically works as following: Requests first come to the controller, controller finds an appropriate view and interacts with model which in turn interacts with database and send response to controller.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:CRUD means Create, Reate, Update, Destroy or Delete. it is the proccess for db's

  Researched answer: CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.



3. What is a relational database? Are there other kinds of databases?

  Your answer: relational are databases using a model and schema

  Researched answer: Relational databases are also called Relational Database Management Systems (RDBMS) or SQL databases. A relational database is a digital database based on the relational model of data, as proposed by E. F. Codd in 1970. A software system used to maintain relational databases is a relational database management system.



4. What are the 5 HTTP verbs? What are they important?

  Your answer: GET POST PUT PATCH UPDATE DELETE

  Researched answer:The valid HTTP methods are GET , HEAD , POST , PUT , DELETE , TRACE , OPTIONS , CONNECT , and PATCH .



5. What is object-relational mapping?

  Your answer: is the ability to write queries

  Researched answer: Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages.



6. What is a gem?

  Your answer: Gems are package managers for Ruby

  Researched answer: RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries, a tool designed to easily manage the installation of gems, and a server for distributing them.



7. What are primary keys? Why are they important?

  Your answer: the primary key is the main class for all the subclasses following they will have a forigen key.

  Researched answer: Using the primary key, you can easily identify and find unique rows in the database table. They allow you to update/delete only specific records by uniquely identifying them. The table's data is sorted based on the primary key. They help you avoid inserting duplicate records in a table.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL.
- JSON - JSON is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types.
- Validations - Validations are used to ensure that only valid data is saved into your database
- Strong params - Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It has its own DSL (Domain Specific Language, or in other words, a predefined syntax it understands), that allows you to indicate what parameters should be allowed.
