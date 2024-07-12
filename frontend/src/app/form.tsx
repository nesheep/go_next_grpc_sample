"use client";

import { useState } from "react";
import { hello } from "./_actions/hello";

export function Form() {
  const [message, setMessage] = useState("");

  const formAction = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    if (!name) return;
    setMessage(await hello(name));
  };

  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />
      <button type="submit">Run</button>
      <p>{message}</p>
    </form>
  );
}
