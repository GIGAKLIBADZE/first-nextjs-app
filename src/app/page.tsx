"use client";

import { Button, Typography } from "antd";
import Link from "next/link";

export default function Home() {
  const { Title } = Typography;
  return (
    <main>
      <Title level={2} style={{ color: "white" }}>
        Welcome to Book Tracker
      </Title>
      <Title level={3} style={{ color: "#a89e9e" }}>
        Track the books you’ve read and the ones you plan to read! Click below
        to view your book list.
      </Title>
      <Button type="primary" shape="round" size="large">
        <Link href="/books">Go to Book List!</Link>
      </Button>
    </main>
  );
}
