import React from "react";

function Project({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="max-w-[1200px]">
      <div className="flex items-start mb-20">
        {isEven ? (
          <div className="project-content relative z-10 min-w-[6/12] w-full">
            <div className="project-label text-green-400 font-mono text-highlight">
              Featured Project
            </div>
            <h4 className="text-light project-title text-2xl mt-4 mb-8 text-gray-300">
              {project.name}
            </h4>
            <div className="absolute top-3/4 left-[-20px] project-details text-sm leading-6 text-gray-400 p-5 w-[125%]">
              <p className="bg-secondary-background text-light bg-gray-600 p-4 z-10 w-11/12">
                {project.description}
              </p>
              <div className="text-light flex flex-wrap">
                {project.techStack.map((tech) => {
                  return (
                    <li className="list-none mr-6 text-gray-400 font-mono">
                      {tech}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="project-img z-0 relative bg-gradient-to-r from-green-400 to-green-300 w-full">
            <img
              src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
              alt="project image"
              className="mix-blend-multiply filter grayscale contrast-100 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 mix-blend-screen" />
          </div>
        )}
        {isEven ? (
          <div className="project-img z-0 relative bg-gradient-to-r from-green-400 to-green-300 w-full">
            <img
              src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
              alt="project image"
              className="mix-blend-multiply filter grayscale contrast-100 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 mix-blend-screen" />
          </div>
        ) : (
          <div className="project-content relative z-10 min-w-[6/12] w-full">
            <div className="text-highlight project-label text-green-400 font-mono flex justify-end">
              Featured Project
            </div>
            <h4 className="text-light project-title text-2xl mt-4 mb-8 text-gray-300 flex justify-end">
              {project.name}
            </h4>
            <div className="absolute top-3/4 right-[-70px] project-details text-sm leading-6 text-gray-400 p-5 w-[125%]">
              <p className="bg-secondary-background text-light bg-gray-600 p-4 z-10 w-11/12 flex justify-end">
                {project.description}
              </p>
              <div className="text-light flex flex-wrap justify-end w-[95%]">
                {project.techStack.map((tech) => {
                  return (
                    <li className="list-none mr-6 text-gray-400 font-mono">
                      {tech}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
