"use client";

import React, { useState } from "react";
import { Table, Button, Tag, Typography } from "antd";

const dataSource = [
  {
    key: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "Unread",
  },
  {
    key: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: "Read",
  },
  {
    key: "3",
    title: "1984",
    author: "George Orwell",
    status: "Unread",
  },
  {
    key: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    status: "Read",
  },
  {
    key: "5",
    title: "Moby-Dick",
    author: "Herman Melville",
    status: "Unread",
  },
  {
    key: "6",
    title: "Brave New World",
    author: "Aldous Huxley",
    status: "Unread",
  },
  {
    key: "7",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    status: "Read",
  },
  {
    key: "8",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    status: "Read",
  },
  {
    key: "9",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    status: "Unread",
  },
  {
    key: "10",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    status: "Unread",
  },
  {
    key: "11",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    status: "Read",
  },
  {
    key: "12",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    status: "Unread",
  },
  {
    key: "13",
    title: "The Odyssey",
    author: "Homer",
    status: "Read",
  },
  {
    key: "14",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    status: "Unread",
  },
  {
    key: "15",
    title: "Animal Farm",
    author: "George Orwell",
    status: "Read",
  },
  {
    key: "16",
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: "Read",
  },
  {
    key: "17",
    title: "The Book Thief",
    author: "Markus Zusak",
    status: "Unread",
  },
  {
    key: "18",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    status: "Read",
  },
  {
    key: "19",
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    status: "Unread",
  },
  {
    key: "20",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    status: "Unread",
  },
  {
    key: "21",
    title: "Les Misérables",
    author: "Victor Hugo",
    status: "Read",
  },
  {
    key: "22",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    status: "Unread",
  },
];

export default function Books() {
  const [books, setBooks] = useState(dataSource);
  const toggleStatus = (key: string) => {
    const updated = books.map((book) =>
      book.key === key
        ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
        : book
    );
    setBooks(updated);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Read" ? "green" : "volcano"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Button onClick={() => toggleStatus(record.key)}>
          Mark as {record.status === "Read" ? "Unread" : "Read"}
        </Button>
      ),
    },
  ];

  const { Title } = Typography;

  return (
    <div className="books-table">
      <Title level={3} style={{ color: "white" }}>
        My book list:
      </Title>
      <Table
        className="custom-table"
        pagination={{ pageSize: 6 }}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}
