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
          marginBottom: 5,
          marginTop: 5,
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
        <div className="map">
          <div style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.kz/maps/163/astana/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Астана
            </a>
            <a
              href="https://yandex.kz/maps/163/astana/house/Y0gYcgRhTUMFQFtrfX1yd31hZA==/?ll=71.432695%2C51.136387&utm_medium=mapframe&utm_source=maps&z=17.8"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Родниковая улица, 1/1 — Яндекс Карты
            </a>
            <iframe
              title="jusan"
              src="https://yandex.kz/map-widget/v1/?ll=71.432695%2C51.136387&mode=whatshere&whatshere%5Bpoint%5D=71.431292%2C51.136132&whatshere%5Bzoom%5D=17&z=17.8"
              width="560"
              height="400"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsInfo;
