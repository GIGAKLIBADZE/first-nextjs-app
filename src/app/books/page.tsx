"use client";

import React, { useState } from "react";
import { Table, Button, Tag } from "antd";

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
  return (
    <div>
      <h1>My book list:</h1>
      <Table columns={columns} dataSource={dataSource}></Table>
    </div>
  );
}
