`
✅ Day 3: Conditional Rendering & Dynamic Lists
Goal: Learn how to:

Render components based on conditions.

Display lists of data dynamically using .map().

🔨 Project: Mini To-Do List App
You’ll create a basic to-do app where users can:

View a list of tasks.

Add a new task.

See a message when there are no tasks.

🧠 Concepts:
Conditional rendering with if, ternary, or &&

Mapping arrays to components

Controlled inputs (user typing tracked via useState)

Delete action

<code> tasks.filter((_, i) => ...) </code>


We want to keep every task except the one with index indexToDelete.

So: if i !== indexToDelete → keep it!

if i === indexToDelete → throw it out!

`