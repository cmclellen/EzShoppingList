import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ShoppingLists from "./pages/ShoppingLists";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ShoppingList from "./pages/ShoppingList";
import LoginForm from "./features/authentication/LoginForm";
import SignupForm from "./features/authentication/SignupForm";
import FullPage from "./ui/FullPage";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DarkModeProvider>
          <Routes>
            <Route
              path="login"
              element={
                <FullPage title="Log In">
                  <LoginForm />
                </FullPage>
              }
            ></Route>
            <Route
              path="signup"
              element={
                <FullPage title="Sign up">
                  <SignupForm />
                </FullPage>
              }
            ></Route>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="shopping-lists" />} />
              <Route path="shopping-lists" element={<ShoppingLists />}>
                <Route path=":id" element={<ShoppingList />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
          <Toaster />
        </DarkModeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
