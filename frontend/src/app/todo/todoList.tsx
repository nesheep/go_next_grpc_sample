import { Box, Stack, Typography } from "@mui/material";
import TodoDoneButton from "./todoDoneButton";
import TodoDeleteButton from "./todoDeleteButton";
import { Todo } from "@/gen/pb/todo_pb";

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <Stack spacing={1}>
      {todos.map((todo) => (
        <Box
          key={todo.getId()}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>
            {todo.getId()} {todo.getTitle()}
          </Typography>
          {todo.getCompleted() ? "✅" : "❌"}
          <TodoDoneButton id={todo.getId()} completed={todo.getCompleted()} />
          <TodoDeleteButton id={todo.getId()} />
        </Box>
      ))}
    </Stack>
  );
}
