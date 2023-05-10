import { Typography } from "@mui/material";

const MyProfileInfo = ({ user }) => {
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
        MY PROFILE
      </Typography>
      <table className="myProfileTable">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>USERNAME</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>EMAIL</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MyProfileInfo;
