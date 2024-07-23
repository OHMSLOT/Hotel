import { RouterProvider } from "react-router";
import { router } from "./routers";
import { ThemeProvider } from "./components/themes";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;