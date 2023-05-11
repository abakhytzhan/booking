export const getRoomByNumber = async (id) => {
  let token = JSON.parse(localStorage.getItem("currentToken"));
  try {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/room/${id}`, {
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
