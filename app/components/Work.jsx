import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Work() {
  return (
    <div id="works" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Projects</h4>
      <h2 className="text-center text-5xl font-Ovo">
        Some of my selected works
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        This is just an exclusive list of some of my projects. Checkout my
        github to see what i have been working
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border-2 transition-all duration-300 hover:border-black hover:shadow-lg group"
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={project.bgImage || "/placeholder.svg"}
                alt={project.title}
                className="w-[90%] h-[90%] object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-black/5 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Title & Description */}
              <div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    View Live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/kodjozecodeur/README"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        show more{" "}
        <Image src={assets.right_arrow_bold} alt="show icon" className="w-4" />{" "}
      </a>
    </div>
  );
}

export default Work;
