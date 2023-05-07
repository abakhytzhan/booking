import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import HomePage from "./pages/home/homePage";
import PageNotFound from "./pages/pageNotFound/pageNotFound";
import Room from "./pages/room/room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="room">
          <Route index element={<Room />} />
          <Route path=":string" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
