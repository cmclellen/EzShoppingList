import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ShoppingLists from "./pages/ShoppingLists";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import AddShoppingList from "./pages/AddShoppingList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DarkModeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="shopping-lists" element={<ShoppingLists />} />
                <Route path="*" element={<PageNotFound />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
