import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";

export default function Home() {
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
          Go Next gRPC sample
        </Typography>
        <Link href="/hello" color="secondary" component={NextLink}>
          Hello page
        </Link>
        <Link href="/todo" color="secondary" component={NextLink}>
          Todo page
        </Link>
      </Box>
    </Container>
  );
}
