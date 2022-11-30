import '../styles/App.css';
import Personal from './Personal';
import Projects from './Projects';
import ContactInfo from './ContactInfo'

function App() {

  return (
    <div className="App">
      <div id='main'>
          <Personal />
          <Projects />
          <ContactInfo />
      </div>
    </div>
  );
}

export default App;
