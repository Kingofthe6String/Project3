import React from "react";

export default function Todolist({ todos, setTodos }) {
  console.log(todos);

  return <div>Todolist</div>;
}

<Table responsive>
  <thead>
    <tr>
      <th>No.</th>
      <th>Book Title</th>
      <th>Book Author</th>
    </tr>
  </thead>
  <tbody>
    {books.map((book, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.status}</td>
        <td>
          <Button
            variant="danger"
            name="btnDelete"
            onClick={(event) => handleDelete(event, book.id)}
          >
            Danger
          </Button>
        </td>
        <td>
          <Button
            variant="success"
            name="btnDelete"
            onClick={(event) => handleUpdate(event, book.id)}
          >
            Update
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>;
