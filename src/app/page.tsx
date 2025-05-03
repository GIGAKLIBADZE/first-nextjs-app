"use client";
import { Button, Typography } from "antd";
import Link from "next/link";

export default function Home() {
  const { Title } = Typography;
  return (
    <div className="main-view">
      <Title style={{ color: "white" }}>Welcome to Book Tracker</Title>
      <h3 style={{ color: "#a89e9e" }}>
        Track the books you’ve read and the ones you plan to read! Click below
        to view your book list.
      </h3>
      <Button type="primary" shape="round" size="large">
        <Link href="/books">Go to Book List!</Link>
      </Button>
    </div>
  );
}
