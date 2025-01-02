import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Lists from "./pages/Lists";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="lists" element={<Lists />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
