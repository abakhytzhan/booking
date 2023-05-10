export const getAllReservationsByUser = async () => {
  let token = JSON.parse(localStorage.getItem("currentToken"));
  try {
    let response = await fetch("http://localhost:8080/reservation/my", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

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
