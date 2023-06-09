import { useEffect, useState } from "react";
import { ProjectButtonProps } from "..";
import { CircleNotchCustom, ProjectsContainer } from "./styled";
import { ProjectLine } from "../ProjectLine";

export interface ProjectsNavigationProps {
  lines: ProjectButtonProps[][]
}

export function ProjectsNavigation({ lines }: ProjectsNavigationProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  let waitBeforeShow = 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return (
    isLoaded ? <ProjectsContainer className="flex flex-col justify-center text-2xl z-50">
      {
        lines && lines.map((line, index) => {
          let id = Math.random();
          return (
            <ProjectLine key={id} line={line} lineNumber={index} />
          )
        })
      }
    </ProjectsContainer> : <CircleNotchCustom color="white" weight="duotone" className="mt-48 w-auto absolute flex flex-col justify-center text-2xl z-50">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="50s"
        from="1 0 0"
        to="36000 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </CircleNotchCustom>
  )
}
