import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';

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
  return (
    <div className="App">
      <h1>Hello i am hardik here</h1>
      <form action="/#">
        <input type="text" value={input} onChange={changeinput} />
        <Button variant='contained' disabled={!input} onClick={sendmessage}>Submit</Button>
      </form>

      {
        message.map((m)=>{
          return <p>{m}</p>
        })
      }
    </div>
  );
}

export default App;
