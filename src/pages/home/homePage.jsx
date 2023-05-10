import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import RoomsInfo from "../../components/roomsInfo/RoomsInfo";
import { useState, useEffect } from "react";
import { getAllRooms } from "../../service/getAllRooms";

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    getAllRooms()
      .then((data) => {
        setRooms(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="rooms">
        <SideBar rooms={rooms} />
        <RoomsInfo rooms={rooms} />
      </div>
    </>
  );
};

export default HomePage;
