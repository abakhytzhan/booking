import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import RoomsInfo from "../../components/roomsInfo/RoomsInfo";
import { useState, useEffect } from "react";
import { getAllRooms } from "../../service/getAllRooms";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("currentToken"))) {
      navigate("/login");
    } else {
      getAllRooms()
        .then((data) => {
          setRooms(data);
        })
        .catch((err) => console.log(err));
    }
  }, [navigate]);

  return (
    <>
      {JSON.parse(localStorage.getItem("currentToken")) ? (
        <>
          <Header />
          <div className="rooms">
            <SideBar rooms={rooms} />
            <RoomsInfo rooms={rooms} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default HomePage;
