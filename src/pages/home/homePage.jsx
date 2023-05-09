import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import RoomsInfo from "../../components/roomsInfo/RoomsInfo";
import { useState } from "react";

export const getAllRooms = async () => {
  try {
    let response = await fetch("http://localhost:8080/rooms");

    if (!response.ok) {
      console.log("error");
      throw new Error();
    } else {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

const HomePage = () => {
  // const [rooms, setRooms] = useState([]);
  // useEffect(() => {
  //   getAllRooms()
  //     .then((data) => {
  //       setRooms(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <Header />
      <div className="rooms">
        <SideBar />
        <RoomsInfo />
      </div>
    </>
  );
};

export default HomePage;
