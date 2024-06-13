-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shopping_list" (
"id" SERIAL PRIMARY KEY,
"name" varchar (80),
"quantity" decimal,
"unit" varchar (20),
"purchased" boolean
);

INSERT INTO "shopping_list" ("name", "quantity", "unit", "purchased")
VALUES ('apples', 5.5, 'lbs', false), ('bread', 1, 'loaf', false), ('milk', 1, 'gallon', false);