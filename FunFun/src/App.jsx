import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const missions = [
    {
      id: "1 - 10",
      name: "Study Asteroid, Setup Sun observation sattelite, Fly around the Moon, Setup Moon Base, Mine minerals from the Moon, Jump on the Moon, Enjoy the Sunset on the Moon, Nuke the Moon, Leave the moon, Setup Farm on Mars, Nuke test Mars",
      status: "Planned, Active, Completed",
      crew: "Michael, Abby, Tom, Tina, Becca"
    },
     {
      id: "",
      name: "",
      status: "",
      crew: ""
    },
     {
      id: "",
      name: "",
      status: "",
      crew: ""
    },
     {
      id: "",
      name: "",
      status: "",
      crew: ""
    },
     {
      id: "",
      name: "",
      status: "",
      crew: ""
    },
  ]

  return (
    <>
     <div className='header' style={{border: "2px solid red"}}>
      <a href="">home</a>
      <a href="">Get him to the Greek!</a>
      <a href="">Let's Taco BOUT IT</a>
     </div>
    </>
  )
}

export default App
