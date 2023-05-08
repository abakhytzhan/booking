import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import RoomDescription from "../roomDescription/RoomDescription";
import RoomBookingInfo from "../roomBookingInfo/RoomBookingInfo";

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

const RoomDetails = () => {
  const { string } = useParams();
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "monospace",
          fontWeight: 900,
          letterSpacing: ".3rem",
          color: "primary.dark",
          textAlign: "center",
        }}
      >
        {string} ROOM DETAILS
      </Typography>
      <div className="roomDetailsFlex">
        <Carousel />
        <RoomDescription />
      </div>
      <div className="slider-line"></div>
      <RoomBookingInfo />
    </>
  );
};

export default RoomDetails;
