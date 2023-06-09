import { ProjectButtonProps, ShowcaseLayout } from '../../../layouts/Showcase'
import { blueTone } from '../../../styles/themes'

const projectsButtons: Array<ProjectButtonProps> = [
  {
    letter: 'y',
    url: '/project/little-blog',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'd',
    url: '/project/todo-list',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'b',
    url: '/project/ignite-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'a',
    url: '/project/little-bdffsdfog',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'w',
    url: '/project/todasdasd',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'm',
    url: '/project/iasdade-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'q',
    url: '/project/littlsdfsdg',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'i',
    url: '/project/tdfdfist',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'p',
    url: '/project/tasdasdst',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'h',
    url: '/projectasadasdlist',
    isAvailable: true
  } as ProjectButtonProps,
]

export function ShowcaseReact() {
  return (
    <ShowcaseLayout
      subtitle="reactJS"
      tone={blueTone}
      rightLink="/showcase/vue"
      projects={projectsButtons}
    />
  )
}
