import './App.css'
import About from './Components/About'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {
  

  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter text Area to Analyze"/>
        {/* <About/> */}
      </div>
    </>
  )
}

export default App
