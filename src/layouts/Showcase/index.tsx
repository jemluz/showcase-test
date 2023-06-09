import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CallToAction, Container, Header, Line, Subtitle, Title } from './styled'
import { ProjectsNavigation } from './ProjectsNavigation'

export interface ProjectButtonProps {
  letter: string
  url: string
  isAvailable: boolean
}
export interface ShowcaseLayoutProps {
  subtitle: string
  leftLink?: string
  rightLink?: string
  tone: {
    background: string
    primary: string
  }
  projects: Array<ProjectButtonProps>
}

export function ShowcaseLayout({
  subtitle,
  tone,
  leftLink,
  rightLink,
  projects,
}: ShowcaseLayoutProps) {
  const totalProjects = projects.length;

  // total / 3 arredondado para string fixa e convertido para numero novamente
  let numberOfLines = parseInt((totalProjects / 3).toFixed());
  numberOfLines = ((totalProjects % 3) > 0) ? (numberOfLines + 1) : numberOfLines;

  let lines: ProjectButtonProps[][] = [[]];

  useEffect(() => {
    calculateProjectLines();
    generateLinesMultiArray();
  }, [projects])

  function calculateProjectLines(): void {
    if (projects.length > 0) {
      const totalElements = projects.length;
      let lastMultiple = 0;

      // divide array by three (lines)
      for (let i = 0; i < projects.length; i++) {
        const isNotZero = i !== 0;
        const isThreeMultiple = i % 3 == 0;

        // define three multiple
        if (isNotZero && isThreeMultiple) {
          lastMultiple = i;
        }

        // use multiple to calculate how many lines
        numberOfLines = lastMultiple / 3;

        // if has an incomplete line at end
        if (totalElements > lastMultiple) {
          numberOfLines++
        }
      }
    }
  }

  function generateLinesMultiArray() {
    for (let currentLine = 0; currentLine < numberOfLines; currentLine++) {
      lines[currentLine] = [];

      let lineStartAt = currentLine === 0 ? currentLine : (currentLine * 3);
      let lineEndsAt = lineStartAt + 2;

      if (projects.length / 3 > lines.length) {
      }

      for (let p = 0; p < totalProjects; p++) {
        let isPartOfCurrentLine = (p <= lineEndsAt) && (p >= lineStartAt);
        const rest = p % 3; // equals 0, 1, or 2

        if (isPartOfCurrentLine) {
          lines[currentLine][rest] = projects[p];
        }
      }
    }
  }

  return (
    <Container className="h-full" tone={tone}>
      <Header data-aos="fade-down" data-aos-duration="500">
        <h1 data-aos="fade-down">
          {leftLink && (
            <NavLink to={leftLink}>
              <ArrowLeft size={24} weight="bold" className="arrow_btn -mt-4" />
            </NavLink>
          )}
          <Line
            className={`${leftLink ? 'w-8' : 'w-16'} mx-4 opacity-500`}
            tone={tone}
          ></Line>
          <Title tone={tone}>
            <span>
              Entre<strong>Linhas</strong>
            </span>

            <Subtitle data-aos="fade-down" data-aos-duration="500">
              {subtitle}
            </Subtitle>
          </Title>
          <Line
            className={`${rightLink ? 'w-8' : 'w-16'} mx-4 opacity-500`}
            tone={tone}
          ></Line>
          {rightLink && (
            <NavLink to={rightLink} className="arrow_btn -mt-4">
              <ArrowRight size={24} weight="bold" />
            </NavLink>
          )}
        </h1>
      </Header>

      <CallToAction tone={tone} data-aos="fade-right" data-aos-duration="1000" className="titulo mt-48 absolute text-right sm:w-6/12 sm:ml-24 md:w-10/12 lg:-ml-6 xl:w-full">
        <h2 className="flex justify-center items-center md:mx-auto md:w-4/12">
          <span className="first py-2 pl-32 text-lg sm:pl-32 md:-ml-64 lg:pl-64">Aperte uma te</span>
          <span className="second text-lg">cla</span>
        </h2>

        <p className="third mt-2 pl-32 text-sm flex justify-center opacity-70 sm:w-10/12 md:pl-6 lg:pl-48  xl:pl-64">
          para ver um projeto
        </p>
      </CallToAction>

      <ProjectsNavigation lines={lines} />
    </Container>
  )
}
