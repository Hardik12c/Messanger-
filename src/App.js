import './App.css';
import { useState } from 'react';
import { Button,FormControl,Input,InputLabel} from '@mui/material'
import Messages from './components/Messages';

function App() {
  const [input, setinput] = useState('');

  const [message, setmessage] = useState(['hello']);


  const changeinput=(e)=>{
    setinput(e.target.value);
  }

  const sendmessage=(e)=>{
    e.preventDefault();
    setmessage([...message,input]);
    setinput('');
  }
  console.log(message);
  return (
    <div className="App">
      <h1>Hello i am hardik here</h1>
      <FormControl>
        <InputLabel>Enter text Here</InputLabel>
        <Input type="text" value={input} onChange={changeinput}/>
        <Button variant='contained' disabled={!input} onClick={sendmessage}>Submit</Button>
      </FormControl>
      {
        message.map((m)=>{
          return <Messages text={m}/>
        })
      }
    </div>
  );
}

export default App;
