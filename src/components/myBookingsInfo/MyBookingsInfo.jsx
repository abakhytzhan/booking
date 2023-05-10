import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllReservationsByUser } from "../../service/getAllReservationsByUser";

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const MyBookingsInfo = () => {
  const [timeslots, setTimeslot] = useState();

  useEffect(() => {
    getAllReservationsByUser()
      .then((bookings) => {
        let timeslotData = [];
        bookings.map((booking) => {
          booking.timeslots.map((timeslot) => {
            let timeslot2 = {
              start: timeslot.start,
              end: timeslot.end,
              purpose: booking.purpose,
              roomNumber: booking.roomNumber,
            };
            timeslotData.push(timeslot2);
          });
        });

        const dataReservation = timeslotData.map((elem) => {
          return {
            start: new Date(elem.start),
            end: new Date(elem.end),
            purpose: elem.purpose,
            roomNumber: elem.roomNumber,
          };
        });

        setTimeslot(dataReservation);
      })
      .catch((err) => console.log(err));
  }, []);

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
          marginBottom: 5,
          marginTop: 5,
        }}
      >
        MY BOOKINGS
      </Typography>

      <table className="reservationTable">
        <thead>
          <tr>
            <th className="reservationColumn">Room</th>
            <th className="dateColumn">Start</th>
            <th className="dateColumn">End</th>
            <th className="dateColumn">Event</th>
          </tr>
        </thead>
        <tbody>
          {timeslots?.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{elem.roomNumber}</td>
                <td>
                  {elem.start.getDate()} {months[elem.start.getMonth()]}{" "}
                  {elem.start.getFullYear()}{" "}
                  <span className="hour">{elem.start.getHours()}:00</span>
                </td>
                <td>
                  {elem.end.getDate()} {months[elem.end.getMonth()]}{" "}
                  {elem.end.getFullYear()}{" "}
                  <span className="hour">{elem.end.getHours()}:00</span>
                </td>
                <td>{elem.purpose}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MyBookingsInfo;
