import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import spinner from "./spinner.svg";
import { getAllReservationsByRoomNumber } from "../../service/getAllReservationsByRoomNumber";
import { addReservationByRoomNumber } from "../../service/addReservationByRoomNumber";
import { deleteReservation } from "../../service/deleteReservation";

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

const RoomBookingInfo = () => {
  const { string } = useParams();
  const [timeslots, setTimeslot] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllReservationsByRoomNumber(string)
      .then((bookings) => {
        let timeslotData = [];
        bookings.map((booking) => {
          booking.timeslots.map((timeslot) => {
            let timeslot2 = {
              start: timeslot.start,
              end: timeslot.end,
              purpose: timeslot.purpose,
              roomNumber: booking.roomNumber,
              userID: timeslot.userID,
              timeslotID: timeslot.timeslotID,
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
            userID: elem.userID,
            timeslotID: elem.timeslotID,
          };
        });

        setTimeslot(dataReservation);
      })
      .catch((err) => console.log(err));
  }, [string]);

  const generateID = () => {
    return Math.random() * 100;
  };

  const [errorMessage, setErrorMessage] = useState([]);

  const [orderData, setOrderData] = useState([
    {
      startDay: "",
      startHour: "",
      endDay: "",
      endHour: "",
      id: generateID().toFixed(2),
    },
  ]);

  const handleAddNewOrder = () => {
    setOrderData((orderData) => [
      ...orderData,
      {
        startDay: "",
        startHour: "",
        endDay: "",
        endHour: "",
        id: generateID().toFixed(),
      },
    ]);
  };

  const handleDelete = (event) => {
    const target = event.currentTarget;
    const id = target.id;
    setOrderData((orderData) =>
      orderData.filter((elem) => elem.id.toString() !== id)
    );
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { currentTarget } = event;
      const formData = new FormData(currentTarget);

      const startDates = formData.getAll("start-date");
      const startHour = formData.getAll("start-hour");

      const endDates = formData.getAll("end-date");
      const endHour = formData.getAll("end-hour");

      const purpose = formData.getAll("purpose");

      let orderDates = [];

      for (let i = 0; i < startDates.length; i++) {
        orderDates[i] = {
          startDay: startDates[i],
          startHour: startHour[i],
          endDay: endDates[i],
          endHour: endHour[i],
          purpose: purpose[i],
        };
      }

      const orderDateParse = orderDates.map((elem) => {
        return {
          start: Date.parse(`${elem.startDay} ${elem.startHour}`),
          end: Date.parse(`${elem.endDay} ${elem.endHour}`),
          purpose: elem.purpose,
        };
      });

      let message = [];
      const date = Date.now();

      for (let i = 0; i < orderDateParse.length; i++) {
        for (let j = 0; j < timeslots?.length; j++) {
          if (
            orderDateParse[i].start > timeslots[j].start &&
            orderDateParse[i].start < timeslots[j].end
          ) {
            message.push(`Conflict: booking ${i + 1} - reservation ${j + 1}`);
          }
          if (
            orderDateParse[i].end > timeslots[j].start &&
            orderDateParse[i].end < timeslots[j].end
          ) {
            message.push(`Conflict: booking ${i + 1} - reservation ${j + 1}`);
          }
          if (
            orderDateParse[i].start <= timeslots[j].start &&
            orderDateParse[i].end >= timeslots[j].end
          ) {
            message.push(`Conflict: booking ${i + 1} - reservation ${j + 1}`);
          }
          if (date > orderDateParse[i].end) {
            message.push(`Invalid booking date: booking ${i + 1}`);
          }
        }
      }

      if (message.length === 0) {
        setLoading(true);
        addReservationByRoomNumber(string, orderDateParse)
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          })
          .finally(() => window.location.reload());
      }
      setErrorMessage([...new Set(message)]);
    },
    [string, timeslots]
  );

  const deleteBooking = (event) => {
    const id = event.target.id;
    setLoading(true);

    deleteReservation(string, id)
      .then((data) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      })
      .finally(() => window.location.reload());
  };

  return (
    <div className="container">
      <header>
        <h2 className="header-title">Room {string} information</h2>
      </header>
      <table className="reservationTable">
        <thead>
          <tr>
            <th className="reservationColumn">Reservation</th>
            <th className="dateColumn">Start</th>
            <th className="dateColumn">End</th>
            <th className="dateColumn">Event</th>
          </tr>
        </thead>
        <tbody>
          {timeslots?.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
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
                <td>
                  {elem?.userID ===
                    JSON.parse(localStorage.getItem("currentUserID")) ||
                  JSON.parse(localStorage.getItem("currentUserID")) === 0 ? (
                    <button
                      id={elem.timeslotID}
                      className="deleteReservationButton"
                      onClick={deleteBooking}
                    >
                      delete
                    </button>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} className="orderForm">
        <h2 className="header-title">Booking a Room</h2>
        <table className="reservationTable">
          <thead>
            <tr>
              <th className="reservationColumn">Booking</th>
              <th className="dateColumn">Start</th>
              <th className="dateColumn">End</th>
              <th className="dateColumn">Event</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((elem, index) => {
              return (
                <tr key={elem.id} id={elem.id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="date"
                      className="startDate"
                      name="start-date"
                      required
                    />
                    <select name="start-hour">
                      <option value="00:00">00:00</option>
                      <option value="01:00">01:00</option>
                      <option value="02:00">02:00</option>
                      <option value="03:00">03:00</option>
                      <option value="04:00">04:00</option>
                      <option value="05:00">05:00</option>
                      <option value="06:00">06:00</option>
                      <option value="07:00">07:00</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                      <option value="23:00">23:00</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="date"
                      className="EndDateInput"
                      name="end-date"
                      required
                    />
                    <select name="end-hour">
                      <option value="00:00">00:00</option>
                      <option value="01:00">01:00</option>
                      <option value="02:00">02:00</option>
                      <option value="03:00">03:00</option>
                      <option value="04:00">04:00</option>
                      <option value="05:00">05:00</option>
                      <option value="06:00">06:00</option>
                      <option value="07:00">07:00</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                      <option value="23:00">23:00</option>
                    </select>
                  </td>
                  <td>
                    <input type="text" placeholder="Event..." name="purpose" />
                    <span
                      onClick={handleDelete}
                      id={elem.id}
                      className="deleteIcon"
                    >
                      <svg
                        width="13"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                          fill="#ec5757"
                          fillRule="nonzero"
                        />
                      </svg>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="bookingError">
          {!errorMessage
            ? null
            : errorMessage.map((elem) => (
                <div key={elem} className="bookingErrorMessage">
                  {elem}
                </div>
              ))}
        </div>

        <div className="buttons">
          <button className="orderButton" type="submit">
            Order
          </button>
          <button
            type="button"
            className="AddNewOrderButton"
            onClick={handleAddNewOrder}
          >
            Add New Order
          </button>
        </div>
      </form>
      {loading ? (
        <div className="spinner">
          <img src={spinner} alt="download" />
        </div>
      ) : null}
    </div>
  );
};

export default RoomBookingInfo;
