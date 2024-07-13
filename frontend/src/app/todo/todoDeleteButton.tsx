"use client";

import { deleteTodo } from "@/actions/todo";
import { Button } from "@mui/material";

type Props = {
  id: number;
};

export default function TodoDeleteButton({ id }: Props) {
  return (
    <Button color="error" onClick={() => deleteTodo(id)}>
      Delete
    </Button>
  );
}
