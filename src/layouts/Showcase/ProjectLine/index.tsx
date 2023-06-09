import { ProjectButtonProps } from "..";
import { ProjectButton } from "./styled";

interface ProjectLineProps {
  line: ProjectButtonProps[]
  lineNumber: number
}

export function ProjectLine({ line, lineNumber }: ProjectLineProps) {
  return (
    <div className='row-1 flex justify-center mt-8'>
      {
        line && line.map((proj, index) => {
          let id = Math.random();
          return (
            <ProjectButton key={id} to={proj.url} odd={(lineNumber % 2 === 0)} className="px-4 py-2 rounded-lg opacity-70 proj_link" data-aos="fade-down" data-aos-duration={700 * index}>
              {proj.letter}
            </ProjectButton>
          )
        })
      }
    </div>
  )
}