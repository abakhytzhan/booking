import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import RoomDescription from "../roomDescription/RoomDescription";
import RoomBookingInfo from "../roomBookingInfo/RoomBookingInfo";
import BookingTable from "../bookingTable/BookingTable";

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
      <BookingTable />
    </>
  );
};

export default RoomDetails;
