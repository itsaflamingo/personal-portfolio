import "../styles/App.css";
import Personal from "./Personal";
import Projects from "./Projects";
import ContactInfo from "./ContactInfo";

function App() {
  return (
    <div className="w-screen flex flex-col gap-10">
      <div id="main">
        <Personal />
        <Projects />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
