import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import AcademicSection from './components/AcademicsSection/AcademicSection';
import ContactSection from './components/ContactSection/ContactSection';
import FacultySection from './components/FacultySection/FacultySection';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar';
import Spacers from './components/Spacers/spacers'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <AboutSection/>
      <Spacers/>
      <AcademicSection/>
      <Spacers/>
      <FacultySection/>
      <ContactSection/>
    </div>
  );
}

export default App;
