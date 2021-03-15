# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
rails new (application_name) -d postgresql -T


2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.
This is where you would do --- rails g migration add_foreign_key. Then you run --- rails db:migrate. Then in the editor under the new add_foreign_key file you would -- add_column :foreign_key. Also then to link the two you would need to do a has_many and a belongs_to.


3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?
rails create model Person shirt:string pants:string shoes:string


4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?


rails g model Class :table :name :datatype
(this one seams very close to number 3)


5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

Book would have the foreign key of Library_id



6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

the schema file in Rails is where all your models are held and you CANNOT directly modify the schema. You would have to do a a rails g migration to add or edit columns.
