import { useState } from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Counter from './Counter'
import Friends from './Friends'

function App() {

  const [bestStudent, setBestStudent] = useState("")

  const demo = (name) => {
    console.log("Hello " + name)
  }

  const press = () => {
    const bs = ["sara", "peru", "msp"]
    const num = Math.floor(Math.random() * bs.length)
    setBestStudent(bs[num])
  }

  return (
    <>
      
      <button onClick={() => demo("smith")}>Click</button>
      <p>Best student is: {bestStudent}</p>
      <button onClick={press}>Student</button>
      
      <Header />
      <Content />
      <Counter />
      <Friends />
      <Application />
    </>
  )
}

export default App
