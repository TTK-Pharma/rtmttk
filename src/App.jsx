import './App.scss'
import Contact from './components/Contact/Contact';
import Me from './components/me/Me';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';


function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Me />
      </section>
      <section id="Services">
        <Services />
      </section>
      <Portfolio/>
      <Contact /> 
    </div>
  );
}


export default App
