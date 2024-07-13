"use client";

import { completeTodo } from "@/actions/todo";
import { Button } from "@mui/material";

type Props = {
  id: number;
  completed: boolean;
};

export default function TodoDoneButton({ id, completed }: Props) {
  return (
    <Button disabled={completed} onClick={() => completeTodo(id)}>
      Done
    </Button>
  );
}
