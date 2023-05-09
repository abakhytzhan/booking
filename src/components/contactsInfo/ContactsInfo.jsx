import { Typography } from "@mui/material";

const ContactsInfo = () => {
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
          marginBottom: 4,
        }}
      >
        CONTACTS
      </Typography>
      <div className="contactsInfo">
        <div className="address">
          <div>Contacts</div>
          <br />
          <div>+7(707) 260‒34‒34</div>
          <div>+7(707) 260‒35‒35</div>
          <div>singularity@jmart.kz</div>
          <div>Родниковая, 1/1</div>
        </div>
        <div className="map"></div>
      </div>
    </>
  );
};

export default ContactsInfo;
