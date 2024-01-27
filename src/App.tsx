import "./global.css";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="acrepan-theme">
       <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </ThemeProvider>
   
  );
}
