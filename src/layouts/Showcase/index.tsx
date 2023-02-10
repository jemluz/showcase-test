import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Container, Header, Line, Subtitle, Title } from './styled'

export interface ShowcaseLayoutProps {
  subtitle: string
  children: ReactNode
  leftLink?: string
  rightLink?: string
  tone: {
    background: string
    primary: string
  }
}

export function ShowcaseLayout({
  subtitle,
  children,
  tone,
  leftLink,
  rightLink,
}: ShowcaseLayoutProps) {
  return (
    <Container className="h-full" tone={tone}>
      <Header>
        <h1>
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

            <Subtitle>{subtitle}</Subtitle>
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
      {children}
      <Outlet />
    </Container>
  )
}
