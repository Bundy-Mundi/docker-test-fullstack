import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [ input, setInput ] = useState("");
  const [ list, setList ] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([input, ...list]);
    setInput("");
    axios.post('/api/value', { value: input })
      .then(res => {
        if(res.data.success) console.log('res: ', response);
        else throw Error("Failed to store the text in db")
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    axios.get("/api/values")
      .then(res => {
        console.log('res: ', res.data);
        if(res.data) setList(res.data);
        else setList([]);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App" style={{backgroundColor:"#f1f2f6", height:"100vh"}}>
      <header className="App-header">
      </header>
      <main>
        <section style={{flexDirection:"column", padding: "3rem"}}>
        <h1>To Do List</h1>
        <div class="todo-container">
          <ul>
            {
              list.map((v,k)=>{
                return <li key={k}>{v}</li>
              })
            }
          </ul>
        </div>
        <form onSubmit={e => handleSubmit(e)} style={{backgroundColor: "white", }}>
          <input value={input} placeholder="Type to dos" onChange={e => setInput(e.target.value)} type="text" style={{width: "70%", borderColor:"gray"}}/>
          <button type="submit">Enter</button>
        </form>
        </section>
      </main>
    </div>
  );
}

export default App;
