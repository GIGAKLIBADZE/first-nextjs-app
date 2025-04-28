import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>Welcome to JIO organization</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
