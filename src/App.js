import "./App.css";
import { useState,useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Messages from "./components/Messages";
import db from "./db/firebase";

function App() {
  const [input, setinput] = useState("");

  const [message, setmessage] = useState([
    { username: "hardik", text: "hello" },
    { username: "Dharmahendra", text: "Good morning" },
  ]);
  const [username, setusername] = useState('');

  useEffect(() => {
    db.collection('Messages').onSnapshot(snapshot=>{
      setmessage(snapshot.docs.map(doc=> doc.data()))
    })
  }, [])
  
  useEffect(() => {
    setusername(prompt('Please Enter your name'));
  },[])
  

  const changeinput = (e) => {
    setinput(e.target.value);
  };

  const sendmessage = (e) => {
    e.preventDefault();
    setmessage([...message, {username:username,text:input}]);
    setinput("");
  };
  return (
    <div className="App">
      <h1>Hello i am hardik here</h1>
      <FormControl>
        <InputLabel>Enter text Here</InputLabel>
        <Input type="text" value={input} onChange={changeinput} />
        <Button variant="contained" disabled={!input} onClick={sendmessage}>
          Submit
        </Button>
      </FormControl>
      {message.map((m) => {
        return <Messages message={m} username={username}/>;
      })}
    </div>
  );
}

export default App;
