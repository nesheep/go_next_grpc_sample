"use client";

import { useState } from "react";
import { hello } from "@/actions/hello";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export function Form() {
  const [message, setMessage] = useState("");

  const formAction = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    if (!name) return;
    setMessage(await hello(name));
  };

  return (
    <form action={formAction}>
      <Stack spacing={2} alignItems="center">
        <TextField type="text" name="name" id="name" required />
        <Button type="submit" variant="contained">
          Run
        </Button>
        <Typography>{message}</Typography>
      </Stack>
    </form>
  );
}
