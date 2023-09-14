import React, {useState} from 'react';
import axios from "axios";

function App() {

  const [input, setInput] = useState<string | undefined>()
  const [response, setResponse] = useState<string | undefined>()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.get<string>("https://tconsaltingbackend.onrender.com/api/v1/letters/amount", {
        params: {str: input}
      })
      setResponse(response.data);
    } catch (error: unknown) {
      console.log(error)
      alert("Oops... something went wrong")
    }

  }

  return (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:300}}>
        <form onSubmit={handleSubmit} >
          <input
              type="text"
              placeholder="Write something..."
              value={input === "" ? "" : input}
              onChange={(e) => setInput(e.target.value)}
              required
          />
          <button type="submit">Submit</button>
        </form>
        <div style={{marginTop:15}}>
          {response}
        </div>
      </div>
  );
}

export default App;
