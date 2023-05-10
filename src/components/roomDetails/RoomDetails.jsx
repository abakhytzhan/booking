import { Typography } from "@mui/material";
import Carousel from "../carousel/Carousel";
import RoomDescription from "../roomDescription/RoomDescription";
import RoomBookingInfo from "../roomBookingInfo/RoomBookingInfo";

const RoomDetails = ({ room }) => {
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
        {room?.roomNumber} ROOM DETAILS
      </Typography>
      <a className="homeButton" href="/">
        Home
      </a>
      <div className="roomDetailsFlex">
        <Carousel room={room} />
        <RoomDescription room={room} />
      </div>
      <div className="slider-line"></div>
      <RoomBookingInfo />
    </>
  );
};

export default RoomDetails;
