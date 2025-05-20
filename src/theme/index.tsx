import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "var(--background)",
      paper: "var(--background)",
    },
    text: {
      primary: "var(--foreground)",
    },
  },
  typography: {
    fontFamily: "var(--font-poppins), Arial, Helvetica, sans-serif",
  },
});
