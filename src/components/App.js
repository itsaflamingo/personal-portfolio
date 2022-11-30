import { useEffect, useState } from 'react';
import '../styles/App.css';
import Personal from './Personal';
import Projects from './Projects';
import { ProjectContext } from '../Contexts/ProjectContext'
import Project from './Project'

function App() {

  const [project, setProject] = useState('');
  const [showProject, setShowProject] = useState(false);

  useEffect(() => {
    setShowProject(true);
  }, [project])

  return (
    <div className="App">
      <ProjectContext.Provider value={project}> 
        {!showProject && <Personal />}
        {showProject && <Project project={project} />}
        <Projects setProject={setProject} />
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
