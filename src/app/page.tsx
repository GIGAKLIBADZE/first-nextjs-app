import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Book Tracker</h1>
      <h3>
        Track the books you’ve read and the ones you plan to read! Click below
        to view your book list.
      </h3>
      <Button>Go to Book List!</Button>
    </div>
  );
}
