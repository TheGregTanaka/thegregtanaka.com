//import logo from './logo.svg';
import logo from '../../parmesean.svg'
import './App.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <header className="App-header">
        <div className="container">
          <h1>Gregory Tanaka</h1>
          <h2>Software Developer</h2>
          <p>Hi, I'm Greg!</p>
        </div>
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
