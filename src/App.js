import "./App.css";
import logo from "./assets/logo.svg"
import { useState,useEffect } from "react";
import {FormControl, Input, InputLabel } from "@mui/material";
import Messages from "./components/Messages";
import db from "./db/firebase";
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [input, setinput] = useState("");

  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState('');
  const sendmessage = (e) => {
    e.preventDefault();
    db.collection('Messages').add({
      text:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setinput("");
  };

  useEffect(() => {
    db.collection('Messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setmessages(snapshot.docs.map(doc=> ({id:doc.id,message:doc.data()})))
    })
  }, [])
  
  useEffect(() => {
    setusername(prompt('Please Enter your name'));
  },[])
  

  const changeinput = (e) => {
    setinput(e.target.value);
  };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <h1>Welocome to I-chat</h1>
      <h2>Hello {username}</h2>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter text Here</InputLabel>
          <Input type="text" value={input} onChange={changeinput} />
          <IconButton color="primary" variant="contained" disabled={!input}  onClick={sendmessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
      {messages.map(({id,message}) => (
        <Messages key={id} message={message} username={username}/>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
