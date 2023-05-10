export const addReservationByRoomNumber = async (id, timeslots) => {
  let token = JSON.parse(localStorage.getItem("currentToken"));
  console.log(timeslots);

  try {
    let response = await fetch(`http://localhost:8080/reservation/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        timeslots: timeslots,
      }),
    });

    if (!response.ok) {
      console.log("error");
      throw new Error();
    } else {
      const result = await response.json();
      console.log(result);
      return result;
    }
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};
