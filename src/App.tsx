import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNav from "./ui/MainNav";
import Lists from "./pages/Lists";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <MainNav />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Routes>
            <Route path="lists" element={<Lists />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
