import './App.css'
import { useState } from 'react';
import List from './components/List'
import Button from './components/Button';

function App() {
  const [data, setData] = useState([
    {
      name: "john",
      age: 10
    },
    {
      name: "Test",
      age: 30
    },
  ])
  return (
    <>
      <h1>Typescript X React</h1>
      <List elements={data}>
        <div>test</div>
      </List>
      <Button content='testing'></Button>
    </>
  )
}

export default App
