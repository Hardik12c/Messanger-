import React,{ forwardRef } from "react";
import { CardContent, Typography, Card } from "@mui/material";
import "../assets/Message.css";
const Messages=forwardRef((props,ref)=> {
  const isuser=props.username===props.message.username;
  return (
    <div ref={ref} className={`message ${isuser&&"userown"}`}>
        <Card className={isuser?"message-user":"message-guest"}>
        <CardContent>
            <Typography variant="h5" component="h2">
            {!isuser &&`${props.message.username}:`} {props.message.text}
            </Typography>
        </CardContent>
        </Card>
    </div>
  );
})

export default Messages