import { Button } from "antd";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>Welcome to book tracker</h1>
      <h3>
        Track the books you’ve read and the ones you plan to read! Click below
        to view your book list.
      </h3>
      <Button>Go to Book List</Button>
    </div>
  );
}
