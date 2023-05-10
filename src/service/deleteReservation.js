export const deleteReservation = async (id, timeslotID) => {
  let token = JSON.parse(localStorage.getItem("currentToken"));
  console.log(id);
  console.log(timeslotID);
  try {
    let response = await fetch(
      `http://localhost:8080/reservation/${id}/${timeslotID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

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
