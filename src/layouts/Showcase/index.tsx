import { ArrowLeft, ArrowRight, ListBullets } from 'phosphor-react'
import { ReactNode, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Header, Line, ProjectButton, ProjectsNavigation, Subtitle, Title } from './styled'

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
  let numberOfLines = 0;

  useEffect(() => {
    generateProjectLines();
  }, [projects])

  function generateProjectLines(): void {
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

      <ProjectsNavigation className="mt-48 pl-24 2xl:pl-64 w-10/12 xl:w-11/12 absolute flex flex-col justify-center text-2xl z-50">

        <div className='row-1 flex justify-center mr-52 mt-16'>
          {
            projects.map((proj) => {
              return (
                <ProjectButton key={proj.url} to={proj.url} className="px-4 py-2 rounded-lg opacity-70 proj_link">{proj.letter}</ProjectButton>
              )
            })
          }
        </div>
      </ProjectsNavigation>
    </Container>
  )
}
