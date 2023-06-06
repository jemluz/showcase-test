import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { ReactNode, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Container, Header, Line, Subtitle, Title } from './styled'

export interface ProjectButtonProps {
  letter: string
  url: string
  isAvailable: boolean
}
export interface ShowcaseLayoutProps {
  subtitle: string
  children: ReactNode
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
  children,
  tone,
  leftLink,
  rightLink,
  projects,
}: ShowcaseLayoutProps) {
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

      <nav className="mt-48 pl-24 2xl:pl-64 w-10/12 xl:w-11/12 absolute flex flex-col justify-center text-2xl z-50">
        <div>
          {
            projects.map((project) => {
              return (
                <NavLink to={project.url}>{project.letter}</NavLink>
              )
            })
          }
        </div>
      </nav>
      {children}
      <Outlet />
    </Container>
  )
}
