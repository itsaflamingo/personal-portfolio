import { useEffect, useState } from 'react';
import '../styles/App.css';
import Personal from './Personal';
import Projects from './Projects';
import { ProjectContext } from '../Contexts/ProjectContext'
import Project from './Project'

function App() {

  const [project, setProject] = useState('');

  return (
    <div className="App">
      <div id='main'>
        <ProjectContext.Provider value={project}> 
          <Personal />
          <Project project={project} />
          <Projects setProject={setProject} />
        </ProjectContext.Provider>
      </div>
    </div>
  );
}

export default App;
