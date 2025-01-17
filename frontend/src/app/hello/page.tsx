import { Box, Container, Typography } from "@mui/material";
import { Form } from "./form";

export default function Hello() {
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
          Hello
        </Typography>
        <Form />
      </Box>
    </Container>
  );
}
