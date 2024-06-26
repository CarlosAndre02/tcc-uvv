import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme";
// import { AuthContextProvider } from "./modules/auth/AuthContext";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* <AuthContextProvider> */}
          {children}
        {/* </AuthContextProvider> */}
      </ChakraProvider>
    </BrowserRouter>
  );
};
