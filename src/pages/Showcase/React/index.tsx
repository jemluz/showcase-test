import { ProjectButtonProps, ShowcaseLayout } from '../../../layouts/Showcase'
import { blueTone } from '../../../styles/themes'

const projectsButtons: Array<ProjectButtonProps> = [
  {
    letter: 'l',
    url: '/project/little-blog',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 't',
    url: '/project/todo-list',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'i',
    url: '/project/ignite-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'l',
    url: '/project/little-bdffsdfog',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 't',
    url: '/project/todasdasd',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'i',
    url: '/project/iasdade-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'l',
    url: '/project/littlsdfsdg',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 't',
    url: '/project/tdfdfist',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 't',
    url: '/project/tasdasdst',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 't',
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
