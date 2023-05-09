import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import HomePage from "./pages/home/homePage";
import PageNotFound from "./pages/pageNotFound/pageNotFound";
import Rooms from "./pages/rooms/rooms";
import Contacts from "./pages/contacts/contacts";
import Calendar from "./pages/calendar/calendar";
import MyBookings from "./pages/myBookings/myBookings";
import MyProfile from "./pages/myProfile/myProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="rooms">
          <Route index element={<Rooms />} />
          <Route path=":string" element={<Rooms />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="mybookings" element={<MyBookings />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
