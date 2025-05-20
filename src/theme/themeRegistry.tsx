"use client";

import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { theme } from ".";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
