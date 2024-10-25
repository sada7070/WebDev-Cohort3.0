// routing imports
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    // Link should be inside the BrowserRouter
    <BrowserRouter>
    <Link to='/'>Allen</Link> |
    <Link to='/neet/online-couching-class-11'>Class 11</Link> |
    <Link to='/neet/online-couching-class-12'>Class 12</Link>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="neet/online-couching-class-11" element={<Class11Program />} />
      <Route path="neet/online-couching-class-12" element={<Class12Program />} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function Landing() {
  return <div>
    Welcome to Allen
  </div>
}


function Class11Program() {
  return <div>
    class 11 neet program
  </div>
}


function Class12Program() {
  return <div>
    class 12 neet program
  </div>
}

function ErrorPage() {
  return <diV>
    Sorry page not found
  </diV>
}
export default App
