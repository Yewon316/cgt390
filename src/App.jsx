import './App.css'
import Card1 from './components/Card1'
import About from './components/About'


function App() {
  return (
    <>
    <h1>My React App</h1>
    <div className="section">
      <div className="container">
        <About />
      </div>
    </div>
      <Card1 />
    </>
  )
}

export default App;
