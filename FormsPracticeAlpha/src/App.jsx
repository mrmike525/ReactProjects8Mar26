import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    Name: "", 
    Email: "",
  });
  const { Name, Email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.Name}
          style={{ borderRadius: "200px" }}
          type="text"
          onChange={handleChange}
          placeholder='Name'
          name='Name'
        />
          
        <input
          type="text"
          placeholder='Email'
          onChange={handleChange}
          value={formData.Email}
          name='Email'
          style={{color: "red"}}
        />
        
        <button>Submit</button>
      </form>
      <div>{Email} { Name }</div>
    </>
  )
}

export default App
