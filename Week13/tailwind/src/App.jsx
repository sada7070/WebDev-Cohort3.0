import './App.css'
import { Input } from './components/input'
import { Button } from './components/buttons'

function App() {

  return (
    <div className='h-screen bg-blue-800'>
      <br></br>
      <br></br>
      <div>
        <Input type="text" placeholder={"Username"}></Input> 
      </div>
      <br></br>
      <div>
        <Button disabled={false}>Sign up</Button>
      </div>
    </div>
  )
}

export default App
