import { Typography } from "@mui/material";

const MyProfileInfo = () => {
  return (
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
      MY PROFILE
    </Typography>
  );
};

export default MyProfileInfo;
