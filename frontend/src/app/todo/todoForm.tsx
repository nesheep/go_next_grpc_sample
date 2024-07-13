import { createTodo } from "@/actions/todo";
import { Box, Button, TextField } from "@mui/material";

export default function TodoForm() {
  const formAction = async (form: FormData) => {
    "use server";
    const title = form.get("title")?.toString();
    if (!title) return;
    await createTodo(title);
  };

  return (
    <form action={formAction}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField type="text" name="title" id="title" />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </form>
  );
}
