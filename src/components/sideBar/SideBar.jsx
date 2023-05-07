import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const rooms = ["203", "301", "302", "303", "304", "305", "404"];
export default function SideBar() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: 280,
        height: "100%",
        backgroundColor: "primary.dark",
        padding: 2,
        position: "fixed",
      }}
    >
      <Typography color="white" textAlign="center">
        ROOMS
      </Typography>
      <Typography color="white">
        Школа предоставляет образовательный «open space» в режиме 24/7
      </Typography>
      <ul className="sideDescription">
        <li>Более 850 кв.м.</li>
        <li>
          3 учебных аудитории, включающие 61 персональных компьютеров на ОС
          Ubuntu, 20 компьютеров на Apple iMac М1, проекторы
        </li>
        <li>Высокоскоростной Wi-Fi</li>
        <li>Лекционный класс до 100 человек</li>
        <li>Гардероб, кухня, игровая зона с теннисным столом и PS5</li>
      </ul>
      <nav aria-label="secondary mailbox folders">
        <div className="roomButtons">
          {rooms.map((room) => (
            <button className="roomButton" key={room}>
              {room}
            </button>
          ))}
        </div>
      </nav>
    </Box>
  );
}
