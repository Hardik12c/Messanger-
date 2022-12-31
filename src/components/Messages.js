import React from "react";
import { CardContent, Typography, Card } from "@mui/material";
import "../assets/Message.css";
export default function Messages(props) {
    const isuser=props.username===props.message.username;
    // console.log(isuser);
  return (
    <div className={`message ${isuser&&"userown"}`}>
        <Card className={isuser?"message-user":"message-guest"}>
        <CardContent>
            <Typography variant="h5" component="h2">
            {props.message.username}:{props.message.text}
            </Typography>
        </CardContent>
        </Card>
    </div>
  );
}
