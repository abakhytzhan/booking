export const register = async (email, username, password) => {
  try {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
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
