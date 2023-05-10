import RoomDetails from "../../components/roomDetails/RoomDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRoomByNumber } from "../../service/getRoomByNumber";

const Rooms = () => {
  const { string } = useParams();
  const [room, setRoom] = useState();

  useEffect(() => {
    getRoomByNumber(string)
      .then((data) => {
        setRoom(data);
      })
      .catch((err) => console.log(err));
  }, [string]);
  return <>{room ? <RoomDetails room={room} /> : null}</>;
};

export default Rooms;
