import './App.css';
import Background from './components/Background/Background';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
