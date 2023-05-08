import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import roomImage from "./photo1664884357_1.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const getAllRooms = async () => {
  try {
    let response = await fetch("http://localhost:8080/rooms");

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

const roomsDetails = [
  {
    name: "203",
    description:
      "Учебная аудитория, включающая 61 персональных компьютеров на ОС Ubuntu, 20 компьютеров на Apple iMac М1, проекторы",
    image: roomImage,
  },
  {
    name: "301",
    description:
      "Учебная аудитория, включающая 61 персональных компьютеров на ОС Ubuntu, 20 компьютеров на Apple iMac М1, проекторы",
    image: roomImage,
  },
  {
    name: "302",
    description:
      "Учебная аудитория, включающая 61 персональных компьютеров на ОС Ubuntu, 20 компьютеров на Apple iMac М1, проекторы",
    image: roomImage,
  },
  {
    name: "303",
    description:
      "Учебная аудитория, включающая 61 персональных компьютеров на ОС Ubuntu, 20 компьютеров на Apple iMac М1, проекторы",
    image: roomImage,
  },
  {
    name: "304",
    description:
      "Учебная аудитория, включающая 61 персональных компьютеров на ОС Ubuntu, 20 компьютеров на Apple iMac М1, проекторы",
    image: roomImage,
  },
  {
    name: "305",
    description:
      "Учебная аудитория, включающая 61 персональных компьютеров на ОС Ubuntu, 20 компьютеров на Apple iMac М1, проекторы",
    image: roomImage,
  },
  {
    name: "404",
    description:
      "Учебная аудитория, включающая 61 персональных компьютеров на ОС Ubuntu, 20 компьютеров на Apple iMac М1, проекторы",
    image: roomImage,
  },
];

const Rooms = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = React.useState([]);

  useEffect(() => {
    getAllRooms()
      .then((data) => {
        setRooms(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cards">
      {roomsDetails.map(
        (
          room //rooms, room.roomNumber,
        ) => (
          <Card sx={{ maxWidth: 400, height: 400, margin: 4 }} key={room.name}>
            <CardMedia
              component="img"
              alt="room"
              height="200"
              image={room.image} // room.images[0]
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ROOM {room.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {room.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button
                size="small"
                onClick={() => navigate(`/room/${room.name}`)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        )
      )}
    </div>
  );
};

export default Rooms;
