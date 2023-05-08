import { Typography } from "@mui/material";

const MyBookingsInfo = () => {
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
      MY BOOKINGS
    </Typography>
  );
};

export default MyBookingsInfo;
