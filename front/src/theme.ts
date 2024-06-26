import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/iceland";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#02020B",
      },
      ".root": {
        minHeight: "100vh",
      },
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});
