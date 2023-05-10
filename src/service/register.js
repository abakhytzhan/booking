export const register = async (email, username, password) => {
  try {
    let response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      console.log("error");
    } else {
      return response;
    }
  } catch (err) {
    console.log(err);
    return Promise.reject();
  }
};
