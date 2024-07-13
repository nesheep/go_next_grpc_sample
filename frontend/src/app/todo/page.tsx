import { Box, Container, Typography } from "@mui/material";
import { listTodos } from "@/actions/todo";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
import { revalidatePath } from "next/cache";

export default async function Todo() {
  revalidatePath("/todo");
  const todos = await listTodos();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Todo
        </Typography>
        <Box sx={{ mb: 2 }}>
          <TodoForm />
        </Box>
        <TodoList todos={todos} />
      </Box>
    </Container>
  );
}
