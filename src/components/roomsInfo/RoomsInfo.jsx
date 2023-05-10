import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const RoomsInfo = ({ rooms }) => {
  const navigate = useNavigate();

  return (
    <div className="cards">
      {rooms.map((room, index) => (
        <Card
          sx={{ maxWidth: 400, height: 400, margin: 4 }}
          key={room?.roomNumber}
        >
          <CardMedia
            component="img"
            alt="room"
            height="200"
            image={
              room?.images[0]?.url
                ? room?.images[0]?.url
                : rooms[0]?.images[0]?.url
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ROOM {room?.roomNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {room?.description.slice(0, 120) + "..."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button
              size="small"
              onClick={() => navigate(`/rooms/${room.roomNumber}`)}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default RoomsInfo;
