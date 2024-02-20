# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

  - A foreign key refers to a column or columns that are linked to another column in a different table, creating a relationship between them

- How do you join two SQL tables? (Provide at least two syntaxes.)

  - By using the join clause, followed by the using clause, and then the column name.
  - By using the join clause, followed by the target table name, and then an expression that matches the foreign key in the from table with the primary key in the target table.

- How do you temporarily rename columns or tables in a SQL statement?

  - By giving them an alias using the `as` clause

- How do you create a one-to-many relationship between two tables?

  - Add a field(s) in the "one" table that is a foreign key to the "many" table

- How do you create a many-to-many relationship between two tables?

  - Add a third table (referred to as a "join" table) that contains two fields: a foreign key to the first table and a foreign key to the second table

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
