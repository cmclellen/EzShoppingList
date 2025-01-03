import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ShoppingLists from "./pages/ShoppingLists";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import AddShoppingList from "./pages/AddShoppingList";

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="shopping-lists" element={<ShoppingLists />}>
                <Route path="add" element={<AddShoppingList />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
